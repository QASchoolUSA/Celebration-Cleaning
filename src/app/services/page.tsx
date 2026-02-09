
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Services | Celebration Cleaning",
    description: "Explore our wide range of professional cleaning services, including residential, commercial, deep cleaning, and move-in/move-out services.",
};

const servicePackages = [
    {
        title: "Standard Cleaning",
        description: "Perfect for maintaining a tidy home on a regular basis.",
        price: "From $120",
        features: [
            "Dusting all surfaces",
            "Vacuuming and mopping floors",
            "Cleaning bathrooms and kitchen",
            "Making beds",
            "Emptying trash bins",
        ],
        cta: "Book Standard Clean",
    },
    {
        title: "Deep Cleaning",
        description: "A comprehensive clean to reach every nook and cranny.",
        price: "From $250",
        features: [
            "All Standard Cleaning items",
            "Cleaning inside appliances (oven, fridge)",
            "Washing baseboards and door frames",
            "Cleaning inside windows",
            "Detailed dusting of blinds/vents",
        ],
        cta: "Book Deep Clean",
        popular: true,
    },
    {
        title: "Move-In / Move-Out",
        description: "Ensure the property is spotless for the next chapter.",
        price: "From $300",
        features: [
            "Deep cleaning of all rooms",
            "Cleaning inside all cabinets/drawers",
            "Removing built-up grime",
            "Spot cleaning walls",
            "Guarantee for lease requirements",
        ],
        cta: "Book Move Clean",
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-muted py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Tailored cleaning solutions to fit your specific needs and schedule.
                    </p>
                </div>
            </section>

            {/* Service Packages */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {servicePackages.map((pkg) => (
                            <div
                                key={pkg.title}
                                className={`relative flex flex-col p-8 rounded-2xl border ${pkg.popular ? 'border-primary shadow-lg scale-105' : 'border-border shadow-sm'} bg-background`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                                <p className="text-muted-foreground mb-6">{pkg.description}</p>
                                <div className="text-3xl font-bold mb-8">{pkg.price}</div>

                                <ul className="space-y-3 mb-8 flex-1">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-primary shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button className="w-full" variant={pkg.popular ? "default" : "outline"} asChild>
                                    <Link href="/contact">{pkg.cta}</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commercial Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight">Commercial Cleaning</h2>
                            <p className="text-lg text-muted-foreground">
                                We also strive to keep businesses looking their best. From offices to retail spaces, we provide reliable janitorial services customized to your operational hours.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <Check className="h-5 w-5 text-primary" />
                                    <span>Office & Workspace Cleaning</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-5 w-5 text-primary" />
                                    <span>Restroom Sanitation</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-5 w-5 text-primary" />
                                    <span>Floor Care & Maintenance</span>
                                </li>
                            </ul>
                            <Button size="lg" asChild>
                                <Link href="/contact">Request Commercial Quote</Link>
                            </Button>
                        </div>
                        <div className="flex-1 h-[300px] bg-white rounded-2xl border flex items-center justify-center">
                            <span className="text-muted-foreground">Office Interior Image</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
