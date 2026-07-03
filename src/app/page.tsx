"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaqItem } from "@/components/FaqItem";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, softwareApplicationSchema } from "@/content/seo";
import { resolveNetworkImageUrl } from "@/lib/image-url";
import { fetchServiceCategories, type ServiceCategory } from "@/lib/services-api";
import { AnalyticsEvents } from "@/lib/analytics/events";
import { trackClick } from "@/lib/analytics/track";
import { EarlyAccessTrigger } from "@/components/early-access/EarlyAccessTrigger";
import { BrandTagline } from "@/components/site/BrandTagline";

/** Magenta accent — matches current mockups */
/** Secondary / accent — matches `--accent` in `globals.css` (VoLoMart warm accent). */
const MAGENTA = "#C45C26";

const featureCards = [
  {
    title: "Explore Nearby Sellers",
    body: "Find vendors across India with location-aware discovery designed for hyperlocal commerce.",
    src: "https://www.shutterstock.com/image-vector/india-map-pointer-mark-location-position-260nw-2240504927.jpg",
  },
  {
    title: "All Services in One App",
    body: "Browse all local services like Grocery, Vegetable, Fruit, Dairy, Namkeen, and Flower from one place.",
    src: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=520&q=80",
  },
  {
    title: "Place Order in Seconds",
    body: "Select your preferred vendor, choose products, and place your order quickly with a smooth checkout flow.",
    src: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=520&q=80",
  },
] as const;

const testimonialPeople = [
  {
    name: "Alex Morgan",
    role: "Happy Buyer",
    quote:
      "VoLoMart makes daily shopping simple. I can compare nearby vendors, place quick orders, and get groceries on time.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    name: "Jordan Kim",
    role: "Verified Customer",
    quote:
      "I can compare nearby vendors, check product details before ordering, and delivery tracking is clear and reliable.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    name: "Shane Lee",
    role: "Satisfied Customer",
    quote:
      "I used to wait in store queues every weekend. Now I order from local shops in minutes and still get the same trusted quality.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    name: "Taylor Brooks",
    role: "Repeat Customer",
    quote:
      "I now order fruits, vegetables, and dairy from familiar vendors. Service feels personal, and any issues are resolved quickly.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    name: "Casey Nguyen",
    role: "Regular Buyer",
    quote:
      "Best hyperlocal app I have used so far. Great variety, fair pricing, and faster delivery from nearby shops.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=128&h=128&q=80",
  },
] as const;

const heroAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&h=128&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128&q=80",
];

const phoneScreens = [
  "/left.png",
  "/center.png",
  "/right.png",
];

const demoScreens = [
  "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=520&q=80",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=520&q=80",
  "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=520&q=80",
  "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=520&q=80",
  "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=520&q=80",
];

const howItWorksVisuals = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
];


const customerHowItWorks = [
  {
    title: "Discover Local Vendors",
    body: "Open the app and instantly see nearby vendors with real-time inventory and ratings from your neighbors.",
    icon: "discover",
  },
  {
    title: "Browse Products",
    body: "Explore products, check freshness, and pick what you need from trusted local vendors.",
    icon: "catalog",
  },
  {
    title: "Place Your Order",
    body: "Select items for order, choose delivery time, and get instant confirmation from your vendor.",
    icon: "order",
  },
  {
    title: "Fast Delivery",
    body: "Track your order in real-time as your local vendor prepares and delivers fresh products to your door.",
    icon: "delivery",
  },
] as const;

const vendorHowItWorks = [
  {
    title: "Register Your Shop",
    body: "Create your vendor account and complete onboarding with your business details and service location.",
    icon: "register",
  },
  {
    title: "Set Up Shop Profile",
    body: "Add your service categories, timings, and product catalog so nearby customers can discover your shop.",
    icon: "catalog",
  },
  {
    title: "Accept Orders",
    body: "Receive customer orders in-app, confirm availability, and manage fulfilment smoothly.",
    icon: "orders",
  },
  {
    title: "Deliver & Grow",
    body: "Prepare orders quickly, deliver to local customers, and grow repeat business with trusted service.",
    icon: "growth",
  },
] as const;

const customerFaqItems = [
  {
    q: "What is VoLoMart?",
    a: "VoLoMart is a local marketplace app that allows you to shop for products from nearby vendors and vendor can delivered product to your doorstep.",
  },
  {
    q: "How do I place an order?",
    a: "Browse through service, select your address, choose your favourite vendor, select the product you want to order, and place your order.",
    defaultOpen: true,
  },
  {
    q: "What types of products can I find on VoLoMart?",
    a: "You can find a wide variety of products including groceries, fruits, vegetables, snacks, and more, offered by local vendors.",
  },
  {
    q: "Can I track my order?",
    a: "Yes, you can track your order status in real-time under the \"My Orders\" section in the app.",
  },
  {
    q: "What are the delivery hours?",
    a: "Delivery hours vary by vendor, You can view specific vendor timings on their profile.",
  },
  {
    q: "Is there a delivery fee?",
    a: "Delivery charges may apply depending on the vendor and your location. The fee will be visible at checkout.",
  },
  {
    q: "How do I cancel an order?",
    a: "You can cancel an order from the \"My Orders\" section, but only before the vendor has started processing it.",
  },
  {
    q: "Is my data safe with VoLoMart?",
    a: "Yes. We follow industry-standard security practices to protect your personal information.",
  },
] as const;

const vendorFaqItems = [
  {
    q: "How can I register my shop on VoLoMart?",
    a: "Download the VoLoMart App, sign up, and submit your business details for approval. Our team will verify and activate your account.",
  },
  {
    q: "What products can I sell?",
    a: "You can sell any legal product that falls under your selected service such as groceries, fruits, vegetables, snacks, and more through the app.",
    defaultOpen: true,
  },
  {
    q: "Is there a commission fee?",
    a: "No, VoLoMart not charges any commission. it's take a minimal platform charge from customer",
  },
  {
    q: "How do I manage product and pricing?",
    a: "You can manage your product, prices, availability, and discount through the store section in the app.",
  },
  {
    q: "How do I handle deliveries?",
    a: "You must need to manage delivery using your own team.",
  },
] as const;

function PhoneFrame({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div
      className={`rounded-[1.75rem] border-[10px] border-[#1e1533] bg-[#1e1533] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.55)] ${className}`}
    >
      <div className="aspect-[9/18.5] overflow-hidden rounded-[1.2rem] bg-[#0f0a1a]">
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

function DemoPhoneFrame({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div
      className={`shrink-0 rounded-[1.25rem] border-[7px] border-[#1e1533] bg-[#1e1533] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)] ${className}`}
    >
      <div className="aspect-[9/18.5] w-[118px] overflow-hidden rounded-[0.85rem] bg-[#0f0a1a] sm:w-[138px]">
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

function FeaturePhoneFrame({ src }: { src: string }) {
  return (
    <div className="mx-auto w-[148px] rounded-[1.15rem] border-[6px] border-[#1e1533] bg-[#1e1533] shadow-[0_14px_36px_-12px_rgba(0,0,0,0.35)] sm:w-[168px]">
      <div className="aspect-[9/18.5] overflow-hidden rounded-[0.78rem] bg-[#0f0a1a]">
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

function HowStepIcon({
  icon,
}: {
  icon: "discover" | "order" | "delivery" | "register" | "catalog" | "orders" | "growth";
}) {
  if (icon === "discover") {
    return (
      <svg className="h-5 w-5 text-[#8BC34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="m21 21-4.35-4.35" />
      </svg>
    );
  }
  if (icon === "order") {
    return (
      <svg className="h-5 w-5 text-[#8BC34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h19l-2 8H8L6 4H3" />
        <circle cx="9" cy="18" r="1.5" />
        <circle cx="18" cy="18" r="1.5" />
      </svg>
    );
  }
  if (icon === "delivery") {
    return (
      <svg className="h-5 w-5 text-[#8BC34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v8H3zM14 10h3l3 3v2h-6z" />
        <circle cx="7" cy="18" r="1.5" />
        <circle cx="18" cy="18" r="1.5" />
      </svg>
    );
  }
  if (icon === "register") {
    return (
      <svg className="h-5 w-5 text-[#8BC34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="12" cy="8" r="3.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 20a7 7 0 0 1 14 0M19 7v4M17 9h4" />
      </svg>
    );
  }
  if (icon === "catalog") {
    return (
      <svg className="h-5 w-5 text-[#8BC34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    );
  }
  if (icon === "orders") {
    return (
      <svg className="h-5 w-5 text-[#8BC34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h9l3 3v15H6z" />
        <path strokeLinecap="round" d="M9 11h6M9 15h6" />
      </svg>
    );
  }
  return (
    <svg className="h-5 w-5 text-[#8BC34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 15l5-5 4 4 7-7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 7h3v3" />
    </svg>
  );
}

export default function Home() {
  const [activeHowTab, setActiveHowTab] = useState<"customer" | "vendor">("customer");
  const [activeFaqTab, setActiveFaqTab] = useState<"customer" | "vendor">("customer");
  const [serviceCategories, setServiceCategories] = useState<ServiceCategory[]>([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const howItems = activeHowTab === "customer" ? customerHowItWorks : vendorHowItWorks;
  const activeFaqItems = activeFaqTab === "customer" ? customerFaqItems : vendorFaqItems;

  useEffect(() => {
    let cancelled = false;

    fetchServiceCategories()
      .then((list) => {
        if (!cancelled) setServiceCategories(list);
      })
      .catch((err) => {
        console.error("Failed to load service categories:", err);
      })
      .finally(() => {
        if (!cancelled) setServicesLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="bg-white text-[#21153a]">
      <JsonLd data={softwareApplicationSchema} />
      <JsonLd data={faqSchema([...customerFaqItems, ...vendorFaqItems])} />
      <SiteHeader />

      <section id="home" className="relative overflow-hidden bg-[#8BC34A] pt-16 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.22) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-violet-400/15 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          <div className="mx-auto mt-12 max-w-4xl text-center sm:mt-16">
            <div className="mx-auto inline-flex flex-col items-center rounded-2xl border border-white/20 bg-white/10 px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:px-8 sm:py-5">
              <BrandTagline variant="hero" />
            </div>
            <h1 className="mt-8 px-2 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.35rem]">
              Your Ultimate Local{" "}
              <span
                className="inline-block align-middle text-[#C45C26] [font-family:var(--font-delivery-script),cursive] text-[2.75rem] font-normal sm:text-6xl md:text-7xl lg:text-[4.25rem]"
                style={{ lineHeight: 0.95 }}
              >
                Marketplace
              </span>{" "}
              Solution!
            </h1>
          </div>

          <div className="relative mx-auto mt-12 max-w-6xl lg:mt-14">
            <div className="relative z-10 mt-6 flex justify-center lg:mt-2">
              <div className="flex max-w-5xl items-end justify-center gap-3 sm:gap-6 md:gap-10">
                <div className="w-[30%] max-w-[220px] origin-bottom -rotate-6 translate-y-8 opacity-95 sm:translate-y-12">
                  <PhoneFrame src={phoneScreens[0] ?? ""} />
                </div>
                <div className="z-20 w-[36%] max-w-[290px] -translate-y-3 scale-105 sm:max-w-[340px]">
                  <PhoneFrame src={phoneScreens[1] ?? ""} />
                </div>
                <div className="w-[30%] max-w-[220px] origin-bottom rotate-6 translate-y-8 opacity-95 sm:translate-y-12">
                  <PhoneFrame src={phoneScreens[2] ?? ""} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App download — matches hero purple accent */}
      <section id="download-app" className="bg-[#F3F2F6] pb-14 pt-14 lg:pb-16 lg:pt-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-6">
          <div>
            <p className="inline-flex items-center rounded-full bg-[#8BC34A]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#5A7F30]">
              Launching Soon
            </p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#1E1533] sm:text-3xl md:text-[2.15rem]">
              Get <span className="text-[#8BC34A]">VoLoMart</span> Early Access
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B6278] md:text-[0.95rem]">
              We&apos;re launching soon. Join early access to get your invite first. Shop from nearby vendors with fast
              local delivery, or list your shop and reach customers in your area.
            </p>

            <EarlyAccessTrigger
              trigger="homepage-section"
              onClick={() =>
                trackClick(AnalyticsEvents.homepageCta, "/", {
                  label: "Get Early Access",
                })
              }
              className="mt-8 inline-flex rounded-full bg-[#8BC34A] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#74A73D]"
            >
              Get Early Access
            </EarlyAccessTrigger>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative flex min-h-[280px] flex-col rounded-2xl bg-[#FAFAFB] p-5 shadow-sm ring-1 ring-black/[0.04]">
              <p className="text-sm font-bold text-[#1E1533]">For iOS</p>
              <p className="mt-1 text-xs text-[#7A7189]">iOS 15.6+</p>
              <EarlyAccessTrigger
                trigger="homepage-ios"
                onClick={() =>
                  trackClick(AnalyticsEvents.homepageCta, "/", {
                    platform: "ios",
                    label: "Download App",
                  })
                }
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#8BC34A] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#084236]"
              >
                Download App
              </EarlyAccessTrigger>
              <div className="mt-auto flex items-end justify-between gap-3 pt-8">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://apps.apple.com"
                  alt=""
                  className="h-20 w-20 rounded-md border border-[#E8E3EF] bg-white p-1"
                />
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/[0.06]">
                  <svg className="h-8 w-8 text-[#1E1533]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.64-3.43 2.64-1.48 0-1.87-.88-3.63-.88-1.76 0-2.19.85-3.64.85-1.48 0-2.65-1.35-3.59-2.68-1.83-2.66-2.03-5.83-1.14-7.5.66-1.22 1.84-2.05 3.11-2.05 1.46 0 2.37.88 3.57.88 1.18 0 1.9-.89 3.61-.89 1.22 0 2.51.67 3.18 1.83-2.8 1.54-2.35 5.59.22 6.67z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative flex min-h-[280px] flex-col rounded-2xl bg-[#FAFAFB] p-5 shadow-sm ring-1 ring-black/[0.04]">
              <p className="text-sm font-bold text-[#1E1533]">For Android</p>
              <p className="mt-1 text-xs text-[#7A7189]">Android 8.0+</p>
              <EarlyAccessTrigger
                trigger="homepage-android"
                onClick={() =>
                  trackClick(AnalyticsEvents.homepageCta, "/", {
                    platform: "android",
                    label: "Download App",
                  })
                }
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#8BC34A] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#084236]"
              >
                Download App
              </EarlyAccessTrigger>
              <div className="mt-auto flex items-end justify-between gap-3 pt-8">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://play.google.com/store"
                  alt=""
                  className="h-20 w-20 rounded-md border border-[#E8E3EF] bg-white p-1"
                />
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/[0.06]">
                  <svg className="h-9 w-9" viewBox="0 0 24 24" aria-hidden>
                    <path
                      fill="#3DDC84"
                      d="M17.6 9.48 19.44 6.3c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67c-.18-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83l1.87 3.23a12.65 12.65 0 0 0-6.66 6.48h21.02a12.65 12.65 0 0 0-6.65-6.48zM7 15.75c-.83 0-1.5-.67-1.5-1.5S6.17 12.75 7 12.75s1.5.67 1.5 1.5S7.83 15.75 7 15.75zm10 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits — slightly darker band + three feature cards */}
      <section id="about-us" className="bg-[#ECE9F0] py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-end lg:gap-12">
            <div>
              <p className="text-sm font-medium text-[#6B6278]">
                Benefits of VoLoMart
              </p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#1E1533] sm:text-3xl md:text-4xl">
                Why Customers and Vendors Choose <span className="text-[#8BC34A]">VoLoMart</span>
              </h2>
            </div>
            <div className="flex gap-5 border-l-4 border-[#8BC34A] pl-5">
              <p className="text-sm leading-7 text-[#6B6278]">
                Packed with features designed to make local shopping convenient, fast, and rewarding.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Location-Based Discovery",
                body: "Find vendors within 3km radius.",
                icon: (
                  <svg className="h-6 w-6 text-[#8BC34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.25" />
                  </svg>
                ),
              },
              {
                title: "Order Tracking",
                body: "Follow your order from placement to delivery.",
                icon: (
                  <svg className="h-6 w-6 text-[#8BC34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="1" />
                    <path strokeLinecap="round" d="M9 12h6M9 16h4" />
                  </svg>
                ),
              },
              {
                title: "Real-Time Updates",
                body: "Live inventory and availability.",
                icon: (
                  <svg className="h-6 w-6 text-[#8BC34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18v12H3z" />
                    <path strokeLinecap="round" d="M3 10h18M8 3v3M16 3v3" />
                  </svg>
                ),
              },
              {
                title: "Fast Delivery",
                body: "Average 20-minute delivery.",
                icon: (
                  <svg className="h-6 w-6 text-[#8BC34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v8H3zM14 10h3l3 3v2h-6z" />
                    <circle cx="7" cy="18" r="1.5" />
                    <circle cx="18" cy="18" r="1.5" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#D9D3E4] bg-[#F7F6F9] p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E4E1EA]">{item.icon}</div>
                <h3 className="mt-5 text-lg font-bold text-[#1E1533]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B6278]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-[#F3F2F6] py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center lg:px-6">
          <p className="text-sm font-medium text-[#6B6278]">
            How It Works
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#1E1533] sm:text-3xl md:text-[2.25rem]">
            The <span className="text-[#8BC34A]">Seamless Experience</span> of Our App
          </h2>
          <div className="mt-6 inline-flex rounded-full bg-white p-1 ring-1 ring-[#D9D3E4]">
            <button
              type="button"
              onClick={() => setActiveHowTab("customer")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeHowTab === "customer" ? "bg-[#8BC34A] text-white" : "text-[#6B6278]"
              }`}
            >
              Customer Journey
            </button>
            <button
              type="button"
              onClick={() => setActiveHowTab("vendor")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeHowTab === "vendor" ? "bg-[#8BC34A] text-white" : "text-[#6B6278]"
              }`}
            >
              Vendor Journey
            </button>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-6">
          <div className="relative mx-auto flex h-[280px] w-full max-w-[400px] items-center justify-center sm:h-[320px] lg:h-[360px]">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
              <div className="absolute h-[17.5rem] w-[17.5rem] rounded-full border border-[#D9D3E4]" />
              <div className="absolute h-[13.5rem] w-[13.5rem] rounded-full border border-[#D9D3E4]" />
              <div className="absolute h-[9.5rem] w-[9.5rem] rounded-full border border-[#D9D3E4]" />
            </div>
            <div className="relative z-10 w-full max-w-[260px] sm:max-w-[290px]">
              <div className="relative h-[220px] sm:h-[250px]">
                <div className="absolute inset-0 z-20 animate-[spin_30s_linear_infinite]">
                  <div className="absolute left-0 top-2 h-[130px] w-[130px] overflow-hidden rounded-full border-[5px] border-white shadow-xl ring-1 ring-black/[0.06] animate-[spin_30s_linear_infinite_reverse] sm:h-[148px] sm:w-[148px]">
                    <img src={howItWorksVisuals[0]} alt="" className="h-full w-full object-cover" />
                    <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#8BC34A] px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
                      #LocalFirst
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 z-10 animate-[spin_36s_linear_infinite]">
                  <div className="absolute bottom-0 right-0 h-[130px] w-[130px] overflow-hidden rounded-full border-[5px] border-white shadow-xl ring-1 ring-black/[0.06] animate-[spin_36s_linear_infinite_reverse] sm:h-[148px] sm:w-[148px]">
                    <img src={howItWorksVisuals[1]} alt="" className="h-full w-full object-cover" />
                    <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#8BC34A] px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
                      #TrustedVendors
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="space-y-8">
            {howItems.map((step) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8BC34A]/12 ring-1 ring-[#8BC34A]/25">
                  <HowStepIcon icon={step.icon} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#1E1533]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B6278]">{step.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* App Demo */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center lg:px-6">
          <p className="text-sm font-medium text-[#6B6278]">
            App Demo
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#1E1533] sm:text-3xl md:text-[2.25rem]">
            View <span className="text-[#8BC34A]">Our App Demo</span>
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-6xl overflow-x-auto px-4 pb-4 lg:px-6">
          <div className="flex min-w-[640px] items-end justify-center gap-0 pb-6 pt-4 sm:min-w-0">
            {[
              { src: demoScreens[0], cls: "origin-bottom -rotate-[14deg] translate-y-6 scale-[0.82] opacity-[0.92] z-[1]" },
              { src: demoScreens[1], cls: "origin-bottom -rotate-[7deg] translate-y-3 scale-90 z-[2]" },
              { src: demoScreens[2], cls: "origin-bottom z-[5] scale-[1.06]" },
              { src: demoScreens[3], cls: "origin-bottom rotate-[7deg] translate-y-3 scale-90 z-[2]" },
              { src: demoScreens[4], cls: "origin-bottom rotate-[14deg] translate-y-6 scale-[0.82] opacity-[0.92] z-[1]" },
            ].map((item, i) => (
              <div key={i} className={`relative -mx-2 sm:-mx-3 ${item.cls}`}>
                <DemoPhoneFrame src={item.src} />
                {i === 2 && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#8BC34A] text-white shadow-lg ring-4 ring-white/90 transition hover:bg-[#084236]"
                      aria-label="Play app demo video"
                    >
                      <svg className="ml-0.5 h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M8 5v14l11-7L8 5z" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local services */}
      <section id="services" className="bg-[#F3F2F6] py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-[#6B6278]">
                Local Services
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#1E1533] sm:text-3xl md:text-[2.25rem]">
                Explore Our <span className="text-[#8BC34A]">Service Categories</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#8A8499]">
              Discover trusted local services near you with fast delivery support and consistent quality from
              neighborhood vendors.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesLoading &&
              Array.from({ length: 6 }).map((_, index) => (
                <article
                  key={`service-skeleton-${index}`}
                  className="overflow-hidden rounded-2xl border border-[#E7E3EE] bg-white p-3 shadow-sm"
                  aria-hidden
                >
                  <div className="aspect-[4/3] animate-pulse rounded-xl bg-[#E7E3EE]" />
                  <div className="space-y-2 px-2 pb-2 pt-3">
                    <div className="h-4 w-2/3 animate-pulse rounded bg-[#E7E3EE]" />
                    <div className="h-3 w-full animate-pulse rounded bg-[#F3F2F6]" />
                  </div>
                </article>
              ))}

            {!servicesLoading &&
              serviceCategories.map((item) => (
                <article
                  key={item._id}
                  className="overflow-hidden rounded-2xl border border-[#E7E3EE] bg-white p-3 shadow-sm transition hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                    <img
                      src={resolveNetworkImageUrl(item.image)}
                      alt={item.name}
                      className="h-full w-full object-contain p-3"
                    />
                  </div>
                  <div className="px-2 pb-2 pt-3">
                    <h3 className="text-base font-semibold text-[#1E1533]">{item.name}</h3>
                    {item.description ? (
                      <p className="mt-1 text-xs leading-relaxed text-[#8A8499]">{item.description}</p>
                    ) : null}
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* Best Features — dark grid background with brand green accents */}
      <section
        id="features"
        className="relative overflow-hidden py-16 text-white lg:py-24"
        style={{
          backgroundColor: "#1B1B21",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.065) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.065) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      >
        <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="max-w-xl shrink-0">
              <p className="text-sm font-semibold tracking-wide text-[#8BC34A]">
                Best Features
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight md:text-[2.35rem]">
                Features of <span className="text-[#8BC34A]">VoLoMart</span> Platform
              </h2>
            </div>
            <p className="max-w-lg border-l-4 border-[#8BC34A] pl-5 text-sm leading-relaxed text-[#C4C0CD] lg:pt-1 lg:text-[0.9375rem]">
              VoLoMart is designed for real neighborhood commerce with location-based discovery, stock visibility,
              and faster local fulfilment for daily needs.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-2xl bg-white px-6 pb-8 pt-8 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.55)]"
              >
                <h3 className="text-lg font-bold text-[#1E1533]">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6B6278]">{card.body}</p>
                <div className="mt-8 flex justify-center">
                  <FeaturePhoneFrame src={card.src} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center lg:px-6">
          <p className="text-sm font-medium text-[#6B6278]">
            Testimonials
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#1E1533] sm:text-3xl md:text-[2.25rem]">
            Our Customer <span className="text-[#8BC34A]">Testimonials</span>
          </h2>
          <div className="mt-14">
            <TestimonialsCarousel people={testimonialPeople} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F3F2F6] pb-14 pt-2 lg:pb-20 lg:pt-4">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <p className="text-center text-sm font-medium text-[#6B6278]">
            FAQ
          </p>
          <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-[#1E1533] md:text-4xl">
            Questions? Look here.
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="inline-flex rounded-full bg-white p-1 ring-1 ring-[#D9D3E4]">
              <button
                type="button"
                onClick={() => setActiveFaqTab("customer")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeFaqTab === "customer" ? "bg-[#8BC34A] text-white" : "text-[#6B6278]"
                }`}
              >
                Customer FAQ
              </button>
              <button
                type="button"
                onClick={() => setActiveFaqTab("vendor")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeFaqTab === "vendor" ? "bg-[#8BC34A] text-white" : "text-[#6B6278]"
                }`}
              >
                Vendor FAQ
              </button>
            </div>
          </div>
          <div className="mt-10 space-y-3">
            {activeFaqItems.map((item) => (
              <FaqItem
                key={item.q}
                question={item.q}
                answer={item.a}
                defaultOpen={"defaultOpen" in item ? !!item.defaultOpen : false}
              />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}


