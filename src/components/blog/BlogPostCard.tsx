import Link from "next/link";
import { BlogTldr } from "@/components/blog/BlogTldr";
import type { BlogPost } from "@/content/blogs";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog-hub/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-brand/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      <article className="flex flex-1 flex-col">
        <div className="relative block aspect-[16/10] overflow-hidden bg-brand-light/30">
          <img
            src={post.coverImage}
            alt=""
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand">{post.category}</p>
          <h2 className="mt-2 text-lg font-semibold leading-snug text-foreground transition group-hover:text-brand">
            {post.title}
          </h2>
          <div className="flex-1">
            <BlogTldr items={post.tldr} variant="card" />
          </div>
          <p className="mt-4 text-xs text-muted">
            {post.author} <span aria-hidden>•</span> {post.date}
          </p>
        </div>
      </article>
    </Link>
  );
}
