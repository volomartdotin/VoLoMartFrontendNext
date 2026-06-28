"use client";

import { useSearchParams } from "next/navigation";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { siteContainerClass } from "@/content/site-nav";
import { isMobilePlatformSearch } from "@/lib/mobile-platform";

export function LegalLayoutShell({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const isMobileEmbed = isMobilePlatformSearch(searchParams);

  return (
    <div className="flex min-h-full flex-col bg-white text-[#21153a]">
      {!isMobileEmbed && <SiteHeader />}
      <main className={`flex-1 ${isMobileEmbed ? "" : "pt-16"}`}>
        <div className={siteContainerClass}>{children}</div>
      </main>
      {!isMobileEmbed && <SiteFooter />}
    </div>
  );
}
