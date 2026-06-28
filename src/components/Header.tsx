"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { nav } from "@/content/vendor";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
          >
            Register shop
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-border bg-card p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-1 text-sm font-medium text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="py-1 text-sm font-medium text-foreground"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/register"
              className="mt-2 rounded-full bg-brand py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Register shop
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
