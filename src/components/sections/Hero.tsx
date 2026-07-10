import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden isolate min-h-[85vh] flex items-center">
            <Image
                src="/images/hero-home.jpg"
                alt="Professional cleaner polishing a bright Florida home interior"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-24 md:py-32">
                <div className="max-w-2xl space-y-8 text-white">
                    <p className="text-sm font-semibold tracking-[0.2em] uppercase text-secondary">
                        Celebration Cleaning
                    </p>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
                        Celebration Cleaning
                    </h1>

                    <p className="text-xl text-white/85 max-w-xl leading-relaxed">
                        Spotless Florida homes, rentals, and workplaces—on time, every time.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Button
                            asChild
                            size="lg"
                            className="text-lg px-8 h-14 rounded-full shadow-xl shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 font-bold bg-primary hover:bg-primary/90 text-white group"
                        >
                            <Link href="/contact" className="flex items-center">
                                Get a Free Quote
                                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="text-lg px-8 h-14 rounded-full border-2 border-white/40 bg-white/10 text-white hover:bg-white/20 font-semibold backdrop-blur-sm"
                        >
                            <Link href="/services">Explore Services</Link>
                        </Button>
                    </div>

                    <div className="pt-4 flex items-center gap-3 text-sm text-white/80">
                        <div className="flex text-secondary">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <span>Trusted by Florida homeowners &amp; property managers</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
