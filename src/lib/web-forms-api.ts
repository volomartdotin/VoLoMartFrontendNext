import { getApiUrl } from "@/lib/api-config";

type ApiResult = { ok: true } | { ok: false; error: string };

type SubscribeResult =
  | { ok: true; message: string }
  | { ok: false; error: string };

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

type EarlyAccessPayload = {
  type: "early-access";
  email: string;
  phone: string;
  location: string;
  userType: string;
};

const EARLY_ACCESS_USER_TYPES = ["Customer", "Vendor"] as const;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmpty(s: unknown): s is string {
  return typeof s === "string" && s.trim().length > 0;
}

function isPhone(s: string): boolean {
  return /^[0-9]{10}$/.test(s);
}

function isEmail(s: string): boolean {
  return EMAIL_REGEX.test(s);
}

async function postLead(payload: Record<string, unknown>): Promise<ApiResult> {
  try {
    const res = await fetch(getApiUrl("/api/v1/web/leads"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json()) as { code?: string; message?: string };
    if (!res.ok || (data.code && data.code !== "OK")) {
      return { ok: false, error: data.message ?? "Something went wrong. Please try again." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Unable to connect. Please try again later." };
  }
}

export async function submitVendorLead(payload: VendorPayload): Promise<ApiResult> {
  if (
    !isNonEmpty(payload.shopName) ||
    !isNonEmpty(payload.ownerName) ||
    !isNonEmpty(payload.phone) ||
    !isNonEmpty(payload.email) ||
    !isNonEmpty(payload.city) ||
    !isNonEmpty(payload.category)
  ) {
    return { ok: false, error: "Missing required fields" };
  }
  if (!isEmail(payload.email.trim())) {
    return { ok: false, error: "Invalid email" };
  }
  return postLead({
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
}

export async function submitContactLead(payload: ContactPayload): Promise<ApiResult> {
  if (!isNonEmpty(payload.name) || !isNonEmpty(payload.email) || !isNonEmpty(payload.message)) {
    return { ok: false, error: "Missing required fields" };
  }
  if (!isEmail(payload.email.trim())) {
    return { ok: false, error: "Invalid email" };
  }
  return postLead({
    source: "contact",
    name: payload.name.trim(),
    email: payload.email.trim(),
    message: payload.message.trim(),
    subject: "Website contact form",
  });
}

export async function submitEarlyAccessLead(payload: EarlyAccessPayload): Promise<ApiResult> {
  if (
    !isNonEmpty(payload.email) ||
    !isNonEmpty(payload.phone) ||
    !isNonEmpty(payload.location) ||
    !isNonEmpty(payload.userType)
  ) {
    return { ok: false, error: "Missing required fields" };
  }
  if (!EARLY_ACCESS_USER_TYPES.includes(payload.userType.trim() as (typeof EARLY_ACCESS_USER_TYPES)[number])) {
    return { ok: false, error: "Invalid user type" };
  }
  if (!isEmail(payload.email.trim())) {
    return { ok: false, error: "Invalid email" };
  }
  const phone = payload.phone.replace(/\D/g, "");
  if (!isPhone(phone)) {
    return { ok: false, error: "Enter a valid 10-digit mobile number" };
  }
  return postLead({
    source: "early-access",
    name: "Early Access",
    email: payload.email.trim(),
    phone,
    location: payload.location.trim(),
    userType: payload.userType.trim(),
    subject: `Early access request (${payload.userType.trim()})`,
    message: `User type: ${payload.userType.trim()}\nLocation: ${payload.location.trim()}`,
  });
}

export async function subscribeNewsletter(email: string): Promise<SubscribeResult> {
  const trimmed = email.trim();
  if (!trimmed) {
    return { ok: false, error: "Email is required." };
  }
  if (!isEmail(trimmed) || trimmed.length > 254) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  try {
    const res = await fetch(getApiUrl("/api/v1/web/newsletter/subscribe"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: trimmed, source: "footer" }),
    });
    const data = (await res.json()) as { code?: string; message?: string };
    if (!res.ok || data.code !== "OK") {
      return { ok: false, error: data.message ?? "Subscription failed. Please try again." };
    }
    return { ok: true, message: data.message ?? "Thank you for subscribing!" };
  } catch {
    return { ok: false, error: "Unable to connect. Please try again later." };
  }
}
