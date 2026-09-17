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
        title: "Show up when we say",
        description: "Confirmed windows matter. We plan access and travel so we're not leaving you waiting with a gate code.",
    },
    {
        title: "Finish the checklist",
        description: "A light tidy and a deep clean are different jobs. We work to the scope you booked—room by room.",
    },
    {
        title: "Treat your place like a worksite with keys",
        description: "We leave shoes and supplies where you want them, lock up as instructed, and don't dig through drawers.",
    },
    {
        title: "Use products that fit the surface",
        description: "Kids, pets, wood floors, stone—tell us what matters and we'll pick cleaners that won't wreck finishes.",
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
                                    Celebration Cleaning started with a simple job: show up when promised and finish what was on the checklist for busy Florida households and property managers. We grew from there into homes, apartments, Airbnb turnovers, offices, and restaurants across the state.
                                </p>
                                <p>
                                    A weekly house clean, a same-day turnover, and a post-construction detail are different jobs. We keep the scopes separate instead of stuffing every property into one vague package.
                                </p>
                                <p>
                                    Our crews are trained employees, not a rotating marketplace. Fair wages and clear checklists are how you get the same standard visit after visit.
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
                            From the first quote to the finished checklist—here&apos;s how a visit usually goes.
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
                            href="/#booking"
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
