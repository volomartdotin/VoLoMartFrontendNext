import type { Metadata } from "next";
import { TermsArticle } from "@/components/legal/TermsArticle";
import { vendorTerms } from "@/content/terms-of-service";

export const metadata: Metadata = {
  title: "Terms of Service for Vendors",
  description: "Vendor agreement and partnership terms for VoLoMart.",
  openGraph: {
    title: "Vendor Agreement",
    description: vendorTerms.subtitle,
    images: [{ url: vendorTerms.coverImage }],
  },
};

export default function TermsOfServiceVendorsPage() {
  return <TermsArticle terms={vendorTerms} />;
}
