import type { MetadataRoute } from "next";

const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.volomart.in").replace(/\/$/, "");

const disallow = ["/api/", "/_next/static/", "/_next/data/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      // Explicitly welcome AI / answer-engine crawlers (GEO).
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
