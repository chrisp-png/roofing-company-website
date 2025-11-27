import React, { useState } from "react";

type RoofTypeKey = "shingle" | "tile" | "metal" | "flat";

const roofPricing: Record<
  RoofTypeKey,
  { label: string; pricePerSquare: number }
> = {
  shingle: { label: "Architectural Shingle", pricePerSquare: 450 },
  tile: { label: "Concrete/Clay Tile", pricePerSquare: 650 },
  metal: { label: "Mechanically Seamed Metal", pricePerSquare: 850 },
  flat: { label: "Flat / Low-Slope (TPO/PVC/Mod Bit)", pricePerSquare: 550 },
};

const RoofCalculator: React.FC = () => {
  const [roofType, setRoofType] = useState<RoofTypeKey>("shingle");
  const [sizeSqFt, setSizeSqFt] = useState<string>("2000");
  const [complexity, setComplexity] = useState<"standard" | "complex">(
    "standard"
  );

  const sizeNumber = Number(sizeSqFt) || 0;
  const squares = sizeNumber / 100;
  const base = roofPricing[roofType].pricePerSquare * squares;
  const complexityFactor = complexity === "standard" ? 1 : 1.25;
  const estimate = base * complexityFactor;

  const low = estimate * 0.9;
  const high = estimate * 1.1;

  const formatCurrency = (value: number) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 shadow-xl shadow-black/30">
      <h2 className="text-2xl font-bold text-slate-50 sm:text-3xl">
        Roof Investment Calculator
      </h2>
      <p className="mt-3 text-sm text-slate-300">
        Get a ballpark range for a new roof in South Florida. Exact pricing is
        confirmed after an on-site inspection, code review, and scope of work.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3 text-xs sm:text-sm">
        <div className="space-y-2">
          <label className="block text-[11px] font-semibold uppercase tracking-wide text-slate-300">
            Roof Type
          </label>
          <select
            value={roofType}
            onChange={(e) => setRoofType(e.target.value as RoofTypeKey)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-50 outline-none focus:border-red-500"
          >
            {Object.entries(roofPricing).map(([key, value]) => (
              <option key={key} value={key}>
                {value.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-[11px] font-semibold uppercase tracking-wide text-slate-300">
            Approx. Roof Size (sq ft)
          </label>
          <input
            type="number"
            min={500}
            step={100}
            value={sizeSqFt}
            onChange={(e) => setSizeSqFt(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-50 outline-none focus:border-red-500"
            placeholder="e.g. 2000"
          />
          <p className="text-[10px] text-slate-500">
            Tip: Total under-roof area, not just interior living space.
          </p>
        </div>

        <div className="space-y-2">
          <label className="block text-[11px] font-semibold uppercase tracking-wide text-slate-300">
            Complexity
          </label>
          <select
            value={complexity}
            onChange={(e) =>
              setComplexity(e.target.value as "standard" | "complex")
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-50 outline-none focus:border-red-500"
          >
            <option value="standard">Standard (simple roof)</option>
            <option value="complex">Complex (hips, valleys, details)</option>
          </select>
          <p className="text-[10px] text-slate-500">
            Complex roofs with more cuts, details, or steep pitches require more
            labor and materials.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-[2fr,1fr] items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Estimated Range
          </p>
          {estimate > 0 ? (
            <>
              <p className="mt-1 text-lg font-bold text-slate-50 sm:text-2xl">
                {formatCurrency(low)} – {formatCurrency(high)}
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Based on {roofPricing[roofType].label}, approx.{" "}
                {Math.round(squares)} squares,{" "}
                {complexity === "complex" ? "complex" : "standard"} roof.
              </p>
            </>
          ) : (
            <p className="mt-1 text-sm text-slate-400">
              Enter an approximate roof size to see a range.
            </p>
          )}
        </div>

        <div className="space-y-2">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-red-500"
          >
            Schedule On-Site Assessment
          </a>
          <p className="text-[10px] text-slate-500">
            Final pricing depends on inspection, wood replacement, code upgrades,
            and association or commercial requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoofCalculator;
