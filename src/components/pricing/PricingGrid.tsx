"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DOWNLOAD_APP_HREF,
  POPULAR_PLAN_SLUG,
  pricingCopy,
} from "@/content/pricing";
import {
  fetchPlans,
  formatProductLimit,
  getPriceForCycle,
  type Plan,
} from "@/lib/plans-api";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.volomart.app";
const APP_STORE_URL = "https://apps.apple.com/app/volomart";

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#8BC34A]" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PricingSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-2xl border border-[#E2E8E4] bg-white p-6 shadow-sm"
        >
          <div className="h-5 w-24 rounded bg-[#E2E8E4]" />
          <div className="mt-3 h-4 w-full rounded bg-[#F3F2F6]" />
          <div className="mt-8 h-10 w-20 rounded bg-[#E2E8E4]" />
          <div className="mt-6 space-y-2">
            <div className="h-3 w-full rounded bg-[#F3F2F6]" />
            <div className="h-3 w-5/6 rounded bg-[#F3F2F6]" />
            <div className="h-3 w-4/6 rounded bg-[#F3F2F6]" />
          </div>
          <div className="mt-8 h-11 w-full rounded-xl bg-[#E2E8E4]" />
        </div>
      ))}
    </div>
  );
}

function yearlySavingsPercent(plan: Plan): number | null {
  const monthly = plan.prices.find((p) => p.billingCycle === "MONTHLY")?.price;
  const yearly = plan.prices.find((p) => p.billingCycle === "YEARLY")?.price;
  if (!monthly || !yearly || monthly * 12 <= yearly) return null;
  return Math.round(((monthly * 12 - yearly) / (monthly * 12)) * 100);
}

export function PricingGrid() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [yearly, setYearly] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetchPlans()
      .then((data) => {
        if (active) setPlans(data);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return <PricingSkeleton />;
  }

  const paidPlans = plans.filter((p) => !p.isTrial);
  const trialPlan = plans.find((p) => p.isTrial);

  return (
    <div>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <div className="inline-flex rounded-full border border-[#E2E8E4] bg-white p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setYearly(false)}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
              !yearly ? "bg-[#21153a] text-white shadow-sm" : "text-[#5c6b63] hover:text-[#21153a]"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setYearly(true)}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
              yearly ? "bg-[#21153a] text-white shadow-sm" : "text-[#5c6b63] hover:text-[#21153a]"
            }`}
          >
            Yearly
          </button>
        </div>
        {yearly ? (
          <span className="text-xs font-medium text-[#5A7F30]">{pricingCopy.yearlyBadge}</span>
        ) : null}
      </div>

      {trialPlan ? (
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#8BC34A]/30 bg-gradient-to-r from-[#8BC34A]/10 via-white to-[#F3F2F6] p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#5A7F30]">Get started</p>
              <h2 className="mt-1 text-2xl font-bold text-[#21153a]">{trialPlan.name}</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#5c6b63]">{trialPlan.description}</p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#3D3550]">
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  {trialPlan.trialDays ?? 7} days free
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  {formatProductLimit(trialPlan.productLimit)}
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon />
                  Full vendor dashboard
                </li>
              </ul>
            </div>
            <div className="shrink-0 text-center sm:text-right">
              <p className="text-4xl font-bold text-[#21153a]">₹0</p>
              <p className="text-sm text-[#5c6b63]">No card required</p>
              <Link
                href={DOWNLOAD_APP_HREF}
                className="mt-4 inline-flex rounded-full bg-[#8BC34A] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#74A73D]"
              >
                Start free trial
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {paidPlans.map((plan) => {
          const price = getPriceForCycle(plan, yearly);
          const isPopular = plan.isPopular ?? plan.slug === POPULAR_PLAN_SLUG;
          const savings = yearlySavingsPercent(plan);

          return (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md ${
                isPopular
                  ? "border-[#8BC34A] ring-2 ring-[#8BC34A]/20"
                  : "border-[#E2E8E4]"
              }`}
            >
              {isPopular ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#8BC34A] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  {pricingCopy.popularLabel}
                </span>
              ) : null}

              <h2 className="text-lg font-bold text-[#21153a]">{plan.name}</h2>
              <p className="mt-2 min-h-[2.5rem] text-sm leading-relaxed text-[#5c6b63]">{plan.description}</p>

              <div className="mt-6 border-b border-[#F3F2F6] pb-6">
                <p className="text-3xl font-bold tracking-tight text-[#21153a]">
                  {price?.displayPrice ?? "—"}
                </p>
                <p className="mt-1 text-sm text-[#5c6b63]">{yearly ? "billed yearly" : "billed monthly"}</p>
                {yearly && savings ? (
                  <p className="mt-2 text-xs font-semibold text-[#5A7F30]">Save {savings}% vs monthly</p>
                ) : null}
              </div>

              <p className="mt-4 text-sm font-semibold text-[#21153a]">{formatProductLimit(plan.productLimit)}</p>

              <ul className="mt-4 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-sm leading-snug text-[#5c6b63]">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-2">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block rounded-xl px-4 py-3 text-center text-sm font-semibold transition ${
                    isPopular
                      ? "bg-[#8BC34A] text-white hover:bg-[#74A73D]"
                      : "bg-[#21153a] text-white hover:opacity-90"
                  }`}
                >
                  Get on Android
                </a>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-[#E2E8E4] px-4 py-3 text-center text-sm font-medium text-[#21153a] transition hover:bg-[#F3F2F6]"
                >
                  Get on iOS
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-10 text-center text-sm leading-relaxed text-[#5c6b63]">
        {pricingCopy.footerNote}
      </p>
    </div>
  );
}
