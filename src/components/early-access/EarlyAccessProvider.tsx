"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AnalyticsEvents } from "@/lib/analytics/events";
import { trackClick } from "@/lib/analytics/track";
import { EarlyAccessModal } from "./EarlyAccessModal";

type EarlyAccessContextValue = {
  openEarlyAccess: (trigger?: string) => void;
  closeEarlyAccess: () => void;
};

const EarlyAccessContext = createContext<EarlyAccessContextValue | null>(null);

export function useEarlyAccess() {
  const ctx = useContext(EarlyAccessContext);
  if (!ctx) {
    throw new Error("useEarlyAccess must be used within EarlyAccessProvider");
  }
  return ctx;
}

export function EarlyAccessProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [trigger, setTrigger] = useState<string | undefined>();

  const openEarlyAccess = useCallback((source?: string) => {
    setTrigger(source);
    setOpen(true);
    trackClick(AnalyticsEvents.earlyAccessOpen, window.location.pathname, { trigger: source });
  }, []);

  const closeEarlyAccess = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeEarlyAccess();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeEarlyAccess]);

  return (
    <EarlyAccessContext.Provider value={{ openEarlyAccess, closeEarlyAccess }}>
      {children}
      <EarlyAccessModal open={open} onClose={closeEarlyAccess} trigger={trigger} />
    </EarlyAccessContext.Provider>
  );
}
