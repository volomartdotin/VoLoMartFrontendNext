import type { Metadata } from "next";
import { PrivacyPolicyArticle } from "@/components/legal/PrivacyPolicyArticle";
import { vendorPrivacyPolicy } from "@/content/privacy-policies";

export const metadata: Metadata = {
  title: "Privacy Policy - Vendors",
  description:
    "Comprehensive privacy policy for VoLo Mart vendor partners, covering business data handling, compliance, and your rights.",
  openGraph: {
    title: "Privacy Policy for Vendors",
    description: vendorPrivacyPolicy.subtitle,
    images: [{ url: vendorPrivacyPolicy.coverImage }],
  },
};

export default function PrivacyPolicyVendorsPage() {
  return <PrivacyPolicyArticle policy={vendorPrivacyPolicy} />;
}
