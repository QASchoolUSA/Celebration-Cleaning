import { MetadataRoute } from "next";
import { cities } from "@/data/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://celebrationcleaning.com";

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/guides/airbnb-turnover-checklist-florida`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.85,
        },
    ];

    // City hubs only — city×service URLs are noindex and must not appear in the sitemap.
    const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
        url: `${baseUrl}/cleaning-services/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
    }));

    return [...staticRoutes, ...cityRoutes];
}
