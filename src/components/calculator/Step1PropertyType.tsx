import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { PROPERTY_TYPES } from '../../config/materialConfig';

interface Step1Props {
  selectedType: string;
  onSelect: (type: string) => void;
  onNext: () => void;
}

export default function Step1PropertyType({ selectedType, onSelect, onNext }: Step1Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <Home className="w-7 h-7 text-red-500" />
        <h2 className="text-3xl font-bold text-white">Step 1: Tell Us About Your Roof (Start Here)</h2>
      </div>
      <p className="text-lg text-neutral-300 mb-2">This will help us calculate your estimated price range.</p>
      <div className="h-1 w-20 bg-red-600 rounded-full mt-2 mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {PROPERTY_TYPES.map((type) => (
          <button
            key={type.value}
            onClick={() => onSelect(type.value)}
            className={`p-6 rounded-xl border-2 text-left transition-all duration-200 ${
              selectedType === type.value
                ? 'border-red-500 bg-red-500/10'
                : 'border-neutral-700 bg-neutral-900 hover:border-neutral-600'
            }`}
          >
            <span className="text-lg font-semibold text-white">{type.label}</span>
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!selectedType}
        className="w-full px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </motion.div>
  );
}
