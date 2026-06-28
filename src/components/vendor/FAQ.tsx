import { faq } from "@/content/vendor";

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border bg-card">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Vendor questions, answered
        </h2>
        <p className="mt-3 text-muted">Straight talk for shop owners evaluating a new channel.</p>
        <div className="mt-10 space-y-4">
          {faq.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-border bg-background px-5 py-4 open:border-brand/25 open:shadow-sm"
            >
              <summary className="cursor-pointer list-none font-medium text-foreground [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-muted transition group-open:rotate-180" aria-hidden>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
