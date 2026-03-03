import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cities, services } from '@/data/seo-data';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { MapPin, ArrowRight } from "lucide-react";
import Link from 'next/link';

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
    const citySlug = resolvedParams.city;
    const city = cities.find((c) => c.slug === citySlug);

    if (!city) {
        return {
            title: 'City Not Found - Celebration Cleaning',
        };
    }

    return {
        title: `Professional Cleaning Services in ${city.name}, FL | Celebration Cleaning`,
        description: city.description,
        openGraph: {
            title: `Professional Cleaning Services in ${city.name}, FL`,
            description: city.description,
            url: `https://www.celebrationcleaning.com/cleaning-services/${city.slug}`,
            siteName: 'Celebration Cleaning',
            locale: 'en_US',
            type: 'website',
        },
    };
}

export default async function CityPage({ params }: Props) {
    const resolvedParams = await params;
    const citySlug = resolvedParams.city;
    const city = cities.find((c) => c.slug === citySlug);

    if (!city) {
        notFound();
    }

    // Generate Service Schema for the overall City 
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Celebration Cleaning",
        "image": "https://www.celebrationcleaning.com/logo.png",
        "@id": `https://www.celebrationcleaning.com/cleaning-services/${city.slug}`,
        "url": `https://www.celebrationcleaning.com/cleaning-services/${city.slug}`,
        "telephone": "+16893882588",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": city.name,
            "addressRegion": "FL",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "City",
            "name": city.name
        },
        "description": city.description,
        "sameAs": [
            // Social links could go here
        ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            {/* Premium Hero Section */}
            <section className="relative bg-[#fafafa] pt-24 pb-20 overflow-hidden isolate">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse-slow"></div>
                </div>

                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <div className="inline-flex justify-center items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-md shadow-sm mb-6 mx-auto">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>Serving {city.region}</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
                        Professional Cleaning in <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{city.name}, FL</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
                        {city.description}
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Specialized Services in {city.name}</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">Select a service to view specialized information and request a quote.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map(service => (
                            <div key={service.slug} className="group relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                                <Link
                                    href={`/cleaning-services/${city.slug}/${service.slug}`}
                                    className="relative block h-full p-8 bg-white border border-slate-100 rounded-3xl shadow-lg shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>

                                    <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">{service.name}</h3>
                                    <p className="text-slate-600 mb-8 line-clamp-3">{service.description}</p>

                                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                                        <span className="text-sm font-bold text-slate-900">View Details</span>
                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <WhyChooseUs />
            <Testimonials />
            <CTA />
        </div>
    );
}
