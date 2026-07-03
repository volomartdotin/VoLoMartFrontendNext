import Link from "next/link";
import { site } from "@/content/vendor";

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <div className="rounded-3xl bg-gradient-to-br from-brand to-brand-dark px-8 py-12 text-white shadow-lg sm:px-12 sm:py-14">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to put your shop on the map?</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
          Join vendors building repeat customers in their own neighborhoods. Registration takes a few minutes. We&apos;ll
          guide you through the rest.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-dark shadow-sm transition hover:bg-brand-light"
          >
            Register your shop
          </Link>
          <a
            href={`mailto:${site.supportEmail}?subject=VoLo%20Mart%20vendor%20question`}
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Email {site.supportEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
