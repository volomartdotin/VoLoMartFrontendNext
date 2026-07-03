"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnalyticsEvents } from "@/lib/analytics/events";
import { trackClick } from "@/lib/analytics/track";
import { legalNavLinks, mainNavLinks } from "@/content/site-nav";
import { EarlyAccessTrigger } from "@/components/early-access/EarlyAccessTrigger";
import { SubscribeForm } from "@/components/forms/SubscribeForm";

export function SiteFooter() {
  const pathname = usePathname();

  const handleFooterClick = (label: string, href: string) => {
    trackClick(AnalyticsEvents.footerLinkClick, pathname, { label, href });
  };
  return (
    <section
      className="text-[#c9c5d4]"
      style={{ background: "linear-gradient(to bottom, #F3F2F6 0 24%, #1B1C21 24% 100%)" }}
    >
      <div className="mx-auto max-w-6xl px-4 pb-4 pt-0 lg:px-6">
        <div
          id="download-app"
          className="relative z-20 rounded-[1.15rem] px-6 py-10 text-center text-white shadow-[0_24px_60px_-32px_rgba(0,0,0,0.7)] md:px-12 md:py-11"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(180deg, #8BC34A 0%, #8BC34A 100%)",
            backgroundSize: "42px 42px, 42px 42px, 100% 100%",
          }}
        >
          <p className="text-sm font-medium text-white/90">We&apos;re launching soon</p>
          <h2 className="mt-2 text-[2.1rem] font-extrabold leading-none tracking-tight md:text-[2.55rem]">
            Join Early Access
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-white/80 md:text-sm">
            Sign up as a customer or vendor and be the first to know when VoLo Mart goes live.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            <EarlyAccessTrigger
              trigger="footer-android"
              className="inline-flex rounded-md border border-white/20 bg-black px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-white/80 transition hover:bg-white/10"
            >
              Get it on Google Play
            </EarlyAccessTrigger>
            <EarlyAccessTrigger
              trigger="footer-ios"
              className="inline-flex rounded-md border border-white/20 bg-black px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-white/80 transition hover:bg-white/10"
            >
              Download on the App Store
            </EarlyAccessTrigger>
          </div>
        </div>
      </div>

      <footer className="pt-8">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-6">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 text-white">
              <img src="/volo-mart-logo.png" alt="VoLo Mart logo" className="h-10 w-10 object-cover" />
              <span className="text-lg font-bold tracking-tight">VoLo Mart</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#9e97ab]">
              Hyperlocal marketplace connecting customers with trusted nearby vendors for faster delivery and better
              service.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href="https://facebook.com/volomart"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2a2834] text-[#d7d3de] ring-1 ring-white/5 transition hover:bg-[#8BC34A] hover:text-white"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/volomart.in"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2a2834] text-[#d7d3de] ring-1 ring-white/5 transition hover:bg-[#8BC34A] hover:text-white"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@volomart"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2a2834] text-[#d7d3de] ring-1 ring-white/5 transition hover:bg-[#8BC34A] hover:text-white"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://x.com/volomartin"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2a2834] text-[#d7d3de] ring-1 ring-white/5 transition hover:bg-[#8BC34A] hover:text-white"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/volomart"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2a2834] text-[#d7d3de] ring-1 ring-white/5 transition hover:bg-[#8BC34A] hover:text-white"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-white">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {mainNavLinks
                .filter((item) => item.label !== "Contact")
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[#b8b2c4] transition hover:text-white" onClick={() => handleFooterClick(item.label, item.href)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div id="contact">
            <p className="text-sm font-bold text-white">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-[#b8b2c4]">
              <li>
                <a href="https://volomart.in/" target="_blank" rel="noreferrer" className="hover:text-white">
                  www.volomart.in
                </a>
              </li>
              <li>
                <a href="mailto:support@volomart.in" className="hover:text-white">
                  support@volomart.in
                </a>
              </li>
              <li>
                <span>24/7 Support</span>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-bold text-white">Subscribe</p>
            <p className="mt-3 text-sm text-[#b8b2c4]">Get latest updates and offers from VoLo Mart.</p>
            <SubscribeForm />
          </div>
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-3 border-t border-white/10 px-4 py-5 text-xs text-[#a5a0b1] sm:flex-row sm:items-center sm:justify-between lg:px-6">
          <p>Copyright © 2026 VoLo Mart. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-2">
            {legalNavLinks.map((item, index) => (
              <span key={item.href} className="flex items-center gap-2">
                {index > 0 ? <span>|</span> : null}
                <Link href={item.href} className="hover:text-white" onClick={() => handleFooterClick(item.label, item.href)}>
                  {item.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}
