import React, { useState } from "react";

type RoofTypeKey = "shingle" | "tile" | "metal" | "flat";
const roofTypeOptions: Record<RoofTypeKey, { label: string; basePricePerSquare: number }> = {
  // Base prices already adjusted upward for South Florida / HVHZ vs national Homewyse averages
  shingle: {
    label: "Architectural Shingle",
    basePricePerSquare: 500, // per 100 sq ft, HVHZ-adjusted
  },
  tile: {
    label: "Concrete / Clay Tile",
    basePricePerSquare: 700,
  },
  metal: {
    label: "Mechanically Seamed Metal",
    basePricePerSquare: 900,
  },
  flat: {
    label: "Flat / Low-Slope (TPO / PVC / Mod Bit)",
    basePricePerSquare: 600,
  },
};

const tierOrder = ["good", "better", "best", "premium"] as const;
type TierKey = (typeof tierOrder)[number];

const tierConfig: Record<TierKey, { label: string; multiplier: number }> = {
  good: { label: "Good", multiplier: 1.0 },
  better: { label: "Better", multiplier: 1.12 },
  best: { label: "Best", multiplier: 1.25 },
  premium: { label: "Premium", multiplier: 1.45 },
};

function getTierDescription(roofType: RoofTypeKey, tier: TierKey): string {
  if (roofType === "shingle") {
    switch (tier) {
      case "good":
        return "Solid architectural shingle system with HVHZ fastening and upgraded underlayment.";
      case "better":
        return "Architectural shingle with enhanced underlayment and upgraded accessories for longer life.";
      case "best":
        return "High-performance shingle system with extended warranties and enhanced ventilation details.";
      case "premium":
        return "Premium shingle package using TAMKO or similar systems with up to 160 mph wind warranties where available.";
    }
  }
  if (roofType === "tile") {
    switch (tier) {
      case "good":
        return "Standard concrete tile roof meeting South Florida HVHZ code requirements.";
      case "better":
        return "Concrete tile with upgraded underlayment and enhanced flashing details.";
      case "best":
        return "Higher-end profiles and colors with improved waterproofing details and accessories.";
      case "premium":
        return "Premium clay or composite tile system with top-tier underlayment and upgraded components.";
    }
  }
  if (roofType === "metal") {
    switch (tier) {
      case "good":
        return "Entry-level mechanically seamed metal roof engineered for HVHZ wind requirements.";
      case "better":
        return "Standing seam system with upgraded underlayment and trim details.";
      case "best":
        return "High-performance mechanically seamed metal with enhanced fastening schedules and finishes.";
      case "premium":
        return "Premium aluminum standing seam system ideal for coastal environments and long-term performance.";
    }
  }
  // flat / low-slope
  switch (tier) {
    case "good":
      return "Code-compliant flat roofing with standard membrane and insulation package.";
    case "better":
      return "Upgraded membrane and insulation package for better energy performance.";
    case "best":
      return "Higher-spec system with enhanced flashing, taper design, and long-term warranties.";
    case "premium":
      return "Premium single-ply or multi-layer system with top-tier membranes and coatings for maximum durability.";
  }
}

const RoofCalculator: React.FC = () => {
  const [roofType, setRoofType] = useState<RoofTypeKey>("shingle");
  const [sizeSqFt, setSizeSqFt] = useState<string>("2000");
  const [complexity, setComplexity] = useState<"standard" | "complex">("standard");

  const sizeNumber = Number(sizeSqFt) || 0;
  const squares = sizeNumber / 100; // 1 "square" = 100 sq ft

  const baseConfig = roofTypeOptions[roofType];
  const base = baseConfig.basePricePerSquare * squares;

  // Complexity factor for hips, valleys, multiple stories, details, etc.
  const complexityFactor = complexity === "standard" ? 1.0 : 1.18;
  // Extra HVHZ factor for South Florida uplift, code, and labor vs national averages
  const hvhzFactor = 1.1;

  const baseHvHz = base * complexityFactor * hvhzFactor;

  const formatCurrency = (value: number) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-6 sm:p-8 shadow-xl shadow-black/30">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">Roof Cost Estimator</h2>
      <p className="mt-3 text-sm text-neutral-300">
        Use this tool to see Good / Better / Best / Premium investment ranges for a new roof with All Phase Construction USA.
        Pricing is adjusted for South Florida&apos;s High Velocity Hurricane Zone (HVHZ) and is meant as a starting point. Exact
        proposals are provided after an on-site inspection.
      </p>

      {/* Inputs */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3 text-xs sm:text-sm">
        {/* Roof type */}
        <div className="space-y-2">
          <label className="block text-[11px] font-semibold uppercase tracking-wide text-neutral-300">
            Roof Type
          </label>
          <select
            value={roofType}
            onChange={(e) => setRoofType(e.target.value as RoofTypeKey)}
            className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3 py-2 text-xs text-white outline-none focus:border-red-500"
          >
            {Object.entries(roofTypeOptions).map(([key, value]) => (
              <option key={key} value={key}>
                {value.label}
              </option>
            ))}
          </select>
        </div>

        {/* Roof size */}
        <div className="space-y-2">
          <label className="block text-[11px] font-semibold uppercase tracking-wide text-neutral-300">
            Approx. Roof Size (sq ft)
          </label>
          <input
            type="number"
            min={500}
            step={100}
            value={sizeSqFt}
            onChange={(e) => setSizeSqFt(e.target.value)}
            className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3 py-2 text-xs text-white outline-none focus:border-red-500"
            placeholder="e.g. 2000"
          />
          <p className="text-[10px] text-neutral-500">
            Use your under-roof area. This is a ballpark tool, not a final quote.
          </p>
        </div>

        {/* Complexity */}
        <div className="space-y-2">
          <label className="block text-[11px] font-semibold uppercase tracking-wide text-neutral-300">
            Roof Complexity
          </label>
          <select
            value={complexity}
            onChange={(e) => setComplexity(e.target.value as "standard" | "complex")}
            className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3 py-2 text-xs text-white outline-none focus:border-red-500"
          >
            <option value="standard">Standard (simpler layout)</option>
            <option value="complex">Complex (hips, valleys, details)</option>
          </select>
          <p className="text-[10px] text-neutral-500">
            Complex roofs require more labor, staging, and materials.
          </p>
        </div>
      </div>

      {/* Tiers */}
      <div className="mt-8">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
          Investment Range by Package
        </p>

        {baseHvHz > 0 ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tierOrder.map((tierKey) => {
              const tier = tierConfig[tierKey];
              const tierBase = baseHvHz * tier.multiplier;
              const low = tierBase * 0.9;
              const high = tierBase * 1.1;
              const description = getTierDescription(roofType, tierKey);

              return (
                <div
                  key={tierKey}
                  className="flex flex-col rounded-2xl border border-neutral-800 bg-neutral-950/80 p-4 text-xs text-neutral-200"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-red-400">
                      {tier.label}
                    </span>
                    <span className="text-[10px] text-neutral-400">
                      {roofTypeOptions[roofType].label}
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] leading-snug text-neutral-300">{description}</p>
                  <p className="mt-3 text-sm font-bold text-white">
                    {formatCurrency(low)} – {formatCurrency(high)}
                  </p>
                  <p className="mt-1 text-[10px] text-neutral-500">
                    Range includes HVHZ labor, materials, and typical code requirements.
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="mt-2 text-sm text-neutral-400">
            Enter an approximate roof size above to see Good / Better / Best / Premium investment ranges.
          </p>
        )}
      </div>

      {/* CTA */}
      <div className="mt-8 grid gap-4 sm:grid-cols-[2fr,1.4fr] items-center">
        <p className="text-[11px] text-neutral-400">
          These numbers are meant to give you a realistic starting point for South Florida, not a final contract. For a firm
          proposal, All Phase Construction USA schedules an on-site roof assessment, reviews your structure and code
          requirements, and then builds a detailed, line-item scope of work.
        </p>
        <div className="space-y-2">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-red-500"
          >
            Schedule On-Site Roof Assessment
          </a>
          <p className="text-[10px] text-neutral-500">
            Your request will be sent to leads@allphaseusa.com and a team member from All Phase Construction USA will follow up.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoofCalculator;
