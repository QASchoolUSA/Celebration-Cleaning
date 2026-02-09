
import Link from "next/link";
import { Home, Briefcase, Truck, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "Residential Cleaning",
        description: "Regular housekeeping to keep your home fresh and inviting. Weekly, bi-weekly, or monthly.",
        icon: Home,
        href: "/services/residential",
    },
    {
        title: "Deep Cleaning",
        description: "A thorough top-to-bottom clean for those times when your home needs extra attention.",
        icon: Sparkles,
        href: "/services/deep-cleaning",
    },
    {
        title: "Move-In / Move-Out",
        description: "Ensure a fresh start or a clean handover with our comprehensive moving cleaning services.",
        icon: Truck,
        href: "/services/moving",
    },
    {
        title: "Commercial Cleaning",
        description: "Create a professional environment for your business with our office cleaning solutions.",
        icon: Briefcase,
        href: "/services/commercial",
    },
];

export function Services() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Cleaning Services for Every Need</h2>
                    <p className="text-lg text-muted-foreground">
                        Whether you need a quick touch-up or a deep scrub, we have the perfect package for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="group relative flex flex-col p-6 bg-background rounded-2xl border border-primary/10 shadow-sm hover:shadow-xl hover:shadow-secondary/20 hover:border-secondary/50 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-muted-foreground mb-4 flex-1">
                                {service.description}
                            </p>
                            <div className="flex items-center text-primary font-bold text-sm mt-auto group-hover:underline decoration-2 underline-offset-4">
                                Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button asChild size="lg" variant="secondary" className="rounded-full">
                        <Link href="/services">View All Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
