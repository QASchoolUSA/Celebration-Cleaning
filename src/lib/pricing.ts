/**
 * Celebration advertises headline prices only — there is no quote calculator on
 * this site. Booking Broom stores the same three numbers so they can be changed
 * without a deploy.
 */

export interface PricingHeadline {
  key: string;
  label: string;
  fromPrice: number;
  /** Marks the package the pricing section highlights. */
  popular?: boolean;
}

export interface PricingConfig {
  kind: "headline-only";
  headlines: PricingHeadline[];
}

export const DEFAULT_PRICING_CONFIG: PricingConfig = {
  kind: "headline-only",
  headlines: [
    { key: "standard-cleaning", label: "Standard Cleaning", fromPrice: 120 },
    {
      key: "deep-cleaning",
      label: "Deep Cleaning",
      fromPrice: 250,
      popular: true,
    },
    { key: "move-out-turnover", label: "Move-Out / Turnover", fromPrice: 300 },
  ],
};

/** A wrong-shaped payload must fall back rather than advertise "From $0". */
export function isUsablePricingConfig(value: unknown): value is PricingConfig {
  if (!value || typeof value !== "object") return false;
  const config = value as Partial<PricingConfig>;
  if (config.kind !== "headline-only") return false;
  if (!Array.isArray(config.headlines) || config.headlines.length === 0) {
    return false;
  }
  return config.headlines.every(
    (headline) =>
      typeof headline?.key === "string" &&
      typeof headline?.fromPrice === "number",
  );
}

export function headlineFor(
  key: string,
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): PricingHeadline | undefined {
  return config.headlines.find((headline) => headline.key === key);
}

export function fromPriceLabel(
  key: string,
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): string {
  const headline = headlineFor(key, config);
  return headline ? `From $${headline.fromPrice}` : "Contact us";
}
