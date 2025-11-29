import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CalculatorState, initialCalculatorState } from './CalculatorTypes';
import Step1PropertyType from './Step1PropertyType';
import Step2RoofSize from './Step2RoofSize';
import Step3Material from './Step3Material';
import Step4TierComplexity from './Step4TierComplexity';
import Step5Results from './Step5Results';

export default function RoofCostCalculator() {
  const [state, setState] = useState<CalculatorState>(initialCalculatorState);
  const location = useLocation();
  const [cityName, setCityName] = useState<string>('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const city = searchParams.get('city');
    if (city) {
      const formatted = city
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      setCityName(formatted);
    }
  }, [location]);

  const updateState = (updates: Partial<CalculatorState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const isCommercial = state.propertyType === 'commercial';

  const nextStep = () => {
    if (state.step === 1 && isCommercial) {
      updateState({ step: 5 });
    } else if (state.step === 2 && !isCommercial) {
      updateState({ step: 4 });
    } else {
      updateState({ step: state.step + 1 });
    }
  };

  const prevStep = () => {
    if (state.step === 5 && isCommercial) {
      updateState({ step: 1 });
    } else if (state.step === 4 && !isCommercial) {
      updateState({ step: 2 });
    } else {
      updateState({ step: state.step - 1 });
    }
  };

  const totalSteps = isCommercial ? 2 : 4;
  const getDisplayStep = () => {
    if (isCommercial && state.step === 5) return 2;
    if (!isCommercial && state.step >= 4) return state.step - 1;
    return state.step;
  };
  const displayStep = getDisplayStep();
  const progressPercentage = (displayStep / totalSteps) * 100;

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-8">
        {cityName && (
          <p className="text-base text-neutral-400">
            You're estimating a roof in {cityName}, FL. These numbers are tuned for typical Broward & Palm Beach homes.
          </p>
        )}
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-neutral-400">Step {displayStep} of {totalSteps}</span>
          <span className="text-sm text-neutral-400">{Math.round(progressPercentage)}% Complete</span>
        </div>
        <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-600 transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 md:p-10 shadow-2xl">
        {state.step === 1 && (
          <Step1PropertyType
            selectedType={state.propertyType}
            onSelect={(type) => updateState({ propertyType: type })}
            onNext={nextStep}
          />
        )}

        {state.step === 2 && (
          <Step2RoofSize
            selectedSize={state.roofSize}
            onSelect={(size) => updateState({ roofSize: size })}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}

        {state.step === 4 && (
          <Step4TierComplexity
            material={state.material}
            selectedComplexity={state.complexity}
            onSelectMaterial={(material) => updateState({ material })}
            onSelectComplexity={(complexity) => updateState({ complexity })}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}

        {state.step === 5 && (
          <Step5Results
            isCommercial={isCommercial}
            roofSize={state.roofSize}
            material={state.material}
            tier={state.tier}
            complexity={state.complexity}
            name={state.name}
            phone={state.phone}
            email={state.email}
            address={state.address}
            city={state.city}
            onUpdateName={(name) => updateState({ name })}
            onUpdatePhone={(phone) => updateState({ phone })}
            onUpdateEmail={(email) => updateState({ email })}
            onUpdateAddress={(address) => updateState({ address })}
            onUpdateCity={(city) => updateState({ city })}
            onBack={prevStep}
          />
        )}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-neutral-500 mb-2">
          Questions? Call us at{' '}
          <a href="tel:7542275605" className="text-red-500 hover:text-red-400">
            754-227-5605
          </a>
        </p>
        <p className="text-xs text-neutral-600">
          All Phase Construction USA • CGC1526236 • CCC1331464
        </p>
      </div>
    </div>
  );
}
