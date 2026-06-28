import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { siteContainerClass } from "@/content/site-nav";

export default function BlogHubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#21153a]">
      <SiteHeader />
      <main className="flex-1 pt-16">
        <div className={siteContainerClass}>{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
