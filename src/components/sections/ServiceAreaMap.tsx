import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { cities } from "@/data/seo-data";

export function ServiceAreaMap() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Map Graphic (Abstract) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
                <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[120%] h-auto">
                    <path d="M400 100 Q 500 200, 600 100 T 800 200" stroke="currentColor" strokeWidth="2" />
                    <path d="M400 300 Q 500 400, 600 300 T 800 400" stroke="currentColor" strokeWidth="2" />
                    <path d="M400 500 Q 500 600, 600 500 T 800 600" stroke="currentColor" strokeWidth="2" />
                    <circle cx="400" cy="300" r="200" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
                </svg>
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary mb-6">
                            <MapPin className="mr-2 h-4 w-4" />
                            Florida Service Areas
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                            Bringing Excellence to Your Neighborhood
                        </h2>
                        <p className="text-xl text-slate-600">
                            We proudly serve Florida's most distinguished communities. Select your city to explore exclusive cleaning services tailored for your area.
                        </p>
                    </div>
                </div>

                {/* Cities Interactive Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {cities.map((city) => (
                        <Link
                            key={city.slug}
                            href={`/cleaning-services/${city.slug}`}
                            className="group relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                        >
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-slate-50 rounded-full group-hover:bg-primary/5 transition-colors duration-500"></div>

                            <div className="relative z-10">
                                <MapPin className="h-6 w-6 text-slate-400 group-hover:text-primary mb-4 transition-colors" />
                                <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors">{city.name}</h3>
                                <p className="text-sm text-slate-500 mt-1">{city.region}</p>
                            </div>

                            <div className="relative z-10 mt-6 flex justify-end">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                                    <ArrowUpRight className="h-4 w-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
