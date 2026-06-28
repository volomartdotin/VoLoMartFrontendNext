import { categories } from "@/content/vendor";

export function Categories() {
  return (
    <section id="categories" className="border-t border-border bg-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Categories we love to onboard</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
          If you serve the neighborhood with freshness and speed, there’s likely a place for you on VoLo Mart.
        </p>
        <ul className="mt-10 flex flex-wrap gap-3">
          {categories.map((c) => (
            <li
              key={c}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
