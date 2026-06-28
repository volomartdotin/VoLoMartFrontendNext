import Link from "next/link";
import { site } from "@/content/vendor";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 font-semibold tracking-tight text-foreground ${className}`}
    >
      <img src="/volo-mart-logo.png" alt="VoLo Mart logo" className="h-9 w-9 rounded-xl object-cover shadow-sm" />
      <span>{site.name}</span>
    </Link>
  );
}
