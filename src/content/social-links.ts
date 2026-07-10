/** Social profile URLs — keep in sync with VoLoMartMobileApp navigator_service.dart */
export const socialLinks = {
  facebook: "https://facebook.com/61591583888508",
  instagram: "https://instagram.com/volomart.in",
  youtube: "https://www.youtube.com/channel/UCNu4iqlspLNBfcf8bc8AAIQ",
  linkedin: "https://www.linkedin.com/company/volomart/about/?viewAsMember=true",
} as const;

/** Active profiles for schema.org sameAs (excludes Twitter until the page is live). */
export const socialSameAs = Object.values(socialLinks);
