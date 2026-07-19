import { MetadataRoute } from "next";

/** Explicitly allow answer-engine / AI fetchers (GEO). */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: "*", allow: "/", disallow: "/private/" },
            { userAgent: "GPTBot", allow: "/" },
            { userAgent: "ChatGPT-User", allow: "/" },
            { userAgent: "Google-Extended", allow: "/" },
            { userAgent: "ClaudeBot", allow: "/" },
            { userAgent: "anthropic-ai", allow: "/" },
            { userAgent: "PerplexityBot", allow: "/" },
            { userAgent: "Applebot-Extended", allow: "/" },
        ],
        sitemap: "https://celebrationcleaning.com/sitemap.xml",
        host: "https://celebrationcleaning.com",
    };
}
