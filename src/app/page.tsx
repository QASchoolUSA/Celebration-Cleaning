
import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Celebration Cleaning | Home & Commercial Cleaning in Florida",
  description:
    "Top-rated house, apartment, Airbnb, move-out, office, and restaurant cleaning across Miami, Orlando, Tampa, and 11 more Florida cities. Book today!",
  alternates: {
    canonical: "https://celebrationcleaning.com/",
  },
  openGraph: {
    images: [{ url: "/images/hero-home.jpg" }],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <WhyChooseUs />
      <ServiceAreaMap />
      <Testimonials />
      <CTA />
    </div>
  );
}
