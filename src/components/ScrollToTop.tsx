"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackPageView } from "@/lib/analytics/track";

/**
 * Forces an instant scroll-to-top on route changes. The global
 * `scroll-behavior: smooth` (used for in-page anchor links) otherwise prevents
 * the App Router from resetting scroll position when navigating between pages.
 * Hash navigations are left untouched so anchor links still scroll smoothly.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
