"use client";

import { useState } from "react";
import { AnalyticsEvents } from "@/lib/analytics/events";
import { trackClick } from "@/lib/analytics/track";

type Props = {
  open: boolean;
  onClose: () => void;
  trigger?: string;
};

type Status = "idle" | "loading" | "success" | "error";

const USER_TYPES = ["Customer", "Vendor"] as const;

function normalizePhone(value: string): string {
  return value.replace(/\D/g, "").slice(0, 10);
}

function isValidPhone(phone: string): boolean {
  return /^[0-9]{10}$/.test(phone);
}

async function reverseGeocode(lat: number, lon: number): Promise<string> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
      { headers: { Accept: "application/json" } },
    );
    if (!res.ok) return `${lat.toFixed(5)}, ${lon.toFixed(5)}`;
    const data = (await res.json()) as { display_name?: string };
    return data.display_name ?? `${lat.toFixed(5)}, ${lon.toFixed(5)}`;
  } catch {
    return `${lat.toFixed(5)}, ${lon.toFixed(5)}`;
  }
}

export function EarlyAccessModal({ open, onClose, trigger }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [locating, setLocating] = useState(false);
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  if (!open) return null;

  async function detectLocation() {
    if (!navigator.geolocation) {
      setError("Location is not supported on this device. Please type your city or area.");
      return;
    }
    setLocating(true);
    setError(null);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const label = await reverseGeocode(pos.coords.latitude, pos.coords.longitude);
        setLocation(label);
        setLocating(false);
      },
      () => {
        setLocating(false);
        setError("Could not detect location. Please enter your city or area manually.");
      },
      { enableHighAccuracy: false, timeout: 12000 },
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      type: "early-access" as const,
      email: String(fd.get("email") ?? ""),
      phone: normalizePhone(String(fd.get("phone") ?? "")),
      location: String(fd.get("location") ?? ""),
      userType: String(fd.get("userType") ?? ""),
    };

    if (!isValidPhone(payload.phone)) {
      setStatus("error");
      setError("Enter a valid 10-digit mobile number (numbers only).");
      return;
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      trackClick(AnalyticsEvents.earlyAccessSubmit, window.location.pathname, {
        trigger: trigger ?? "",
      });
      form.reset();
      setLocation("");
      setPhone("");
    } catch {
      setStatus("error");
      setError("Network error. Please check your connection and try again.");
    }
  }

  function handleClose() {
    if (status === "loading") return;
    setStatus("idle");
    setError(null);
    setLocation("");
    setPhone("");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="early-access-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close early access dialog"
        onClick={handleClose}
      />

      <div className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-[#E2E8E4] bg-white shadow-2xl">
        <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-[#E2E8E4] bg-white px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#8BC34A]">Launching Soon · Early Access</p>
            <h2 id="early-access-title" className="mt-1 text-xl font-bold text-[#1E1533]">
              Get the VoLoMart app first
            </h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E2E8E4] text-[#3D3550] transition hover:bg-[#F3F2F6]"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {status === "success" ? (
          <div className="px-6 py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#8BC34A]/15 text-[#5A7F30]">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="mt-4 text-lg font-semibold text-[#1E1533]">You&apos;re on the list!</p>
            <p className="mt-2 text-sm leading-relaxed text-[#6B6278]">
              We&apos;ll email and text you as soon as VoLoMart is live. Thank you for joining early access.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 rounded-full bg-[#8BC34A] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#74A73D]"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="px-6 py-5">
            <div className="rounded-xl bg-[#F3F2F6] p-4 text-sm leading-relaxed text-[#3D3550]">
              <p>
                We&apos;re launching soon. Customers can shop from nearby vendors, and local shops can list on VoLoMart
                to reach buyers in their area.
              </p>
              <p className="mt-2">
                Share your email, phone, location, and whether you&apos;re a customer or vendor below.
              </p>
              <p className="mt-2">
                We&apos;ll send your invite as soon as we launch so you can start shopping or selling.
              </p>
            </div>

            <form onSubmit={onSubmit} className="mt-5 space-y-4">
              <div>
                <label htmlFor="ea-userType" className="block text-sm font-medium text-[#1E1533]">
                  I am a <span className="text-red-600">*</span>
                </label>
                <select
                  id="ea-userType"
                  name="userType"
                  required
                  defaultValue=""
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8E4] bg-white px-3 py-2.5 text-sm outline-none ring-[#8BC34A]/30 focus:ring-2"
                >
                  <option value="" disabled>
                    Select user type
                  </option>
                  {USER_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="ea-email" className="block text-sm font-medium text-[#1E1533]">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="ea-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8E4] bg-white px-3 py-2.5 text-sm outline-none ring-[#8BC34A]/30 focus:ring-2"
                />
              </div>

              <div>
                <label htmlFor="ea-phone" className="block text-sm font-medium text-[#1E1533]">
                  Phone number <span className="text-red-600">*</span>
                </label>
                <input
                  id="ea-phone"
                  name="phone"
                  type="tel"
                  required
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="10-digit mobile number"
                  pattern="[0-9]{10}"
                  minLength={10}
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(normalizePhone(e.target.value))}
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8E4] bg-white px-3 py-2.5 text-sm outline-none ring-[#8BC34A]/30 focus:ring-2"
                />
                <p className="mt-1 text-xs text-[#7A7189]">Enter 10 digits only, without spaces or country code.</p>
              </div>

              <div>
                <div className="flex items-center justify-between gap-2">
                  <label htmlFor="ea-location" className="block text-sm font-medium text-[#1E1533]">
                    Your location <span className="text-red-600">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => void detectLocation()}
                    disabled={locating}
                    className="text-xs font-medium text-[#8BC34A] underline-offset-2 hover:underline disabled:opacity-60"
                  >
                    {locating ? "Detecting…" : "Use current location"}
                  </button>
                </div>
                <input
                  id="ea-location"
                  name="location"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City, area, or pincode"
                  className="mt-1.5 w-full rounded-xl border border-[#E2E8E4] bg-white px-3 py-2.5 text-sm outline-none ring-[#8BC34A]/30 focus:ring-2"
                />
                <p className="mt-1 text-xs text-[#7A7189]">
                  We use this to personalise your launch invite.
                </p>
              </div>

              {status === "error" && error ? (
                <p className="text-sm font-medium text-red-700" role="alert">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-[#8BC34A] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#74A73D] disabled:opacity-60"
              >
                {status === "loading" ? "Joining…" : "Join early access"}
              </button>

              <p className="text-center text-xs text-[#7A7189]">
                By joining, you agree to receive launch updates via email and SMS.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
