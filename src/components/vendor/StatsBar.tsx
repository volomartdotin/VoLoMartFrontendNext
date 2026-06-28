import { stats } from "@/content/vendor";

export function StatsBar() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <p className="text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
