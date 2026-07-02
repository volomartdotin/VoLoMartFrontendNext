import type { Metadata } from "next";
import Link from "next/link";
import { PricingGrid } from "@/components/pricing/PricingGrid";
import { PricingFaq } from "@/components/pricing/PricingFaq";
import { DOWNLOAD_APP_HREF, pricingCopy } from "@/content/pricing";
import { site } from "@/content/vendor";

export const metadata: Metadata = {
  title: "Vendor pricing",
  description:
    "VoLo Mart vendor subscription plans — 7-day free trial and flexible monthly or yearly plans for local shops.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `Vendor pricing | ${site.name}`,
    description: pricingCopy.subtitle,
    url: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-[#E2E8E4] bg-gradient-to-b from-[#F3F2F6] to-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16">
          <span className="inline-flex rounded-full bg-[#8BC34A]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#5A7F30]">
            {pricingCopy.badge}
          </span>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#21153a] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {pricingCopy.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5c6b63] sm:text-lg">
            {pricingCopy.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={DOWNLOAD_APP_HREF}
              className="inline-flex rounded-full bg-[#8BC34A] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#74A73D]"
            >
              {pricingCopy.cta.button}
            </Link>
            <Link
              href="/terms-of-service-vendors"
              className="inline-flex rounded-full border border-[#E2E8E4] bg-white px-7 py-3 text-sm font-semibold text-[#21153a] transition hover:border-[#8BC34A]/40 hover:bg-[#F3F2F6]"
            >
              Vendor terms
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <PricingGrid />
      </section>

      <PricingFaq />
    </>
  );
}
