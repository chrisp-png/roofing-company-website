import React, { useState } from "react";

type RoofTypeKey = "shingle" | "tile" | "metal" | "flat";
const roofTypeOptions: Record<RoofTypeKey, { label: string; basePricePerSquare: number }> = {
  shingle: { label: "Architectural Shingle", basePricePerSquare: 500 },
  tile: { label: "Concrete / Clay Tile", basePricePerSquare: 700 },
  metal: { label: "Mechanically Seamed Metal", basePricePerSquare: 900 },
  flat: { label: "Flat / Low-Slope (TPO / PVC / Mod Bit)", basePricePerSquare: 600 },
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
        return "Architectural shingle with enhanced underlayment and upgraded accessories.";
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  const sizeNumber = Number(sizeSqFt) || 0;
  const squares = sizeNumber / 100;

  const baseConfig = roofTypeOptions[roofType];
  const base = baseConfig.basePricePerSquare * squares;

  const complexityFactor = complexity === "standard" ? 1.0 : 1.18;
  const hvhzFactor = 1.1;
  const baseHvHz = base * complexityFactor * hvhzFactor;

  const formatCurrency = (value: number) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  const canShowButton = !!name && !!email && !!phone && sizeNumber > 0 && consent;

  const handleShowPricing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canShowButton) return;
    // In the future this is where a real submission / API call could be made.
    setShowPricing(true);
  };

  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-6 sm:p-8 shadow-xl shadow-black/30">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">Roof Cost Estimator</h2>
      <p className="mt-3 text-sm text-neutral-300">
        Get Good / Better / Best / Premium investment ranges for your roof in South Florida. We use HVHZ-adjusted pricing as a
        realistic starting point. Final proposals are provided after an on-site roof assessment.
      </p>

      {/* STEP 1: Roof details */}
      <div className="mt-6">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
          Step 1 · Tell us about your roof
        </p>
        <div className="mt-3 grid gap-4 sm:grid-cols-3 text-xs sm:text-sm">
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
      </div>

      {/* STEP 2: Contact info */}
      <form onSubmit={handleShowPricing} className="mt-8 space-y-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
          Step 2 · Where should we send your estimate?
        </p>
        <div className="grid gap-4 sm:grid-cols-3 text-xs sm:text-sm">
          <div className="space-y-2">
            <label className="block text-[11px] font-semibold uppercase tracking-wide text-neutral-300">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3 py-2 text-xs text-white outline-none focus:border-red-500"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[11px] font-semibold uppercase tracking-wide text-neutral-300">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3 py-2 text-xs text-white outline-none focus:border-red-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[11px] font-semibold uppercase tracking-wide text-neutral-300">
              Mobile Phone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3 py-2 text-xs text-white outline-none focus:border-red-500"
              placeholder="(555) 555-5555"
            />
          </div>
        </div>

        <div className="flex items-start gap-2 text-[10px] text-neutral-400">
          <input
            id="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-3 w-3 rounded border-neutral-600 bg-neutral-900"
          />
          <label htmlFor="consent">
            I agree that All Phase Construction USA may contact me about this estimate by phone, text, or email. Message and data
            rates may apply. My information will be sent to <span className="text-neutral-200">leads@allphaseusa.com</span>.
          </label>
        </div>

        <div className="mt-3 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={!canShowButton}
            className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-wide ${
              canShowButton
                ? "bg-red-600 text-white hover:bg-red-500"
                : "bg-neutral-800 text-neutral-500 cursor-not-allowed"
            }`}
          >
            Show My Estimate
          </button>
          <p className="text-[10px] text-neutral-500">
            This will reveal your Good / Better / Best / Premium ranges immediately on this page.
          </p>
        </div>
      </form>

      {/* STEP 3: Pricing tiers (only after form completion) */}
      {showPricing && baseHvHz > 0 && (
        <div className="mt-8">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-400">
            Investment Range by Package
          </p>
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

          <div className="mt-6 grid gap-4 sm:grid-cols-[2fr,1.4fr] items-center">
            <p className="text-[11px] text-neutral-400">
              These numbers are designed as a realistic starting point for South Florida. For a firm proposal, All Phase Construction
              USA will schedule an on-site roof assessment, review structural and code requirements, and provide a detailed,
              line-item scope of work.
            </p>
            <div className="space-y-2">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-red-500"
              >
                Schedule On-Site Roof Assessment
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoofCalculator;
