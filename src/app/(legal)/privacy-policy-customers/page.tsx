import type { Metadata } from "next";
import { PrivacyPolicyArticle } from "@/components/legal/PrivacyPolicyArticle";
import { customerPrivacyPolicy } from "@/content/privacy-policies";

export const metadata: Metadata = {
  title: "Privacy Policy - Customers",
  description:
    "Comprehensive privacy policy for VoLo Mart customers, covering data collection, usage, and your rights.",
  openGraph: {
    title: "Privacy Policy for Customers",
    description: customerPrivacyPolicy.subtitle,
    images: [{ url: customerPrivacyPolicy.coverImage }],
  },
};

export default function PrivacyPolicyCustomersPage() {
  return <PrivacyPolicyArticle policy={customerPrivacyPolicy} />;
}
