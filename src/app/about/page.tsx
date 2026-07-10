import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn more about Celebration Cleaning, our mission, values, and the Florida team dedicated to making homes and businesses shine.",
    alternates: {
        canonical: "https://www.celebrationcleaning.com/about",
    },
};

const values = [
    {
        title: "Reliability",
        description: "We show up on time, every time. You can count on us to be there when you expect us.",
    },
    {
        title: "Excellence",
        description: "We don't settle for 'good enough'. We strive for perfection in every corner we clean.",
    },
    {
        title: "Trust",
        description: "Your home is your sanctuary. We treat it with the utmost respect and care.",
    },
    {
        title: "Eco-Friendly",
        description: "We use safe, sustainable products that are effective without being harsh on your home or the planet.",
    },
];

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative overflow-hidden py-24 md:py-32 text-white">
                <Image
                    src="/images/about-team.jpg"
                    alt="Celebration Cleaning team collaborating in a bright workspace"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-primary/80" />
                <div className="container relative mx-auto px-4 md:px-6 text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">About Celebration Cleaning</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        We are more than just a cleaning company. We are a team dedicated to bringing joy and freshness into your life.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight text-primary">Our Story</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Founded with a simple mission: to give busy families their time back. Celebration Cleaning started as a small local operation and has grown into a trusted name in Florida home and commercial services.
                                </p>
                                <p>
                                    We believe that a clean home is a happy home. It&apos;s the backdrop for your life&apos;s celebrations, big and small. That&apos;s why we pour our hearts into every job, ensuring that when you walk through your door, you feel a sense of relief and joy.
                                </p>
                                <p>
                                    Our team is comprised of dedicated professionals who take pride in their work. We invest in training and fair wages because happy employees do the best work.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/why-choose-us.jpg"
                                alt="Clean, organized kitchen after a Celebration Cleaning visit"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                            <div key={value.title} className="bg-background p-6 rounded-xl border hover:shadow-md transition-shadow">
                                <div className="h-10 w-10 text-primary mb-4">
                                    <CheckCircle2 className="h-full w-full" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
