import { MetadataRoute } from "next";

/** Explicitly allow answer-engine / AI fetchers (GEO). */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: "*", allow: "/", disallow: "/private/" },
            {
                userAgent: [
                    "GPTBot",
                    "ChatGPT-User",
                    "ClaudeBot",
                    "Claude-User",
                    "PerplexityBot",
                    "Google-Extended",
                    "Amazonbot",
                    "Applebot-Extended",
                ],
                allow: "/",
            },
        ],
        sitemap: "https://celebrationcleaning.com/sitemap.xml",
        host: "https://celebrationcleaning.com",
    };
}
