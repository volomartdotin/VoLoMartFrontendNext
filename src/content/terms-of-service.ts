import type { BlogBlock } from "./blog-types";

export type TermsOfServicePage = {
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
    text: "Service Description",
  },
  {
    type: "p",
    text: "VoLoMart operates as a marketplace facilitator connecting customers with local vendors while maintaining clear liability boundaries and service expectations.",
  },
  {
    type: "p",
    text: "VoLoMart serves as your gateway to local commerce, connecting you with verified vendors in your neighborhood. We facilitate transactions between customers and vendors while maintaining platform integrity and user safety.",
  },
  {
    type: "p",
    text: "Our platform role includes order processing and delivery coordination. However, product quality, availability, and fulfillment remain the primary responsibility of individual vendors.",
  },
  {
    type: "h3",
    text: "Platform Services Include",
  },
  {
    type: "ul",
    items: ["Vendor discovery and verification", "Order tracking and management", "Customer support"],
  },
  {
    type: "h2",
    text: "Account Responsibilities",
  },
  {
    type: "h3",
    text: "Registration Requirements",
  },
  {
    type: "p",
    text: "Account creation requires accurate personal information including a valid phone number and email address. False information may result in account suspension and order cancellation.",
  },
  {
    type: "h3",
    text: "Required Information",
  },
  {
    type: "ul",
    items: ["Full name and phone number", "Valid email address", "Accurate delivery addresses"],
  },
  {
    type: "h3",
    text: "Prohibited Activities",
  },
  {
    type: "ul",
    items: ["Multiple accounts per person", "False identity information", "Account sharing or transfer"],
  },
  {
    type: "h3",
    text: "Acceptable Usage Policies",
  },
  {
    type: "p",
    text: "Customers must use the platform responsibly, respecting vendors and other users. Harassment, fraud, system manipulation, or abuse of platform features may result in immediate account termination.",
  },
  {
    type: "h2",
    text: "Order Terms",
  },
  {
    type: "h3",
    text: "Purchase Process",
  },
  {
    type: "p",
    text: "Orders are confirmed upon vendor acceptance. Pricing accuracy is maintained at order placement, but vendors may adjust availability based on real-time inventory.",
  },
  {
    type: "h3",
    text: "Important Notes",
  },
  {
    type: "ul",
    items: [
      "Prices may vary between vendors for similar products",
      "Seasonal pricing adjustments may apply",
      "Bulk order discounts available from participating vendors",
      "Special dietary requirements should be specified at order time",
    ],
  },
  {
    type: "h2",
    text: "Delivery Terms",
  },
  {
    type: "h3",
    text: "Service Areas & Delivery Windows",
  },
  {
    type: "p",
    text: "Delivery coverage varies by vendor location and service capacity. Standard delivery windows range from 30-90 minutes during peak hours, with express options available for select vendors and areas.",
  },
  {
    type: "h3",
    text: "Delivery Zones",
  },
  {
    type: "ul",
    items: ["Zone 1: 0-2km (30-45 min)", "Zone 2: 2-5km (45-75 min)", "Zone 3: 5-8km (75-90 min)"],
  },
  {
    type: "h3",
    text: "Customer Responsibilities",
  },
  {
    type: "ul",
    items: [
      "Provide accurate delivery address",
      "Be available during delivery window",
      "Verify order contents upon receipt",
      "Report issues within 24 hours",
    ],
  },
  {
    type: "h3",
    text: "Product Availability",
  },
  {
    type: "p",
    text: "Local vendors maintain real-time inventory, but popular items may sell out during peak demand. Alternative suggestions will be provided when possible, with customer approval required for substitutions.",
  },
  {
    type: "h2",
    text: "Platform Usage Guidelines",
  },
  {
    type: "h3",
    text: "Prohibited Activities",
  },
  {
    type: "p",
    text: "The following activities are strictly prohibited and may result in immediate account termination:",
  },
  {
    type: "ul",
    items: [
      "Creating fake reviews or ratings",
      "Manipulating search rankings",
      "Harassment of vendors or customers",
      "Fraudulent payment activities",
      "System manipulation or hacking attempts",
      "Spam or unsolicited communications",
      "Violation of vendor policies",
      "Abuse of refund or return policies",
    ],
  },
  {
    type: "h3",
    text: "Community Standards",
  },
  {
    type: "p",
    text: "VoLoMart maintains a respectful community environment. Users are expected to communicate professionally, provide honest feedback, and contribute positively to the local commerce ecosystem.",
  },
  {
    type: "h2",
    text: "Intellectual Property",
  },
  {
    type: "h3",
    text: "Customer-Generated Content Protection",
  },
  {
    type: "p",
    text: "Reviews, photos, and comments submitted by customers remain their intellectual property. VoLoMart is granted limited usage rights for platform improvement and marketing purposes with appropriate attribution.",
  },
  {
    type: "p",
    text: "You retain ownership of all content you create, including reviews, photos, and comments. We only use this content to improve our service and help other customers make informed decisions.",
  },
  {
    type: "h3",
    text: "Vendor Trademark & Product Information Respect",
  },
  {
    type: "p",
    text: "Customer interactions must respect vendor trademarks, product descriptions, and proprietary information. Unauthorized use of vendor content or brand materials is prohibited.",
  },
  {
    type: "h2",
    text: "Limitation of Liability",
  },
  {
    type: "h3",
    text: "Platform vs. Vendor Responsibilities",
  },
  {
    type: "p",
    text: "VoLoMart facilitates connections between customers and vendors but does not directly control product quality, availability, or vendor business practices. Understanding these boundaries helps set appropriate expectations.",
  },
  {
    type: "h3",
    text: "Platform Responsibilities",
  },
  {
    type: "ul",
    items: ["Order tracking and communication", "Platform security and maintenance"],
  },
  {
    type: "h3",
    text: "Vendor Responsibilities",
  },
  {
    type: "ul",
    items: [
      "Product quality and safety",
      "Accurate inventory management",
      "Timely order fulfillment",
      "Customer service and support",
    ],
  },
  {
    type: "h3",
    text: "Liability Boundaries",
  },
  {
    type: "p",
    text: "VoLoMart's liability is limited to facilitating marketplace transactions. Product-related issues, delivery problems caused by vendor delays, and quality concerns are primarily vendor responsibilities, though we provide support for resolution.",
  },
  {
    type: "h2",
    text: "Termination Conditions",
  },
  {
    type: "h3",
    text: "Account Suspension & Closure Procedures",
  },
  {
    type: "p",
    text: "Account termination may occur due to policy violations, fraudulent activities, or user request. We provide clear communication about reasons and, when possible, opportunities for account restoration.",
  },
  {
    type: "ul",
    items: [
      "Voluntary Termination: Users can close accounts anytime through settings with 48-hour processing time",
      "Temporary Suspension: Policy violations may result in temporary suspension with restoration opportunity",
      "Permanent Termination: Serious violations or repeated offenses may result in permanent account closure",
    ],
  },
  {
    type: "h3",
    text: "Data Retention Policies",
  },
  {
    type: "p",
    text: "Following account closure, personal data is retained for 90 days to complete pending transactions, then permanently deleted except where required by law for financial record keeping (up to 7 years).",
  },
  {
    type: "h2",
    text: "Terms Updates",
  },
  {
    type: "h3",
    text: "Regular Updates Notification System",
  },
  {
    type: "p",
    text: "Terms of service updates are communicated through in-app messages and website announcements.",
  },
  {
    type: "h3",
    text: "How We Keep You Informed",
  },
  {
    type: "ul",
    items: ["In-app notifications for policy updates", "Website announcements"],
  },
  {
    type: "h3",
    text: "Acceptance Mechanisms",
  },
  {
    type: "p",
    text: "Continued platform usage after notification period constitutes acceptance of updated terms. Users who disagree with changes may close their accounts before the effective date.",
  },
  {
    type: "h2",
    text: "Questions About These Terms?",
  },
  {
    type: "p",
    text: "Our support team is here to help clarify any aspect of our terms of service. Email support@volomart.in for detailed answers to your questions.",
  },
];

const vendorBlocks: BlogBlock[] = [
  {
    type: "h2",
    text: "Vendor Eligibility",
  },
  {
    type: "p",
    text: "Business licensing requirements, product category restrictions, and quality standards for platform participation with transparent approval criteria.",
  },
  {
    type: "h3",
    text: "Business Licensing Requirements",
  },
  {
    type: "p",
    text: "All vendors must maintain valid business licenses appropriate to their product categories and local jurisdiction. Food vendors require additional health permits and safety certifications as mandated by local authorities.",
  },
  {
    type: "h3",
    text: "Required Documentation",
  },
  {
    type: "ul",
    items: [
      "Valid business registration certificate",
      "Tax identification number (GST/PAN)",
      "Local trade license",
      "Category-specific permits",
    ],
  },
  {
    type: "h3",
    text: "Food Vendor Additional Requirements",
  },
  {
    type: "ul",
    items: [
      "FSSAI license (Food Safety)",
      "Health department clearance",
      "Fire safety compliance certificate",
      "Water quality testing reports",
    ],
  },
  {
    type: "h3",
    text: "Quality Standards & Product Categories",
  },
  {
    type: "p",
    text: "VoLoMart maintains strict quality standards across all product categories. Vendors must demonstrate consistent quality delivery and comply with category-specific guidelines.",
  },
  {
    type: "h3",
    text: "Approved Categories",
  },
  {
    type: "ul",
    items: [
      "Firecracker Zone",
      "Grocery Spot",
      "Vegetable Corner",
      "Fruit Garden",
      "Namkeen Nook",
      "Daily Dairy",
      "Bread Basket",
      "Flower Spot",
    ],
  },
  {
    type: "h3",
    text: "Strictly Prohibited Items",
  },
  {
    type: "p",
    text: "The following items are strictly prohibited and will result in immediate account termination:",
  },
  {
    type: "ul",
    items: [
      "Illegal items and contraband",
      "Drugs and controlled substances",
      "Narcotics and psychotropic substances",
      "Cannabis and marijuana products",
      "Synthetic drugs and designer drugs",
      "Drug paraphernalia and equipment",
      "Stolen goods and black market items",
      "Human trafficking related items",
      "Prescription medications without license",
      "Alcohol and tobacco products",
      "Weapons and ammunition",
      "Counterfeit or pirated goods",
      "Hazardous materials",
      "Adult content and explicit materials",
      "Endangered species products",
      "Stolen vehicles or parts",
    ],
  },
  {
    type: "p",
    text: "Zero Tolerance Policy: Any attempt to sell prohibited items will result in immediate account suspension and legal action. We maintain strict compliance with all local, state, and federal laws.",
  },
  {
    type: "h2",
    text: "Commission Structure",
  },
  {
    type: "h3",
    text: "Completely Free: Zero Charges Policy",
  },
  {
    type: "p",
    text: "VoLoMart operates on a completely free model. We take no cut from your sales and charge no transaction fees. You keep 100% of your revenue with zero platform charges. This policy is free forever with no hidden fees or monthly charges.",
  },
  {
    type: "ul",
    items: [
      "No Registration Fee",
      "No Monthly Charges",
      "No Commission",
      "No Transaction Fees",
      "No Hidden Costs",
    ],
  },
  {
    type: "h2",
    text: "Product Listing Requirements",
  },
  {
    type: "h3",
    text: "Accurate Descriptions & Current Pricing",
  },
  {
    type: "p",
    text: "Product listings must include accurate descriptions, current pricing, and real-time inventory management. High-quality photos and detailed specifications enhance customer confidence and reduce returns.",
  },
  {
    type: "h3",
    text: "Required Information",
  },
  {
    type: "ul",
    items: [
      "Product name and detailed description",
      "Current pricing with any applicable taxes",
      "High-resolution product images (min 800x800px)",
      "Availability status and stock levels",
      "Preparation/delivery timeframes",
      "Ingredients/materials (food items)",
      "Nutritional information (where applicable)",
    ],
  },
  {
    type: "h3",
    text: "Best Practices",
  },
  {
    type: "ul",
    items: [
      "Photography Tips: Use natural lighting, clean backgrounds, multiple angles",
      "Description Writing: Clear, honest descriptions with key benefits highlighted",
      "Pricing Strategy: Competitive pricing with transparent additional charges",
    ],
  },
  {
    type: "h3",
    text: "Compliance with Local Regulations",
  },
  {
    type: "p",
    text: "All product listings must comply with local regulations including food safety standards, labeling requirements, and business licensing. VoLoMart provides guidance but vendors remain responsible for regulatory compliance.",
  },
  {
    type: "h2",
    text: "Order Fulfillment",
  },
  {
    type: "h3",
    text: "Acceptance Timeframes & Preparation Standards",
  },
  {
    type: "p",
    text: "Vendors must respond to orders within specified timeframes and maintain consistent preparation standards. Clear communication with customers about delays or substitutions is essential for customer satisfaction.",
  },
  {
    type: "ul",
    items: [
      "Order Acceptance: Within 10 minutes",
      "Preparation Time: As per listing",
      "Customer Updates: Real-time communication",
    ],
  },
  {
    type: "h3",
    text: "Delivery Coordination & Customer Communication",
  },
  {
    type: "p",
    text: "Effective coordination with delivery partners and proactive customer communication ensures smooth order fulfillment. Vendors are responsible for order readiness and quality at handoff.",
  },
  {
    type: "h3",
    text: "Communication Requirements",
  },
  {
    type: "ul",
    items: [
      "Order confirmation within 5 minutes",
      "Preparation status updates every 15 minutes",
      "Immediate notification of any delays or issues",
      "Professional, courteous customer interactions",
    ],
  },
  {
    type: "h2",
    text: "Quality Assurance",
  },
  {
    type: "h3",
    text: "Performance Metrics & Standards",
  },
  {
    type: "p",
    text: "Comprehensive performance tracking including order accuracy, delivery timeliness, and customer satisfaction scores. Regular performance reviews ensure continuous improvement and platform quality maintenance.",
  },
  {
    type: "h3",
    text: "Key Performance Indicators",
  },
  {
    type: "ul",
    items: [
      "Order Accuracy Rate: ≥95%",
      "On-Time Delivery: ≥90%",
      "Customer Rating: ≥4.0/5",
      "Response Time: ≤10 min",
    ],
  },
  {
    type: "h3",
    text: "Quality Improvement Process",
  },
  {
    type: "ul",
    items: [
      "Weekly Reviews: Performance data analysis and feedback",
      "Monthly Training: Skills development and best practices",
      "Quarterly Goals: Performance targets and improvement plans",
      "Annual Certification: Quality standards verification",
    ],
  },
  {
    type: "h3",
    text: "Improvement Plans for Underperforming Vendors",
  },
  {
    type: "p",
    text: "Vendors not meeting performance standards receive structured improvement support including training, mentoring, and performance monitoring. Continued underperformance may result in account review or suspension.",
  },
  {
    type: "h2",
    text: "Platform Usage Guidelines",
  },
  {
    type: "h3",
    text: "Prohibited Activities",
  },
  {
    type: "p",
    text: "To maintain fair competition and platform integrity, the following activities are strictly prohibited and may result in immediate account suspension:",
  },
  {
    type: "ul",
    items: [
      "Competition Interference: Sabotaging competitor listings",
      "Creating fake negative reviews",
      "Price manipulation schemes",
      "Spreading false information about competitors",
      "Data & System Misuse: Accessing customer data beyond orders",
      "Manipulating review and ranking systems",
      "Using customer information for external marketing",
      "System hacking or unauthorized access",
    ],
  },
  {
    type: "h3",
    text: "Professional Conduct Standards",
  },
  {
    type: "p",
    text: "Vendors must maintain professional standards in all platform interactions, respecting customers, other vendors, and platform staff. Harassment or unprofessional behavior results in immediate account review.",
  },
  {
    type: "h2",
    text: "Intellectual Property",
  },
  {
    type: "h3",
    text: "Vendor Trademark & Product Image Protection",
  },
  {
    type: "p",
    text: "VoLoMart respects and protects vendor intellectual property including trademarks, product images, and proprietary information. Vendors retain full ownership while granting limited platform usage rights.",
  },
  {
    type: "h3",
    text: "Protected Content",
  },
  {
    type: "ul",
    items: [
      "Business names and trademarks",
      "Product photography and descriptions",
      "Recipes and preparation methods",
      "Proprietary business processes",
      "Customer lists and contact information",
    ],
  },
  {
    type: "h3",
    text: "Platform Usage Rights",
  },
  {
    type: "ul",
    items: [
      "Marketing Use: Product images in platform marketing materials",
      "Search Display: Content visibility in customer searches",
      "Quality Assurance: Content review for platform standards",
    ],
  },
  {
    type: "p",
    text: "Limited usage rights allow VoLoMart to display vendor content effectively while ensuring vendors can transition seamlessly if they choose to leave the platform, with full content ownership retained.",
  },
  {
    type: "h2",
    text: "Termination Procedures",
  },
  {
    type: "h3",
    text: "Account Closure Conditions",
  },
  {
    type: "p",
    text: "Account termination may occur due to policy violations, performance issues, or vendor request. We ensure fair processes with clear communication and, when appropriate, opportunities for account restoration.",
  },
  {
    type: "ul",
    items: [
      "Voluntary Closure: 30-day notice period for orderly transition, complete pending orders, final payment settlement, and data export assistance",
      "Performance Issues: Improvement plan with a 60-day monitoring period, weekly progress reviews, and training and support",
      "Policy Violations: Immediate suspension for serious violations, account review process, appeal opportunity, and final settlement handling",
    ],
  },
  {
    type: "h2",
    text: "Business Support",
  },
  {
    type: "h3",
    text: "Comprehensive Vendor Training Programs",
  },
  {
    type: "p",
    text: "Extensive training programs cover platform usage, business optimization, customer service, and growth strategies. Regular workshops and one-on-one support help vendors maximize their success on VoLoMart.",
  },
  {
    type: "h3",
    text: "Training Modules",
  },
  {
    type: "ul",
    items: [
      "Platform Basics: Account setup, listing creation, order management",
      "Business Growth: Marketing strategies, customer retention, analytics",
      "Quality Excellence: Food safety, customer service, quality standards",
    ],
  },
  {
    type: "h3",
    text: "Support Services",
  },
  {
    type: "ul",
    items: [
      "24/7 technical support hotline",
      "Weekly business development calls",
      "Monthly performance reviews",
      "Quarterly growth planning sessions",
      "Annual vendor conference and networking",
      "Marketing campaign collaboration",
    ],
  },
  {
    type: "h3",
    text: "Growth Support & Business Continuity",
  },
  {
    type: "p",
    text: "VoLoMart provides ongoing support for vendor growth including marketing assistance, business development guidance, and technology upgrades to ensure long-term partnership success.",
  },
  {
    type: "h2",
    text: "Ready to Partner With Us?",
  },
  {
    type: "p",
    text: "Join thousands of successful vendors growing their business with VoLoMart. For expert guidance for your business, contact our vendor support team at support@volomart.in.",
  },
];

export const customerTerms: TermsOfServicePage = {
  slug: "customers",
  title: "Terms of Service for Customers",
  subtitle: "Clear expectations and protections for your VoLoMart shopping experience.",
  lastUpdated: "Last updated: October 2, 2025 • Effective from: October 2, 2025",
  coverImage:
    "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80",
  tldr: [
    "VoLoMart facilitates orders and delivery coordination, while product quality, availability, and fulfillment remain vendor responsibilities.",
    "Use the platform responsibly with accurate account info, no fake reviews, and no fraud, or risk suspension and account termination.",
    "You keep ownership of your reviews and photos; questions about these terms can go to support@volomart.in.",
  ],
  blocks: customerBlocks,
};

export const vendorTerms: TermsOfServicePage = {
  slug: "vendors",
  title: "Vendor Agreement",
  subtitle: "Comprehensive framework for successful vendor partnerships on VoLoMart.",
  lastUpdated: "Last updated: October 2, 2025 • Effective from: October 2, 2025",
  coverImage:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  tldr: [
    "Vendors need valid licensing and must meet category and quality standards; prohibited items trigger immediate suspension and legal action.",
    "Zero charges forever with no commission, no transaction fees, and no monthly or hidden costs, so you keep 100% of your revenue.",
    "Meet fulfillment, communication, and performance standards (≥95% accuracy, ≥4.0 rating); support is available at support@volomart.in.",
  ],
  blocks: vendorBlocks,
};
