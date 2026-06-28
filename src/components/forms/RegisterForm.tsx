"use client";

import { useState } from "react";
import { categories } from "@/content/vendor";

const categoryOptions = [...categories, "Other"] as const;

export function RegisterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      type: "vendor" as const,
      shopName: String(fd.get("shopName") ?? ""),
      ownerName: String(fd.get("ownerName") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      city: String(fd.get("city") ?? ""),
      category: String(fd.get("category") ?? ""),
      notes: String(fd.get("notes") ?? ""),
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
        <p className="text-lg font-semibold text-brand-dark">Thanks—we received your details.</p>
        <p className="mt-2 text-sm text-muted">
          Our team will contact you shortly to verify your shop and help you go live.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-medium text-brand underline"
          onClick={() => setStatus("idle")}
        >
          Submit another shop
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="shopName" className="block text-sm font-medium text-foreground">
            Shop name
          </label>
          <input
            id="shopName"
            name="shopName"
            required
            autoComplete="organization"
            className="mt-1.5 w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none ring-brand/30 focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="ownerName" className="block text-sm font-medium text-foreground">
            Owner / manager name
          </label>
          <input
            id="ownerName"
            name="ownerName"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none ring-brand/30 focus:ring-2"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground">
            Phone (WhatsApp preferred)
          </label>
          <input
            id="phone"
            name="phone"
            required
            inputMode="tel"
            autoComplete="tel"
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
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-foreground">
            City / area
          </label>
          <input
            id="city"
            name="city"
            required
            autoComplete="address-level2"
            className="mt-1.5 w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none ring-brand/30 focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-foreground">
            Primary category
          </label>
          <select
            id="category"
            name="category"
            required
            className="mt-1.5 w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none ring-brand/30 focus:ring-2"
            defaultValue=""
          >
            <option value="" disabled>
              Select category
            </option>
            {categoryOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-foreground">
          Notes (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="GSTIN, store timings, delivery radius, or questions for our team"
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
        className="w-full rounded-full bg-brand py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === "loading" ? "Sending…" : "Submit registration"}
      </button>
    </form>
  );
}
