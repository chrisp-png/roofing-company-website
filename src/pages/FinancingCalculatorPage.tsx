import { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { generateEstimatePDF } from '../utils/pdfGenerator';

const creditTiers = [
  { label: 'Excellent (750+)', rate: 95, value: 'excellent' },
  { label: 'Good (700-749)', rate: 110, value: 'good' },
  { label: 'Fair (650-699)', rate: 125, value: 'fair' },
  { label: 'Building Credit (<650)', rate: 135, value: 'building' },
];

export default function FinancingCalculatorPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const betterLowParam = searchParams.get('betterLow');
  const betterHighParam = searchParams.get('betterHigh');
  const bestLowParam = searchParams.get('bestLow');
  const bestHighParam = searchParams.get('bestHigh');
  const roofTypeParam = searchParams.get('roofType');
  const roofSizeParam = searchParams.get('roofSize');
  const nameParam = searchParams.get('name');
  const materialParam = searchParams.get('material');
  const tierParam = searchParams.get('tier');
  const complexityParam = searchParams.get('complexity');

  const passedState = location.state as any;

  useEffect(() => {
    if (!betterLowParam || !betterHighParam) {
      navigate('/roof-cost-calculator', {
        state: { message: 'Please complete the roof estimate steps first.' }
      });
    }
  }, [betterLowParam, betterHighParam, navigate]);

  const betterLow = parseInt(betterLowParam || '0');
  const betterHigh = parseInt(betterHighParam || '0');
  const bestLow = parseInt(bestLowParam || '0');
  const bestHigh = parseInt(bestHighParam || '0');
  const roofSize = parseInt(roofSizeParam || '0');

  const [selectedTier, setSelectedTier] = useState<'better' | 'best'>('better');
  const [roofCost, setRoofCost] = useState(betterLow);
  const [downPayment, setDownPayment] = useState(0);
  const [selectedCredit, setSelectedCredit] = useState('good');

  useEffect(() => {
    if (selectedTier === 'better') {
      setRoofCost(betterLow);
    } else {
      setRoofCost(bestLow);
    }
  }, [selectedTier, betterLow, bestLow]);

  const creditTier = creditTiers.find(t => t.value === selectedCredit) || creditTiers[1];
  const amountToFinance = Math.max(0, roofCost - downPayment);
  const estimatedMonthly = Math.round((amountToFinance / 10000) * creditTier.rate);

  const betterAmountToFinance = Math.max(0, betterLow - downPayment);
  const betterMonthlyLow = Math.round((betterAmountToFinance / 10000) * creditTier.rate);
  const betterAmountToFinanceHigh = Math.max(0, betterHigh - downPayment);
  const betterMonthlyHigh = Math.round((betterAmountToFinanceHigh / 10000) * creditTier.rate);

  const bestAmountToFinance = Math.max(0, bestLow - downPayment);
  const bestMonthlyLow = Math.round((bestAmountToFinance / 10000) * creditTier.rate);
  const bestAmountToFinanceHigh = Math.max(0, bestHigh - downPayment);
  const bestMonthlyHigh = Math.round((bestAmountToFinanceHigh / 10000) * creditTier.rate);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleDownloadPDF = () => {
    if (passedState && nameParam && materialParam && tierParam) {
      generateEstimatePDF({
        name: nameParam,
        material: materialParam,
        tier: tierParam,
        roofSize: roofSize,
        complexity: parseFloat(complexityParam || '1'),
        lowEstimate: betterLow,
        highEstimate: betterHigh,
        bestLowEstimate: bestLow,
        bestHighEstimate: bestHigh,
        insurance10Year: 25000,
        insurance20Year: 50000,
        ventilation10Year: 6000,
        ventilation20Year: 12000,
        total20YearSavings: 62000,
      });
    }
  };

  if (!betterLowParam || !betterHighParam) {
    return null;
  }

  return (
    <Layout>
      <SEO
        title="Roof Financing Calculator - Explore Monthly Payment Options | All Phase Construction USA"
        description="Estimate your monthly roof financing payments with our calculator. See affordable payment options for your new roof in South Florida."
      />

      <div className="min-h-screen bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Your Monthly Payment Options
            </h1>
            <p className="text-xl text-neutral-300 mb-2">
              These payment estimates are based on your roof size, system type, and chosen upgrade level.
            </p>
            <p className="text-lg text-neutral-400">
              Final terms depend on credit approval and lender programs.
            </p>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 mb-8">
            <div className="mb-8">
              <label className="block text-sm font-semibold text-neutral-400 mb-3">
                Choose Your System Tier
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedTier('better')}
                  className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                    selectedTier === 'better'
                      ? 'border-red-500 bg-red-500/10'
                      : 'border-neutral-700 bg-neutral-900 hover:border-neutral-600'
                  }`}
                >
                  <h4 className="text-lg font-semibold text-white mb-1">Better Tier</h4>
                  <p className="text-sm text-neutral-400">Recommended</p>
                  <p className="text-red-500 font-bold mt-2">
                    {formatCurrency(betterLow)} - {formatCurrency(betterHigh)}
                  </p>
                </button>

                <button
                  onClick={() => setSelectedTier('best')}
                  className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                    selectedTier === 'best'
                      ? 'border-red-500 bg-red-500/10'
                      : 'border-neutral-700 bg-neutral-900 hover:border-neutral-600'
                  }`}
                >
                  <h4 className="text-lg font-semibold text-white mb-1">Best Tier</h4>
                  <p className="text-sm text-neutral-400">Upgraded System</p>
                  <p className="text-orange-500 font-bold mt-2">
                    {formatCurrency(bestLow)} - {formatCurrency(bestHigh)}
                  </p>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold text-neutral-400 mb-3">
                  Estimated Project Cost (Adjust if Desired)
                </label>
                <input
                  type="number"
                  value={roofCost}
                  onChange={(e) => setRoofCost(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white text-lg focus:outline-none focus:border-red-500"
                  step="1000"
                  min="0"
                />
                <p className="text-xs text-neutral-500 mt-2">
                  Pre-filled with lower end of selected tier
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-400 mb-3">
                  Down Payment (Optional)
                </label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white text-lg focus:outline-none focus:border-red-500"
                  step="500"
                  min="0"
                />
                <p className="text-xs text-neutral-500 mt-2">
                  Default: $0 (100% financing available)
                </p>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-neutral-400 mb-3">
                Your Credit Tier
              </label>
              <select
                value={selectedCredit}
                onChange={(e) => setSelectedCredit(e.target.value)}
                className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white text-lg focus:outline-none focus:border-red-500"
              >
                {creditTiers.map((tier) => (
                  <option key={tier.value} value={tier.value}>
                    {tier.label} (≈ ${tier.rate} per $10,000)
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Better Tier (Recommended)
              </h3>
              <p className="text-neutral-400 mb-6">Estimated Monthly Payment:</p>
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-red-500 mb-2">
                  {formatCurrency(betterMonthlyLow)} - {formatCurrency(betterMonthlyHigh)}
                </div>
                <p className="text-neutral-400">per month</p>
                <p className="text-sm text-neutral-500 mt-2">Based on 60-month term</p>
              </div>
              <div className="bg-black/40 rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-neutral-400">Project Range:</p>
                    <p className="text-white font-semibold">{formatCurrency(betterLow)} - {formatCurrency(betterHigh)}</p>
                  </div>
                  <div>
                    <p className="text-neutral-400">Down Payment:</p>
                    <p className="text-white font-semibold">{formatCurrency(downPayment)}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-orange-700/10 border-2 border-orange-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Best Tier (Upgraded System)
              </h3>
              <p className="text-neutral-400 mb-6">Estimated Monthly Payment:</p>
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-orange-500 mb-2">
                  {formatCurrency(bestMonthlyLow)} - {formatCurrency(bestMonthlyHigh)}
                </div>
                <p className="text-neutral-400">per month</p>
                <p className="text-sm text-neutral-500 mt-2">Based on 60-month term</p>
              </div>
              <div className="bg-black/40 rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-neutral-400">Project Range:</p>
                    <p className="text-white font-semibold">{formatCurrency(bestLow)} - {formatCurrency(bestHigh)}</p>
                  </div>
                  <div>
                    <p className="text-neutral-400">Down Payment:</p>
                    <p className="text-white font-semibold">{formatCurrency(downPayment)}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
              <p className="text-blue-300 text-sm text-center">
                <strong>Good news:</strong> You may qualify for longer terms (up to 20 years) which can significantly lower your monthly payment. Discuss term options with our financing coordinator during your inspection.
              </p>
            </div>
          </div>

          <div className="bg-yellow-900/20 border-2 border-yellow-600/50 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-yellow-500 mb-4">
              Important Disclaimers
            </h3>
            <div className="space-y-3 text-neutral-300 text-sm leading-relaxed">
              <p>
                <strong className="text-white">These figures are estimates only and not loan offers.</strong>
              </p>
              <p>
                <strong className="text-white">Monthly payment amounts vary by lender, loan term, credit profile, and program.</strong>
              </p>
              <p>
                <strong className="text-white">All Phase Construction USA is not a lender.</strong> Actual financing terms, rates, monthly payments, and approval are determined by third-party lenders.
              </p>
              <p>
                <strong className="text-white">Final terms require lender approval.</strong> Your actual payment may be significantly higher or lower based on credit verification, income, and debt-to-income ratio.
              </p>
              <p>
                <strong className="text-white">All pricing is preliminary and subject to on-site inspection.</strong>
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Ready to Move Forward?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="tel:7542275605"
                  className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-colors text-center"
                >
                  Call Now: 754-227-5605
                </a>
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-red-600 text-red-500 text-lg font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors text-center"
                >
                  Schedule Your Inspection
                </Link>
              </div>
              <p className="text-center text-sm text-neutral-400">
                Our team will confirm your estimate and discuss real financing options
              </p>
            </div>

            {nameParam && materialParam && (
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                <button
                  onClick={handleDownloadPDF}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-neutral-800 text-white text-lg font-semibold rounded-lg hover:bg-neutral-700 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download My Detailed Roof Estimate (PDF)
                </button>
              </div>
            )}
          </div>

          <div className="text-center">
            <Link
              to="/roof-cost-calculator"
              className="text-red-500 hover:text-red-400 underline"
            >
              ← Back to Roof Cost Calculator
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
