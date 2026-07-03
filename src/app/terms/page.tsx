import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/vendor";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms for using the VoLoMart marketing website and submitting vendor inquiries.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm text-brand">
        <Link href="/" className="hover:underline">
          ← Home
        </Link>
      </p>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Terms of use</h1>
      <p className="mt-2 text-sm text-muted">Last updated: May 3, 2026</p>
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted">
        <p>
          Welcome to the {site.name} marketing website. By using this site or submitting forms, you agree to these
          terms.
        </p>
        <h2 className="text-lg font-semibold text-foreground">No guarantee of partnership</h2>
        <p>
          Submitting a registration or contact form does not guarantee acceptance as a vendor. We may approve or
          decline applications based on operational, legal, or quality criteria.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Accuracy</h2>
        <p>
          You agree to provide accurate information. Misrepresentation may result in rejection or removal from the
          platform.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Limitation of liability</h2>
        <p>
          This marketing site is provided “as is”. To the extent permitted by law, we are not liable for indirect or
          consequential damages arising from your use of the site.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Changes</h2>
        <p>We may update these terms from time to time. Continued use after changes means you accept the updated terms.</p>
        <h2 className="text-lg font-semibold text-foreground">Contact</h2>
        <p>
          <a className="text-brand hover:underline" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
        </p>
        <p className="text-xs">
          Note: This is a starter document. Have legal counsel review before production use.
        </p>
      </div>
    </div>
  );
}
