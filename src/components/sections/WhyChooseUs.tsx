
import { CheckCircle2, ShieldCheck, UserCheck } from "lucide-react";

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Celebration Cleaning?</h2>
                        <p className="text-lg text-muted-foreground">
                            We stand out because we care. Our commitment to excellence ensures that every clean is a celebration of your home.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="h-10 w-10 shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                                    <UserCheck className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Vetted Professionals</h3>
                                    <p className="text-muted-foreground">
                                        Our staff is thoroughly background-checked, trained, and insured for your peace of mind.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="h-10 w-10 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Satisfaction Guaranteed</h3>
                                    <p className="text-muted-foreground">
                                        Not happy? Let us know within 24 hours and we'll re-clean appropriately for free.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="h-10 w-10 shrink-0 rounded-full bg-purple-100 flex items-center justify-center">
                                    <CheckCircle2 className="h-5 w-5 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Eco-Friendly Options</h3>
                                    <p className="text-muted-foreground">
                                        We offer green cleaning solutions that are safe for your family, pets, and the environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px] lg:h-[500px] bg-muted rounded-3xl overflow-hidden shadow-2xl">
                        {/* Gradient placeholder for image, or maybe we can try generating again later. */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                            <span className="text-muted-foreground font-medium">Team Image / Illustration</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
