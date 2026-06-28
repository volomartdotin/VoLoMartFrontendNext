import type { Metadata } from "next";
import { BlogListClient } from "@/components/blog/BlogListClient";

const blogDescription =
  "Stories, updates, and insights from the VoLo Mart team on hyperlocal commerce in India.";

export const metadata: Metadata = {
  title: "Blog",
  description: blogDescription,
  alternates: { canonical: "/blog-hub" },
  openGraph: {
    type: "website",
    title: "VoLo Mart Blog",
    description: blogDescription,
    url: "/blog-hub",
  },
};

export default function BlogHubPage() {
  return (
    <div className="py-12 lg:py-16">
      <BlogListClient />
    </div>
  );
}
