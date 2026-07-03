import type { Metadata } from "next";
import { TermsArticle } from "@/components/legal/TermsArticle";
import { customerTerms } from "@/content/terms-of-service";

export const metadata: Metadata = {
  title: "Terms of Service for Customers",
  description: "Customer terms of service for using VoLoMart.",
  openGraph: {
    title: "Terms of Service for Customers",
    description: customerTerms.subtitle,
    images: [{ url: customerTerms.coverImage }],
  },
};

export default function TermsOfServiceCustomersPage() {
  return <TermsArticle terms={customerTerms} />;
}
