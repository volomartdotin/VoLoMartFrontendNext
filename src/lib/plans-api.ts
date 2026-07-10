import { fallbackPlans } from "@/content/pricing-fallback";
import { apiGet } from "@/lib/api-client";

export type PlanPrice = {
  id: string;
  billingCycle: "MONTHLY" | "YEARLY";
  price: number;
  originalPrice?: number | null;
  displayPrice: string;
  displayOriginalPrice?: string | null;
  discountPercent?: number | null;
};

export type Plan = {
  id: string;
  name: string;
  slug: string;
  description: string;
  productLimit: number;
  features: string[];
  isTrial: boolean;
  trialDays?: number;
  isPopular?: boolean;
  isCurrent?: boolean;
  prices: PlanPrice[];
};

type PlansData = {
  plans: Plan[];
  currentPlanId?: string | null;
};

export async function fetchPlans(): Promise<Plan[]> {
  try {
    const data = await apiGet<PlansData>("/api/v1/plans");
    const plans = data.plans ?? [];
    return plans.length > 0 ? plans : fallbackPlans;
  } catch {
    return fallbackPlans;
  }
}

export function formatProductLimit(limit: number): string {
  if (limit === -1) return "Unlimited products";
  return `${limit} products`;
}

export function getPriceForCycle(plan: Plan, yearly: boolean): PlanPrice | undefined {
  const cycle = yearly ? "YEARLY" : "MONTHLY";
  return plan.prices.find((p) => p.billingCycle === cycle);
}
