import { motion } from 'framer-motion';
import { Ruler } from 'lucide-react';
import { ROOF_SIZES } from '../../config/materialConfig';

interface Step2Props {
  selectedSize: number;
  onSelect: (size: number) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step2RoofSize({ selectedSize, onSelect, onNext, onBack }: Step2Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <Ruler className="w-7 h-7 text-red-500" />
        <h2 className="text-3xl font-bold text-white">Step 2: What is your approximate roof size?</h2>
      </div>
      <p className="text-lg text-neutral-300 mb-2">Select the size range that best matches your roof</p>
      <div className="h-1 w-20 bg-red-600 rounded-full mt-2 mb-8"></div>

      <div className="grid grid-cols-1 gap-4 mb-8">
        {ROOF_SIZES.map((size) => (
          <button
            key={size.value}
            onClick={() => onSelect(size.value)}
            className={`p-6 rounded-xl border-2 text-left transition-all duration-200 ${
              selectedSize === size.value
                ? 'border-red-500 bg-red-500/10'
                : 'border-neutral-700 bg-neutral-900 hover:border-neutral-600'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-white">{size.label}</span>
              <span className="text-sm text-neutral-500">{size.range} sq ft</span>
            </div>
          </button>
        ))}
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
          disabled={!selectedSize}
          className="flex-1 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </motion.div>
  );
}
