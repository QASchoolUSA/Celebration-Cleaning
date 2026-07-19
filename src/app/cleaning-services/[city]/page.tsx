import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, services } from "@/data/seo-data";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { MapPin, ArrowRight } from "lucide-react";

interface Props {
    params: Promise<{
        city: string;
    }>;
}

export async function generateStaticParams() {
    return cities.map((city) => ({
        city: city.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const city = cities.find((c) => c.slug === resolvedParams.city);

    if (!city) {
        return { title: "City Not Found" };
    }

    return {
        title: `Professional Cleaning Services in ${city.name}, FL`,
        description: city.description,
        alternates: {
            canonical: `https://celebrationcleaning.com/cleaning-services/${city.slug}`,
        },
        openGraph: {
            title: `Professional Cleaning Services in ${city.name}, FL`,
            description: city.description,
            url: `https://celebrationcleaning.com/cleaning-services/${city.slug}`,
            siteName: "Celebration Cleaning",
            locale: "en_US",
            type: "website",
            images: [{ url: "/images/hero-home.jpg" }],
        },
    };
}

export default async function CityPage({ params }: Props) {
    const resolvedParams = await params;
    const city = cities.find((c) => c.slug === resolvedParams.city);

    if (!city) {
        notFound();
    }

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Celebration Cleaning",
        image: "https://celebrationcleaning.com/images/hero-home.jpg",
        "@id": `https://celebrationcleaning.com/cleaning-services/${city.slug}`,
        url: `https://celebrationcleaning.com/cleaning-services/${city.slug}`,
        telephone: "+16893882588",
        priceRange: "$$",
        address: {
            "@type": "PostalAddress",
            addressLocality: city.name,
            addressRegion: "FL",
            addressCountry: "US",
        },
        areaServed: {
            "@type": "City",
            name: city.name,
        },
        description: city.description,
        about: [
            { "@type": "Thing", name: "Florida Professional Cleaning Services" },
            { "@type": "City", name: city.name },
        ],
        mentions: services.map((s) => ({ "@type": "Service", name: s.name })),
    };
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: city.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
    };

    return (
        <div className="flex flex-col min-h-screen">
            <BreadcrumbJsonLd
                items={[
                    { name: "Home", path: "/" },
                    { name: "Services", path: "/services" },
                    { name: city.name, path: `/cleaning-services/${city.slug}` },
                ]}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <section className="relative overflow-hidden isolate pt-28 pb-24 text-white">
                <Image
                    src="/images/hero-home.jpg"
                    alt={`Professional cleaning services in ${city.name}, Florida`}
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/45" />
                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <div className="inline-flex justify-center items-center gap-2 text-sm font-semibold text-secondary mb-6">
                        <MapPin className="h-4 w-4" />
                        <span>Serving {city.region}</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Professional Cleaning in {city.name}, FL
                    </h1>
                    <p className="text-xl md:text-2xl text-white/85 leading-relaxed mb-8">{city.description}</p>
                </div>
            </section>

            <section className="py-20 bg-white relative">
                <div className="container relative z-10 mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Specialized Services in {city.name}
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Select a service to view specialized information and request a quote.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/cleaning-services/${city.slug}/${service.slug}`}
                                className="group relative block overflow-hidden rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-all duration-500 bg-white"
                            >
                                <div className="relative h-44">
                                    <Image
                                        src={service.image}
                                        alt={`${service.name} in ${city.name}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors">
                                        {service.name}
                                    </h3>
                                    <p className="text-slate-600 mb-6 line-clamp-2 text-sm">{service.description}</p>
                                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                                        <span className="text-sm font-bold text-slate-900">View Details</span>
                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
                        <div>
                            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
                                Local cleaning guide
                            </p>
                            <h2 className="text-3xl font-bold text-slate-900 mb-5">
                                Cleaning homes across {city.name}
                            </h2>
                            <p className="text-lg leading-relaxed text-slate-700">
                                {city.housingContext}
                            </p>
                            <p className="mt-5 leading-relaxed text-slate-600">
                                We serve residents in and around {city.neighborhoods.join(", ")}. Exact availability
                                depends on the property address and schedule, so include building, gate, parking, pet,
                                and surface-care notes when requesting a quote. That information helps match the visit
                                to the home instead of relying on a generic checklist.
                            </p>
                        </div>
                        <aside className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-900">What local visits often prioritize</h3>
                            <ul className="mt-5 space-y-3">
                                {city.cleaningPriorities.map((priority) => (
                                    <li key={priority} className="flex gap-3 text-slate-700">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                                        {priority}
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-7">
                            Questions about cleaning in {city.name}
                        </h2>
                        <div className="grid gap-5 md:grid-cols-2">
                            {city.faqs.map((faq) => (
                                <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6">
                                    <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                                    <p className="mt-3 leading-relaxed text-slate-600">{faq.answer}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <WhyChooseUs />
            <Testimonials />
            <CTA />
        </div>
    );
}
