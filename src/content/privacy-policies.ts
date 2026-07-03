import type { BlogBlock } from "./blog-types";

export type PrivacyPolicyPage = {
  slug: "customers" | "vendors";
  title: string;
  subtitle: string;
  lastUpdated: string;
  coverImage: string;
  tldr: string[];
  blocks: BlogBlock[];
};

const customerBlocks: BlogBlock[] = [
  {
    type: "h2",
    text: "What Data We Collect",
  },
  {
    type: "p",
    text: "We collect information you provide directly to us, including:",
  },
  {
    type: "ul",
    items: [
      "Personal Information: Name, email address, phone number, delivery address",
      "Location Data: Real-time location for delivery coordination and nearby vendor discovery",
      "Purchase History: Order details, and transaction records",
      "App Usage Analytics: Pages visited, features used, and interaction patterns",
      "Communication Records: Customer service interactions and feedback",
    ],
  },
  {
    type: "h2",
    text: "How We Use Your Data",
  },
  {
    type: "p",
    text: "Your data helps us provide and improve our services:",
  },
  {
    type: "ul",
    items: [
      "Order Processing: Fulfilling purchases and coordinating deliveries",
      "Delivery Coordination: Connecting you with nearby vendors",
      "Personalized Recommendations: Suggesting products based on your preferences",
      "Service Improvement: Analyzing usage patterns to enhance user experience",
      "Customer Support: Providing assistance and resolving issues",
      "Marketing Communications: Sending relevant offers and updates (with consent)",
    ],
  },
  {
    type: "h2",
    text: "Data Sharing & Third Parties",
  },
  {
    type: "p",
    text: "We share data only when necessary and with your consent:",
  },
  {
    type: "ul",
    items: [
      "Delivery Partners: Order details and delivery addresses for fulfillment",
      "Analytics Providers: Anonymous usage data for service improvement",
      "Vendors: Order information necessary for fulfillment (no personal contact details)",
      "Legal Requirements: When required by law or to protect our users",
      "Service Providers: Trusted partners who help operate our platform",
    ],
  },
  {
    type: "h2",
    text: "Your Rights & Controls",
  },
  {
    type: "p",
    text: "You have control over your personal data:",
  },
  {
    type: "ul",
    items: [
      "Access: Request a copy of all data we have about you",
      "Correction: Update or correct any inaccurate information",
      "Deletion: Request deletion of your account and associated data",
      "Consent Withdrawal: Opt out of marketing communications anytime",
      "Data Processing Objection: Object to certain data processing activities",
    ],
  },
  {
    type: "h2",
    text: "Cookies & Tracking",
  },
  {
    type: "p",
    text: "We use cookies and similar technologies to enhance your experience:",
  },
  {
    type: "ul",
    items: [
      "Essential Cookies: Required for basic app functionality",
      "Analytics Cookies: Help us understand how you use our services",
      "Preference Cookies: Remember your settings and preferences",
      "Third-party Cookies: From our partners for analytics and advertising",
      "Cookie Management: Control cookie preferences through our consent manager",
    ],
  },
];

const vendorBlocks: BlogBlock[] = [
  {
    type: "h2",
    text: "Business Data Collection",
  },
  {
    type: "p",
    text: "We collect comprehensive business information to support your operations:",
  },
  {
    type: "ul",
    items: [
      "Shop Details: Business name, description, operating hours, contact information",
      "Product Catalogs: Item listings, pricing, inventory levels, product images",
      "Customer Communications: Order-related messages, reviews, and feedback responses",
      "Location Data: Shop coordinates, delivery zones, service area boundaries",
    ],
  },
  {
    type: "h2",
    text: "How We Use Your Business Data",
  },
  {
    type: "p",
    text: "Your business data enables platform operations and growth:",
  },
  {
    type: "ul",
    items: [
      "Platform Operations: Processing orders, managing inventory, coordinating deliveries",
      "Business Intelligence: Market analysis, demand forecasting, optimization insights",
      "Customer Matching: Connecting customers with relevant vendors in their area",
      "Performance Analytics: Sales reports, customer metrics, growth tracking",
      "Compliance Monitoring: Ensuring adherence to platform policies and regulations",
    ],
  },
  {
    type: "h2",
    text: "Competitive Information Protection",
  },
  {
    type: "p",
    text: "We protect your business-sensitive information with strict controls:",
  },
  {
    type: "ul",
    items: [
      "Data Segregation: Vendor data is isolated and never shared between competitors",
      "Aggregated Analytics: Market insights use anonymized, aggregated data only",
      "Access Controls: Strict employee access to vendor-specific information",
      "Secure Storage: Business data stored in separate, secure databases",
      "Audit Trails: Complete logging of all access to sensitive business information",
    ],
  },
  {
    type: "h2",
    text: "Customer Data Access & Boundaries",
  },
  {
    type: "p",
    text: "Your access to customer data is carefully controlled and limited:",
  },
  {
    type: "ul",
    items: [
      "Order Information: Access to delivery addresses and contact details",
      "Communication Records: History of order-related customer interactions",
      "Review Data: Customer feedback and ratings specific to your business",
      "Time Limits: Customer contact information expires after order completion",
      "Usage Restrictions: Customer data may only be used for order fulfillment purposes",
    ],
  },
  {
    type: "h2",
    text: "Data Retention & Storage Policies",
  },
  {
    type: "p",
    text: "Different data types are retained for specific periods based on business and legal requirements:",
  },
  {
    type: "ul",
    items: [
      "Transaction Records: 7 years for tax and legal compliance",
      "Inventory History: 3 years for trend analysis and demand forecasting",
      "Performance Metrics: 5 years for long-term business intelligence",
      "Customer Communications: 2 years for dispute resolution and service improvement",
      "Financial Records: 7 years for regulatory compliance and audit purposes",
      "Account Information: Retained until account closure plus 1 year for transition support",
    ],
  },
  {
    type: "h2",
    text: "Your Rights & Data Control",
  },
  {
    type: "p",
    text: "As a business partner, you have comprehensive rights over your data:",
  },
  {
    type: "ul",
    items: [
      "Data Portability: Export all business data in standard formats for continuity",
      "Correction Rights: Update shop information, product details, and business metrics",
      "Deletion Process: Account closure with secure data deletion within 30 days",
      "Performance Data: Access to all analytics and performance metrics",
      "Communication Control: Manage notification preferences and marketing opt-outs",
    ],
  },
];

export const customerPrivacyPolicy: PrivacyPolicyPage = {
  slug: "customers",
  title: "Privacy Policy for Customers",
  subtitle:
    "Your privacy matters to us. Learn how we collect, use, and protect your personal information.",
  lastUpdated: "Last updated: October 2, 2025 • Effective from: October 2, 2025",
  coverImage:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  tldr: [
    "We collect account, order, location, and support data needed to run VoLoMart and fulfill deliveries.",
    "Your data is used for orders, nearby vendor discovery, service improvement, and support. It is not sold to unrelated third parties.",
    "You can request access, correction, deletion, and opt out of marketing; contact support@volomart.in for help.",
  ],
  blocks: customerBlocks,
};

export const vendorPrivacyPolicy: PrivacyPolicyPage = {
  slug: "vendors",
  title: "Privacy Policy for Vendors",
  subtitle: "Your business data is protected with enterprise-grade security and compliance standards.",
  lastUpdated: "Last updated: October 2, 2025 • Effective from: October 2, 2025",
  coverImage:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  tldr: [
    "We collect shop, catalog, order, location, and performance data to operate the marketplace.",
    "Competitive and customer data are isolated. Vendors only receive what they need to fulfill orders.",
    "Retention periods follow legal and operational requirements; you may request export, correction, or deletion where applicable.",
  ],
  blocks: vendorBlocks,
};
