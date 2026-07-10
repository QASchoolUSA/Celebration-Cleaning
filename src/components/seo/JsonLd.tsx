import { cities, services, coreEntities } from "@/data/seo-data";

const SITE_URL = "https://www.celebrationcleaning.com";

export function OrganizationJsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": `${SITE_URL}/#organization`,
                name: "Celebration Cleaning",
                url: SITE_URL,
                logo: {
                    "@type": "ImageObject",
                    url: `${SITE_URL}/images/hero-home.jpg`,
                },
                image: `${SITE_URL}/images/hero-home.jpg`,
                telephone: "+16893882588",
                description:
                    "Professional residential and commercial cleaning services across Florida metros including Miami, Orlando, Tampa, and more.",
                sameAs: [
                    "https://www.facebook.com/celebrationcleaning",
                    "https://www.instagram.com/celebrationcleaning",
                    "https://www.linkedin.com/company/celebrationcleaning",
                    "https://www.yelp.com/biz/celebration-cleaning",
                    "https://www.bbb.org/us/fl/celebration-cleaning",
                ],
                about: coreEntities.map((entity) => ({
                    "@type": entity.type === "Place" ? "Place" : "Thing",
                    name: entity.name,
                })),
                mentions: [
                    { "@type": "Thing", name: "House Cleaning" },
                    { "@type": "Thing", name: "Apartment Cleaning" },
                    { "@type": "Thing", name: "Turnover Cleaning" },
                    { "@type": "Thing", name: "Move-Out Cleaning" },
                    { "@type": "Thing", name: "Post-Construction Cleaning" },
                    { "@type": "Thing", name: "Airbnb Cleaning" },
                    { "@type": "Thing", name: "Commercial Cleaning" },
                    { "@type": "Thing", name: "Office Cleaning" },
                    { "@type": "Thing", name: "Restaurant Cafe Cleaning" },
                    { "@type": "Place", name: "Florida" },
                    ...cities.map((city) => ({
                        "@type": "City",
                        name: city.name,
                    })),
                ],
            },
            {
                "@type": "WebSite",
                "@id": `${SITE_URL}/#website`,
                url: SITE_URL,
                name: "Celebration Cleaning",
                description:
                    "Florida's premier cleaning company for homes, apartments, Airbnb turnovers, offices, and restaurants.",
                publisher: { "@id": `${SITE_URL}/#organization` },
                inLanguage: "en-US",
                potentialAction: {
                    "@type": "SearchAction",
                    target: {
                        "@type": "EntryPoint",
                        urlTemplate: `${SITE_URL}/cleaning-services/{search_term_string}`,
                    },
                    "query-input": "required name=search_term_string",
                },
            },
            {
                "@type": "ProfessionalService",
                "@id": `${SITE_URL}/#professionalservice`,
                name: "Celebration Cleaning",
                url: SITE_URL,
                image: `${SITE_URL}/images/hero-home.jpg`,
                telephone: "+16893882588",
                priceRange: "$$",
                address: {
                    "@type": "PostalAddress",
                    addressRegion: "FL",
                    addressCountry: "US",
                },
                areaServed: cities.map((city) => ({
                    "@type": "City",
                    name: city.name,
                    containedInPlace: {
                        "@type": "State",
                        name: "Florida",
                    },
                })),
                sameAs: [
                    "https://www.facebook.com/celebrationcleaning",
                    "https://www.instagram.com/celebrationcleaning",
                    "https://g.page/celebrationcleaning",
                    "https://www.yelp.com/biz/celebration-cleaning",
                ],
                about: coreEntities.map((entity) => ({
                    "@type": entity.type === "Place" ? "Place" : "Service",
                    name: entity.name,
                })),
                mentions: services.map((service) => ({
                    "@type": "Service",
                    name: service.name,
                    url: `${SITE_URL}/services#${service.slug}`,
                })),
                hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Celebration Cleaning Services",
                    itemListElement: services.map((service, index) => ({
                        "@type": "Offer",
                        position: index + 1,
                        itemOffered: {
                            "@type": "Service",
                            name: service.name,
                            description: service.description,
                            image: `${SITE_URL}${service.image}`,
                        },
                    })),
                },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
