
import { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | Celebration Cleaning",
    description: "Get in touch with Celebration Cleaning for a free quote. We are ready to make your home shine.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-primary text-primary-foreground py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        We'd love to hear from you. Fill out the form below or give us a call to schedule your cleaning.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 shrink-0 rounded-full bg-muted flex items-center justify-center">
                                            <Phone className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Phone</h3>
                                            <p className="text-muted-foreground">689-388-2588</p>
                                            <p className="text-sm text-muted-foreground mt-1">Mon-Fri 8am-6pm</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 shrink-0 rounded-full bg-muted flex items-center justify-center">
                                            <Mail className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Email</h3>
                                            <p className="text-muted-foreground">hello@celebrationcleaning.com</p>
                                            <p className="text-sm text-muted-foreground mt-1">We reply within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 shrink-0 rounded-full bg-muted flex items-center justify-center">
                                            <MapPin className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Office</h3>
                                            <p className="text-muted-foreground">
                                                123 Clean Street<br />
                                                Sparkle City, SC 12345
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 shrink-0 rounded-full bg-muted flex items-center justify-center">
                                            <Clock className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Service Hours</h3>
                                            <p className="text-muted-foreground">
                                                Monday - Friday: 8:00 AM - 6:00 PM<br />
                                                Saturday: 9:00 AM - 2:00 PM<br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="h-[300px] bg-muted rounded-2xl border flex items-center justify-center overflow-hidden relative">
                                <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 font-medium">
                                    Interactive Map Integration
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="bg-muted/10 p-1 rounded-3xl border shadow-sm">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
