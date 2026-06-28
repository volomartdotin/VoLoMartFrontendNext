"use client";

import { useState } from "react";

export function FaqItem({ question, answer, defaultOpen }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <details
      className="group overflow-hidden rounded-2xl bg-[#EBE8EF] transition-[background-color,box-shadow] open:bg-[#8bc34a] open:shadow-lg"
      open={open}
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-[#1E1533] marker:hidden group-open:text-white [&::-webkit-details-marker]:hidden">
        <span className="pr-2">{question}</span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDD9E6] text-[#3d3550] group-open:hidden">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
        <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white group-open:flex">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
        </span>
      </summary>
      <p className="border-t border-transparent px-5 pb-5 pt-1 text-sm leading-relaxed text-[#5c5470] group-open:border-white/20 group-open:text-white/95">
        {answer}
      </p>
    </details>
  );
}
