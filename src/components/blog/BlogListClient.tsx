"use client";

import { useMemo, useState } from "react";
import { filterPostsByCategory } from "@/content/blogs";
import { BlogCategoryNav } from "@/components/blog/BlogCategoryNav";
import { BlogPostCard } from "@/components/blog/BlogPostCard";

export function BlogListClient() {
  const [category, setCategory] = useState("Latest");
  const posts = useMemo(() => filterPostsByCategory(category), [category]);

  return (
    <>
      <BlogCategoryNav active={category} onChange={setCategory} />
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
      {posts.length === 0 ? (
        <p className="mt-10 text-center text-sm text-muted">No posts in this category yet.</p>
      ) : null}
    </>
  );
}
