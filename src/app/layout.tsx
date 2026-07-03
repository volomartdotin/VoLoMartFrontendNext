import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari, Great_Vibes } from "next/font/google";
import "./globals.css";
import { EarlyAccessProvider } from "@/components/early-access/EarlyAccessProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/content/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const deliveryScript = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-delivery-script",
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.volomart.in";

const description =
  "VoLo Mart is India's hyperlocal marketplace connecting customers with trusted nearby vendors for grocery, vegetables, fruit, dairy, namkeen, and flowers—with fast local delivery.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VoLo Mart | Your Ultimate Local Marketplace",
    template: "%s | VoLo Mart",
  },
  description,
  keywords: [
    "hyperlocal marketplace",
    "local vendors",
    "grocery delivery",
    "neighborhood shops",
    "vegetable delivery",
    "vocal for local",
    "VoLo Mart",
    "local commerce India",
  ],
  applicationName: "VoLo Mart",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "VoLo Mart",
    title: "VoLo Mart | Your Ultimate Local Marketplace",
    description,
    url: siteUrl,
    locale: "en_IN",
    images: [
      {
        url: "/volo-mart-logo.png",
        width: 512,
        height: 512,
        alt: "VoLo Mart logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@volomartin",
    creator: "@volomartin",
    title: "VoLo Mart | Your Ultimate Local Marketplace",
    description,
    images: ["/volo-mart-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoDevanagari.variable} ${deliveryScript.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full font-sans">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <ScrollToTop />
        <EarlyAccessProvider>{children}</EarlyAccessProvider>
      </body>
    </html>
  );
}
