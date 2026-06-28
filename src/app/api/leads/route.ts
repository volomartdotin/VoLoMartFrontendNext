import { NextResponse } from "next/server";

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
    // Hook: forward to CRM, email, or sheet. For now, log in dev only.
    if (process.env.NODE_ENV === "development") {
      console.info("[lead:vendor]", {
        shopName: payload.shopName.trim(),
        ownerName: payload.ownerName.trim(),
        phone: payload.phone.trim(),
        email: payload.email.trim(),
        city: payload.city.trim(),
        category: payload.category.trim(),
        notes: payload.notes?.trim(),
      });
    }
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
    if (process.env.NODE_ENV === "development") {
      console.info("[lead:contact]", {
        name: payload.name.trim(),
        email: payload.email.trim(),
        message: payload.message.trim(),
      });
    }
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: false, error: "Unknown type" }, { status: 400 });
}
