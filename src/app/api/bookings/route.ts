import { NextResponse } from "next/server";

type BookingBody = {
  customer_name?: string;
  email?: string;
  phone?: string;
  service_type?: string;
  notes?: string;
  address?: string;
  preferred_date?: string;
  preferred_time?: string;
  intent?: string;
  property?: {
    bedrooms?: number;
    bathrooms?: number;
    square_feet?: number;
    size_label?: string;
    home_type?: string;
  };
  quote?: {
    estimate?: number;
    estimate_low?: number;
    estimate_high?: number;
    currency?: string;
    service_level?: string;
    frequency?: string;
    payment_terms?: string;
    internal?: boolean;
    add_ons?: { label?: string; price?: number }[];
  };
};

function positiveNumber(value: unknown): number | undefined {
  return typeof value === "number" && Number.isFinite(value) && value >= 0
    ? value
    : undefined;
}

function normalizeProperty(property: BookingBody["property"]) {
  if (!property) return undefined;

  const normalized = {
    bedrooms: positiveNumber(property.bedrooms),
    bathrooms: positiveNumber(property.bathrooms),
    square_feet: positiveNumber(property.square_feet),
    size_label: property.size_label?.trim() || undefined,
    home_type: property.home_type?.trim() || undefined,
  };

  return Object.values(normalized).some((value) => value !== undefined)
    ? normalized
    : undefined;
}

function normalizeQuote(quote: BookingBody["quote"]) {
  if (!quote) return undefined;

  const addOns = Array.isArray(quote.add_ons)
    ? quote.add_ons
        .map((addOn) => {
          const label = addOn.label?.trim();
          if (!label) return null;
          const price = positiveNumber(addOn.price);
          return price === undefined ? { label } : { label, price };
        })
        .filter((addOn): addOn is { label: string; price?: number } => addOn !== null)
        .slice(0, 25)
    : undefined;

  const normalized = {
    estimate: positiveNumber(quote.estimate),
    estimate_low: positiveNumber(quote.estimate_low),
    estimate_high: positiveNumber(quote.estimate_high),
    currency: quote.currency?.trim() || undefined,
    service_level: quote.service_level?.trim() || undefined,
    frequency: quote.frequency?.trim() || undefined,
    payment_terms: quote.payment_terms?.trim() || undefined,
    add_ons: addOns?.length ? addOns : undefined,
    internal: quote.internal === true ? true : undefined,
  };

  return normalized.estimate !== undefined ||
    normalized.estimate_low !== undefined ||
    normalized.estimate_high !== undefined
    ? normalized
    : undefined;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookingBody;

    if (!body.customer_name?.trim()) {
      return NextResponse.json(
        { error: "customer_name is required" },
        { status: 400 },
      );
    }

    const baseUrl = process.env.BOOKING_BROOM_URL?.replace(/\/$/, "");
    const apiKey = process.env.BOOKING_BROOM_API_KEY;
    const siteSlug = process.env.BOOKING_BROOM_SITE_SLUG || "celebration";

    if (!baseUrl || !apiKey) {
      console.error(
        "Booking Broom not configured: set BOOKING_BROOM_URL and BOOKING_BROOM_API_KEY",
      );
      return NextResponse.json(
        { error: "Booking service is not configured" },
        { status: 503 },
      );
    }

    const response = await fetch(`${baseUrl}/api/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        site_slug: siteSlug,
        api_key: apiKey,
        customer_name: body.customer_name.trim(),
        email: body.email?.trim() || undefined,
        phone: body.phone?.trim() || undefined,
        address: body.address?.trim() || undefined,
        service_type: body.service_type?.trim() || undefined,
        preferred_date: body.preferred_date?.trim() || undefined,
        preferred_time: body.preferred_time?.trim() || undefined,
        notes: body.notes?.trim() || undefined,
        intent:
          body.intent === "quote" || body.intent === "book"
            ? body.intent
            : undefined,
        property: normalizeProperty(body.property),
        quote: normalizeQuote(body.quote),
      }),
    });

    const data = (await response.json().catch(() => ({}))) as {
      id?: string;
      error?: string;
      message?: string;
    };

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error ?? "Failed to create booking" },
        { status: response.status },
      );
    }

    return NextResponse.json(
      { ok: true, id: data.id, message: data.message ?? "Booking created" },
      { status: 201 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid request";
    console.error("Celebration booking API error:", message);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
