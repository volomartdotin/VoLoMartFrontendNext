export const site = {
  name: "VoLo Mart",
  taglineEn: "Your neighborhood store, online—in minutes.",
  taglineHi: "हर लोकल वेंडर की डिजिटल दुकान",
  taglineHiRoman: "Har Local Vendor Ki Digital Dukaan",
  supportEmail: "support@volomart.in",
  url: "https://www.volomart.in",
} as const;

export const nav = [
  { label: "Why VoLo", href: "/#why" },
  { label: "How it works", href: "/#how" },
  { label: "Pricing", href: "/pricing" },
  { label: "Categories", href: "/#categories" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const hero = {
  badge: "Now onboarding local vendors",
  title: "Turn footfall into orders—without a tech team.",
  subtitle:
    "VoLo Mart helps kirana, produce sellers, dairy, bakery, and specialty shops get discovered by nearby customers, manage orders, and fulfil fast deliveries—all from one simple app.",
  primaryCta: "Register your shop — free",
  primaryHref: "/register",
  secondaryCta: "Talk to us",
  secondaryHref: "/contact",
  bullets: [
    "Free to list your shop (no setup fees on our starter program)",
    "Reach buyers within ~3 km who already want local",
    "Live catalog and order alerts built for busy shopkeepers",
  ],
} as const;

export const painSolution = {
  title: "Built for real shops—not distant warehouses",
  pains: [
    {
      title: "Big apps dilute your brand",
      body: "You compete with nationwide sellers while customers still trust the shop next door.",
    },
    {
      title: "WhatsApp orders get messy",
      body: "Screenshots, voice notes, and “send location” threads are hard to track at rush hour.",
    },
    {
      title: "Delivery promises you can’t measure",
      body: "Without a simple workflow, it’s tough to confirm items, substitutions, and handoffs.",
    },
  ],
  solutions: [
    {
      title: "Your shop, your name, your customers",
      body: "You stay the merchant they know. We help them find you faster and order with clarity.",
    },
    {
      title: "Structured orders in one place",
      body: "See items, quantities, and notes in one place—manage every order without scattered messages.",
    },
    {
      title: "Operational rhythm for local speed",
      body: "Designed for short-radius fulfilment so you can prep, pack, and hand off without chaos.",
    },
  ],
} as const;

export const benefits = [
  {
    title: "Get found nearby",
    body: "Show up when hungry neighbors search for groceries, produce, dairy, snacks, and more.",
  },
  {
    title: "Update stock in real time",
    body: "Mark what’s fresh today, pause items when you sell out, and reduce “sorry, not available” moments.",
  },
  {
    title: "Earn repeat buyers",
    body: "Ratings and familiar faces build habit—local commerce wins on trust and consistency.",
  },
  {
    title: "Grow with insights",
    body: "Understand what moves on weekdays vs weekends so you buy and staff smarter.",
  },
] as const;

export const howItWorks = [
  {
    step: "1",
    title: "Apply in minutes",
    body: "Tell us about your shop, categories, and service area. We’ll help you get started.",
  },
  {
    step: "2",
    title: "Set up your catalog",
    body: "Add bestsellers first—photos optional but recommended for produce and specialty items.",
  },
  {
    step: "3",
    title: "Go live to nearby buyers",
    body: "Start receiving orders in the app. You control what you accept and when you’re open.",
  },
] as const;

export const categories = [
  "Grocery & staples",
  "Vegetables & fruit",
  "Daily dairy",
  "Bakery",
  "Namkeen & snacks",
  "Flowers & festive",
] as const;

export const stats = [
  { value: "0.5K+", label: "vendors in our network (growing)" },
  { value: "~20 min", label: "typical local delivery target" },
  { value: "8", label: "popular local categories" },
] as const;

export const testimonial = {
  quote:
    "We went from juggling WhatsApp orders to a clear list every morning. Customers see what’s fresh, and we close faster during peak hours.",
  name: "Priya S.",
  role: "Neighborhood grocery, NCR",
} as const;

export const faq = [
  {
    q: "Does it cost money to register?",
    a: "We’re onboarding vendors with a starter program focused on growth. Apply on the registration page and our team will confirm current benefits for your city.",
  },
  {
    q: "What do I need to get started?",
    a: "A smartphone, basic shop details, and your top-selling items. You can expand your catalog over time.",
  },
  {
    q: "Who delivers?",
    a: "Models can vary by city and shop type. During onboarding we’ll explain the fulfilment options available in your area.",
  },
  {
    q: "Can I pause orders when I’m busy?",
    a: "Yes—local shops need control. You should be able to manage availability and order acceptance from the vendor app.",
  },
  {
    q: "How do payouts work?",
    a: "Payout rules depend on your agreement and local operations. We’ll walk through the details before you go live.",
  },
] as const;

export const registerCopy = {
  title: "Register your shop",
  subtitle:
    "Share a few details. Our team will reach out to verify your business and help you publish your first catalog.",
} as const;

export const contactCopy = {
  title: "Talk to VoLo Mart",
  subtitle:
    "Questions about onboarding, categories, or your city? Send a message—we read every note.",
} as const;
