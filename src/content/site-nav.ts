/** Matches home page section containers (e.g. features, services). */
export const siteContainerClass = "mx-auto w-full max-w-6xl px-4 lg:px-6";

export const mainNavLinks = [
  { label: "Home", href: "/#home" },
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Top Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog-hub" },
  { label: "Contact", href: "/#contact" },
] as const;

/** Standalone marketing pages (terms, privacy, pricing, etc.) */
export const legalNavLinks = [
  { label: "Privacy Policy", href: "/privacy-policy-customers" },
  { label: "Terms of Service", href: "/terms-of-service-customers" },
  { label: "Vendor Pricing", href: "/pricing" },
  { label: "Vendor Privacy", href: "/privacy-policy-vendors" },
  { label: "Vendor Terms", href: "/terms-of-service-vendors" },
] as const;
