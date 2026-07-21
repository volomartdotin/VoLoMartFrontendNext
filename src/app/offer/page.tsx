"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { appStoreUrl, playStoreUrlForOffer } from "@/lib/app-store-redirect";

function isIos(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function OfferRedirectInner() {
  const searchParams = useSearchParams();
  const offerId = (
    searchParams.get("id") ||
    searchParams.get("offerId") ||
    searchParams.get("advertisementId") ||
    ""
  ).trim();

  useEffect(() => {
    const target = isIos()
      ? appStoreUrl()
      : playStoreUrlForOffer(offerId || undefined);
    window.location.replace(target);
  }, [offerId]);

  return <p>Opening VoLoMart…</p>;
}

/**
 * Instant client redirect to Play / App Store for shared offer links.
 * Static export cannot pre-render every /offer/{id}, so share links use:
 *   https://www.volomart.in/offer/?id={advertisementId}
 */
export default function OfferRedirectPage() {
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
        <OfferRedirectInner />
      </Suspense>
    </main>
  );
}
