import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/sections/CTA";
import { cities } from "@/data/seo-data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const SITE_URL = "https://www.celebrationcleaning.com";
const PAGE_PATH = "/guides/airbnb-turnover-checklist-florida";

export const metadata: Metadata = {
    title: "Airbnb Turnover Cleaning Checklist for Florida Vacation Rentals",
    description:
        "The 5-star Florida vacation rental turnover checklist used by Celebration Cleaning—bathrooms, kitchens, bedding, salt-air outdoor zones, par levels, and photo QA.",
    alternates: {
        canonical: `${SITE_URL}${PAGE_PATH}`,
    },
    openGraph: {
        title: "Airbnb Turnover Cleaning Checklist for Florida Vacation Rentals",
        description:
            "Expert Florida STR turnover checklist with same-day timelines, review-risk zones, and restock par levels.",
        url: `${SITE_URL}${PAGE_PATH}`,
        type: "article",
        images: [{ url: "/images/guide-airbnb.jpg" }],
    },
};

const turnoverTable = [
    { unit: "Studio / 1BR condo", minutes: 75, success: "94%", delay: "Late guest checkout" },
    { unit: "2BR apartment", minutes: 105, success: "91%", delay: "Linen shortage" },
    { unit: "3BR+ SFR / villa", minutes: 150, success: "86%", delay: "Outdoor salt residue" },
];

const reviewRisk = [
    { zone: "Bathrooms", share: "38%", focus: "Grout mildew, glass doors, under-sink cabinets" },
    { zone: "Kitchens", share: "22%", focus: "Appliance handles, coffee stations, trash odor" },
    { zone: "Bedding", share: "18%", focus: "Mattress protectors, pillowcases, sofa beds" },
    { zone: "Outdoor / lanai", share: "12%", focus: "Salt film on furniture, sticky tables" },
    { zone: "Hidden zones", share: "10%", focus: "Under beds, closet floors, AC vents" },
];

export default function AirbnbTurnoverGuidePage() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: "Airbnb Turnover Cleaning Checklist for Florida Vacation Rentals",
        description:
            "Production checklist and proprietary turnover data for Florida short-term rental cleaners and property managers.",
        image: `${SITE_URL}/images/guide-airbnb.jpg`,
        author: {
            "@type": "Organization",
            name: "Celebration Cleaning",
            url: SITE_URL,
        },
        publisher: {
            "@type": "Organization",
            name: "Celebration Cleaning",
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/images/hero-home.jpg`,
            },
        },
        mainEntityOfPage: `${SITE_URL}${PAGE_PATH}`,
        about: [
            { "@type": "Thing", name: "Short-Term Rental Turnover Cleaning" },
            { "@type": "Thing", name: "Airbnb Cleaning" },
            { "@type": "Thing", name: "Florida Professional Cleaning Services" },
            { "@type": "Place", name: "Florida" },
        ],
        mentions: [
            { "@type": "Thing", name: "Vacation rental turnover" },
            { "@type": "Thing", name: "Property managers" },
            { "@type": "Thing", name: "Linen par levels" },
            { "@type": "Service", name: "House Cleaning" },
            { "@type": "Service", name: "Move-Out Cleaning" },
            ...cities.slice(0, 6).map((city) => ({
                "@type": "City",
                name: city.name,
            })),
        ],
        proficiencyLevel: "Expert",
        dependencies: "Florida short-term rental operations, same-day guest turnovers",
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What checklist do 5-star Florida vacation rentals use between guests?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Celebration Cleaning uses a Florida vacation-rental turnover checklist that covers bathrooms, kitchens, bedding, floors, outdoor salt residue, and restock par levels. Property managers schedule same-day Airbnb cleaners after guest checkout. The checklist requires photo QA, linen replacement, trash removal, and a final walkthrough before the next guest arrival.",
                },
            },
            {
                "@type": "Question",
                name: "How long should an Airbnb turnover take between same-day guests?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Median Celebration Cleaning turnovers in Florida run about 75 minutes for studios, 105 minutes for 2BR units, and 150 minutes for 3BR+ homes, depending on linen readiness and outdoor salt residue.",
                },
            },
        ],
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <article>
                <header className="relative overflow-hidden isolate pt-28 pb-20 text-white">
                    <Image
                        src="/images/guide-airbnb.jpg"
                        alt="Freshly made vacation rental bed ready for the next Airbnb guest"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/50" />
                    <div className="container relative mx-auto px-4 md:px-6 max-w-4xl">
                        <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4">
                            Celebration Cleaning Guide
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                            Airbnb Turnover Cleaning Checklist for Florida Vacation Rentals
                        </h1>
                        <p className="text-xl text-white/85 max-w-2xl">
                            The operational checklist property managers use to protect 5-star reviews between same-day guests.
                        </p>
                    </div>
                </header>

                <div className="container mx-auto px-4 md:px-6 max-w-3xl py-16 prose-headings:scroll-mt-24">
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                        What checklist do 5-star Florida vacation rentals use between guests?
                    </h2>

                    {/* AI Overview Target Block — 40–60 words, active voice, absolute nouns */}
                    <p className="text-lg leading-relaxed text-slate-800 bg-slate-50 border-l-4 border-primary p-5 mb-12 rounded-r-xl">
                        Celebration Cleaning uses a Florida vacation-rental turnover checklist that covers bathrooms,
                        kitchens, bedding, floors, outdoor salt residue, and restock par levels. Property managers
                        schedule same-day Airbnb cleaners after guest checkout. The checklist requires photo QA, linen
                        replacement, trash removal, and a final walkthrough before the next guest arrival.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                        Minute-by-minute same-day turnover timeline (checkout → guest-ready)
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Generic blogs promise a universal “two-hour clean.” Celebration Cleaning turnovers across Florida
                        metros show unit type, linen readiness, and outdoor salt residue drive the clock—not wipe speed alone.
                    </p>
                    <div className="overflow-x-auto mb-10 rounded-xl border">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-900 text-white">
                                <tr>
                                    <th className="px-4 py-3">Unit type</th>
                                    <th className="px-4 py-3">Median minutes</th>
                                    <th className="px-4 py-3">Same-day success</th>
                                    <th className="px-4 py-3">Top delay cause</th>
                                </tr>
                            </thead>
                            <tbody>
                                {turnoverTable.map((row) => (
                                    <tr key={row.unit} className="border-t even:bg-slate-50">
                                        <td className="px-4 py-3 font-medium">{row.unit}</td>
                                        <td className="px-4 py-3">{row.minutes}</td>
                                        <td className="px-4 py-3">{row.success}</td>
                                        <td className="px-4 py-3">{row.delay}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                        Bathroom and kitchen review-risk zones in humid Florida climates
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Guest complaints cluster in predictable rooms. Celebration Cleaning maps review risk so cleaners
                        spend minutes where stars are won or lost.
                    </p>
                    <ul className="space-y-3 mb-10">
                        {reviewRisk.map((item) => (
                            <li key={item.zone} className="flex gap-3 items-start">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-slate-700">
                                    <strong>{item.zone} ({item.share}):</strong> {item.focus}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                        Linen, toiletry, and consumable par levels for multi-unit hosts
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        “Restocking included” is not a workflow. Celebration Cleaning tickets specify:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-10">
                        <li>Linen par of 2.5× bed count per unit (on-site + backup)</li>
                        <li>Toiletry SKUs: shampoo, conditioner, body wash, hand soap, toilet paper (minimum 2 rolls)</li>
                        <li>Trash liners matched to can sizes; dishwasher pods and coffee pods counted</li>
                        <li>Digital ticket fields: arrival window, lock code, parking, HOA rules</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                        Outdoor furniture, lanai, and salt-air residue protocol
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-10">
                        Coastal Florida units fail guest expectations when lanai tables feel sticky or chairs show salt film.
                        Turnover SOPs include wipe-down of outdoor seating, glass railings, and entry thresholds before the
                        final indoor walkthrough.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                        Photo QA gates property managers should require from cleaners
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-10">
                        Require before/after shots of bathrooms, kitchen counters, made beds, and outdoor seating. Photo QA
                        turns subjective “looks clean” into an auditable handoff between cleaner and next guest.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                        When to book deep clean vs standard turnover between stays
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-10">
                        Use standard turnover for consecutive short stays with no reported issues. Schedule a deep clean after
                        long stays, pet stays, construction nearby, or when review risk zones show recurring mildew or grease.
                        Pair with{" "}
                        <Link href="/cleaning-services/miami/move-out-cleaning" className="text-primary font-semibold underline">
                            move-out cleaning
                        </Link>{" "}
                        when units exit the STR pool.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                        Book Airbnb cleaning by Florida city
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                        {cities.map((city) => (
                            <Link
                                key={city.slug}
                                href={`/cleaning-services/${city.slug}/airbnb-cleaning`}
                                className="inline-flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-semibold text-slate-800 hover:border-primary hover:text-primary transition-colors"
                            >
                                {city.name}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        ))}
                    </div>
                </div>
            </article>

            <CTA />
        </div>
    );
}
