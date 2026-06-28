import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/content/vendor";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Hyperlocal marketplace helping neighborhood vendors grow with structured orders, chat, and local
              discovery.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Vendors</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/register" className="text-foreground hover:text-brand">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/#how" className="text-foreground hover:text-brand">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-foreground hover:text-brand">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Company</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/blog-hub" className="text-foreground hover:text-brand">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-foreground hover:text-brand">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-foreground hover:text-brand">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-foreground hover:text-brand">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Support</p>
              <a href={`mailto:${site.supportEmail}`} className="mt-3 block text-sm text-brand hover:underline">
                {site.supportEmail}
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-border pt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
