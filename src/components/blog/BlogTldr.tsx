type BlogTldrProps = {
  items: string[];
  variant?: "card" | "article";
};

export function BlogTldr({ items, variant = "article" }: BlogTldrProps) {
  if (items.length === 0) return null;

  if (variant === "card") {
    return (
      <div className="mt-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-foreground">TL;DR</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted">
          {items.map((item, i) => (
            <li key={i} className="line-clamp-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <section className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-foreground">TL;DR</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
