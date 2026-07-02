/**
 * Backend API base URL for VoLo Mart marketing site.
 * Set in `.env.local` (dev) or deployment env (production):
 *
 *   NEXT_PUBLIC_API_URL=https://back.volomart.in
 */
export function getApiBaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";
  return url.replace(/\/$/, "");
}

/** Build a full API URL from a path such as `/api/v1/service/list`. */
export function getApiUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getApiBaseUrl()}${normalized}`;
}
