export const blogCategories = [
  "Latest",
  "Stories",
  "Vocal For Local",
  "Digital India",
  "Smart Shopping",
  "Neighborhood Vendor",
  "Updates",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "img"; src: string; alt: string; caption?: string };

export type BlogPost = {
  slug: string;
  category: Exclude<BlogCategory, "Latest">;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  tldr: string[];
  blocks: BlogBlock[];
  relatedSlugs?: string[];
};
