import { NextResponse } from "next/server";
import { getApiUrl } from "@/lib/api-config";

type VendorPayload = {
  type: "vendor";
  shopName: string;
  ownerName: string;
  phone: string;
  email: string;
  city: string;
  category: string;
  notes?: string;
};

type ContactPayload = {
  type: "contact";
  name: string;
  email: string;
  message: string;
};

function isNonEmpty(s: unknown): s is string {
  return typeof s === "string" && s.trim().length > 0;
}

function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

async function forwardToBackend(payload: Record<string, unknown>) {
  try {
    const res = await fetch(getApiUrl("/api/v1/web/leads"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("[leads] backend error:", res.status, text);
    }
  } catch (err) {
    console.error("[leads] backend unreachable:", err);
  }
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

  const b = body as Record<string, unknown>;
  const type = b.type;

  if (type === "vendor") {
    const payload = b as unknown as VendorPayload;
    if (
      !isNonEmpty(payload.shopName) ||
      !isNonEmpty(payload.ownerName) ||
      !isNonEmpty(payload.phone) ||
      !isNonEmpty(payload.email) ||
      !isNonEmpty(payload.city) ||
      !isNonEmpty(payload.category)
    ) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }
    if (!isEmail(payload.email.trim())) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }
    await forwardToBackend({
      source: "vendor-register",
      name: payload.ownerName.trim(),
      email: payload.email.trim(),
      phone: payload.phone.trim(),
      subject: `Vendor lead: ${payload.shopName.trim()}`,
      message: [
        `Shop: ${payload.shopName.trim()}`,
        `City: ${payload.city.trim()}`,
        `Category: ${payload.category.trim()}`,
        payload.notes?.trim() ? `Notes: ${payload.notes.trim()}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    });
    return NextResponse.json({ ok: true });
  }

  if (type === "contact") {
    const payload = b as unknown as ContactPayload;
    if (!isNonEmpty(payload.name) || !isNonEmpty(payload.email) || !isNonEmpty(payload.message)) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }
    if (!isEmail(payload.email.trim())) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }
    await forwardToBackend({
      source: "contact",
      name: payload.name.trim(),
      email: payload.email.trim(),
      message: payload.message.trim(),
      subject: "Website contact form",
    });
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: false, error: "Unknown type" }, { status: 400 });
}
