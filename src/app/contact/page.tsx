
import { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | Celebration Cleaning",
    description: "Get in touch with Celebration Cleaning for a free quote. We are ready to make your home shine.",
    alternates: {
        canonical: "https://www.celebrationcleaning.com/contact",
    },
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

                            {/* Real Interactive Map */}
                            <div className="h-[400px] rounded-2xl border-4 border-white shadow-xl overflow-hidden relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112344.60384167389!2d-81.6567119!3d28.3274643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd7eb5b2323e25%3A0x64e3288924f0c8a6!2sCelebration%2C%20FL!5e0!3m2!1sen!2sus!4v1705602324907!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Celebration Cleaning Office Map"
                                ></iframe>
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
