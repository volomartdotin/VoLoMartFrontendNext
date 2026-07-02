export function isMobilePlatformSearch(searchParams: URLSearchParams): boolean {
  const platform = searchParams.get("platform") ?? searchParams.get("plateform");
  return platform?.toLowerCase() === "mobile";
}

export function isMobilePlatform(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  return isMobilePlatformSearch(new URLSearchParams(window.location.search));
}
