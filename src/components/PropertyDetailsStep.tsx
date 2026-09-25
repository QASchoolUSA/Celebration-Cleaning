"use client";

import {
  DEFAULT_PRICING_CONFIG,
  type PricingConfig,
} from "@/lib/pricing";

function bedroomChoices() {
  return [
    { value: 0, label: "Studio" },
    ...Array.from({ length: 5 }, (_, i) => ({
      value: i + 1,
      label: i + 1 === 5 ? "5+" : String(i + 1),
    })),
  ];
}

function bathroomChoices() {
  return Array.from({ length: 5 }, (_, i) => ({
    value: i + 1,
    label: i + 1 === 5 ? "5+" : String(i + 1),
  }));
}

function Pill({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`min-w-[3rem] rounded-full px-3.5 py-2 text-sm font-medium transition ${
        selected
          ? "bg-primary text-primary-foreground shadow-sm"
          : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

export default function PropertyDetailsStep({
  bedrooms,
  bathrooms,
  sqft,
  onBedroomsChange,
  onBathroomsChange,
  onSqftChange,
  config = DEFAULT_PRICING_CONFIG,
}: {
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  onBedroomsChange: (value: number) => void;
  onBathroomsChange: (value: number) => void;
  onSqftChange: (value: number) => void;
  config?: PricingConfig;
}) {
  const bedroomOptions = bedroomChoices();
  const bathroomOptions = bathroomChoices();

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-3 text-sm font-medium text-foreground">How many bedrooms?</p>
        <div className="flex flex-wrap gap-2">
          {bedroomOptions.map((choice) => (
            <Pill
              key={choice.value}
              selected={bedrooms === choice.value}
              onClick={() => onBedroomsChange(choice.value)}
            >
              {choice.label}
            </Pill>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-foreground">How many bathrooms?</p>
        <div className="flex flex-wrap gap-2">
          {bathroomOptions.map((choice) => (
            <Pill
              key={choice.value}
              selected={bathrooms === choice.value}
              onClick={() => onBathroomsChange(choice.value)}
            >
              {choice.label}
            </Pill>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-foreground">Approximate square footage</p>
        <div className="flex flex-wrap gap-2">
          {config.sqftPresets.map((preset) => (
            <Pill
              key={preset.value}
              selected={sqft === preset.value}
              onClick={() => onSqftChange(preset.value)}
            >
              {preset.label}
            </Pill>
          ))}
        </div>
      </div>
    </div>
  );
}
