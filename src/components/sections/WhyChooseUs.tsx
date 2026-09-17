import Image from "next/image";
import { CheckCircle2, ShieldCheck, UserCheck } from "lucide-react";

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Why book with us
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We clean the rooms you actually live in, show up when we say we will, and fix misses without the runaround.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="h-10 w-10 shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                                    <UserCheck className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Background-checked crews</h3>
                                    <p className="text-muted-foreground">
                                        Cleaners are screened, trained on our checklists, and covered by insurance before they get keys or codes.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="h-10 w-10 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Miss something? We come back</h3>
                                    <p className="text-muted-foreground">
                                        Tell us within 24 hours and we&apos;ll return to re-clean the area—no lecture, no extra charge.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="h-10 w-10 shrink-0 rounded-full bg-emerald-100 flex items-center justify-center">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Greener options available</h3>
                                    <p className="text-muted-foreground">
                                        Ask for gentler products when you have kids, pets, or finishes that do not like harsh cleaners.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/why-choose-us.jpg"
                            alt="Professional cleaning team preparing supplies for a Florida home clean"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
