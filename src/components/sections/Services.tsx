import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/seo-data";

export function Services() {
    const featured = services.slice(0, 4);

    return (
        <section className="py-24 bg-white relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="container relative mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Our Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                        Tailored Cleaning Solutions
                    </h3>
                    <p className="text-xl text-slate-600">
                        From weekly house cleans to Airbnb turnovers and restaurant sanitation—built for Florida living.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featured.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/services#${service.slug}`}
                            className="group relative block overflow-hidden rounded-3xl min-h-[280px]"
                        >
                            <Image
                                src={service.image}
                                alt={`${service.name} by Celebration Cleaning`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent" />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                <h4 className="text-2xl font-bold mb-2">{service.name}</h4>
                                <p className="text-white/80 mb-4 line-clamp-2 max-w-md">{service.description}</p>
                                <span className="inline-flex items-center text-sm font-bold text-secondary">
                                    Learn More
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center font-bold text-primary hover:underline"
                    >
                        View all nine services
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
