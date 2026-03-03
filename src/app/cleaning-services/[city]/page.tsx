import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cities, services } from '@/data/seo-data';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';

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

            {/* 
        Ideally, these components would accept props to inject the `city.name`.
        For now we use the standard components. A future refactor could make them accept a `titleOverride`
      */}
            <section className="bg-primary pt-24 pb-12 text-center text-primary-foreground">
                <div className="container px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Professional Cleaning Services in {city.name}, FL
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
                        {city.description}
                    </p>
                </div>
            </section>

            <div className="py-12 bg-white">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Specialized Services in {city.name}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map(service => (
                            <a
                                key={service.slug}
                                href={`/cleaning-services/${city.slug}/${service.slug}`}
                                className="block p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-gray-50"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-primary">{service.name}</h3>
                                <p className="text-gray-600 text-sm line-clamp-2">{service.description}</p>
                                <span className="mt-4 inline-block text-secondary font-medium">Learn More &rarr;</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <WhyChooseUs />
            <Testimonials />
            <CTA />
        </div>
    );
}
