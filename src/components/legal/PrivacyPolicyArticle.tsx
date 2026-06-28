import type { PrivacyPolicyPage } from "@/content/privacy-policies";
import { BlogArticleBody } from "@/components/blog/BlogArticleBody";
import { BlogTldr } from "@/components/blog/BlogTldr";

export function PrivacyPolicyArticle({ policy }: { policy: PrivacyPolicyPage }) {
  return (
    <article className="py-12 lg:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
        {policy.title}
      </h1>

      <p className="mt-4 text-base leading-relaxed text-muted">{policy.subtitle}</p>

      <BlogTldr items={policy.tldr} />

      <img
        src={policy.coverImage}
        alt=""
        className="mt-10 aspect-[2/1] w-full rounded-2xl object-cover"
      />

      <div className="mt-12">
        <BlogArticleBody blocks={policy.blocks} />
      </div>

    </article>
  );
}
