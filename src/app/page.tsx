
import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Celebration Cleaning | Home Cleaning Services",
  description: "Top-rated residential and commercial cleaning services. Eco-friendly, reliable, and thorough. Book your celebration of cleanliness today!",
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
