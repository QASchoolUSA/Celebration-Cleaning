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

/**
 * Rough estimate for an inbound contact-form lead.
 *
 * The site shows no calculator, so this exists only to give the dashboard a
 * triage figure. It is sent to Booking Broom flagged `internal` so it never
 * reaches the customer. The room and size adders below are placeholders in the
 * right ballpark for the Orlando market — replace them before quoting from them.
 */
export interface CelebrationEstimate {
  mid: number;
  low: number;
  high: number;
}

/** Keyed by the contact form's service options; walkthrough-only ones are absent. */
const ESTIMATE_BASE_PRICES: Record<string, number> = {
  "Standard Cleaning": 129,
  "Deep Cleaning": 249,
  "Move-In / Move-Out": 279,
};

/** Charged per room beyond the first. */
const BEDROOM_ADDON = 25;
const BATHROOM_ADDON = 30;

const SQFT_BAND_ADDON: Record<string, number> = {
  "Under 1,000 sq ft": 0,
  "1,000–1,500 sq ft": 20,
  "1,500–2,500 sq ft": 55,
  "2,500–4,000 sq ft": 110,
  "4,000+ sq ft": 180,
};

const RANGE_LOW = 0.92;
const RANGE_HIGH = 1.12;

export function estimateQuote(input: {
  service: string;
  bedrooms: number | null;
  bathrooms: number | null;
  sqftBand: string | null;
}): CelebrationEstimate | null {
  const base = ESTIMATE_BASE_PRICES[input.service];
  if (base === undefined) return null;

  // With no size signal at all the number would be pure guesswork.
  if (input.bedrooms === null && input.bathrooms === null && !input.sqftBand) {
    return null;
  }

  const bedrooms = Math.max((input.bedrooms ?? 1) - 1, 0) * BEDROOM_ADDON;
  const bathrooms = Math.max((input.bathrooms ?? 1) - 1, 0) * BATHROOM_ADDON;
  const size = input.sqftBand ? (SQFT_BAND_ADDON[input.sqftBand] ?? 0) : 0;

  const mid = Math.round(base + bedrooms + bathrooms + size);

  return {
    mid,
    low: Math.round(mid * RANGE_LOW),
    high: Math.round(mid * RANGE_HIGH),
  };
}
