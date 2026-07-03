import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/vendor";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How VoLoMart handles information collected through this marketing site and vendor inquiries.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm text-brand">
        <Link href="/" className="hover:underline">
          ← Home
        </Link>
      </p>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Privacy policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: May 3, 2026</p>
      <div className="mt-10 max-w-none space-y-6 text-sm leading-relaxed text-muted">
        <p>
          This policy describes how {site.name} (“we”, “us”) handles personal information you submit through our
          marketing website (for example, vendor registration or contact forms).
        </p>
        <h2 className="text-lg font-semibold text-foreground">What we collect</h2>
        <p>
          When you submit a form, we may collect your name, shop name, phone number, email address, city, category,
          and any notes you choose to provide.
        </p>
        <h2 className="text-lg font-semibold text-foreground">How we use it</h2>
        <p>
          We use this information to respond to your inquiry, evaluate onboarding, operate the marketplace, comply
          with law, and improve our services. We do not sell your personal information.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Retention</h2>
        <p>
          We retain inquiries for as long as needed to operate the business and meet legal obligations. Exact periods
          may depend on your region and our operational requirements.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Contact</h2>
        <p>
          Questions about privacy? Email{" "}
          <a className="text-brand hover:underline" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
          .
        </p>
        <p className="text-xs">
          Note: This is a starter policy for a marketing site. Have legal counsel review before production use.
        </p>
      </div>
    </div>
  );
}
