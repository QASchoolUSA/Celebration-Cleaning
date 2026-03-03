import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cities, services } from '@/data/seo-data';
import { CTA } from '@/components/sections/CTA';
import { Sparkles, CheckCircle } from 'lucide-react';

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
    const citySlug = resolvedParams.city;
    const serviceSlug = resolvedParams.service;

    const city = cities.find((c) => c.slug === citySlug);
    const service = services.find((s) => s.slug === serviceSlug);

    if (!city || !service) {
        return { title: 'Service Not Found - Celebration Cleaning' };
    }

    const title = `Best ${service.name} in ${city.name}, FL | Celebration Cleaning`;
    const description = `Looking for professional ${service.name.toLowerCase()} in ${city.name}? Celebration Cleaning provides top-rated, reliable, and thorough cleaning services in ${city.name}, FL. Book today!`;

    return {
        title,
        description,
        keywords: [...service.keywords, `${service.name.toLowerCase()} ${city.name.toLowerCase()}`, `cleaning services ${city.name}`],
        openGraph: {
            title,
            description,
            url: `https://www.celebrationcleaning.com/cleaning-services/${city.slug}/${service.slug}`,
            siteName: 'Celebration Cleaning',
            locale: 'en_US',
            type: 'website',
        },
    };
}

export default async function CityServicePage({ params }: Props) {
    const resolvedParams = await params;
    const citySlug = resolvedParams.city;
    const serviceSlug = resolvedParams.service;

    const city = cities.find((c) => c.slug === citySlug);
    const service = services.find((s) => s.slug === serviceSlug);

    if (!city || !service) {
        notFound();
    }

    // Service specific Schema markup
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.name,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Celebration Cleaning",
            "image": "https://www.celebrationcleaning.com/logo.png",
            "telephone": "+16893882588",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": city.name,
                "addressRegion": "FL",
                "addressCountry": "US"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": city.name
        },
        "description": service.description,
        "url": `https://www.celebrationcleaning.com/cleaning-services/${city.slug}/${service.slug}`
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            {/* Hero Section */}
            <section className="bg-primary/5 py-20 border-b">
                <div className="container px-4 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                        <Sparkles className="w-4 h-4" />
                        Top-Rated {service.name} in {city.name}, FL
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-gray-900 leading-tight">
                        Professional <span className="text-primary">{service.name}</span> in <span className="text-secondary">{city.name}</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        {service.description} We serve all neighborhoods in {city.name}, providing meticulous care for your space.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition shadow-lg">
                            Get a Free Quote
                        </a>
                        <a href="tel:16893882588" className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/5 transition">
                            Call (689) 388-2588
                        </a>
                    </div>
                </div>
            </section>

            {/* Benefits Content */}
            <section className="py-20 bg-white">
                <div className="container px-4 max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Us for {service.name} in {city.name}?</h2>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <CheckCircle className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Local {city.name} Experts</h3>
                                        <p className="text-gray-600">Our cleaners know the {city.name} area thoroughly and arrive on-time, every time.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <CheckCircle className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Eco-Friendly Solutions</h3>
                                        <p className="text-gray-600">We use safe, non-toxic products to protect your family and pets.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <CheckCircle className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Satisfaction Guaranteed</h3>
                                        <p className="text-gray-600">If you're not 100% satisfied with our {service.name.toLowerCase()}, we will re-clean for free.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <CheckCircle className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Insured & Bonded</h3>
                                        <p className="text-gray-600">Total peace of mind while we clean your property in {city.region}.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary/10 rounded-2xl p-8 relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                            <h3 className="text-2xl font-bold mb-4 relative z-10 text-primary">Need {service.name} Fast?</h3>
                            <p className="mb-6 text-gray-700 relative z-10">We often have same-day or next-day availability in {city.name}. Request your quote now to secure your spot.</p>
                            <form className="space-y-4 relative z-10">
                                <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" disabled />
                                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" disabled />
                                <button type="button" className="w-full bg-secondary text-primary-foreground font-bold py-3 rounded-lg hover:bg-secondary/90 transition shadow-md">
                                    Request Availability
                                </button>
                                <p className="text-xs text-center text-gray-500 mt-2">*This is a demonstration form</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
