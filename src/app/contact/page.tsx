import type { Metadata } from "next";
import Link from "next/link";
import { contactCopy, site } from "@/content/vendor";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the VoLo Mart team for vendor onboarding, partnerships, and support.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${site.name}`,
    description: contactCopy.subtitle,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-medium text-brand">
          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </p>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {contactCopy.title}
        </h1>
        <p className="mt-3 text-muted">{contactCopy.subtitle}</p>
        <p className="mt-4 text-sm text-muted">
          Or email us directly:{" "}
          <a className="font-medium text-brand hover:underline" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
        </p>
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
