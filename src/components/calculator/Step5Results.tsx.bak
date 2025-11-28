import { useState } from 'react';
import { MATERIAL_CONFIG } from '../../config/materialConfig';
import { Check, Building2, TrendingDown, Zap } from 'lucide-react';
import DualLicensedAdvantageSection from './DualLicensedAdvantageSection';

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

  const insuranceAnnualSavings = 2500;
  const ventilationMonthlySavings = 50;

  const insurance10Year = insuranceAnnualSavings * 10;
  const insurance20Year = insuranceAnnualSavings * 20;

  const ventilationAnnual = ventilationMonthlySavings * 12;
  const ventilation10Year = ventilationAnnual * 10;
  const ventilation20Year = ventilationAnnual * 20;

  const total10YearSavings = insurance10Year + ventilation10Year;
  const total20YearSavings = insurance20Year + ventilation20Year;

  const net10Year = midEstimate - total10YearSavings;
  const net20Year = midEstimate - total20YearSavings;

  if (submitted) {
    return (
      <div>
        <div className="text-center py-8 mb-8 border-b border-neutral-800">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-xl text-neutral-300 mb-2">
            Your estimate has been saved and our team will follow up shortly.
          </p>
        </div>

        <DualLicensedAdvantageSection />

        <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            Recommended System ({tierConfig.label})
          </h3>
          <h4 className="text-3xl font-bold text-red-500 mb-4">
            Estimated Range: {formatCurrency(lowEstimate)} – {formatCurrency(highEstimate)}
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

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">{tierConfig.label}</h3>
          <p className="text-neutral-300 mb-4">{tierConfig.description}</p>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold text-white mb-3">What's Included:</h4>
            <ul className="space-y-2">
              {tierConfig.talkingPoints.map((point, idx) => (
                <li key={idx} className="text-neutral-300 flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold text-white mb-3">Project Breakdown:</h4>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Materials: {materialConfig.label} roofing system</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Underlayment: High-performance protection layer</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Attachment: Appropriate method for material and wind zone</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Labor: Professional installation by licensed contractors</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Permits & Inspections: All required code compliance</span>
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-8">
            <h4 className="text-lg font-semibold text-white mb-3">What This Means for You:</h4>
            <ul className="space-y-2">
              {materialConfig.generalBenefits.map((benefit, idx) => (
                <li key={idx} className="text-neutral-300 flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

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

                  return (
                    <tr
                      key={tierKey}
                      className={`border-b border-neutral-800 ${isRecommended ? 'bg-red-900/10' : ''}`}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <span className={`font-semibold ${isRecommended ? 'text-red-500' : 'text-white'}`}>
                            {tierData.label.split(' - ')[0]}
                          </span>
                          {isRecommended && (
                            <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">
                              RECOMMENDED
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-neutral-300 text-sm">
                        {tierData.description}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className={`font-semibold ${isRecommended ? 'text-red-500' : 'text-white'}`}>
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
              With our financing options, the difference between a basic system and a higher-tier roof can often be spread out over affordable monthly payments.
            </p>
            <p>
              When we visit your home, we'll walk you through the pros, cons, and payment options for each tier so you can choose what feels right for your budget and your long-term plans.
            </p>
            <p className="text-white font-semibold">
              Many homeowners find that upgrading to a Best or Premium system is surprisingly affordable when financed, especially when combined with insurance savings.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900/20 to-green-700/10 border-2 border-green-500/30 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">
            How Insurance & Ventilation Savings Can Offset Your Roof Cost
          </h3>

          <div className="space-y-6 mb-6">
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
              <h4 className="text-lg font-semibold text-white mb-3">Example Ventilation Savings:</h4>
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

            <div className="bg-black/40 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Combined Savings:</h4>
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

            <div className="bg-black/40 rounded-xl p-6 border-2 border-green-500/30">
              <h4 className="text-lg font-semibold text-white mb-3">
                Net Roof Cost (rough example using the midpoint of your estimate):
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    Approximate net cost over 10 years: <span className="font-semibold text-white">{net10Year > 0 ? formatCurrency(net10Year) : formatCurrency(0)}</span>
                    {net10Year <= 0 && <span className="text-green-400 ml-2">(Your roof pays for itself!)</span>}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    Approximate net cost over 20 years: <span className="font-semibold text-white">{net20Year > 0 ? formatCurrency(net20Year) : formatCurrency(0)}</span>
                    {net20Year <= 0 && <span className="text-green-400 ml-2">(Your roof more than pays for itself!)</span>}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-900/50 rounded-xl p-4 border border-neutral-700">
            <p className="text-xs text-neutral-400 italic leading-relaxed">
              <span className="font-semibold text-neutral-300">Important:</span> These savings examples are for illustration only. Actual insurance and energy savings vary by carrier, attic conditions, and home usage. We'll help you review your specific situation during your on-site inspection.
            </p>
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Ready to Get Started?</h3>
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
              Schedule My On-Site Inspection
            </a>
          </div>
          <p className="text-center text-sm text-neutral-400">
            Our team will confirm your estimate and schedule a free on-site assessment
          </p>
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
