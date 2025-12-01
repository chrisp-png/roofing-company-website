import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { CalculatorState, initialCalculatorState } from './CalculatorTypes';
import ProgressBar from './ProgressBar';
import SummarySidebar from './SummarySidebar';
import Step1PropertyType from './Step1PropertyType';
import Step2RoofSize from './Step2RoofSize';
import Step3Material from './Step3Material';
import Step4TierComplexity from './Step4TierComplexity';
import Step5Results from './Step5Results';

export default function RoofCostCalculator() {
  const [state, setState] = useState<CalculatorState>(initialCalculatorState);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const [cityName, setCityName] = useState<string>('');
  const resultsRef = useRef<HTMLDivElement>(null);

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
    } else if (state.step === 4 && !isCommercial) {
      setShowModal(true);
    } else {
      updateState({ step: state.step + 1 });
    }
  };

  const handleShowEstimate = () => {
    setShowModal(false);
    updateState({ step: 5 });
    setTimeout(() => {
      if (resultsRef.current) {
        const elementPosition = resultsRef.current.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 80;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleBookAppointment = () => {
    setShowModal(false);
    updateState({ step: 5 });
    setTimeout(() => {
      if (resultsRef.current) {
        const elementPosition = resultsRef.current.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 80;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
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
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-8">
        {cityName && (
          <p className="text-base text-neutral-400">
            You're estimating a roof in {cityName}, FL. These numbers are tuned for typical Broward & Palm Beach homes.
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProgressBar currentStep={displayStep} totalSteps={totalSteps} />

          <div ref={resultsRef} className="bg-neutral-900/60 border border-neutral-700 rounded-2xl p-6 md:p-10 shadow-lg backdrop-blur">
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
            <p className="text-sm text-neutral-400 mb-2">
              Questions? Call us at{' '}
              <a href="tel:7542275605" className="text-red-500 hover:text-red-400">
                754-227-5605
              </a>
            </p>
            <p className="text-xs text-neutral-400">
              All Phase Construction USA • CGC1526236 • CCC1331464
            </p>
          </div>
        </div>

        <SummarySidebar state={state} />
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-neutral-950 border-2 border-neutral-800 rounded-2xl p-8 max-w-lg w-full shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-3xl font-bold text-white mb-3">You're almost done!</h2>
            <p className="text-lg text-neutral-300 mb-8">
              Before scheduling, would you like to see your estimated roof price range?
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleShowEstimate}
                className="flex-1 px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Show me my estimate →
              </button>
              <button
                onClick={handleBookAppointment}
                className="flex-1 px-6 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg"
              >
                Yes — help me book an appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
