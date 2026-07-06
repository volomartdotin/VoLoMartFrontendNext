#!/usr/bin/env node
/**
 * Flatten nested Next.js static-export RSC payload files so static hosts
 * (serve, S3, CloudFront) can serve client prefetch URLs like:
 *   /pricing/__next.pricing.__PAGE__.txt
 * from exported paths like:
 *   /pricing/__next.pricing/__PAGE__.txt
 */

import { copyFile, readdir, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "..", "out");

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function flattenNextDir(routeDir, dirName, nextDir) {
  let created = 0;

  async function walk(currentDir, prefix) {
    const entries = await readdir(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const entryPath = join(currentDir, entry.name);
      if (entry.isDirectory()) {
        await walk(entryPath, `${prefix}.${entry.name}`);
        continue;
      }
      if (!entry.isFile()) continue;

      const flatName = `${prefix}.${entry.name}`;
      const dest = join(routeDir, flatName);
      await copyFile(entryPath, dest);
      created += 1;
    }
  }

  await walk(nextDir, dirName);
  return created;
}

async function walkOut(dir) {
  let total = 0;
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const fullPath = join(dir, entry.name);

    if (entry.name.startsWith("__next.")) {
      total += await flattenNextDir(dir, entry.name, fullPath);
      continue;
    }

    total += await walkOut(fullPath);
  }

  return total;
}

async function main() {
  if (!(await exists(outDir))) {
    console.error("[flatten-rsc] ERROR: out/ not found. Run next build first.");
    process.exit(1);
  }

  const count = await walkOut(outDir);
  console.log(`[flatten-rsc] Created ${count} flat RSC payload file(s) in out/`);
}

main().catch((err) => {
  console.error("[flatten-rsc] ERROR:", err);
  process.exit(1);
});
