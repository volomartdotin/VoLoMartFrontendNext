import { benefits } from "@/content/vendor";

export function Benefits() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Everything you need to run local without the chaos
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <article
              key={b.title}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm transition hover:border-brand/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                  <path
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
