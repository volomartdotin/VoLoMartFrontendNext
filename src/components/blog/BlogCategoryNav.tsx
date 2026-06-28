"use client";

import { blogCategories } from "@/content/blogs";

type Props = {
  active: string;
  onChange: (category: string) => void;
};

export function BlogCategoryNav({ active, onChange }: Props) {
  return (
    <nav className="flex flex-wrap gap-2" aria-label="Blog categories">
      {blogCategories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              isActive
                ? "bg-foreground text-background"
                : "bg-card text-muted ring-1 ring-border hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </nav>
  );
}
