
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-16 md:pt-20 lg:pt-32 pb-16 md:pb-24">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
            <div className="absolute top-0 right-0 -mr-[20rem] -mt-[20rem] w-[50rem] h-[50rem] bg-gradient-to-bl from-secondary/20 to-transparent blur-3xl opacity-60 rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-[20rem] -mb-[20rem] w-[50rem] h-[50rem] bg-gradient-to-tr from-primary/20 to-transparent blur-3xl opacity-60 rounded-full pointer-events-none" />

            <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-8">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-muted/50 backdrop-blur-sm">
                    <Star className="mr-2 h-4 w-4 fill-secondary text-secondary" />
                    <span className="text-muted-foreground">Premier Cleaning Services in Your Area</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl">
                    Experience the Joy of a <span className="text-primary">Spotless Home</span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Professional, reliable, and thorough cleaning services tailored to your lifestyle.
                    Let us handle the mess while you celebrate life.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button asChild size="lg" className="text-lg px-8 h-12 rounded-full shadow-xl shadow-primary/25 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 font-bold">
                        <Link href="/contact" className="whitespace-nowrap flex items-center">
                            Get a Free Quote <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-lg px-8 h-12 rounded-full border-2 hover:bg-secondary/10">
                        <Link href="/services">
                            Explore Our Services
                        </Link>
                    </Button>
                </div>

                {/* Stats / Trust Indicators */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t w-full max-w-4xl mt-12 bg-background/50 backdrop-blur border rounded-2xl p-6 md:p-8">
                    <div className="space-y-1">
                        <h3 className="text-3xl font-bold text-primary">500+</h3>
                        <p className="text-sm text-muted-foreground font-medium">Happy Clients</p>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-3xl font-bold text-primary">100%</h3>
                        <p className="text-sm text-muted-foreground font-medium">Satisfaction</p>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-3xl font-bold text-primary">5★</h3>
                        <p className="text-sm text-muted-foreground font-medium">Rated Service</p>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-3xl font-bold text-primary">24/7</h3>
                        <p className="text-sm text-muted-foreground font-medium">Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
