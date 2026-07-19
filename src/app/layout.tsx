import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://celebrationcleaning.com"),
  title: {
    default: "Celebration Cleaning | Professional Cleaning Services in Florida",
    template: "%s | Celebration Cleaning",
  },
  description:
    "Professional house, apartment, Airbnb, move-out, post-construction, office, and restaurant cleaning across Miami, Orlando, Tampa, and 11 more Florida cities.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Celebration Cleaning",
    images: [{ url: "/images/hero-home.jpg", width: 1600, height: 1067, alt: "Celebration Cleaning professional team" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          outfit.variable
        )}
      >
        <OrganizationJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
