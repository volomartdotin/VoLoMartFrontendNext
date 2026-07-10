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
    productLimit: 30,
    isTrial: true,
    trialDays: 7,
    features: [
      "Full vendor dashboard",
      "Up to 30 active products",
      "7 days free access",
      "Order management",
      "No payment required",
    ],
    prices: [],
  },
  {
    id: "starter",
    name: "Starter",
    slug: "starter",
    description: "Ideal for new neighborhood shops getting online",
    productLimit: 30,
    isTrial: false,
    features: [
      "Up to 30 active products",
      "Vendor dashboard",
      "Order management",
      "Product catalog & inventory",
      "Email support",
    ],
    prices: [price(9900, "MONTHLY", "starter"), price(99900, "YEARLY", "starter")],
  },
  {
    id: "basic",
    name: "Basic",
    slug: "basic",
    description: "For growing stores with a wider catalog",
    productLimit: 75,
    isTrial: false,
    features: [
      "Everything in Starter",
      "Up to 75 active products",
      "Customer order notifications",
      "Sales & order reports",
      "Chat support",
    ],
    prices: [price(19900, "MONTHLY", "basic"), price(199900, "YEARLY", "basic")],
  },
  {
    id: "growth",
    name: "Growth",
    slug: "growth",
    description: "For established vendors scaling daily orders",
    productLimit: 200,
    isTrial: false,
    isPopular: true,
    features: [
      "Everything in Basic",
      "Up to 200 active products",
      "Store analytics dashboard",
      "Bulk product management",
      "Priority support",
    ],
    prices: [price(49900, "MONTHLY", "growth"), price(499900, "YEARLY", "growth")],
  },
  {
    id: "business",
    name: "Business",
    slug: "business",
    description: "High-volume vendors with advanced needs",
    productLimit: 400,
    isTrial: false,
    features: [
      "Everything in Growth",
      "Up to 400 active products",
      "Advanced analytics & exports",
      "Dedicated account manager",
      "Custom onboarding",
      "Dedicated support",
    ],
    prices: [price(99900, "MONTHLY", "business"), price(999900, "YEARLY", "business")],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    slug: "enterprise",
    description: "Custom plans for large vendors — contact our sales team",
    productLimit: -1,
    isTrial: false,
    features: [
      "Everything in Business",
      "Unlimited active products",
      "Custom integrations & API access",
      "SLA-backed uptime",
      "Dedicated support line",
      "Custom onboarding & team training",
      "Volume pricing",
    ],
    prices: [],
  },
];
