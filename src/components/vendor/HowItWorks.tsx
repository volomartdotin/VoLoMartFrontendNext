import Link from "next/link";
import { howItWorks } from "@/content/vendor";

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How onboarding works</h2>
          <p className="mt-3 max-w-xl text-muted">
            We keep it practical: start small with your bestsellers, then expand as you get comfortable.
          </p>
        </div>
        <Link
          href="/register"
          className="shrink-0 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark"
        >
          Start registration
        </Link>
      </div>
      <ol className="mt-12 grid gap-6 lg:grid-cols-3">
        {howItWorks.map((step, i) => (
          <li
            key={step.step}
            className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">Step {i + 1}</span>
            <p className="mt-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
              {step.step}
            </p>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
