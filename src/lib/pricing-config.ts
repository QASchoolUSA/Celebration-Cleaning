import {
  DEFAULT_PRICING_CONFIG,
  isUsablePricingConfig,
  type PricingConfig,
} from "@/lib/pricing";

/**
 * Fetches the advertised prices from Booking Broom. Server-only: it carries the
 * API key. Any failure keeps the prices compiled into the build.
 */

/** Seconds a fetched config is reused before Next revalidates it. */
const REVALIDATE_SECONDS = 300;

export async function getPricingConfig(): Promise<PricingConfig> {
  const baseUrl = process.env.BOOKING_BROOM_URL?.replace(/\/$/, "");
  const apiKey = process.env.BOOKING_BROOM_API_KEY;
  if (!baseUrl || !apiKey) return DEFAULT_PRICING_CONFIG;

  try {
    const res = await fetch(`${baseUrl}/api/pricing`, {
      headers: {
        "X-Site-Slug": process.env.BOOKING_BROOM_SITE_SLUG || "celebration",
        "X-Api-Key": apiKey,
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) return DEFAULT_PRICING_CONFIG;

    const body = (await res.json()) as { config?: unknown };
    return isUsablePricingConfig(body.config)
      ? body.config
      : DEFAULT_PRICING_CONFIG;
  } catch {
    return DEFAULT_PRICING_CONFIG;
  }
}
