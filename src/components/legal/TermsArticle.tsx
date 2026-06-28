import type { TermsOfServicePage } from "@/content/terms-of-service";
import { BlogArticleBody } from "@/components/blog/BlogArticleBody";
import { BlogTldr } from "@/components/blog/BlogTldr";

export function TermsArticle({ terms }: { terms: TermsOfServicePage }) {
  return (
    <article className="py-12 lg:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
        {terms.title}
      </h1>

      <p className="mt-4 text-base leading-relaxed text-muted">{terms.subtitle}</p>

      <BlogTldr items={terms.tldr} />

      <img
        src={terms.coverImage}
        alt=""
        className="mt-10 aspect-[2/1] w-full rounded-2xl object-cover"
      />

      <div className="mt-12">
        <BlogArticleBody blocks={terms.blocks} />
      </div>
    </article>
  );
}
