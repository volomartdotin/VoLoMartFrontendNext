"use client";

import { useState, useEffect, useRef } from "react";

export type TestimonialPerson = {
  name: string;
  role: string;
  quote: string;
  img: string;
};

export function TestimonialsCarousel({ people }: { people: readonly TestimonialPerson[] }) {
  const [active, setActive] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActive((prev) => (prev + 1) % people.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActive((prev) => (prev - 1 + people.length) % people.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const goToIndex = (idx: number) => {
    if (isTransitioning || idx === active) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActive(idx);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const startAutoScroll = () => {
    if (intervalRef.current) return;
    
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setActive((prev) => (prev + 1) % people.length);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 300);
    }, 4500);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [people.length]);

  const offsets = [-2, -1, 0, 1, 2];
  const current = people[active] ?? people[0];

  return (
    <div
      ref={containerRef}
      className="w-full"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <div className="flex items-center justify-center gap-2 sm:gap-6 md:gap-10">
        <button
          type="button"
          onClick={goToPrev}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F5F0] text-[#8BC34A] shadow-sm transition hover:bg-[#d7ebe4]"
          aria-label="Previous testimonial"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4">
          {offsets.map((offset) => {
            const idx = (active + offset + people.length * 5) % people.length;
            const p = people[idx];
            const isCenter = offset === 0;
            if (!p) return null;
            return (
              <button
                key={`${idx}-${p.name}`}
                type="button"
                onClick={() => goToIndex(idx)}
                className={`relative shrink-0 overflow-hidden rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8BC34A] focus-visible:ring-offset-2 ${
                  isCenter
                    ? "z-10 h-[4.5rem] w-[4.5rem] scale-100 shadow-lg ring-4 ring-[#8BC34A] ring-offset-2 ring-offset-white sm:h-[5.25rem] sm:w-[5.25rem]"
                    : "h-12 w-12 opacity-90 sm:h-14 sm:w-14"
                }`}
                style={
                  isCenter
                    ? {
                        boxShadow: `0 0 0 4px white, 0 0 28px rgba(139, 195, 74, 0.45)`,
                      }
                    : undefined
                }
                aria-label={`Show testimonial from ${p.name}`}
                aria-current={isCenter ? "true" : undefined}
              >
                <img src={p.img} alt="" className="h-full w-full object-cover" />
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={goToNext}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F5F0] text-[#8BC34A] shadow-sm transition hover:bg-[#d7ebe4]"
          aria-label="Next testimonial"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div
        className={`relative mx-auto mt-10 max-w-2xl px-4 text-center transition-all duration-300 ease-in-out ${
          isTransitioning ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <p className="text-lg font-bold text-[#1E1533]">{current.name}</p>
        <p className="mt-1 text-sm text-[#8A8499]">{current.role}</p>
        <div className="mt-3 flex justify-center gap-0.5 text-[#E8B923]" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} aria-hidden>
              ★
            </span>
          ))}
        </div>
        <div className="relative mt-8">
          <span
            className="pointer-events-none absolute -left-2 top-0 select-none font-serif text-[5rem] leading-none text-[#E8E6EC] sm:text-[6.5rem]"
            aria-hidden
          >
            &ldquo;
          </span>
          <p className="relative z-[1] px-6 text-sm italic leading-relaxed text-[#8A8499] sm:text-base">{current.quote}</p>
          <span
            className="pointer-events-none absolute -right-2 bottom-0 select-none font-serif text-[5rem] leading-none text-[#E8E6EC] sm:text-[6.5rem]"
            aria-hidden
          >
            &rdquo;
          </span>
        </div>
      </div>
    </div>
  );
}
