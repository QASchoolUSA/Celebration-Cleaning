
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("submitting");

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setStatus("success");
        // In a real app, we would send data to an API route here.
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 rounded-2xl border shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Name
                    </label>
                    <input
                        id="name"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Phone
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="689-388-2588"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Service Type
                    </label>
                    <select
                        id="service"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        defaultValue="Standard Cleaning"
                    >
                        <option>Standard Cleaning</option>
                        <option>Deep Cleaning</option>
                        <option>Move-In / Move-Out</option>
                        <option>Commercial Cleaning</option>
                        <option>Start a Quote</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Message
                </label>
                <textarea
                    id="message"
                    required
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your home and cleaning needs..."
                />
            </div>

            <Button type="submit" className="w-full" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
                <p className="text-green-600 text-sm text-center font-medium bg-green-50 p-3 rounded-lg border border-green-200">
                    Thank you! We've received your message and will be in touch shortly.
                </p>
            )}
        </form>
    );
}
