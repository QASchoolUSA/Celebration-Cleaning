export type ServiceType = "residential" | "commercial" | "post-construction";

export type SqftBand =
  | "under-1000"
  | "1000-1500"
  | "1500-2500"
  | "2500-4000"
  | "4000-plus";

export type LevelKey = "standard" | "deep" | "move" | "post";

export type AddOnKey = "fridge" | "oven" | "windows" | "cabinets" | "baseboards";

export type QuoteInput = {
  serviceType: ServiceType;
  /** 0 means studio. */
  bedrooms: number;
  /** Restrooms for commercial jobs. */
  bathrooms: number;
  /** Null when the customer does not know the size. */
  sqftBand: SqftBand | null;
  level: LevelKey;
  addOns: Partial<Record<AddOnKey, boolean>>;
};

/**
 * Every number this site charges. Booking Broom is the source of truth; the
 * values below are used whenever the dashboard cannot be reached, so a quote
 * is never blocked on it.
 */
export type PricingConfig = {
  kind: "bedroom-band";
  bedroomBase: { bedrooms: number; price: number }[];
  bathRate: number;
  sqftBands: { key: SqftBand; label: string; multiplier: number }[];
  defaultSqftBand: SqftBand;
  commercialByBand: { key: SqftBand; value: number }[];
  postByBand: { key: SqftBand; value: number }[];
  levelMultipliers: { key: LevelKey; label: string; multiplier: number }[];
  addOns: { key: AddOnKey; label: string; price: number }[];
  maxBedrooms: number;
  maxBathrooms: number;
  roundToNearest: number;
  rangeSpread: number;
};

export const DEFAULT_PRICING_CONFIG: PricingConfig = {
  kind: "bedroom-band",
  bedroomBase: [
    { bedrooms: 0, price: 99 },
    { bedrooms: 1, price: 119 },
    { bedrooms: 2, price: 139 },
    { bedrooms: 3, price: 169 },
    { bedrooms: 4, price: 199 },
    { bedrooms: 5, price: 229 },
  ],
  bathRate: 20,
  sqftBands: [
    { key: "under-1000", label: "Under 1,000 sq ft", multiplier: 0.9 },
    { key: "1000-1500", label: "1,000–1,500 sq ft", multiplier: 1 },
    { key: "1500-2500", label: "1,500–2,500 sq ft", multiplier: 1.1 },
    { key: "2500-4000", label: "2,500–4,000 sq ft", multiplier: 1.25 },
    { key: "4000-plus", label: "4,000+ sq ft", multiplier: 1.4 },
  ],
  defaultSqftBand: "1000-1500",
  commercialByBand: [
    { key: "under-1000", value: 149 },
    { key: "1000-1500", value: 199 },
    { key: "1500-2500", value: 249 },
    { key: "2500-4000", value: 329 },
    { key: "4000-plus", value: 399 },
  ],
  postByBand: [
    { key: "under-1000", value: 299 },
    { key: "1000-1500", value: 379 },
    { key: "1500-2500", value: 449 },
    { key: "2500-4000", value: 549 },
    { key: "4000-plus", value: 649 },
  ],
  levelMultipliers: [
    { key: "standard", label: "Standard", multiplier: 1 },
    { key: "deep", label: "Deep clean", multiplier: 1.4 },
    { key: "move", label: "Move-in / move-out", multiplier: 1.2 },
    { key: "post", label: "Post-construction detailing", multiplier: 1.3 },
  ],
  addOns: [
    { key: "fridge", label: "Inside fridge", price: 25 },
    { key: "oven", label: "Inside oven", price: 25 },
    { key: "windows", label: "Interior windows", price: 40 },
    { key: "cabinets", label: "Inside cabinets", price: 30 },
    { key: "baseboards", label: "Baseboards", price: 35 },
  ],
  maxBedrooms: 5,
  maxBathrooms: 4,
  roundToNearest: 5,
  rangeSpread: 0.1,
};

export const ADDON_KEYS: AddOnKey[] = [
  "fridge",
  "oven",
  "windows",
  "cabinets",
  "baseboards",
];

const SQFT_BAND_KEYS: SqftBand[] = [
  "under-1000",
  "1000-1500",
  "1500-2500",
  "2500-4000",
  "4000-plus",
];

export function isUsablePricingConfig(value: unknown): value is PricingConfig {
  if (!value || typeof value !== "object") return false;
  const config = value as Partial<PricingConfig>;
  if (config.kind !== "bedroom-band") return false;
  if (typeof config.bathRate !== "number") return false;
  if (typeof config.roundToNearest !== "number") return false;
  if (typeof config.rangeSpread !== "number") return false;

  const hasEveryBand = (rows: { key: SqftBand }[] | undefined) =>
    Array.isArray(rows) &&
    SQFT_BAND_KEYS.every((key) => rows.some((row) => row.key === key));

  if (!hasEveryBand(config.sqftBands)) return false;
  if (!hasEveryBand(config.commercialByBand)) return false;
  if (!hasEveryBand(config.postByBand)) return false;

  if (
    !Array.isArray(config.addOns) ||
    !ADDON_KEYS.every((key) => config.addOns!.some((addOn) => addOn.key === key))
  ) {
    return false;
  }

  return (
    Array.isArray(config.bedroomBase) &&
    config.bedroomBase.length > 0 &&
    Array.isArray(config.levelMultipliers) &&
    config.levelMultipliers.length > 0
  );
}

export function sqftBandLabel(
  band: SqftBand | null,
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): string | null {
  return config.sqftBands.find((row) => row.key === band)?.label ?? null;
}

function sqftMultiplier(band: SqftBand | null, config: PricingConfig): number {
  return config.sqftBands.find((row) => row.key === band)?.multiplier ?? 1;
}

export function bedroomLabel(
  bedrooms: number,
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): string {
  if (bedrooms === 0) return "Studio";
  if (bedrooms >= config.maxBedrooms) return `${config.maxBedrooms}+ Bedroom`;
  return `${bedrooms} Bedroom`;
}

export function bathroomLabel(
  bathrooms: number,
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): string {
  return bathrooms >= config.maxBathrooms
    ? `${config.maxBathrooms}+ Bath`
    : `${bathrooms} Bath`;
}

export function propertySummary(
  input: {
    serviceType: ServiceType;
    bedrooms: number;
    bathrooms: number;
    sqftBand: SqftBand | null;
  },
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): string {
  const parts =
    input.serviceType === "residential"
      ? [
          bedroomLabel(input.bedrooms, config),
          bathroomLabel(input.bathrooms, config),
        ]
      : [`${input.bathrooms} restroom${input.bathrooms === 1 ? "" : "s"}`];

  const band = sqftBandLabel(input.sqftBand, config);
  if (band) parts.push(band);
  return parts.join(" · ");
}

export function addOnLabels(
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): Record<AddOnKey, string> {
  return Object.fromEntries(config.addOns.map((addOn) => [addOn.key, addOn.label])) as Record<
    AddOnKey,
    string
  >;
}

export function addOnPrices(
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): Record<AddOnKey, number> {
  return Object.fromEntries(config.addOns.map((addOn) => [addOn.key, addOn.price])) as Record<
    AddOnKey,
    number
  >;
}

export function computeQuote(
  input: QuoteInput,
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
) {
  const extraBaths = Math.max(0, input.bathrooms - 1) * config.bathRate;
  const band = input.sqftBand;
  const fallbackBand: SqftBand = "1500-2500";

  let base = 0;
  if (input.serviceType === "residential") {
    const bedrooms = Math.min(Math.max(input.bedrooms, 0), config.maxBedrooms);
    const bedBase =
      config.bedroomBase.find((row) => row.bedrooms === bedrooms)?.price ?? 119;
    base = (bedBase + extraBaths) * sqftMultiplier(band, config);
  }
  if (input.serviceType === "commercial") {
    const row = config.commercialByBand.find(
      (item) => item.key === (band ?? fallbackBand),
    );
    base = (row?.value ?? 0) + extraBaths;
  }
  if (input.serviceType === "post-construction") {
    base =
      config.postByBand.find((item) => item.key === (band ?? fallbackBand))
        ?.value ?? 0;
  }

  const multiplier =
    config.levelMultipliers.find((level) => level.key === input.level)
      ?.multiplier ?? 1;

  const prices = addOnPrices(config);
  const addOnsTotal = Object.entries(input.addOns).reduce((sum, [key, enabled]) => {
    if (!enabled) return sum;
    return sum + (prices[key as AddOnKey] ?? 0);
  }, 0);

  const step = config.roundToNearest > 0 ? config.roundToNearest : 1;
  const price = Math.round((base * multiplier + addOnsTotal) / step) * step;
  const low = Math.round(price * (1 - config.rangeSpread));
  const high = Math.round(price * (1 + config.rangeSpread));

  return { base, multiplier, addOnsTotal, price, range: { low, high } };
}

export function selectedAddOnLines(
  addOns: QuoteInput["addOns"],
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
) {
  return config.addOns
    .filter((addOn) => addOns[addOn.key])
    .map((addOn) => ({ label: addOn.label, price: addOn.price }));
}

const PACKAGE_HEADLINES: {
  key: string;
  label: string;
  level: LevelKey;
  popular?: boolean;
}[] = [
  { key: "standard-cleaning", label: "Standard Cleaning", level: "standard" },
  {
    key: "deep-cleaning",
    label: "Deep Cleaning",
    level: "deep",
    popular: true,
  },
  { key: "move-out-turnover", label: "Move-Out / Turnover", level: "move" },
];

function typicalHomeQuote(
  level: LevelKey,
  config: PricingConfig,
) {
  return computeQuote(
    {
      serviceType: "residential",
      bedrooms: 2,
      bathrooms: 2,
      sqftBand: config.defaultSqftBand,
      level,
      addOns: {},
    },
    config,
  );
}

export interface PricingHeadline {
  key: string;
  label: string;
  fromPrice: number;
  popular?: boolean;
}

export function headlineFor(
  key: string,
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): PricingHeadline | undefined {
  const pkg = PACKAGE_HEADLINES.find((item) => item.key === key);
  if (!pkg) return undefined;
  return {
    key: pkg.key,
    label: pkg.label,
    fromPrice: typicalHomeQuote(pkg.level, config).price,
    popular: pkg.popular,
  };
}

export function fromPriceLabel(
  key: string,
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): string {
  const headline = headlineFor(key, config);
  return headline ? `From $${headline.fromPrice}` : "Get a quote";
}
