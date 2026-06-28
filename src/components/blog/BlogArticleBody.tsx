import type { BlogBlock } from "@/content/blogs";

export function BlogArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="text-lg font-semibold text-foreground">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-base leading-relaxed text-muted">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-brand pl-5 text-base italic leading-relaxed text-foreground"
              >
                <p>&ldquo;{block.text}&rdquo;</p>
                {block.attribution ? (
                  <footer className="mt-3 text-sm font-medium not-italic text-muted">— {block.attribution}</footer>
                ) : null}
              </blockquote>
            );
          case "img":
            return (
              <figure key={i} className="overflow-hidden rounded-2xl">
                <img src={block.src} alt={block.alt} className="w-full object-cover" />
                {block.caption ? (
                  <figcaption className="mt-2 text-center text-sm text-muted">{block.caption}</figcaption>
                ) : null}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
