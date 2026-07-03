import type { BlogPost } from "./blog-types";

export type { BlogPost, BlogBlock, BlogCategory } from "./blog-types";
export { blogCategories } from "./blog-types";

export const blogPosts: BlogPost[] = [
  {
    slug: "priya-sharma-flower-shop-hyperlocal-success",
    category: "Stories",
    title: "How a Neighborhood Florist Grew Daily Orders 3× with VoLoMart",
    excerpt:
      "Priya Sharma ran a beloved corner flower shop for twelve years. With VoLoMart, she reached new customers blocks away without hiring a tech team or rebuilding her shop from scratch.",
    author: "VoLoMart Team",
    date: "April 15, 2026",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80",
    relatedSlugs: [
      "traditional-to-digital-vendor-success-stories",
      "neighborhood-vendors-heart-of-local-commerce",
      "community-first-neighborhood-bonds",
    ],
    tldr: [
      "Hyperlocal commerce is growing fast, but most neighborhood vendors still juggle WhatsApp lists, phone calls, and walk-in traffic alone.",
      "Priya Sharma, a florist in Pune, listed on VoLoMart and tripled weekday orders within eight weeks without any coding experience.",
      "The result: steadier revenue, repeat customers who discover her through the app, and more time spent arranging flowers instead of chasing payments.",
    ],
    blocks: [
      {
        type: "h2",
        text: "The Challenge: Local Love, Limited Reach",
      },
      {
        type: "p",
        text: "For over a decade, Priya Sharma’s shop, Gulmohar Flowers, was the go-to spot for garlands, bouquets, and festival orders in her lane. Walk-ins knew her by name. What she didn’t have was a simple way to reach buyers three kilometers away who would happily order local if they could find her.",
      },
      {
        type: "p",
        text: "Like many neighborhood vendors, Priya relied on word of mouth, a handwritten ledger, and late-night WhatsApp messages. Orders were real, but scattered. Missed messages meant missed sales. She wanted growth without turning her shop into a full-time logistics company.",
      },
      {
        type: "img",
        src: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=1200&q=80",
        alt: "Fresh flowers arranged at a local market stall",
        caption: "Gulmohar Flowers: same quality, wider neighborhood reach.",
      },
      {
        type: "h2",
        text: "The Solution: VoLoMart for Neighborhood Sellers",
      },
      {
        type: "p",
        text: "Rather than building a custom app or paying for ads that didn’t convert, Priya registered on VoLoMart in an afternoon. She uploaded her catalog with marigold garlands, rose bouquets, and condolence wreaths, and set delivery slots that matched how she already worked.",
      },
      {
        type: "quote",
        text: "I thought going online meant hiring someone to build a website. VoLoMart felt like listing my shop on a map that customers already use. Within a week I had orders from streets I had never delivered to before.",
        attribution: "Priya Sharma, Gulmohar Flowers",
      },
      {
        type: "p",
        text: "Location-based discovery put her in front of nearby buyers searching for “flowers” and “garlands.” Clear order details let customers confirm colors and timing without endless phone tag. Structured orders replaced screenshot chaos, and payouts landed on a predictable schedule.",
      },
      {
        type: "h3",
        text: "What changed in her day-to-day",
      },
      {
        type: "ul",
        items: [
          "Morning prep based on confirmed orders, not guesses.",
          "Fewer payment follow-ups thanks to digital checkout.",
          "Repeat buyers who bookmark her shop in the app.",
          "Festival spikes handled with order caps she controls.",
        ],
      },
      {
        type: "h2",
        text: "The Impact: A Stronger Shop, Same Personal Touch",
      },
      {
        type: "p",
        text: "Eight weeks in, weekday orders were roughly three times what they had been before listing. More importantly, Priya kept the relationship-led experience that made Gulmohar special. She just gained a reliable channel for people who don’t pass her storefront every day.",
      },
      {
        type: "p",
        text: "Other vendors on her street noticed. Two now list dairy and sweets on VoLoMart; customers bundle orders from familiar names instead of defaulting to faceless marketplaces.",
      },
      {
        type: "quote",
        text: "The biggest barrier for shops like mine was not quality. It was visibility. VoLoMart didn’t replace my counter. It extended it.",
        attribution: "Priya Sharma",
      },
      {
        type: "h2",
        text: "The Future: Hyperlocal, Together",
      },
      {
        type: "p",
        text: "Priya plans to add subscription garlands for temples and corporate lobby clients through VoLoMart’s repeat-order flow. She’s also mentoring two first-time sellers in her market on how to photograph products and set honest delivery windows.",
      },
      {
        type: "p",
        text: "VoLoMart is onboarding florists, grocers, produce sellers, dairy counters, and specialty food shops across India. If you run a neighborhood store customers already trust, listing is free on our starter program. Register your shop and we’ll help you go live.",
      },
      {
        type: "h2",
        text: "About Priya Sharma",
      },
      {
        type: "p",
        text: "Priya has run Gulmohar Flowers in Pune since 2014. She specializes in wedding season décor, festival garlands, and last-minute bouquet requests. When she’s not arranging marigolds, she trains part-time staff from her community on customer service and inventory basics.",
      },
    ],
  },
  {
    slug: "vocal-for-local-transforming-neighborhood-commerce",
    category: "Vocal For Local",
    title: "Vocal for Local: How VoLoMart is Transforming Neighborhood Commerce",
    excerpt:
      "Discover how VoLoMart's hyperlocal platform is empowering local vendors and creating stronger communities through digital innovation and traditional values.",
    author: "VoLoMart Team",
    date: "March 28, 2026",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
    relatedSlugs: ["community-first-neighborhood-bonds", "neighborhood-vendors-heart-of-local-commerce"],
    tldr: [
      "India’s Vocal for Local movement is strongest when technology meets existing neighborhood trust.",
      "VoLoMart connects kirana, produce, dairy, and specialty sellers with buyers who want local, not generic.",
      "The platform keeps margins with vendors while making discovery and ordering as easy as any national app.",
    ],
    blocks: [
      {
        type: "h2",
        text: "Why local still wins",
      },
      {
        type: "p",
        text: "Customers choose neighborhood shops for freshness, flexibility, and relationships. VoLoMart doesn’t ask vendors to become warehouses. It gives them digital shelf space, order tools, and delivery support that respect how they already operate.",
      },
      {
        type: "ul",
        items: [
          "List your real catalog with photos and honest stock.",
          "Serve buyers within roughly 3 km who value proximity.",
          "Keep the personal touch. Note substitutions clearly on each order.",
          "Grow repeat business without expensive ad spends.",
        ],
      },
      {
        type: "h2",
        text: "Built for Indian neighborhoods",
      },
      {
        type: "p",
        text: "From festival spikes to daily milk runs, VoLoMart’s flows mirror how Indian households actually shop: mixed baskets, urgent top-ups, and trusted names on the corner. That’s Vocal for Local in practice, not a slogan on a billboard.",
      },
    ],
  },
  {
    slug: "digital-india-bridging-the-digital-divide",
    category: "Digital India",
    title: "Digital India: VoLoMart's Role in Bridging the Digital Divide",
    excerpt:
      "How VoLoMart is contributing to India's digital transformation by making technology accessible to local vendors and empowering them with digital tools.",
    author: "VoLoMart Team",
    date: "March 22, 2026",
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    relatedSlugs: ["digital-payments-secure-solutions", "traditional-to-digital-vendor-success-stories"],
    tldr: [
      "Millions of small shops are still offline-first, not because they resist tech, but because tools weren’t built for them.",
      "VoLoMart offers simple onboarding, regional language support, and phone-first workflows.",
      "Digital payments and order history help vendors access credit and plan inventory with confidence.",
    ],
    blocks: [
      {
        type: "h2",
        text: "Access without complexity",
      },
      {
        type: "p",
        text: "Digital India succeeds when a shopkeeper can go live in an afternoon. VoLoMart strips away unnecessary dashboards: register, add products, set hours, and start receiving orders from nearby customers.",
      },
      {
        type: "h2",
        text: "Payments that build trust",
      },
      {
        type: "p",
        text: "UPI and card checkout reduce cash handling and disputed totals. Vendors see settlement status in one place; customers get receipts automatically. That transparency is how informal excellence becomes formal growth.",
      },
    ],
  },
  {
    slug: "smart-shopping-intelligent-features",
    category: "Smart Shopping",
    title: "Smart Shopping Made Simple: VoLoMart's Intelligent Features",
    excerpt:
      "Explore how VoLoMart's smart shopping features like recommendations, quick reorder, and inventory signals are revolutionizing local commerce.",
    author: "VoLoMart Team",
    date: "March 18, 2026",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    relatedSlugs: ["smart-inventory-management-vendors"],
    tldr: [
      "Smart shopping isn’t about algorithms replacing shopkeepers. It’s about helping buyers decide faster.",
      "VoLoMart surfaces nearby sellers, popular bundles, and occasion-based picks.",
      "Vendors benefit from clearer demand signals and fewer abandoned carts.",
    ],
    blocks: [
      {
        type: "h2",
        text: "Discovery that feels local",
      },
      {
        type: "p",
        text: "Search and category browsing prioritize distance and ratings from real neighbors, not anonymous warehouses thousands of kilometers away. Buyers see what’s in stock today, not what was in stock last month.",
      },
      {
        type: "h2",
        text: "Reorder in seconds",
      },
      {
        type: "p",
        text: "Weekly vegetable runs and monthly pantry refills become one-tap reorders from the same vendor. That habit loop rewards shops that consistently deliver quality.",
      },
    ],
  },
  {
    slug: "neighborhood-vendors-heart-of-local-commerce",
    category: "Neighborhood Vendor",
    title: "Neighborhood Vendors: The Heart of Local Commerce",
    excerpt:
      "Celebrating the vendors who form the backbone of communities and how VoLoMart supports their growth.",
    author: "VoLoMart Team",
    date: "March 12, 2026",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    relatedSlugs: ["priya-sharma-flower-shop-hyperlocal-success", "building-trust-in-digital-commerce"],
    tldr: [
      "Kirana, florists, dairy counters, and produce sellers keep cities fed and connected.",
      "VoLoMart is designed around their constraints: thin margins, small teams, variable supply.",
      "When vendors win, neighborhoods keep character and choice.",
    ],
    blocks: [
      {
        type: "p",
        text: "Every city block has names customers remember: the uncle who saves the last loaf, the auntie who always has ripe mangoes. VoLoMart exists so those relationships scale beyond the sidewalk.",
      },
      {
        type: "quote",
        text: "We are not trying to replace the corner store. We are trying to make sure it’s still there in ten years.",
        attribution: "VoLoMart product team",
      },
    ],
  },
  {
    slug: "traditional-to-digital-vendor-success-stories",
    category: "Stories",
    title: "From Traditional to Digital: Success Stories of VoLoMart Vendors",
    excerpt:
      "Real stories of how local vendors transformed their businesses using VoLoMart's platform.",
    author: "VoLoMart Team",
    date: "March 5, 2026",
    readTime: "9 min read",
    coverImage: "https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=1200&q=80",
    relatedSlugs: ["priya-sharma-flower-shop-hyperlocal-success", "digital-india-bridging-the-digital-divide"],
    tldr: [
      "Dozens of vendors across grocery, produce, dairy, and flowers report higher repeat rates after listing.",
      "Common thread: simple catalog setup, honest delivery windows, and clear order notes for substitutions.",
      "Digital doesn’t mean impersonal. The best shops keep their voice on every order.",
    ],
    blocks: [
      {
        type: "h2",
        text: "Patterns we see in growing shops",
      },
      {
        type: "ul",
        items: [
          "Clear photos and weights reduce returns.",
          "Consistent morning delivery builds weekday habit.",
          "Owners who confirm orders quickly earn loyalty.",
          "Festival menus published early capture pre-orders.",
        ],
      },
      {
        type: "p",
        text: "Read Priya Sharma’s full story for a detailed look at how one florist tripled weekday orders in eight weeks.",
      },
    ],
  },
  {
    slug: "digital-payments-secure-solutions",
    category: "Digital India",
    title: "Digital Payments and Local Vendors: VoLoMart's Secure Solutions",
    excerpt:
      "How VoLoMart's secure digital payment system helps local vendors accept modern payment methods while maintaining trust.",
    author: "VoLoMart Team",
    date: "February 28, 2026",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    relatedSlugs: ["digital-india-bridging-the-digital-divide"],
    tldr: [
      "Cash isn’t going away overnight, but mixed payment options grow average ticket size.",
      "VoLoMart integrates UPI and cards with clear settlement tracking for vendors.",
      "Customers get instant receipts; disputes drop when expectations are set upfront.",
    ],
    blocks: [
      {
        type: "p",
        text: "Security and simplicity go together. Vendors shouldn’t need a finance degree to understand when money arrives. Our dashboard shows pending, completed, and refunded transactions in plain language.",
      },
    ],
  },
  {
    slug: "smart-inventory-management-vendors",
    category: "Smart Shopping",
    title: "Smart Inventory Management: Helping Vendors Stay Stocked",
    excerpt:
      "VoLoMart's inventory tools help local vendors optimize stock levels, reduce waste, and never run out of popular items.",
    author: "VoLoMart Team",
    date: "February 20, 2026",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    relatedSlugs: ["smart-shopping-intelligent-features"],
    tldr: [
      "Mark items out of stock in seconds so you avoid angry customers at the door.",
      "Order history highlights what to prep before rush hour.",
      "Less waste on perishables means better margins for produce and dairy sellers.",
    ],
    blocks: [
      {
        type: "p",
        text: "Inventory on VoLoMart is vendor-controlled. Toggle availability from your phone between customers. Over time, patterns in your orders suggest which SKUs deserve shelf space on busy days.",
      },
    ],
  },
  {
    slug: "building-trust-in-digital-commerce",
    category: "Neighborhood Vendor",
    title: "Building Trust in Digital Commerce: VoLoMart's Quality Assurance",
    excerpt:
      "How VoLoMart maintains the personal touch of traditional shopping while ensuring quality and reliability online.",
    author: "VoLoMart Team",
    date: "February 14, 2026",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    relatedSlugs: ["neighborhood-vendors-heart-of-local-commerce"],
    tldr: [
      "Ratings, order tracking, and support channels keep standards visible.",
      "Vendors with consistent quality rise in local discovery.",
      "Buyers see product details before checkout, just like asking across the counter.",
    ],
    blocks: [
      {
        type: "p",
        text: "Trust is local. VoLoMart combines transparent reviews with human support when something goes wrong, because one bad experience shouldn’t define an entire market lane.",
      },
    ],
  },
  {
    slug: "community-first-neighborhood-bonds",
    category: "Vocal For Local",
    title: "Community First: How VoLoMart Strengthens Neighborhood Bonds",
    excerpt:
      "Beyond commerce, VoLoMart creates stronger communities by connecting neighbors with local vendors.",
    author: "VoLoMart Team",
    date: "February 8, 2026",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    relatedSlugs: ["vocal-for-local-transforming-neighborhood-commerce"],
    tldr: [
      "Commerce is a social act built on familiar faces, festival orders, and shared recommendations.",
      "VoLoMart amplifies word of mouth with shareable shop pages and repeat rewards.",
      "Stronger neighborhoods mean more resilient local economies.",
    ],
    blocks: [
      {
        type: "p",
        text: "When you order from VoLoMart, you’re often funding the same businesses that sponsor school events and hire from the block. That loop matters, and it’s why we built for hyperlocal first.",
      },
    ],
  },
  {
    slug: "volomart-android-app-launch",
    category: "Updates",
    title: "The VoLoMart app is here for buyers and vendors",
    excerpt:
      "Order from trusted neighborhood shops and manage your catalog from one app. Now rolling out on Android with iOS coming soon.",
    author: "VoLoMart Team",
    date: "May 10, 2026",
    readTime: "4 min read",
    coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    relatedSlugs: ["smart-shopping-intelligent-features"],
    tldr: [
      "Browse nearby vendors and track deliveries in one place.",
      "Vendors get order alerts, catalog edits, and payout visibility on mobile.",
      "Register your shop free on our starter onboarding program.",
    ],
    blocks: [
      {
        type: "p",
        text: "We’ve listened to early vendors who asked for faster notifications and simpler photo uploads. The latest app build focuses on speed on mid-range phones and clearer order states from placed to delivered.",
      },
      {
        type: "p",
        text: "If you haven’t listed yet, start at volomart.in/register. We’ll walk you through catalog setup and your first test order.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const slugs = post.relatedSlugs ?? [];
  const related = slugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter((p): p is BlogPost => Boolean(p));
  if (related.length >= limit) return related.slice(0, limit);
  const rest = blogPosts.filter((p) => p.slug !== post.slug && !slugs.includes(p.slug));
  return [...related, ...rest].slice(0, limit);
}

export function filterPostsByCategory(category: string): BlogPost[] {
  if (category === "Latest") return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}
