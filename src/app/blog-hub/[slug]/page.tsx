import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/content/blogs";
import { BlogArticleBody } from "@/components/blog/BlogArticleBody";
import { BlogTldr } from "@/components/blog/BlogTldr";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/content/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog not found" };
  const canonical = `/blog-hub/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: canonical,
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      section: post.category,
      images: [{ url: post.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);

  return (
    <article className="py-12 lg:py-16">
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog-hub" },
          { name: post.title, path: `/blog-hub/${post.slug}` },
        ])}
      />
      <p className="text-sm font-medium text-brand">
        <Link href="/blog-hub" className="hover:underline">
          All posts
        </Link>
      </p>

      <p className="mt-8 text-sm text-muted">
        Published {post.date} in <span className="font-medium text-foreground">{post.category}</span>
      </p>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
        {post.title}
      </h1>

      <p className="mt-4 text-sm text-muted">
        Author: {post.author} <span aria-hidden>•</span> {post.readTime}
      </p>

      <img
        src={post.coverImage}
        alt=""
        className="mt-10 aspect-[2/1] w-full rounded-2xl object-cover"
      />

      <BlogTldr items={post.tldr} />

      <div className="mt-12">
        <BlogArticleBody blocks={post.blocks} />
      </div>

      <section className="mt-14 rounded-2xl bg-brand-light/60 px-6 py-8 text-center sm:px-10">
        <h2 className="text-lg font-semibold text-foreground">List your neighborhood shop on VoLo Mart</h2>
        <p className="mt-2 text-sm text-muted">
          Free starter onboarding for qualifying vendors. Reach nearby buyers who want local.
        </p>
        <Link
          href="/#download-app"
          className="mt-5 inline-flex rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          Register your shop
        </Link>
      </section>

      <RelatedPosts posts={related} />

      <p className="mt-12 border-t border-border pt-8 text-center text-xs text-muted">{post.readTime}</p>
    </article>
  );
}
