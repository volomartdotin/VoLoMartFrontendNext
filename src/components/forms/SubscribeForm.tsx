"use client";

import { useState } from "react";
import { AnalyticsEvents } from "@/lib/analytics/events";
import { trackClick } from "@/lib/analytics/track";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email: string): boolean {
  const trimmed = email.trim();
  if (!trimmed || trimmed.length > 254) return false;
  return EMAIL_REGEX.test(trimmed);
}

export function SubscribeForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    setMessage(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const email = String(fd.get("email") ?? "").trim();

    if (!email) {
      setStatus("error");
      setError("Email is required.");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string; message?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setMessage(data.message ?? "Thank you for subscribing!");
      trackClick(AnalyticsEvents.subscribeSubmit, "/");
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-4 rounded-md border border-[#8BC34A]/30 bg-[#8BC34A]/10 px-3 py-2.5">
        <p className="text-xs font-medium text-[#8BC34A]">{message}</p>
        <button
          type="button"
          className="mt-1 text-xs text-[#b8b2c4] underline hover:text-white"
          onClick={() => setStatus("idle")}
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-4">
      <div className="flex">
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          disabled={status === "loading"}
          className="min-h-10 min-w-0 flex-1 rounded-l-md border border-white/10 bg-[#30313a] px-3 text-xs text-white placeholder:text-[#8b8498] outline-none ring-[#8BC34A]/40 focus:ring-2 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-r-md bg-[#8BC34A] text-white transition hover:bg-[#084236] disabled:opacity-60"
          aria-label="Subscribe"
        >
          {status === "loading" ? (
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          ) : (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          )}
        </button>
      </div>
      {status === "error" && error ? (
        <p className="mt-2 text-xs font-medium text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
