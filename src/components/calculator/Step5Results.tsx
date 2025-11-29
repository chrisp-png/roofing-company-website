import { useState } from 'react';
import { motion } from 'framer-motion';
import { MATERIAL_CONFIG } from '../../config/materialConfig';
import { Check, Building2, Download, Calculator, DollarSign, Phone, CreditCard } from 'lucide-react';
import DualLicensedAdvantageSection from './DualLicensedAdvantageSection';
import TrustElements from './TrustElements';
import RoofBuyersChecklist from './RoofBuyersChecklist';
import { generateEstimatePDF } from '../../utils/pdfGenerator';

interface Step5Props {
  isCommercial: boolean;
  roofSize: number;
  material: string;
  tier: string;
  complexity: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  onUpdateName: (value: string) => void;
  onUpdatePhone: (value: string) => void;
  onUpdateEmail: (value: string) => void;
  onUpdateAddress: (value: string) => void;
  onUpdateCity: (value: string) => void;
  onBack: () => void;
}

export default function Step5Results({
  isCommercial,
  roofSize,
  material,
  tier,
  complexity,
  name,
  phone,
  email,
  address,
  city,
  onUpdateName,
  onUpdatePhone,
  onUpdateEmail,
  onUpdateAddress,
  onUpdateCity,
  onBack,
}: Step5Props) {
  const [submitted, setSubmitted] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const isValidEmail = (email: string) => {
    return email.includes('@') && email.length > 3;
  };

  const isValidPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 10;
  };

  const canSubmit = name.trim() !== '' && phone.trim() !== '' && email.trim() !== '' && isValidEmail(email) && isValidPhone(phone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canSubmit) {
      setSubmitted(true);
    }
  };

  if (isCommercial) {
    if (submitted) {
      return (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-xl text-neutral-300 mb-6">
            A team member from All Phase Construction USA will contact you to schedule an on-site
            commercial/HOA inspection.
          </p>
          <p className="text-sm text-neutral-400">
            Questions? Call us at{' '}
            <a href="tel:7542275605" className="text-red-500 hover:underline">
              754-227-5605
            </a>
          </p>
        </div>
      );
    }

    return (
      <div>
        <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-4">
            <Building2 className="w-12 h-12 text-red-500 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">On-Site Inspection Required</h2>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Commercial and HOA roofs almost always exceed 5,000 sq ft and have many variables. An
                on-site inspection is mandatory in order to provide accurate pricing.
              </p>
              <p className="text-lg text-neutral-300 mt-4">
                Please fill out your contact information and we will schedule a site visit.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Schedule Your Commercial Inspection</h3>
          <p className="text-neutral-400 mb-6 text-sm">
            All fields are required. We'll contact you within 24 hours to schedule your on-site visit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => onUpdateName(e.target.value)}
                className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => onUpdatePhone(e.target.value)}
                placeholder="(555) 123-4567"
                className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => onUpdateEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => onUpdateCity(e.target.value)}
                placeholder="e.g., Boca Raton"
                className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-400 mb-2">
              Property Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => onUpdateAddress(e.target.value)}
              placeholder="Street address"
              className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
              required
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 px-8 py-4 border border-neutral-700 text-white font-semibold rounded-lg hover:bg-neutral-900 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={!canSubmit}
              className="flex-1 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Request Inspection
            </button>
          </div>
        </form>

        <p className="text-center text-xs text-neutral-500">
          By submitting, you agree to be contacted by All Phase Construction USA regarding your commercial roofing project.
        </p>
      </div>
    );
  }

  const tierConfig = MATERIAL_CONFIG[material]?.tiers[tier];
  const materialConfig = MATERIAL_CONFIG[material];

  if (!tierConfig || !materialConfig) {
    return <div>Error: Invalid configuration</div>;
  }

  const lowEstimate = Math.round(tierConfig.priceMin * roofSize * complexity);
  const highEstimate = Math.round(tierConfig.priceMax * roofSize * complexity);
  const midEstimate = (lowEstimate + highEstimate) / 2;

  const bestTierConfig = MATERIAL_CONFIG[material]?.tiers['best'];
  const bestLowEstimate = Math.round((bestTierConfig?.priceMin || 0) * roofSize * complexity);
  const bestHighEstimate = Math.round((bestTierConfig?.priceMax || 0) * roofSize * complexity);

  const insuranceAnnualSavings = 2500;
  const ventilationMonthlySavings = 50;

  const insurance10Year = insuranceAnnualSavings * 10;
  const insurance20Year = insuranceAnnualSavings * 20;

  const ventilationAnnual = ventilationMonthlySavings * 12;
  const ventilation10Year = ventilationAnnual * 10;
  const ventilation20Year = ventilationAnnual * 20;

  const total10YearSavings = insurance10Year + ventilation10Year;
  const total20YearSavings = insurance20Year + ventilation20Year;

  if (submitted) {
    return (
      <div>
        <div className="text-center py-8 mb-8 border-b border-neutral-800">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-xl text-neutral-300 mb-2">
            Your personalized roof estimate is shown below — but first, please review several important factors that directly impact your final cost and long-term savings.
          </p>
        </div>

        <DualLicensedAdvantageSection />

        <div className="bg-gradient-to-br from-blue-900/20 to-blue-700/10 border-2 border-blue-500/30 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Why an On-Site Roof & Attic Inspection is Essential
          </h3>
          <p className="text-neutral-300 leading-relaxed">
            Homes in South Florida vary widely in roof structure, decking condition, attic ventilation, and roof-to-wall connections. A full on-site inspection of the roof and attic is essential for accurate final pricing and to ensure you receive all possible wind-mitigation insurance credits.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-900/20 to-green-700/10 border-2 border-green-500/30 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">
            Understanding Your Insurance Savings Potential
          </h3>
          <p className="text-neutral-300 mb-6 leading-relaxed">
            Many homeowners don't realize how much a properly installed roof can reduce insurance premiums. These savings accumulate significantly over time and often offset a meaningful portion of the roof cost.
          </p>

          <div className="space-y-6">
            <div className="bg-black/40 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Example Insurance Savings:</h4>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>{formatCurrency(insuranceAnnualSavings)}/year typical insurance savings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>{formatCurrency(insurance10Year)} over 10 years</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>{formatCurrency(insurance20Year)} over 20 years</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/40 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Ventilation & Energy Savings:</h4>
              <p className="text-neutral-300 mb-3 text-sm">
                Proper attic ventilation improves cooling efficiency and extends the life of your roof system. These annual energy savings further reduce your long-term cost of ownership.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>{formatCurrency(ventilationMonthlySavings)}/month from improved attic ventilation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>{formatCurrency(ventilationAnnual)}/year</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>{formatCurrency(ventilation10Year)} over 10 years</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>{formatCurrency(ventilation20Year)} over 20 years</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/40 rounded-xl p-6 border-2 border-green-500/30">
              <h4 className="text-lg font-semibold text-white mb-3">
                Combined 10 & 20-Year Savings:
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><span className="font-semibold text-white">{formatCurrency(total10YearSavings)}</span> over 10 years (insurance + ventilation)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span><span className="font-semibold text-white">{formatCurrency(total20YearSavings)}</span> over 20 years (insurance + ventilation)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-neutral-900/50 rounded-xl p-4 border border-neutral-700">
            <p className="text-xs text-neutral-400 italic leading-relaxed">
              <span className="font-semibold text-neutral-300">Important:</span> These savings examples are for illustration only. Actual insurance and energy savings vary by carrier, attic conditions, and home usage. We'll help you review your specific situation during your on-site inspection.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-purple-700/10 border-2 border-purple-500/30 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">
            Your Estimated Net Cost Over Time
          </h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/40 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">20-Year Outlook:</h4>
                <div className="space-y-3 text-neutral-300">
                  <div className="flex justify-between">
                    <span>Roof System Cost:</span>
                    <span className="font-semibold text-white">{formatCurrency(midEstimate)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Less: Total Savings:</span>
                    <span className="font-semibold text-green-400">-{formatCurrency(total20YearSavings)}</span>
                  </div>
                  <div className="border-t border-neutral-600 pt-3 flex justify-between">
                    <span className="font-bold">Estimated Net Cost:</span>
                    <span className="font-bold text-purple-400 text-lg">
                      {midEstimate - total20YearSavings > 0 ? formatCurrency(midEstimate - total20YearSavings) : '$0'}
                    </span>
                  </div>
                  {midEstimate - total20YearSavings <= 0 && (
                    <p className="text-sm text-green-400 italic">Your roof effectively pays for itself!</p>
                  )}
                </div>
              </div>

              <div className="bg-black/40 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Calculation Formula:</h4>
                <div className="space-y-2 text-neutral-300 text-sm">
                  <p className="font-mono bg-neutral-900 p-3 rounded">
                    Total Roof Cost – Long-Term Savings = Estimated Net Cost
                  </p>
                  <p className="mt-4">
                    This calculation shows your true long-term investment after factoring in insurance and energy savings over the life of your roof.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 rounded-xl p-4 border border-neutral-700">
              <p className="text-xs text-neutral-400 italic">
                <span className="font-semibold text-neutral-300">Note:</span> This net cost calculation uses the midpoint of your recommended estimate and example savings figures. Actual costs and savings will be confirmed during your on-site inspection.
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 mb-8"
        >
          <div className="bg-gradient-to-br from-green-900/20 to-green-700/10 border-2 border-green-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8 text-green-500" />
              <h3 className="text-3xl font-bold text-white">
                Your Estimated Roof Price Range
              </h3>
            </div>
            <div className="mb-4">
              <p className="text-4xl font-extrabold text-green-400">
                {formatCurrency(lowEstimate)} – {formatCurrency(highEstimate)}
              </p>
              <p className="text-lg text-neutral-300 mt-2">
                Recommended System: {tierConfig.label}
              </p>
            </div>
            <p className="text-neutral-400">
              Based on homes similar to yours in South Florida. Final pricing depends on roof complexity, decking condition, and code requirements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-neutral-300">
              <div className="bg-neutral-900/50 p-4 rounded-lg">
                <span className="font-semibold text-white">Roof Type:</span>
                <p className="mt-1">{materialConfig.label}</p>
              </div>
              <div className="bg-neutral-900/50 p-4 rounded-lg">
                <span className="font-semibold text-white">Roof Size:</span>
                <p className="mt-1">{roofSize.toLocaleString()} sq ft</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="tel:754-227-5605"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Schedule Your Roof Estimate
              </a>
              <a
                href="/financing"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-blue-500 text-blue-400 text-lg font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200"
              >
                <CreditCard className="w-5 h-5" />
                See Financing Options
              </a>
            </div>

            <TrustElements />
          </div>

          {bestTierConfig && (
            <div className="bg-gradient-to-br from-orange-900/20 to-orange-700/10 border-2 border-orange-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Upgraded System ({bestTierConfig.label.split(' - ')[0]})
              </h3>
              <h4 className="text-3xl font-bold text-orange-500 mb-4">
                {formatCurrency(bestLowEstimate)} – {formatCurrency(bestHighEstimate)}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-300">
                <div>
                  <span className="font-semibold">Roof Type:</span>
                  <br />
                  {materialConfig.label}
                </div>
                <div>
                  <span className="font-semibold">Roof Size:</span>
                  <br />
                  {roofSize.toLocaleString()} sq ft
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <div className="mb-8 bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            All Quality Levels for {materialConfig.label}
          </h3>
          <p className="text-neutral-300 mb-6">
            Compare pricing for all quality levels available for your home:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="py-3 px-4 text-white font-semibold">Tier</th>
                  <th className="py-3 px-4 text-white font-semibold">Description</th>
                  <th className="py-3 px-4 text-white font-semibold text-right">Typical Range for Your Home</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(materialConfig.tiers).map((tierKey) => {
                  const tierData = materialConfig.tiers[tierKey];
                  const tierLow = Math.round(tierData.priceMin * roofSize * complexity);
                  const tierHigh = Math.round(tierData.priceMax * roofSize * complexity);
                  const isRecommended = tierKey === tier;
                  const isUpgradeOption = tierKey === 'best';

                  return (
                    <tr
                      key={tierKey}
                      className={`border-b border-neutral-800 ${
                        isRecommended ? 'bg-red-900/10' : isUpgradeOption ? 'bg-orange-900/10' : ''
                      }`}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`font-semibold ${
                            isRecommended ? 'text-red-500' : isUpgradeOption ? 'text-orange-500' : 'text-white'
                          }`}>
                            {tierData.label.split(' - ')[0]}
                          </span>
                          {isRecommended && (
                            <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">
                              RECOMMENDED
                            </span>
                          )}
                          {isUpgradeOption && (
                            <span className="px-2 py-1 bg-orange-600 text-white text-xs font-bold rounded">
                              UPGRADE OPTION
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-neutral-300 text-sm">
                        {tierData.description}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className={`font-semibold ${
                          isRecommended ? 'text-red-500' : isUpgradeOption ? 'text-orange-500' : 'text-white'
                        }`}>
                          {formatCurrency(tierLow)} – {formatCurrency(tierHigh)}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-neutral-800 border border-neutral-700 rounded-lg">
            <p className="text-sm text-neutral-400 leading-relaxed">
              <strong className="text-white">Note:</strong> These ranges are estimates based on your roof size and complexity. Final pricing will be confirmed during your on-site assessment, where we'll discuss the specific features and benefits of each tier in detail.
            </p>
          </div>
        </div>

        <div className="mb-8 bg-gradient-to-br from-blue-900/20 to-blue-700/10 border-2 border-blue-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Thinking About Upgrading to a Higher Tier?
          </h3>
          <div className="space-y-4 text-neutral-300 leading-relaxed">
            <p>
              Upgrading from a basic system to a higher-performance roof often adds surprisingly little to monthly financing payments.
            </p>
            <p>
              When we visit your home, we'll help you compare options so you can choose the perfect system for your long-term budget.
            </p>
            <p className="text-white font-semibold">
              Many homeowners find that combining financing with insurance savings makes premium roof systems surprisingly affordable.
            </p>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Download & Explore Your Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => {
                  try {
                    generateEstimatePDF({
                      name,
                      material,
                      tier,
                      roofSize,
                      complexity,
                      lowEstimate,
                      highEstimate,
                      bestLowEstimate,
                      bestHighEstimate,
                      insurance10Year,
                      insurance20Year,
                      ventilation10Year,
                      ventilation20Year,
                      total20YearSavings,
                    });
                  } catch (error) {
                    console.error('Failed to generate estimate:', error);
                  }
                }}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download My Detailed Estimate (PDF)
              </button>

              <a
                href={`/financing-calculator?betterLow=${lowEstimate}&betterHigh=${highEstimate}&bestLow=${bestLowEstimate}&bestHigh=${bestHighEstimate}&roofType=${material}&roofSize=${roofSize}&name=${encodeURIComponent(name)}&material=${material}&tier=${tier}&complexity=${complexity}`}
                className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-red-600 text-red-500 text-lg font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors text-center"
              >
                <Calculator className="w-5 h-5" />
                See Estimated Monthly Payments
              </a>
            </div>
            <p className="text-center text-sm text-neutral-400">
              Download a detailed PDF or explore financing options
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Schedule Your Roof & Attic Inspection
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="tel:7542275605"
                className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-colors text-center"
              >
                Call Now: 754-227-5605
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-red-600 text-red-500 text-lg font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors text-center"
              >
                Request Your Inspection
              </a>
            </div>
            <p className="text-center text-sm text-neutral-400">
              Our team will confirm your estimate and schedule a free on-site assessment
            </p>
          </div>

          <RoofBuyersChecklist />
        </div>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-white mb-4">See Your Personalized Estimate</h3>
        <p className="text-neutral-400 mb-6 text-sm">
          Enter your contact information to view your roof cost estimate. All fields are required.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => onUpdateName(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => onUpdatePhone(e.target.value)}
              placeholder="(555) 123-4567"
              className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
              required
            />
            {phone && !isValidPhone(phone) && (
              <p className="text-xs text-red-500 mt-1">Please enter a valid 10-digit phone number</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => onUpdateEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
              required
            />
            {email && !isValidEmail(email) && (
              <p className="text-xs text-red-500 mt-1">Please enter a valid email address</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => onUpdateCity(e.target.value)}
              placeholder="e.g., Boca Raton"
              className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-400 mb-2">
            Property Address (Optional)
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => onUpdateAddress(e.target.value)}
            placeholder="Street address"
            className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 px-8 py-4 border border-neutral-700 text-white font-semibold rounded-lg hover:bg-neutral-900 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!canSubmit}
            className="flex-1 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit & Show My Estimate
          </button>
        </div>
      </form>

      <p className="text-center text-xs text-neutral-500">
        By submitting, you agree to be contacted by All Phase Construction USA regarding your roofing project.
      </p>
    </div>
  );
}
