import { site } from "@/content/vendor";
import type { BlogPost } from "@/content/blogs";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? site.url).replace(/\/$/, "");

/** Absolute URL helper for canonical / schema fields. */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

const logoUrl = absoluteUrl("/volo-mart-logo.png");

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: site.name,
  url: siteUrl,
  logo: logoUrl,
  email: site.supportEmail,
  description:
    "VoLo Mart is a hyperlocal marketplace that helps neighborhood vendors get discovered by nearby customers, manage orders, and fulfil fast local deliveries.",
  sameAs: [
    "https://facebook.com/volomart",
    "https://instagram.com/volomart.in",
    "https://youtube.com/@volomart",
    "https://x.com/volomartin",
    "https://linkedin.com/company/volomart",
  ],
} as const;

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: site.name,
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en-IN",
} as const;

/** Marketing app/service description — answer engines surface this for "what is X" queries. */
export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: `${site.name} App`,
  applicationCategory: "ShoppingApplication",
  operatingSystem: "Android, iOS",
  url: siteUrl,
  image: absoluteUrl("/volo-mart-logo.png"),
  description:
    "Shop daily essentials from nearby vendors and get faster local delivery with VoLo Mart—India's hyperlocal marketplace for grocery, vegetables, fruit, dairy, namkeen, and flowers.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  publisher: { "@id": `${siteUrl}/#organization` },
} as const;

export function faqSchema(items: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(crumbs: ReadonlyArray<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function articleSchema(post: BlogPost) {
  const url = absoluteUrl(`/blog-hub/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    articleSection: post.category,
    author: { "@type": "Organization", name: post.author, url: siteUrl },
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}
