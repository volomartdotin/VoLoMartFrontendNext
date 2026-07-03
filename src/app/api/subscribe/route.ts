import { NextResponse } from "next/server";
import { getApiUrl } from "@/lib/api-config";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email: string): boolean {
  const trimmed = email.trim();
  if (!trimmed || trimmed.length > 254) return false;
  return EMAIL_REGEX.test(trimmed);
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
  }

  const email = String((body as Record<string, unknown>).email ?? "").trim();

  if (!email) {
    return NextResponse.json({ ok: false, error: "Email is required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    const res = await fetch(getApiUrl("/api/v1/web/newsletter/subscribe"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "footer" }),
    });

    const data = (await res.json()) as { code?: string; message?: string };

    if (!res.ok || data.code !== "OK") {
      return NextResponse.json(
        { ok: false, error: data.message ?? "Subscription failed. Please try again." },
        { status: res.status >= 400 ? res.status : 400 },
      );
    }

    return NextResponse.json({ ok: true, message: data.message ?? "Thank you for subscribing!" });
  } catch (err) {
    console.error("[subscribe] backend unreachable:", err);
    return NextResponse.json({ ok: false, error: "Unable to connect. Please try again later." }, { status: 503 });
  }
}
