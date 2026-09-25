export type ServiceTypeId =
  | "house"
  | "apartment"
  | "move"
  | "airbnb"
  | "post-construction"
  | "maintenance"
  | "deep";

export type FrequencyId = "one-time" | "weekly" | "bi-weekly" | "monthly";

export type AddonId =
  | "kitchen-deep"
  | "oven"
  | "fridge"
  | "windows-interior"
  | "windows-exterior"
  | "laundry"
  | "cabinets"
  | "garage"
  | "balcony"
  | "pets";

export interface PricingInput {
  serviceType: ServiceTypeId;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  frequency: FrequencyId;
  addons: AddonId[];
}

export interface PriceBreakdown {
  base: number;
  bedrooms: number;
  bathrooms: number;
  addons: number;
  subtotal: number;
  frequencyMultiplier: number;
  frequencyDiscount: number;
  total: number;
}

/**
 * Every number this site charges. Booking Broom is the source of truth; the
 * values in `DEFAULT_PRICING_CONFIG` are what shipped and are used whenever the
 * dashboard cannot be reached, so a quote is never blocked on it.
 */
export type PricingConfig = {
  kind: "sqft-rate-min";
  /** Per-sq-ft rate and the floor the base can never fall below. */
  serviceRates: { key: string; perSqft: number; minBase: number }[];
  bedroomRate: number;
  bathroomRate: number;
  frequencyMultipliers: { key: string; label: string; multiplier: number }[];
  addOns: { key: string; label: string; price: number }[];
  /** Square footage bands; `value` is the midpoint an estimate is built from. */
  sqftPresets: { label: string; value: number }[];
  minSqft: number;
  maxSqft: number;
};

/** STANDARD (list) rates — not the discounted Davenport seed numbers. */
export const DEFAULT_PRICING_CONFIG: PricingConfig = {
  kind: "sqft-rate-min",
  serviceRates: [
    { key: "house", perSqft: 0.15, minBase: 129 },
    { key: "apartment", perSqft: 0.15, minBase: 99 },
    { key: "maintenance", perSqft: 0.15, minBase: 109 },
    { key: "deep", perSqft: 0.2, minBase: 199 },
    { key: "move", perSqft: 0.23, minBase: 189 },
    { key: "airbnb", perSqft: 0.12, minBase: 149 },
    { key: "post-construction", perSqft: 0.39, minBase: 249 },
  ],
  bedroomRate: 18,
  bathroomRate: 28,
  frequencyMultipliers: [
    { key: "one-time", label: "One-time", multiplier: 1 },
    { key: "weekly", label: "Weekly", multiplier: 0.85 },
    { key: "bi-weekly", label: "Bi-weekly", multiplier: 0.9 },
    { key: "monthly", label: "Monthly", multiplier: 0.95 },
  ],
  addOns: [
    { key: "kitchen-deep", label: "Kitchen deep clean", price: 45 },
    { key: "oven", label: "Oven cleaning", price: 35 },
    { key: "fridge", label: "Fridge cleaning", price: 35 },
    { key: "windows-interior", label: "Windows (interior)", price: 40 },
    { key: "windows-exterior", label: "Windows (exterior)", price: 55 },
    { key: "laundry", label: "Laundry fold & put away", price: 25 },
    { key: "cabinets", label: "Inside cabinets", price: 40 },
    { key: "garage", label: "Garage sweep & wipe", price: 50 },
    { key: "balcony", label: "Patio / balcony", price: 30 },
    { key: "pets", label: "Pet-friendly detail", price: 20 },
  ],
  sqftPresets: [
    { label: "Under 800 sq ft", value: 600 },
    { label: "800\u20131,200 sq ft", value: 1000 },
    { label: "1,200\u20132,000 sq ft", value: 1600 },
    { label: "2,000\u20132,600 sq ft", value: 2200 },
    { label: "2,600+ sq ft", value: 3000 },
  ],
  minSqft: 400,
  maxSqft: 6000,
};

const SERVICE_TYPE_IDS: ServiceTypeId[] = [
  "house",
  "apartment",
  "move",
  "airbnb",
  "post-construction",
  "maintenance",
  "deep",
];

export const ADDON_IDS: AddonId[] = [
  "kitchen-deep",
  "oven",
  "fridge",
  "windows-interior",
  "windows-exterior",
  "laundry",
  "cabinets",
  "garage",
  "balcony",
  "pets",
];

const FREQUENCY_IDS: FrequencyId[] = [
  "one-time",
  "weekly",
  "bi-weekly",
  "monthly",
];

export const SERVICE_LABELS: Record<ServiceTypeId, string> = {
  house: "House Cleaning",
  apartment: "Apartment Cleaning",
  maintenance: "Maintenance Cleaning",
  deep: "Deep Cleaning",
  move: "Move In / Move Out",
  airbnb: "Airbnb Turnover",
  "post-construction": "Post-Construction",
};

/**
 * Guards against a remote config that parses as JSON but is missing a service,
 * frequency or add-on the UI iterates over, which would otherwise quote $0 or
 * render an empty picker.
 */
export function isUsablePricingConfig(value: unknown): value is PricingConfig {
  if (!value || typeof value !== "object") return false;
  const config = value as Partial<PricingConfig>;
  if (config.kind !== "sqft-rate-min") return false;
  if (typeof config.bedroomRate !== "number") return false;
  if (typeof config.bathroomRate !== "number") return false;
  if (typeof config.minSqft !== "number") return false;
  if (typeof config.maxSqft !== "number") return false;
  if (!Array.isArray(config.sqftPresets) || config.sqftPresets.length === 0) {
    return false;
  }
  if (!Array.isArray(config.serviceRates)) return false;
  if (!Array.isArray(config.frequencyMultipliers)) return false;
  if (!Array.isArray(config.addOns)) return false;

  return (
    SERVICE_TYPE_IDS.every((id) =>
      config.serviceRates!.some((rate) => rate.key === id),
    ) &&
    FREQUENCY_IDS.every((id) =>
      config.frequencyMultipliers!.some((freq) => freq.key === id),
    ) &&
    ADDON_IDS.every((id) => config.addOns!.some((addOn) => addOn.key === id))
  );
}

export function frequencyLabels(
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): Record<FrequencyId, string> {
  return Object.fromEntries(
    config.frequencyMultipliers.map((freq) => [freq.key, freq.label]),
  ) as Record<FrequencyId, string>;
}

export function addOnPrices(
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): Record<AddonId, number> {
  return Object.fromEntries(
    config.addOns.map((addOn) => [addOn.key, addOn.price]),
  ) as Record<AddonId, number>;
}

export function addOnLabels(
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): Record<AddonId, string> {
  return Object.fromEntries(
    config.addOns.map((addOn) => [addOn.key, addOn.label]),
  ) as Record<AddonId, string>;
}

/** The published "from $X" floor for each service. */
export function minimumBase(
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): Record<ServiceTypeId, number> {
  return Object.fromEntries(
    config.serviceRates.map((rate) => [rate.key, rate.minBase]),
  ) as Record<ServiceTypeId, number>;
}

export function sqftPresets(config: PricingConfig = DEFAULT_PRICING_CONFIG) {
  return config.sqftPresets;
}

export function sqftPresetLabel(
  value: number,
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): string {
  const closest = config.sqftPresets.reduce((best, preset) =>
    Math.abs(preset.value - value) < Math.abs(best.value - value) ? preset : best,
  );
  return closest.label;
}

export function calculatePrice(
  input: PricingInput,
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): PriceBreakdown {
  const sqft = Math.max(config.minSqft, Math.min(config.maxSqft, input.sqft));
  const bedrooms = Math.max(0, Math.min(8, input.bedrooms));
  const bathrooms = Math.max(1, Math.min(8, input.bathrooms));

  const rate = config.serviceRates.find((r) => r.key === input.serviceType);
  const rawBase = sqft * (rate?.perSqft ?? 0);
  const base = Math.max(rate?.minBase ?? 0, Math.round(rawBase));
  const bedroomCost = bedrooms * config.bedroomRate;
  const bathroomCost = bathrooms * config.bathroomRate;
  const prices = addOnPrices(config);
  const addonCost = input.addons.reduce(
    (sum, id) => sum + (prices[id] ?? 0),
    0,
  );

  const subtotal = base + bedroomCost + bathroomCost + addonCost;
  const frequencyMultiplier =
    config.frequencyMultipliers.find((f) => f.key === input.frequency)
      ?.multiplier ?? 1;
  const total = Math.round(subtotal * frequencyMultiplier);
  const frequencyDiscount = Math.round(subtotal - total);

  return {
    base,
    bedrooms: bedroomCost,
    bathrooms: bathroomCost,
    addons: addonCost,
    subtotal,
    frequencyMultiplier,
    frequencyDiscount,
    total,
  };
}

export function propertySummary(input: {
  bedrooms: number;
  bathrooms: number;
  sqft: number;
}, config: PricingConfig = DEFAULT_PRICING_CONFIG): string {
  const bed =
    input.bedrooms === 0
      ? "Studio"
      : `${input.bedrooms} Bedroom${input.bedrooms === 1 ? "" : "s"}`;
  const bath = `${input.bathrooms} Bath${input.bathrooms === 1 ? "" : "s"}`;
  return `${bed} · ${bath} · ${sqftPresetLabel(input.sqft, config)}`;
}

export function selectedAddOnLines(
  addons: AddonId[],
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
) {
  const labels = addOnLabels(config);
  const prices = addOnPrices(config);
  return addons.map((key) => ({
    label: labels[key] ?? key,
    price: prices[key] ?? 0,
  }));
}

const PACKAGE_HEADLINES: {
  key: string;
  label: string;
  serviceType: ServiceTypeId;
  popular?: boolean;
}[] = [
  { key: "standard-cleaning", label: "Standard Cleaning", serviceType: "house" },
  {
    key: "deep-cleaning",
    label: "Deep Cleaning",
    serviceType: "deep",
    popular: true,
  },
  { key: "move-out-turnover", label: "Move-Out / Turnover", serviceType: "move" },
];

/** Typical 2-bed / 2-bath / ~1,000 sq ft one-time quote for marketing "from" prices. */
function typicalHomeQuote(
  serviceType: ServiceTypeId,
  config: PricingConfig,
) {
  return calculatePrice(
    {
      serviceType,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1000,
      frequency: "one-time",
      addons: [],
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
    fromPrice: typicalHomeQuote(pkg.serviceType, config).total,
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

/** Display range around a point estimate (±10%) for quote payloads. */
export function estimateRange(total: number, spread = 0.1) {
  return {
    low: Math.round(total * (1 - spread)),
    high: Math.round(total * (1 + spread)),
  };
}
