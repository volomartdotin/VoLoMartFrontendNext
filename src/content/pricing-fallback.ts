import type { Plan } from "@/lib/plans-api";

function price(
  amount: number,
  cycle: "MONTHLY" | "YEARLY",
  id: string,
  originalAmount?: number,
) {
  const hasDiscount = originalAmount != null && originalAmount > amount;
  return {
    id: `${id}-${cycle.toLowerCase()}`,
    billingCycle: cycle,
    price: amount,
    originalPrice: hasDiscount ? originalAmount : null,
    displayPrice: `₹${(amount / 100).toFixed(0)}`,
    displayOriginalPrice: hasDiscount
      ? `₹${(originalAmount / 100).toFixed(0)}`
      : null,
    discountPercent: hasDiscount
      ? Math.round(((originalAmount - amount) / originalAmount) * 100)
      : null,
  };
}

/** Shown when the live API is unavailable (e.g. before backend deploy). */
export const fallbackPlans: Plan[] = [
  {
    id: "free-trial",
    name: "Free Trial",
    slug: "free-trial",
    description: "7-day free trial with full dashboard access",
    productLimit: 20,
    isTrial: true,
    trialDays: 7,
    features: ["Full vendor dashboard", "Up to 20 products", "7 days access", "No payment required"],
    prices: [],
  },
  {
    id: "basic",
    name: "Basic",
    slug: "basic",
    description: "Perfect for small neighborhood stores",
    productLimit: 30,
    isTrial: false,
    features: ["Up to 30 products", "Vendor dashboard", "Order management", "Email support"],
    prices: [
      price(9900, "MONTHLY", "basic", 19900),
      price(99900, "YEARLY", "basic", 199900),
    ],
  },
  {
    id: "starter",
    name: "Starter",
    slug: "starter",
    description: "Growing stores with more inventory",
    productLimit: 100,
    isTrial: false,
    isPopular: true,
    features: ["Up to 100 products", "Vendor dashboard", "Order management", "Priority support"],
    prices: [price(29900, "MONTHLY", "starter"), price(299900, "YEARLY", "starter")],
  },
  {
    id: "growth",
    name: "Growth",
    slug: "growth",
    description: "For established vendors scaling up",
    productLimit: 500,
    isTrial: false,
    features: ["Up to 500 products", "Vendor dashboard", "Analytics", "Priority support"],
    prices: [price(69900, "MONTHLY", "growth"), price(699900, "YEARLY", "growth")],
  },
  {
    id: "premium",
    name: "Premium",
    slug: "premium",
    description: "Unlimited products for large vendors",
    productLimit: -1,
    isTrial: false,
    features: ["Unlimited products", "Vendor dashboard", "Advanced analytics", "Dedicated support"],
    prices: [price(149900, "MONTHLY", "premium"), price(1499900, "YEARLY", "premium")],
  },
];
