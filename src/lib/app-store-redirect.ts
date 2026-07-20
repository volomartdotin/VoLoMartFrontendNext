const PLAY_STORE =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
  "https://play.google.com/store/apps/details?id=com.volomart.app";
const APP_STORE =
  process.env.NEXT_PUBLIC_APP_STORE_URL ??
  "https://apps.apple.com/app/id0000000000";

/** Build Play Store URL, optionally with install referrer for deferred storeId. */
export function playStoreUrl(storeId?: string): string {
  if (!storeId) return PLAY_STORE;
  const referrer = encodeURIComponent(`storeId=${storeId}`);
  const sep = PLAY_STORE.includes("?") ? "&" : "?";
  return `${PLAY_STORE}${sep}referrer=${referrer}`;
}

export function appStoreUrl(): string {
  return APP_STORE;
}
