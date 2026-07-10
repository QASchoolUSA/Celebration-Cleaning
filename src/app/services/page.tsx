import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { services } from "@/data/seo-data";

export const metadata: Metadata = {
    title: "Our Services",
    description:
        "House, apartment, turnover, move-out, post-construction, Airbnb, commercial, office, and restaurant cleaning across Florida.",
    alternates: {
        canonical: "https://www.celebrationcleaning.com/services",
    },
};

const servicePackages = [
    {
        title: "Standard Cleaning",
        description: "Perfect for maintaining a tidy home on a regular basis.",
        price: "From $120",
        features: [
            "Dusting all surfaces",
            "Vacuuming and mopping floors",
            "Cleaning bathrooms and kitchen",
            "Making beds",
            "Emptying trash bins",
        ],
        cta: "Book Standard Clean",
    },
    {
        title: "Deep Cleaning",
        description: "A comprehensive clean to reach every nook and cranny.",
        price: "From $250",
        features: [
            "All Standard Cleaning items",
            "Cleaning inside appliances (oven, fridge)",
            "Washing baseboards and door frames",
            "Cleaning inside windows",
            "Detailed dusting of blinds/vents",
        ],
        cta: "Book Deep Clean",
        popular: true,
    },
    {
        title: "Move-Out / Turnover",
        description: "Ensure the property is spotless for the next chapter.",
        price: "From $300",
        features: [
            "Deep cleaning of all rooms",
            "Cleaning inside all cabinets/drawers",
            "Removing built-up grime",
            "Spot cleaning walls",
            "Guarantee for lease requirements",
        ],
        cta: "Book Move Clean",
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative overflow-hidden py-20 md:py-28 text-white">
                <Image
                    src="/images/house-cleaning.jpg"
                    alt="Professional house cleaning in progress"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-slate-900/70" />
                <div className="container relative mx-auto px-4 md:px-6 text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
                    <p className="text-xl text-white/85 max-w-2xl mx-auto">
                        Tailored cleaning solutions for homeowners, property managers, and Florida businesses.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
                        <h2 className="text-3xl font-bold tracking-tight">Full Service Menu</h2>
                        <p className="text-muted-foreground text-lg">
                            Nine specialized cleaning lines—each with city pages across Florida.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <article
                                id={service.slug}
                                key={service.slug}
                                className="scroll-mt-24 group overflow-hidden rounded-2xl border bg-background shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={service.image}
                                        alt={`${service.name} service`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl font-bold">{service.name}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                                    <Link
                                        href={`/cleaning-services/miami/${service.slug}`}
                                        className="inline-flex items-center text-sm font-bold text-primary"
                                    >
                                        See Miami example
                                        <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight">Popular Packages</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {servicePackages.map((pkg) => (
                            <div
                                key={pkg.title}
                                className={`relative flex flex-col p-8 rounded-2xl border ${pkg.popular ? "border-primary shadow-lg scale-[1.02]" : "border-border shadow-sm"} bg-background`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                                <p className="text-muted-foreground mb-6">{pkg.description}</p>
                                <div className="text-3xl font-bold mb-8">{pkg.price}</div>
                                <ul className="space-y-3 mb-8 flex-1">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-primary shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full" variant={pkg.popular ? "default" : "outline"} asChild>
                                    <Link href="/contact">{pkg.cta}</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight">Commercial, Office &amp; Restaurant</h2>
                            <p className="text-lg text-muted-foreground">
                                Keep businesses looking their best. From offices to cafes, we provide reliable cleaning customized to your operational hours and health standards.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <Check className="h-5 w-5 text-primary" />
                                    <span>Office &amp; workspace cleaning</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-5 w-5 text-primary" />
                                    <span>Restaurant dining room &amp; restroom sanitation</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-5 w-5 text-primary" />
                                    <span>After-hours commercial maintenance</span>
                                </li>
                            </ul>
                            <Button size="lg" asChild>
                                <Link href="/contact">Request Commercial Quote</Link>
                            </Button>
                        </div>
                        <div className="flex-1 relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/office-cleaning.jpg"
                                alt="Modern office ready after professional cleaning"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
