import { MapPin, Ruler, Layers, Phone } from 'lucide-react';
import { CalculatorState } from './CalculatorTypes';

interface SummarySidebarProps {
  state: CalculatorState;
}

export default function SummarySidebar({ state }: SummarySidebarProps) {
  const formatPropertyType = (type: string) => {
    if (type === 'residential') return 'Residential';
    if (type === 'commercial') return 'Commercial';
    return '';
  };

  const formatRoofSize = (size: string) => {
    const sizeMap: Record<string, string> = {
      'small': 'Small (1,000-1,500 sq ft)',
      'medium': 'Medium (1,500-2,500 sq ft)',
      'large': 'Large (2,500-3,500 sq ft)',
      'xlarge': 'Extra Large (3,500+ sq ft)',
    };
    return sizeMap[size] || '';
  };

  const formatMaterial = (material: string) => {
    const materialMap: Record<string, string> = {
      'shingle': 'Architectural Shingle',
      'tile': 'Concrete Tile',
      'flat': 'TPO Flat Roof',
      'metal': 'Metal Roof',
    };
    return materialMap[material] || '';
  };

  const formatComplexity = (complexity: string) => {
    const complexityMap: Record<string, string> = {
      'simple': 'Simple (1-2 stories, basic design)',
      'moderate': 'Moderate (2 stories, some features)',
      'complex': 'Complex (3+ stories, many features)',
    };
    return complexityMap[complexity] || '';
  };

  return (
    <div className="bg-neutral-900/80 border border-neutral-700 rounded-2xl p-6 shadow-lg sticky top-24 hidden lg:block">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Layers className="w-5 h-5 text-red-500" />
        Your Selections
      </h3>

      <div className="space-y-4">
        {state.propertyType && (
          <div className="flex items-start gap-3">
            <Ruler className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-neutral-400">Property Type</p>
              <p className="text-white font-medium">{formatPropertyType(state.propertyType)}</p>
            </div>
          </div>
        )}

        {state.roofSize && (
          <div className="flex items-start gap-3">
            <Ruler className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-neutral-400">Roof Size</p>
              <p className="text-white font-medium">{formatRoofSize(state.roofSize)}</p>
            </div>
          </div>
        )}

        {state.material && (
          <div className="flex items-start gap-3">
            <Layers className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-neutral-400">Material</p>
              <p className="text-white font-medium">{formatMaterial(state.material)}</p>
            </div>
          </div>
        )}

        {state.complexity && (
          <div className="flex items-start gap-3">
            <Layers className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-neutral-400">Complexity</p>
              <p className="text-white font-medium">{formatComplexity(state.complexity)}</p>
            </div>
          </div>
        )}

        {state.city && (
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-neutral-400">Location</p>
              <p className="text-white font-medium">{state.city}</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-neutral-700">
        <p className="text-sm text-neutral-400 mb-3">Want an exact price?</p>
        <a
          href="tel:754-227-5605"
          className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Schedule Appointment
        </a>
      </div>
    </div>
  );
}
