
import { MetadataRoute } from "next";
import { cities, services } from "@/data/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.celebrationcleaning.com";

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
    ];

    const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
        url: `${baseUrl}/cleaning-services/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
    }));

    const cityServiceRoutes: MetadataRoute.Sitemap = [];
    for (const city of cities) {
        for (const service of services) {
            cityServiceRoutes.push({
                url: `${baseUrl}/cleaning-services/${city.slug}/${service.slug}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.8,
            });
        }
    }

    return [...staticRoutes, ...cityRoutes, ...cityServiceRoutes];
}
