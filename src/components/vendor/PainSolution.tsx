import { painSolution } from "@/content/vendor";

export function PainSolution() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {painSolution.title}
      </h2>
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">Sound familiar?</p>
          <ul className="mt-6 space-y-6">
            {painSolution.pains.map((p) => (
              <li key={p.title}>
                <p className="font-semibold text-foreground">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-brand/20 bg-brand-light/40 p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-dark">How VoLo helps</p>
          <ul className="mt-6 space-y-6">
            {painSolution.solutions.map((s) => (
              <li key={s.title}>
                <p className="font-semibold text-foreground">{s.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
