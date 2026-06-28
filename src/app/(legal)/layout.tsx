import { Suspense } from "react";
import { LegalLayoutShell } from "@/components/legal/LegalLayoutShell";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-full bg-white" />}>
      <LegalLayoutShell>{children}</LegalLayoutShell>
    </Suspense>
  );
}
