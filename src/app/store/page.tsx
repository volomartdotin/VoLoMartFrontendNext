"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { appStoreUrl, playStoreUrl } from "@/lib/app-store-redirect";

function isIos(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function StoreRedirectInner() {
  const searchParams = useSearchParams();
  const storeId = (searchParams.get("id") || searchParams.get("storeId") || "")
    .trim();

  useEffect(() => {
    const target = isIos()
      ? appStoreUrl()
      : playStoreUrl(storeId || undefined);
    window.location.replace(target);
  }, [storeId]);

  return <p>Opening VoLoMart…</p>;
}

/**
 * Instant client redirect to Play / App Store.
 * Static export cannot pre-render every /store/{id}, so share links use:
 *   https://www.volomart.in/store/?id={storeId}
 */
export default function StoreRedirectPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        color: "#333",
      }}
    >
      <Suspense fallback={<p>Opening VoLoMart…</p>}>
        <StoreRedirectInner />
      </Suspense>
    </main>
  );
}
