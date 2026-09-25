"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import PropertyDetailsStep from "@/components/PropertyDetailsStep";
import { Button } from "@/components/ui/button";
import { createSubmitOnce } from "@/lib/submit-once";
import { createSoftLeadTracker } from "@/lib/soft-lead";
import {
  ADDON_IDS,
  DEFAULT_PRICING_CONFIG,
  SERVICE_LABELS,
  addOnLabels,
  calculatePrice,
  estimateRange,
  frequencyLabels,
  propertySummary,
  selectedAddOnLines,
  sqftPresetLabel,
  type AddonId,
  type FrequencyId,
  type PricingConfig,
  type ServiceTypeId,
} from "@/lib/pricing";

const SERVICE_OPTIONS: { value: ServiceTypeId; label: string; desc: string }[] = [
  { value: "house", label: "House Cleaning", desc: "Standard home clean" },
  { value: "apartment", label: "Apartment Cleaning", desc: "Flats & condos" },
  { value: "maintenance", label: "Maintenance Cleaning", desc: "Recurring upkeep" },
  { value: "deep", label: "Deep Cleaning", desc: "Detail-heavy reset" },
  { value: "move", label: "Move In / Move Out", desc: "Empty-unit turnover" },
  { value: "airbnb", label: "Airbnb Turnover", desc: "Guest-ready between stays" },
  { value: "post-construction", label: "Post-Construction", desc: "Dust & debris cleanup" },
];

const STEPS = ["Service", "Home", "Options", "Schedule", "Contact", "Review"] as const;
const CONTACT_STEP = 4;
const PHONE_DISPLAY = "689-388-2588";
const PHONE_HREF = "tel:+16893882588";

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25";

type ContactErrors = Partial<Record<"name" | "email" | "phone" | "address", string>>;

function validateContact(
  name: string,
  email: string,
  phone: string,
  address: string,
): ContactErrors {
  const errors: ContactErrors = {};
  if (!name.trim()) errors.name = "Please enter your full name.";
  if (!email.trim()) {
    errors.email = "Email is required so we can send your quote and confirmation.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!phone.trim()) {
    errors.phone = "Phone is required so we can confirm your appointment.";
  } else if (phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Please enter a valid 10-digit phone number.";
  }
  if (!address.trim()) {
    errors.address = "Service address is required so our team knows where to go.";
  }
  return errors;
}

export default function BookingWidget({
  config = DEFAULT_PRICING_CONFIG,
}: {
  config?: PricingConfig;
}) {
  const submitOnce = useRef(createSubmitOnce());
  const softLead = useRef<ReturnType<typeof createSoftLeadTracker> | null>(null);
  if (!softLead.current) {
    softLead.current = createSoftLeadTracker();
  }
  const [serviceType, setServiceType] = useState<ServiceTypeId>("house");
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(2);
  const [sqft, setSqft] = useState(config.sqftPresets[2]?.value ?? 1600);
  const [frequency, setFrequency] = useState<FrequencyId>("one-time");
  const [addons, setAddons] = useState<AddonId[]>([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [step, setStep] = useState(0);
  const [booked, setBooked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [contactErrors, setContactErrors] = useState<ContactErrors>({});

  const quote = useMemo(
    () =>
      calculatePrice(
        { serviceType, bedrooms, bathrooms, sqft, frequency, addons },
        config,
      ),
    [serviceType, bedrooms, bathrooms, sqft, frequency, addons, config],
  );
  const range = estimateRange(quote.total);

  const labels = useMemo(() => addOnLabels(config), [config]);
  const freqLabels = useMemo(() => frequencyLabels(config), [config]);
  const sizeLabel = propertySummary({ bedrooms, bathrooms, sqft }, config);
  const serviceLabel = SERVICE_LABELS[serviceType];
  const addOnLines = selectedAddOnLines(addons, config);
  const selectedAddOns = addOnLines.map((addOn) => addOn.label);

  function toggleAddon(id: AddonId) {
    setAddons((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  function buildPayload(intent: "quote" | "book") {
    return {
      customer_name: name,
      email,
      phone,
      address,
      service_type: serviceLabel,
      preferred_date: date || undefined,
      preferred_time: time || undefined,
      intent,
      session_key: softLead.current?.sessionKey,
      property: {
        bedrooms,
        bathrooms,
        size_label: sqftPresetLabel(sqft, config),
        home_type: serviceLabel,
      },
      quote: {
        estimate: quote.total,
        estimate_low: range.low,
        estimate_high: range.high,
        currency: "USD",
        service_level: serviceLabel,
        frequency: freqLabels[frequency],
        add_ons: addOnLines,
        payment_terms: "Due after cleaning is complete",
      },
    };
  }

  useEffect(() => {
    const tracker = softLead.current;
    return () => tracker?.dispose();
  }, []);

  useEffect(() => {
    if (booked) return;
    softLead.current?.schedule({
      ...buildPayload("quote"),
      last_step: STEPS[step] ?? String(step),
    });
    // Snapshot from latest render whenever contact-relevant fields change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    booked,
    step,
    name,
    email,
    phone,
    address,
    date,
    time,
    serviceType,
    bedrooms,
    bathrooms,
    sqft,
    frequency,
    addons,
    quote.total,
    range.low,
    range.high,
  ]);

  async function submitPayload(intent: "quote" | "book") {
    const errors = validateContact(name, email, phone, address);
    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      setStep(CONTACT_STEP);
      return;
    }

    const result = await submitOnce.current(async () => {
      setSubmitting(true);
      setSubmitError(null);
      try {
        const res = await fetch("/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(buildPayload(intent)),
        });

        if (!res.ok) {
          const data = (await res.json().catch(() => ({}))) as { error?: string };
          throw new Error(data.error ?? "Request failed");
        }

        setBooked(true);
      } catch (err) {
        setSubmitError(
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again or call us.",
        );
      } finally {
        setSubmitting(false);
      }
    });

    if (!result.ran) return;
  }

  function next() {
    if (step === CONTACT_STEP) {
      const errors = validateContact(name, email, phone, address);
      if (Object.keys(errors).length > 0) {
        setContactErrors(errors);
        return;
      }
      setContactErrors({});
    }
    setStep((current) => Math.min(current + 1, STEPS.length - 1));
  }

  function prev() {
    setStep((current) => Math.max(current - 1, 0));
  }

  if (booked) {
    return (
      <div className="mx-auto w-full max-w-lg overflow-hidden rounded-2xl border bg-card shadow-xl">
        <div className="bg-primary px-6 py-8 text-center text-primary-foreground">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h2 className="text-xl font-bold">Booking request sent!</h2>
          <p className="mt-2 text-sm text-primary-foreground/90">
            We&apos;ll confirm your appointment shortly.
          </p>
        </div>
        <div className="space-y-4 p-6">
          <div className="rounded-xl bg-secondary/15 p-4">
            <p className="text-sm font-medium">Pay when we&apos;re done</p>
            <p className="mt-1 text-sm text-muted-foreground">
              No upfront payment required. Your estimated total of{" "}
              <strong className="text-foreground">${quote.total}</strong> is due
              after your cleaning is complete and you&apos;re satisfied.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            Questions? Call us at{" "}
            <a href={PHONE_HREF} className="font-semibold text-primary hover:underline">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => {
              setBooked(false);
              setStep(0);
              setSubmitError(null);
            }}
          >
            Book another cleaning
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-lg overflow-hidden rounded-2xl border bg-card shadow-xl shadow-primary/10">
      <div className="border-b bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold">Book your cleaning</h2>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Instant quote · No payment now
            </p>
          </div>
          <div className="shrink-0 rounded-xl bg-background px-3 py-2 text-right shadow-sm ring-1 ring-border">
            <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              Estimate
            </p>
            <p className="text-lg font-bold text-primary">${quote.total}</p>
          </div>
        </div>
      </div>

      <div className="px-6 pt-5">
        <div className="flex items-center justify-between gap-1">
          {STEPS.map((label, index) => (
            <div key={label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition ${
                    index <= step
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index < step ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <span
                  className={`hidden text-[10px] font-medium sm:block ${
                    index <= step ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
              </div>
              {index < STEPS.length - 1 && (
                <div
                  className={`mx-1 mb-4 h-0.5 flex-1 rounded-full sm:mb-5 ${
                    index < step ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pb-2 pt-4">
        {step === 0 && (
          <div className="space-y-5">
            <p className="mb-3 text-sm font-medium">What type of cleaning?</p>
            <div className="grid gap-2">
              {SERVICE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setServiceType(option.value)}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left transition ${
                    serviceType === option.value
                      ? "border-primary bg-primary/10 ring-1 ring-primary/30"
                      : "border-border hover:border-primary/40 hover:bg-muted/40"
                  }`}
                >
                  <div>
                    <p className="text-sm font-semibold">{option.label}</p>
                    <p className="text-xs text-muted-foreground">{option.desc}</p>
                  </div>
                  <div
                    className={`h-4 w-4 shrink-0 rounded-full border-2 ${
                      serviceType === option.value
                        ? "border-primary bg-primary"
                        : "border-muted-foreground/40"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <PropertyDetailsStep
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            sqft={sqft}
            config={config}
            onBedroomsChange={setBedrooms}
            onBathroomsChange={setBathrooms}
            onSqftChange={setSqft}
          />
        )}

        {step === 2 && (
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="cleaning-frequency">
                How often?
              </label>
              <select
                id="cleaning-frequency"
                className={fieldClass}
                value={frequency}
                onChange={(event) => setFrequency(event.target.value as FrequencyId)}
              >
                {config.frequencyMultipliers.map((freq) => (
                  <option key={freq.key} value={freq.key}>
                    {freq.label}
                    {freq.multiplier < 1
                      ? ` (${Math.round((1 - freq.multiplier) * 100)}% off)`
                      : ""}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="mb-3 text-sm font-medium">Optional add-ons</p>
              <div className="flex flex-wrap gap-2">
                {ADDON_IDS.map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleAddon(key)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                      addons.includes(key)
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-primary/10"
                    }`}
                  >
                    {labels[key]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Preferred date</span>
              <input
                type="date"
                className={fieldClass}
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Preferred time</span>
              <input
                type="time"
                className={fieldClass}
                value={time}
                onChange={(event) => setTime(event.target.value)}
              />
            </label>
            <p className="text-xs text-muted-foreground sm:col-span-2">
              We&apos;ll confirm availability and send a reminder before your appointment.
            </p>
          </div>
        )}

        {step === CONTACT_STEP && (
          <div className="grid gap-4 sm:grid-cols-2">
            <p className="text-xs text-muted-foreground sm:col-span-2">
              Fields marked with <span className="text-primary">*</span> are required
              to send your quote or book a cleaning.
            </p>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium">
                Full name <span className="text-primary">*</span>
              </span>
              <input
                type="text"
                className={`${fieldClass} ${contactErrors.name ? "ring-2 ring-destructive" : ""}`}
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  setContactErrors((prev) => ({ ...prev, name: undefined }));
                }}
                placeholder="Jane Smith"
                required
                autoComplete="name"
              />
              {contactErrors.name && (
                <p className="mt-1 text-xs text-destructive">{contactErrors.name}</p>
              )}
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium">
                Email <span className="text-primary">*</span>
              </span>
              <input
                type="email"
                className={`${fieldClass} ${contactErrors.email ? "ring-2 ring-destructive" : ""}`}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setContactErrors((prev) => ({ ...prev, email: undefined }));
                }}
                placeholder="you@email.com"
                required
                autoComplete="email"
              />
              {contactErrors.email && (
                <p className="mt-1 text-xs text-destructive">{contactErrors.email}</p>
              )}
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium">
                Phone <span className="text-primary">*</span>
              </span>
              <input
                type="tel"
                className={`${fieldClass} ${contactErrors.phone ? "ring-2 ring-destructive" : ""}`}
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                  setContactErrors((prev) => ({ ...prev, phone: undefined }));
                }}
                placeholder="(689) 555-0123"
                required
                autoComplete="tel"
              />
              {contactErrors.phone && (
                <p className="mt-1 text-xs text-destructive">{contactErrors.phone}</p>
              )}
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium">
                Service address <span className="text-primary">*</span>
              </span>
              <input
                type="text"
                className={`${fieldClass} ${contactErrors.address ? "ring-2 ring-destructive" : ""}`}
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                  setContactErrors((prev) => ({ ...prev, address: undefined }));
                }}
                placeholder="123 Celebration Blvd, Celebration, FL"
                required
                autoComplete="street-address"
              />
              {contactErrors.address && (
                <p className="mt-1 text-xs text-destructive">{contactErrors.address}</p>
              )}
            </label>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <div className="rounded-xl border bg-muted/40 p-4 text-sm">
              <dl className="space-y-2.5">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Service</dt>
                  <dd className="font-medium">{serviceLabel}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Home</dt>
                  <dd className="text-right font-medium">{sizeLabel}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Frequency</dt>
                  <dd className="font-medium">{freqLabels[frequency]}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Add-ons</dt>
                  <dd className="font-medium">{selectedAddOns.join(", ") || "None"}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">When</dt>
                  <dd className="font-medium">
                    {date || "Flexible"} {time && `at ${time}`}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Contact</dt>
                  <dd className="text-right font-medium">
                    {name}
                    <br />
                    <span className="text-xs font-normal text-muted-foreground">
                      {email}
                      <br />
                      {phone}
                    </span>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Address</dt>
                  <dd className="text-right font-medium">{address}</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-xl bg-secondary/15 p-4">
              <p className="text-sm font-semibold">Estimated total: ${quote.total}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Range ${range.low}–${range.high} · Pay after completion
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Book now with zero upfront payment. We&apos;ll send your final invoice
                once the job is done and you&apos;re happy with the results.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 space-y-3 border-t px-6 py-4">
        {submitError && (
          <p className="rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
            {submitError}
          </p>
        )}
        <div className="flex items-center justify-between gap-3">
          <Button type="button" variant="ghost" onClick={prev} disabled={step === 0}>
            Back
          </Button>
          {step < STEPS.length - 1 ? (
            <Button type="button" onClick={next}>
              Continue
            </Button>
          ) : (
            <div className="flex flex-wrap justify-end gap-2">
              <Button
                type="button"
                disabled={submitting}
                onClick={() => submitPayload("quote")}
              >
                {submitting ? "Sending…" : "Request quote"}
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={submitting}
                onClick={() => submitPayload("book")}
              >
                {submitting ? "Sending…" : "Book cleaning"}
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="border-t bg-muted/40 px-6 py-3">
        <p className="text-center text-[11px] text-muted-foreground">
          No payment required to book · Pay when your clean is complete
        </p>
      </div>
    </div>
  );
}
