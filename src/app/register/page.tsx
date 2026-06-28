import type { Metadata } from "next";
import Link from "next/link";
import { registerCopy, site } from "@/content/vendor";
import { RegisterForm } from "@/components/forms/RegisterForm";

export const metadata: Metadata = {
  title: "Register your shop",
  description: "Apply to list your neighborhood store on VoLo Mart. Free starter onboarding for qualifying vendors.",
  alternates: { canonical: "/register" },
  openGraph: {
    title: `Register your shop | ${site.name}`,
    description: registerCopy.subtitle,
    url: "/register",
  },
};

export default function RegisterPage() {
  return (
    <div className="border-b border-border bg-gradient-to-b from-brand-light/50 to-background">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-medium text-brand">
          <Link href="/" className="hover:underline">
            ← Back to vendor overview
          </Link>
        </p>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {registerCopy.title}
        </h1>
        <p className="mt-3 text-muted">{registerCopy.subtitle}</p>
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <RegisterForm />
        </div>
        <p className="mt-8 text-center text-xs text-muted">
          By submitting, you agree we may contact you about VoLo Mart onboarding. See our{" "}
          <Link href="/privacy" className="text-brand hover:underline">
            Privacy
          </Link>{" "}
          policy.
        </p>
      </div>
    </div>
  );
}
