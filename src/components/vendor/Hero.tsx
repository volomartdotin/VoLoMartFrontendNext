import Link from "next/link";
import { hero, site } from "@/content/vendor";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-brand-light/60 to-background">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(12,107,82,0.2) 0%, transparent 45%),
            radial-gradient(circle at 80% 0%, rgba(196,92,38,0.12) 0%, transparent 40%)`,
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
            {hero.badge}
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {hero.title}
          </h1>
          <p className="mt-3 text-lg font-medium text-brand-dark font-devanagari">{site.taglineHi}</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{hero.subtitle}</p>
          <ul className="mt-8 space-y-3 text-sm text-foreground sm:text-base">
            {hero.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M2.5 6l2.5 2.5L9.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={hero.primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-dark"
            >
              {hero.primaryCta}
            </Link>
            <Link
              href={hero.secondaryHref}
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:border-brand/40"
            >
              {hero.secondaryCta}
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted">
            Prefer email?{" "}
            <a className="font-medium text-brand hover:underline" href={`mailto:${site.supportEmail}`}>
              {site.supportEmail}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
