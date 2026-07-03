import { site } from "@/content/vendor";

type Props = {
  variant?: "hero" | "light";
  className?: string;
};

export function BrandTagline({ variant = "hero", className = "" }: Props) {
  const isHero = variant === "hero";

  return (
    <div
      className={`tagline-enter ${className}`}
      role="doc-subtitle"
      aria-label={`${site.taglineHiRoman}, ${site.taglineHi}`}
    >
      <p
        className={`font-devanagari text-xl font-semibold leading-snug sm:text-2xl md:text-[1.75rem] ${
          isHero ? "text-white" : "text-[#1E1533]"
        }`}
      >
        हर लोकल वेंडर की{" "}
        <span className={`tagline-highlight${isHero ? " tagline-highlight-hero" : ""}`}>डिजिटल दुकान</span>
      </p>
      <p
        className={`tagline-sub mt-2 text-xs font-medium uppercase tracking-[0.2em] sm:text-sm ${
          isHero ? "text-white/75" : "text-[#6B6278]"
        }`}
      >
        {site.taglineHiRoman}
      </p>
    </div>
  );
}
