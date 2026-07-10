import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cities, services } from "@/data/seo-data";
import { CTA } from "@/components/sections/CTA";
import { Sparkles, CheckCircle, ShieldCheck, Award } from "lucide-react";

interface Props {
    params: Promise<{
        city: string;
        service: string;
    }>;
}

export async function generateStaticParams() {
    const params: { city: string; service: string }[] = [];

    for (const city of cities) {
        for (const service of services) {
            params.push({
                city: city.slug,
                service: service.slug,
            });
        }
    }

    return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const city = cities.find((c) => c.slug === resolvedParams.city);
    const service = services.find((s) => s.slug === resolvedParams.service);

    if (!city || !service) {
        return { title: "Service Not Found" };
    }

    const title = `Best ${service.name} in ${city.name}, FL`;
    const description = `Looking for professional ${service.name.toLowerCase()} in ${city.name}? Celebration Cleaning provides top-rated, reliable cleaning services in ${city.name}, FL. Book today!`;

    return {
        title,
        description,
        alternates: {
            canonical: `https://www.celebrationcleaning.com/cleaning-services/${city.slug}/${service.slug}`,
        },
        keywords: [
            ...service.keywords,
            `${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
            `cleaning services ${city.name}`,
        ],
        openGraph: {
            title,
            description,
            url: `https://www.celebrationcleaning.com/cleaning-services/${city.slug}/${service.slug}`,
            siteName: "Celebration Cleaning",
            locale: "en_US",
            type: "website",
            images: [{ url: service.image }],
        },
    };
}

export default async function CityServicePage({ params }: Props) {
    const resolvedParams = await params;
    const city = cities.find((c) => c.slug === resolvedParams.city);
    const service = services.find((s) => s.slug === resolvedParams.service);

    if (!city || !service) {
        notFound();
    }

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: service.name,
        name: `${service.name} in ${city.name}, FL`,
        image: `https://www.celebrationcleaning.com${service.image}`,
        provider: {
            "@type": "ProfessionalService",
            name: "Celebration Cleaning",
            image: "https://www.celebrationcleaning.com/images/hero-home.jpg",
            telephone: "+16893882588",
            address: {
                "@type": "PostalAddress",
                addressLocality: city.name,
                addressRegion: "FL",
                addressCountry: "US",
            },
            sameAs: [
                "https://www.facebook.com/celebrationcleaning",
                "https://www.instagram.com/celebrationcleaning",
            ],
        },
        areaServed: {
            "@type": "City",
            name: city.name,
        },
        description: service.description,
        url: `https://www.celebrationcleaning.com/cleaning-services/${city.slug}/${service.slug}`,
        about: [
            { "@type": "Thing", name: "Florida Professional Cleaning Services" },
            { "@type": "Service", name: service.name },
            { "@type": "City", name: city.name },
        ],
        mentions: [
            { "@type": "Thing", name: "Residential House Cleaning" },
            { "@type": "Thing", name: "Short-Term Rental Turnover Cleaning" },
            { "@type": "Thing", name: "Move-Out Cleaning" },
            { "@type": "Thing", name: "Commercial Office Cleaning" },
        ],
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative overflow-hidden isolate pt-28 pb-24 text-white">
                <Image
                    src={service.image}
                    alt={`${service.name} in ${city.name}, Florida`}
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/40" />
                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
                    <div className="inline-flex justify-center items-center gap-2 text-sm font-semibold text-secondary mb-6">
                        <Sparkles className="h-4 w-4" />
                        <span>
                            Top-Rated {service.name} in {city.name}, FL
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                        Professional {service.name} in {city.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/85 leading-relaxed mb-10 max-w-3xl mx-auto">
                        {service.description} We serve all neighborhoods in {city.name}, providing meticulous care for your space.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="/contact"
                            className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition shadow-xl shadow-primary/25"
                        >
                            Get a Free Quote
                        </a>
                        <a
                            href="tel:16893882588"
                            className="w-full sm:w-auto bg-white/10 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/20 transition backdrop-blur-sm"
                        >
                            Call (689) 388-2588
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="container relative z-10 px-4 max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-16 items-start">
                        <div className="lg:col-span-3">
                            <h2 className="text-4xl font-extrabold mb-12 text-slate-900 leading-tight">
                                Why Choose Us for <span className="text-primary">{service.name}</span> in {city.name}?
                            </h2>

                            <div className="space-y-8">
                                <div className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                        <ShieldCheck className="w-6 h-6 text-secondary group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-slate-900 mb-2">Local {city.name} Experts</h3>
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            Our cleaners know the {city.name} area thoroughly and arrive on-time, every time, understanding the specific needs of local homes and businesses.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <CheckCircle className="w-6 h-6 text-primary group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-slate-900 mb-2">Eco-Friendly Solutions</h3>
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            We use safe, non-toxic products to protect your family, guests, and pets while delivering an immaculate clean.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                                        <Award className="w-6 h-6 text-emerald-500 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-slate-900 mb-2">Satisfaction Guaranteed</h3>
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            If you&apos;re not 100% satisfied with our {service.name.toLowerCase()}, we will return and re-clean the area for free.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative mt-12 h-64 rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src={service.image}
                                    alt={`${service.name} detail shot`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-2 relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-50 rounded-full" />

                            <div className="relative bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-8 shadow-2xl">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-extrabold mb-2 text-slate-900">
                                        Need {service.name} Fast?
                                    </h3>
                                    <p className="mb-8 text-slate-600 font-medium">
                                        We have availability in {city.name}. Request your quote now.
                                    </p>

                                    <form className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-white/50 focus:bg-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                                            disabled
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-white/50 focus:bg-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                                            disabled
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-white/50 focus:bg-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                                            disabled
                                        />
                                        <button
                                            type="button"
                                            className="w-full bg-secondary text-white font-bold py-4 rounded-xl hover:bg-secondary/90 transition shadow-lg shadow-secondary/25 mt-2 disabled:opacity-50"
                                            disabled
                                        >
                                            Request Availability
                                        </button>
                                        <p className="text-xs text-center text-slate-400 mt-4">
                                            *This is a demonstration form
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
