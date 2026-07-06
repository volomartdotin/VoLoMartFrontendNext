#!/usr/bin/env node
/**
 * Build the static site and upload `out/` to S3.
 *
 * Required env:
 *   S3_BUCKET — e.g. www.volomart.in or your website bucket name
 *
 * Optional env:
 *   CLOUDFRONT_DISTRIBUTION_ID — invalidates /* after upload
 *   AWS_REGION — passed to AWS CLI (default: ap-south-1)
 *
 * Usage:
 *   npm run deploy:s3
 *   npm run deploy:s3 -- --dry-run
 *   npm run deploy:s3 -- --skip-build
 */

import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const outDir = resolve(root, "out");

/** Load S3_BUCKET / CLOUDFRONT_* from .env files (does not override shell env). */
function loadDotEnv() {
  for (const name of [".env", ".env.local"]) {
    const file = resolve(root, name);
    if (!existsSync(file)) continue;
    for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (process.env[key] === undefined) process.env[key] = value;
    }
  }
}

loadDotEnv();

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const skipBuild = args.includes("--skip-build");

const bucket = process.env.S3_BUCKET?.trim();
const distributionId = process.env.CLOUDFRONT_DISTRIBUTION_ID?.trim();
const region = process.env.AWS_REGION?.trim() || "ap-south-1";

function log(msg) {
  console.log(`[deploy:s3] ${msg}`);
}

function fail(msg) {
  console.error(`[deploy:s3] ERROR: ${msg}`);
  process.exit(1);
}

function run(command, commandArgs, options = {}) {
  const result = spawnSync(command, commandArgs, {
    stdio: "inherit",
    shell: process.platform === "win32",
    cwd: root,
    env: { ...process.env, AWS_DEFAULT_REGION: region },
    ...options,
  });
  if (result.status !== 0) {
    fail(`Command failed: ${command} ${commandArgs.join(" ")}`);
  }
}

function aws(args) {
  const cliArgs = [...args];
  if (dryRun) cliArgs.unshift("--dryrun");
  run("aws", cliArgs);
}

if (!bucket) {
  fail(
    "S3_BUCKET is not set. Add it to .env.local or your shell, e.g.\n" +
      "  S3_BUCKET=your-website-bucket-name",
  );
}

const awsCheck = spawnSync("aws", ["--version"], {
  stdio: "pipe",
  shell: process.platform === "win32",
});
if (awsCheck.status !== 0) {
  fail("AWS CLI not found. Install it and run `aws configure` first.");
}

const identityCheck = spawnSync("aws", ["sts", "get-caller-identity"], {
  stdio: "pipe",
  shell: process.platform === "win32",
  env: { ...process.env, AWS_DEFAULT_REGION: region },
});
if (identityCheck.status !== 0) {
  fail(
    "AWS credentials are not configured. Run `aws configure` and enter your Access Key ID and Secret Access Key.\n" +
      "You cannot upload to S3 without valid AWS credentials on your machine.",
  );
}

const identity = JSON.parse(identityCheck.stdout.toString());
log(`AWS account: ${identity.Account} (user/role: ${identity.Arn})`);

log(`Target: s3://${bucket} (region: ${region})`);
if (dryRun) log("Dry run — no changes will be made.");

if (!skipBuild) {
  log("Building static site…");
  run("npm", ["run", "build"]);
}

if (!existsSync(outDir)) {
  fail(`Build output not found at ${outDir}. Run npm run build first.`);
}

const s3Base = `s3://${bucket}`;

log("Uploading hashed assets (_next/static) with long cache…");
aws([
  "s3",
  "sync",
  resolve(outDir, "_next/static"),
  `${s3Base}/_next/static`,
  "--delete",
  "--cache-control",
  "public,max-age=31536000,immutable",
]);

log("Uploading pages and public files…");
aws([
  "s3",
  "sync",
  outDir,
  s3Base,
  "--delete",
  "--exclude",
  "_next/static/*",
  "--cache-control",
  "public,max-age=0,must-revalidate",
]);

if (distributionId && !dryRun) {
  log(`Invalidating CloudFront distribution ${distributionId}…`);
  aws([
    "cloudfront",
    "create-invalidation",
    "--distribution-id",
    distributionId,
    "--paths",
    "/*",
  ]);
} else if (distributionId && dryRun) {
  log(`Would invalidate CloudFront distribution ${distributionId} (skipped in dry run).`);
}

log(dryRun ? "Dry run complete." : "Deploy complete.");
