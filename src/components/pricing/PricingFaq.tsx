import { FaqItem } from "@/components/FaqItem";
import { pricingCopy } from "@/content/pricing";

export function PricingFaq() {
  return (
    <section className="border-t border-[#E2E8E4] bg-[#FAFAF9]">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#21153a] sm:text-3xl">
          {pricingCopy.faqTitle}
        </h2>
        <div className="mt-8 space-y-3">
          {pricingCopy.faqs.map((item) => (
            <FaqItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-[#5c6b63]">
          Questions about onboarding? Email{" "}
          <a href="mailto:support@volomart.in" className="font-semibold text-[#5A7F30] hover:underline">
            support@volomart.in
          </a>
          .
        </p>
      </div>
    </section>
  );
}
