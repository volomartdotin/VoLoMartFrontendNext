"use client";

import { useEffect } from "react";
import { appStoreUrl, playStoreUrl } from "@/lib/app-store-redirect";

function isIos(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

/** Instant redirect to Play / App Store (home / generic share — no storeId). */
export default function AppRedirectPage() {
  useEffect(() => {
    const target = isIos() ? appStoreUrl() : playStoreUrl();
    window.location.replace(target);
  }, []);

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
      <p>Opening VoLoMart…</p>
    </main>
  );
}
