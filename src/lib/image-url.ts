import { getApiBaseUrl } from "@/lib/api-config";

/** Route S3 asset URLs through the backend to avoid CORS on web. */
export function resolveNetworkImageUrl(url: string | undefined | null): string {
  if (!url) return "";

  let uri: URL;
  try {
    uri = new URL(url);
  } catch {
    return url;
  }

  if (uri.host.includes("volomart-assets.s3.")) {
    const key = uri.pathname.startsWith("/") ? uri.pathname.slice(1) : uri.pathname;
    if (!key) return url;
    return `${getApiBaseUrl()}/api/v1/file/asset?key=${encodeURIComponent(key)}`;
  }

  return url;
}
