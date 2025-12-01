import { Layers, MapPin } from 'lucide-react';
import { MATERIAL_CONFIG, COMPLEXITY_LEVELS } from '../../config/materialConfig';

interface Step4Props {
  material: string;
  selectedComplexity: number;
  onSelectMaterial: (material: string) => void;
  onSelectComplexity: (complexity: number) => void;
  onNext: () => void;
  onBack: () => void;
}

const dollarSignMap: { [key: string]: string } = {
  good: '$',
  better: '$$',
  best: '$$$',
  premium: '$$$$',
};

const tierDescriptions: { [key: string]: string } = {
  good: 'Code-minimum system for budget-conscious projects.',
  better: 'Upgraded underlayment and components for stronger performance and longer life.',
  best: 'Premium system with enhanced wind resistance and better long-term value.',
  premium: 'Top-of-the-line system with the longest service life and best storm performance.',
};

export default function Step4TierComplexity({
  material,
  selectedComplexity,
  onSelectMaterial,
  onSelectComplexity,
  onNext,
  onBack,
}: Step4Props) {
  const roofTypes = ['shingle', 'tile', 'metal', 'flat'];
  const tierOrder = ['good', 'better', 'best', 'premium'];

  return (
    <div className="animate-fadeIn">
      <div className="flex items-center gap-3 mb-2">
        <Layers className="w-7 h-7 text-red-500" />
        <h2 className="text-3xl font-bold text-white">Step 3: Review Your Roof System Options</h2>
      </div>
      <p className="text-lg text-neutral-300 mb-2">
        Choose your roof type and review the quality levels available. After you provide your contact info, we'll show you pricing for all tiers.
      </p>
      <div className="h-1 w-20 bg-red-600 rounded-full mt-2 mb-8"></div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">Select Your Roof Type</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {roofTypes.map((roofType) => {
            const config = MATERIAL_CONFIG[roofType];
            if (!config) return null;

            const isSelected = material === roofType;

            return (
              <button
                key={roofType}
                onClick={() => onSelectMaterial(roofType)}
                className={`p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-red-500 bg-red-500/10'
                    : 'border-neutral-700 bg-neutral-900 hover:border-neutral-600'
                }`}
              >
                <h4 className="text-lg font-bold text-white mb-2">{config.label}</h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  {config.generalBenefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-red-500 mr-1">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>
      </div>

      {material && (
        <div className="mb-8 bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Quality Levels Available for {MATERIAL_CONFIG[material]?.label}
          </h3>
          <p className="text-sm text-neutral-400 mb-6">
            These are informational only. After you enter your contact info, we'll show you pricing for all quality levels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tierOrder.map((tier) => {
              const tierConfig = MATERIAL_CONFIG[material]?.tiers[tier];
              if (!tierConfig) return null;

              const dollarSigns = dollarSignMap[tier] || '';
              const description = tierDescriptions[tier];

              return (
                <div
                  key={tier}
                  className="p-4 rounded-xl border border-neutral-700 bg-black"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white capitalize">{tier}</span>
                    <span className="text-lg font-bold text-red-500">{dollarSigns}</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">{description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-4 p-3 bg-neutral-800 border border-neutral-700 rounded-lg">
            <p className="text-xs text-neutral-400 text-center">
              <strong className="text-white">Dollar signs ($–$$$$)</strong> represent relative cost. Actual pricing will be shown on the next screen.
            </p>
          </div>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">Roof Complexity</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {COMPLEXITY_LEVELS.map((level) => (
            <button
              key={level.value}
              onClick={() => onSelectComplexity(level.value)}
              className={`p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                selectedComplexity === level.value
                  ? 'border-red-500 bg-red-500/10'
                  : 'border-neutral-700 bg-neutral-900 hover:border-neutral-600'
              }`}
            >
              <h4 className="text-lg font-semibold text-white mb-2">{level.label}</h4>
              <p className="text-sm text-neutral-400">{level.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="flex-1 px-8 py-4 border border-neutral-700 text-white font-semibold rounded-lg hover:bg-neutral-900 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!material || !selectedComplexity}
          className="flex-1 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue to Get Estimate
        </button>
      </div>
    </div>
  );
}
