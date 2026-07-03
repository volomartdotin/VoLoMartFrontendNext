"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnalyticsEvents } from "@/lib/analytics/events";
import { trackClick } from "@/lib/analytics/track";
import { mainNavLinks } from "@/content/site-nav";
import { EarlyAccessTrigger } from "@/components/early-access/EarlyAccessTrigger";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (label: string, href: string) => {
    trackClick(AnalyticsEvents.headerNavClick, pathname, { label, href });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white backdrop-blur-sm">
      <div className="flex w-full items-center gap-4 px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-start">
          <Link href="/" className="flex items-center gap-2.5 text-[#1E1533]">
            <img src="/volo-mart-logo.png" alt="VoLo Mart logo" className="h-10 w-10 object-cover" />
            <span className="text-lg font-bold tracking-tight">VoLo Mart</span>
          </Link>
        </div>

        <nav className="hidden flex-none justify-center lg:flex" aria-label="Main">
          <ul className="flex items-center gap-8 text-sm font-medium text-[#3D3550]">
            {mainNavLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-[#8BC34A]" onClick={() => handleNavClick(item.label, item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3">
          <EarlyAccessTrigger
            trigger="header-desktop"
            onClick={() => handleNavClick("Get the App", "early-access")}
            className="hidden rounded-full bg-[#8BC34A] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#74A73D] sm:inline-flex"
          >
            Get the App
          </EarlyAccessTrigger>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E8E4] bg-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg className="h-5 w-5 text-[#3D3550]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5 text-[#3D3550]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-[#E2E8E4] bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {mainNavLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#3D3550] transition hover:bg-[#F3F2F6]"
                onClick={() => {
                  handleNavClick(item.label, item.href);
                  setOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}
            <EarlyAccessTrigger
              trigger="header-mobile"
              onClick={() => {
                handleNavClick("Get the App", "early-access");
                setOpen(false);
              }}
              className="mt-3 w-full rounded-full bg-[#8BC34A] py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-[#74A73D]"
            >
              Get the App
            </EarlyAccessTrigger>
          </nav>
        </div>
      )}
    </header>
  );
}
