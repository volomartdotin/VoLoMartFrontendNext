import { testimonial } from "@/content/vendor";

export function Testimonial() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <figure className="rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
        <blockquote className="text-lg leading-relaxed text-foreground sm:text-xl">
          “{testimonial.quote}”
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3 text-sm">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/15 text-sm font-semibold text-brand">
            {testimonial.name.charAt(0)}
          </span>
          <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-muted">{testimonial.role}</p>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
