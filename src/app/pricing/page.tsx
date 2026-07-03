import type { Metadata } from "next";
import { PricingGrid } from "@/components/pricing/PricingGrid";
import { PricingFaq } from "@/components/pricing/PricingFaq";
import { pricingCopy } from "@/content/pricing";
import { site } from "@/content/vendor";

export const metadata: Metadata = {
  title: "Vendor pricing",
  description:
    "VoLoMart vendor subscription plans with a 7-day free trial and flexible monthly or yearly plans for local shops.",
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
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-14">
          <span className="inline-flex rounded-full bg-[#8BC34A]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#5A7F30]">
            {pricingCopy.badge}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#21153a] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {pricingCopy.title}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#5c6b63] sm:text-lg">
            {pricingCopy.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <PricingGrid />
      </section>

      <PricingFaq />
    </>
  );
}
