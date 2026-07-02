import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blogs";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.volomart.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const root = base.replace(/\/$/, "");
  const now = new Date();
  const staticPaths = [
    "",
    "/register",
    "/pricing",
    "/contact",
    "/blog-hub",
    "/privacy",
    "/terms",
    "/privacy-policy-customers",
    "/privacy-policy-vendors",
    "/terms-of-service-customers",
    "/terms-of-service-vendors",
  ];
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${root}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/blog-hub" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/blog-hub" ? 0.8 : 0.7,
  }));
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${root}/blog-hub/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...staticEntries, ...blogEntries];
}
