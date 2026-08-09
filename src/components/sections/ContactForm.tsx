"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { estimateQuote } from "@/lib/pricing";
import { createSubmitOnce } from "@/lib/submit-once";
import { cn } from "@/lib/utils";

const BEDROOM_OPTIONS = [
    { label: "Studio", value: 0 },
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5+", value: 5 },
];

const BATHROOM_OPTIONS = [
    { label: "1", value: 1 },
    { label: "1.5", value: 1.5 },
    { label: "2", value: 2 },
    { label: "2.5", value: 2.5 },
    { label: "3", value: 3 },
    { label: "4+", value: 4 },
];

/** Bands, not exact numbers — sending a midpoint would imply precision we do not have. */
const SQFT_OPTIONS = [
    { label: "Under 1,000 sq ft", value: "Under 1,000 sq ft" },
    { label: "1,000–1,500 sq ft", value: "1,000–1,500 sq ft" },
    { label: "1,500–2,500 sq ft", value: "1,500–2,500 sq ft" },
    { label: "2,500–4,000 sq ft", value: "2,500–4,000 sq ft" },
    { label: "4,000+ sq ft", value: "4,000+ sq ft" },
];

function PillGroup<T extends string | number>({
    label,
    hint,
    options,
    value,
    onChange,
    disabled,
}: {
    label: string;
    hint?: string;
    options: { label: string; value: T }[];
    value: T | null;
    onChange: (value: T | null) => void;
    disabled?: boolean;
}) {
    return (
        <fieldset className="space-y-2" disabled={disabled}>
            <legend className="text-sm font-medium leading-none">
                {label}
                {hint && <span className="ml-2 font-normal text-muted-foreground">{hint}</span>}
            </legend>
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={label}>
                {options.map((option) => {
                    const selected = value === option.value;
                    return (
                        <button
                            key={option.label}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            onClick={() => onChange(selected ? null : option.value)}
                            className={cn(
                                "min-h-10 rounded-full border px-4 text-sm font-medium transition-colors",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                "disabled:cursor-not-allowed disabled:opacity-50",
                                selected
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : "border-input bg-background hover:border-primary hover:bg-accent",
                            )}
                        >
                            {option.label}
                        </button>
                    );
                })}
            </div>
        </fieldset>
    );
}

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [bedrooms, setBedrooms] = useState<number | null>(null);
    const [bathrooms, setBathrooms] = useState<number | null>(null);
    const [sqftBand, setSqftBand] = useState<string | null>(null);
    const submitOnceRef = useRef(createSubmitOnce());

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const result = await submitOnceRef.current(async () => {
                setStatus("submitting");
                setErrorMessage(null);

                const serviceType = String(formData.get("service") ?? "").trim();
                // Dashboard-only triage figure; never shown here or emailed out.
                const estimate = estimateQuote({
                    service: serviceType,
                    bedrooms,
                    bathrooms,
                    sqftBand,
                });

                const response = await fetch("/api/bookings", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        customer_name: String(formData.get("name") ?? "").trim(),
                        email: String(formData.get("email") ?? "").trim(),
                        phone: String(formData.get("phone") ?? "").trim(),
                        address: String(formData.get("address") ?? "").trim() || undefined,
                        service_type: serviceType,
                        notes: String(formData.get("message") ?? "").trim(),
                        // A contact form is an enquiry, not a confirmed job.
                        intent: "quote",
                        property: {
                            bedrooms: bedrooms ?? undefined,
                            bathrooms: bathrooms ?? undefined,
                            size_label: sqftBand ?? undefined,
                        },
                        quote: estimate
                            ? {
                                  estimate: estimate.mid,
                                  estimate_low: estimate.low,
                                  estimate_high: estimate.high,
                                  currency: "USD",
                                  internal: true,
                              }
                            : undefined,
                    }),
                });

                if (!response.ok) {
                    const data = (await response.json().catch(() => ({}))) as { error?: string };
                    throw new Error(data.error ?? "Failed to send message");
                }
            });

            // Overlapping submit (double-click / Enter) — ignore; first request owns the outcome
            if (!result.ran) {
                return;
            }

            setStatus("success");
            form.reset();
            setBedrooms(null);
            setBathrooms(null);
            setSqftBand(null);
        } catch (error) {
            setStatus("error");
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again or call us.",
            );
        }
    }

    const isSubmitting = status === "submitting";

    return (
        <form
            onSubmit={handleSubmit}
            aria-busy={isSubmitting}
            className="space-y-6 bg-background p-8 rounded-2xl border shadow-sm"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        required
                        disabled={isSubmitting}
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
                        name="email"
                        type="email"
                        required
                        disabled={isSubmitting}
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
                        name="phone"
                        type="tel"
                        required
                        disabled={isSubmitting}
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
                        name="service"
                        disabled={isSubmitting}
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

            <div className="space-y-5 rounded-xl border bg-muted/30 p-5">
                <p className="text-sm text-muted-foreground">
                    Tell us about the place — one tap each, and it helps us quote you faster.
                </p>
                <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-medium leading-none">
                        Service address
                        <span className="ml-2 font-normal text-muted-foreground">
                            Optional
                        </span>
                    </label>
                    <input
                        id="address"
                        name="address"
                        autoComplete="street-address"
                        disabled={isSubmitting}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="123 Celebration Ave, Celebration, FL"
                    />
                </div>
                <PillGroup
                    label="Bedrooms"
                    options={BEDROOM_OPTIONS}
                    value={bedrooms}
                    onChange={setBedrooms}
                    disabled={isSubmitting}
                />
                <PillGroup
                    label="Bathrooms"
                    hint="Include half-baths"
                    options={BATHROOM_OPTIONS}
                    value={bathrooms}
                    onChange={setBathrooms}
                    disabled={isSubmitting}
                />
                <PillGroup
                    label="Square footage"
                    hint="Optional — not sure? Skip it"
                    options={SQFT_OPTIONS}
                    value={sqftBand}
                    onChange={setSqftBand}
                    disabled={isSubmitting}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    disabled={isSubmitting}
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your home and cleaning needs..."
                />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
                <p className="text-green-600 text-sm text-center font-medium bg-green-50 p-3 rounded-lg border border-green-200">
                    Thank you! We&apos;ve received your message and will be in touch shortly.
                </p>
            )}

            {status === "error" && (
                <p className="text-red-600 text-sm text-center font-medium bg-red-50 p-3 rounded-lg border border-red-200">
                    {errorMessage ?? "Something went wrong. Please try again or call us."}
                </p>
            )}
        </form>
    );
}
