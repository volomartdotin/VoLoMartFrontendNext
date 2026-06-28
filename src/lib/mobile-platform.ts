export function isMobilePlatformSearch(searchParams: URLSearchParams): boolean {
  const platform = searchParams.get("platform") ?? searchParams.get("plateform");
  return platform?.toLowerCase() === "mobile";
}
