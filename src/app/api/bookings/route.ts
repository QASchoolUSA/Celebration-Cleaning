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
  property?: {
    bedrooms?: number;
    bathrooms?: number;
    square_feet?: number;
    size_label?: string;
    home_type?: string;
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
        property: normalizeProperty(body.property),
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
