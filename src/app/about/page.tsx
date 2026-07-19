import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { cities } from "@/data/seo-data";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const SITE_URL = "https://celebrationcleaning.com";
const PHONE_DISPLAY = "689-388-2588";
const PHONE_E164 = "+16893882588";
const SERVICE_AREA_POLICY =
    "Celebration Cleaning is a mobile, service-area business serving Miami, Orlando, Tampa, and cities across Florida. We do not publish a public storefront address.";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "About Celebration Cleaning: how we clean homes, rentals, and workplaces across Florida—clear process, mobile service-area coverage, and local crews you can schedule with confidence.",
    alternates: {
        canonical: `${SITE_URL}/about`,
    },
};

const values = [
    {
        title: "Reliability",
        description: "We show up on time, every time. You can count on us to be there when you expect us.",
    },
    {
        title: "Excellence",
        description: "We don't settle for 'good enough'. We strive for perfection in every corner we clean.",
    },
    {
        title: "Trust",
        description: "Your home is your sanctuary. We treat it with the utmost respect and care.",
    },
    {
        title: "Eco-Friendly",
        description: "We use safe, sustainable products that are effective without being harsh on your home or the planet.",
    },
];

const processSteps = [
    {
        title: "Share the job details",
        text: "Tell us whether you need house, apartment, Airbnb turnover, move-out, office, or post-construction cleaning—and which Florida city.",
    },
    {
        title: "Confirm scope and timing",
        text: "We align on checklist expectations, access instructions, and a schedule that fits your property or business hours.",
    },
    {
        title: "Crew completes the visit",
        text: "Trained cleaners work room by room to the agreed standard so a guest-ready turnover is never confused with a light tidy-up.",
    },
    {
        title: "You review the result",
        text: "If something needs attention, tell us. We built the business on follow-through, not one-and-done visits.",
    },
];

export default function AboutPage() {
    const organizationJsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Celebration Cleaning",
        url: SITE_URL,
        telephone: PHONE_E164,
        description: SERVICE_AREA_POLICY,
        address: {
            "@type": "PostalAddress",
            addressRegion: "FL",
            addressCountry: "US",
        },
        areaServed: cities.map((city) => ({
            "@type": "City",
            name: city.name,
        })),
    };

    return (
        <div className="flex flex-col min-h-screen">
            <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
            />

            <section className="relative overflow-hidden py-24 md:py-32 text-white">
                <Image
                    src="/images/about-team.jpg"
                    alt="Celebration Cleaning team collaborating in a bright workspace"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-primary/80" />
                <div className="container relative mx-auto px-4 md:px-6 text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">About Celebration Cleaning</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Florida homes, rentals, and workplaces—cleaned on time with clear scopes and local crews.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight text-primary">Our story</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Celebration Cleaning began with a practical mission: give busy Florida
                                    families and property managers their time back. We started as a local
                                    operation focused on showing up when promised and finishing what was on
                                    the checklist—then grew into a trusted name for homes, apartments,
                                    Airbnb turnovers, offices, and restaurants across the state.
                                </p>
                                <p>
                                    We believe a clean space is the backdrop for everyday life and guest
                                    experiences alike. That is why we separate service types instead of
                                    forcing every property into one vague package. A weekly house clean,
                                    a same-day turnover, and a post-construction detail each deserve their
                                    own standard.
                                </p>
                                <p>
                                    Our team is made of dedicated cleaning professionals. We invest in
                                    training and fair wages because consistent quality comes from people who
                                    take pride in the work—not anonymous marketplace rotations.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/why-choose-us.jpg"
                                alt="Clean, organized kitchen after a Celebration Cleaning visit"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-3xl font-bold tracking-tight">How we work</h2>
                        <p className="mt-4 text-muted-foreground">
                            Experience is demonstrated in process—from first quote to finished checklist.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={step.title} className="space-y-2">
                                <p className="text-sm font-semibold text-primary">Step {index + 1}</p>
                                <h3 className="text-xl font-bold">{step.title}</h3>
                                <p className="text-muted-foreground">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground">Service-area policy</h2>
                        <p>{SERVICE_AREA_POLICY}</p>
                        <p>
                            We schedule across Florida&apos;s major metros and surrounding communities—
                            including {cities.slice(0, 6).map((c) => c.name).join(", ")}, and more. Browse{" "}
                            <Link href="/services" className="text-primary font-medium hover:underline">
                                services
                            </Link>{" "}
                            or a city page under cleaning services to see coverage near you. Call or text{" "}
                            <a href={`tel:${PHONE_E164}`} className="text-primary font-medium hover:underline">
                                {PHONE_DISPLAY}
                            </a>{" "}
                            (24/7) when you are ready to book.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight">Our core values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                            <div key={value.title} className="bg-background p-6 rounded-xl border hover:shadow-md transition-shadow">
                                <div className="h-10 w-10 text-primary mb-4">
                                    <CheckCircle2 className="h-full w-full" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 flex justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            Get a free quote
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
