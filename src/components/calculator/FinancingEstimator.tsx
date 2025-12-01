import { useState, useEffect } from 'react';
import { DollarSign } from 'lucide-react';

interface FinancingEstimatorProps {
  totalProjectCost: number;
  insuranceAnnualSavings: number;
  ventilationAnnualSavings: number;
}

export default function FinancingEstimator({
  totalProjectCost,
  insuranceAnnualSavings,
  ventilationAnnualSavings,
}: FinancingEstimatorProps) {
  const [downPayment, setDownPayment] = useState(7500);

  useEffect(() => {
    if (downPayment > totalProjectCost) {
      setDownPayment(totalProjectCost);
    }
  }, [downPayment, totalProjectCost]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    const cappedValue = Math.min(Math.max(value, 0), totalProjectCost);
    setDownPayment(cappedValue);
  };

  const financedAmount = Math.max(totalProjectCost - downPayment, 0);
  const lowMonthly = Math.round((financedAmount / 10000) * 97);
  const highMonthly = Math.round((financedAmount / 10000) * 137);

  return (
    <div className="bg-gradient-to-br from-blue-900/20 to-blue-700/10 border-2 border-blue-500/30 rounded-2xl p-8 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <DollarSign className="w-8 h-8 text-blue-500" />
        <h3 className="text-3xl font-bold text-white">
          Estimate Your Monthly Payment
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div className="bg-black/40 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Cost Overview</h4>
            <div className="space-y-3 text-neutral-300">
              <div className="flex justify-between">
                <span>Roof Cost:</span>
                <span className="font-semibold text-white">{formatCurrency(totalProjectCost)}</span>
              </div>
              {insuranceAnnualSavings > 0 && (
                <div className="flex justify-between">
                  <span>Estimated Annual Insurance Savings:</span>
                  <span className="font-semibold text-green-400">{formatCurrency(insuranceAnnualSavings)}</span>
                </div>
              )}
              {ventilationAnnualSavings > 0 && (
                <div className="flex justify-between">
                  <span>Estimated Annual Ventilation/Energy Savings:</span>
                  <span className="font-semibold text-yellow-400">{formatCurrency(ventilationAnnualSavings)}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-black/40 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Financing Details</h4>
            <div className="space-y-4">
              <div>
                <label htmlFor="downPayment" className="block text-sm font-medium text-neutral-400 mb-2">
                  Down Payment
                </label>
                <input
                  type="number"
                  id="downPayment"
                  value={downPayment}
                  onChange={handleDownPaymentChange}
                  min={0}
                  max={totalProjectCost}
                  className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
                <p className="text-xs text-neutral-500 mt-1">
                  Defaulted to $7,500 – adjust this number to see different payment scenarios.
                </p>
              </div>

              <div className="flex justify-between text-neutral-300 pt-2">
                <span>Amount Financed:</span>
                <span className="font-semibold text-white">{formatCurrency(financedAmount)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-600/20 to-blue-500/10 border border-blue-500/50 rounded-xl p-6 mb-6">
        <div className="text-center">
          <p className="text-sm text-neutral-400 mb-2">Estimated Monthly Payment Range</p>
          <p className="text-4xl font-bold text-blue-400 mb-3">
            {formatCurrency(lowMonthly)} – {formatCurrency(highMonthly)}
            <span className="text-xl text-neutral-400"> / month</span>
          </p>
          <p className="text-sm text-neutral-300">
            These ranges are based on common lender programs using approximately $97–$137 per month for every $10,000 financed.
          </p>
        </div>
      </div>

      <div className="bg-neutral-900/50 rounded-xl p-4 border border-neutral-700 mb-4">
        <p className="text-xs text-neutral-400 leading-relaxed">
          <span className="font-semibold text-neutral-300">Disclaimer:</span> This tool is for illustration purposes only and does not constitute a financing offer or commitment to lend. Actual payment amounts, interest rates, and terms are provided by third-party lenders and will vary based on credit approval, loan amount, term length, and other factors.
        </p>
      </div>

      <div className="text-center text-neutral-300 leading-relaxed">
        <p>
          Once most homeowners see how small the monthly difference is, they often choose to upgrade to a better roof system with enhanced waterproofing, ventilation, or higher-wind materials.
        </p>
      </div>
    </div>
  );
}
