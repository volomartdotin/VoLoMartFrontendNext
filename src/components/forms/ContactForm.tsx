"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      type: "contact" as const,
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.error ?? "Something went wrong");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand/30 bg-brand-light/50 p-8 text-center">
        <p className="text-lg font-semibold text-brand-dark">Message sent.</p>
        <p className="mt-2 text-sm text-muted">We’ll get back to you as soon as we can.</p>
        <button
          type="button"
          className="mt-6 text-sm font-medium text-brand underline"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Your name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="mt-1.5 w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none ring-brand/30 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none ring-brand/30 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none ring-brand/30 focus:ring-2"
        />
      </div>
      {status === "error" && error ? (
        <p className="text-sm font-medium text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
