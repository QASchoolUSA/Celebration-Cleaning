import Link from "next/link";
import { cities } from "@/data/seo-data";

/** City hubs to feature from home for crawl discovery. Windermere omitted per recovery scope. */
const FEATURED_HUB_SLUGS = [
    "miami",
    "orlando",
    "tampa",
    "jacksonville",
    "boca-raton",
    "fort-lauderdale",
    "sarasota",
    "coral-gables",
    "winter-park",
    "wellington",
] as const;

export function SiteHubLinks() {
    const featured = FEATURED_HUB_SLUGS.map((slug) => cities.find((c) => c.slug === slug)).filter(
        (c): c is (typeof cities)[number] => Boolean(c),
    );

    return (
        <section className="py-16 bg-white border-y border-slate-100">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="max-w-2xl mb-10">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
                        Explore Celebration Cleaning
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Start with how we work, the nine service types, or a Florida city hub with neighborhood
                        notes—then book online.
                    </p>
                </div>

                <ul className="flex flex-wrap gap-3 mb-10 text-sm font-medium">
                    <li>
                        <Link
                            href="/about"
                            className="inline-flex rounded-lg border border-slate-200 px-4 py-2 text-slate-800 hover:border-primary hover:text-primary transition-colors"
                        >
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/services"
                            className="inline-flex rounded-lg border border-slate-200 px-4 py-2 text-slate-800 hover:border-primary hover:text-primary transition-colors"
                        >
                            All services
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="inline-flex rounded-lg border border-slate-200 px-4 py-2 text-slate-800 hover:border-primary hover:text-primary transition-colors"
                        >
                            Contact &amp; quote
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/guides/airbnb-turnover-checklist-florida"
                            className="inline-flex rounded-lg border border-slate-200 px-4 py-2 text-slate-800 hover:border-primary hover:text-primary transition-colors"
                        >
                            Airbnb turnover guide
                        </Link>
                    </li>
                </ul>

                <h3 className="text-lg font-bold text-slate-900 mb-4">City hubs</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {featured.map((city) => (
                        <li key={city.slug}>
                            <Link
                                href={`/cleaning-services/${city.slug}`}
                                className="block rounded-lg border border-slate-200 px-3 py-3 text-sm font-medium text-slate-800 hover:border-primary hover:text-primary transition-colors"
                            >
                                {city.name}
                                <span className="block text-xs font-normal text-slate-500 mt-0.5">
                                    {city.region}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <p className="mt-6 text-sm text-slate-500">
                    Full Florida coverage—including Naples, Palm Beach, and Coral Springs—is listed in the service
                    areas section below and in the site footer.
                </p>
            </div>
        </section>
    );
}
