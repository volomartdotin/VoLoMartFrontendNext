import Link from "next/link";
import type { BlogPost } from "@/content/blogs";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 border-t border-border pt-12">
      <h2 className="text-xl font-semibold text-foreground">Related articles</h2>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog-hub/${post.slug}`}
              className="group block overflow-hidden rounded-xl border border-border bg-card transition hover:border-brand/40"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.coverImage}
                  alt=""
                  className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold text-brand">{post.category}</p>
                <p className="mt-1 text-sm font-semibold leading-snug text-foreground group-hover:text-brand">
                  {post.title}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
