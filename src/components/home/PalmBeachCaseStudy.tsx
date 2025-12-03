import { ArrowRight, TrendingUp, DollarSign, Shield, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PalmBeachCaseStudy() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-4">
              Real Results from a Real Customer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Palm Beach Roof Replacement Case Study: How a Quality Roof Pays for Itself
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Discover how one Palm Beach County homeowner saved over $50,000 in 20 years by choosing a premium, wind-mitigated roof replacement instead of a cheap roof.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Overview</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  When insurance carriers required this Palm Beach County homeowner to replace their aging roof to maintain coverage, they faced a critical decision: install a bare-minimum budget roof or invest in a premium, code-compliant system with comprehensive wind mitigation features.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  As the trusted Palm Beach roofing contractor for this project, All Phase Construction USA installed a complete hurricane-resistant roof meeting current Florida Building Code standards, including hurricane straps, secondary water resistance barriers, re-nailed decking, wind-rated shingles, and an HVHZ-rated solar attic fan. The results speak for themselves.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Insurance Savings</h4>
                  </div>
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-green-600 mb-1">$3,814/year</div>
                    <div className="text-sm text-slate-600">Annual homeowners insurance reduction</div>
                  </div>
                  <div className="pt-3 border-t border-green-200">
                    <div className="text-2xl font-bold text-slate-900 mb-1">$76,286</div>
                    <div className="text-sm text-slate-600">Total 20-year insurance benefit</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Energy Savings</h4>
                  </div>
                  <div className="mb-3">
                    <div className="text-3xl font-bold text-amber-600 mb-1">$55/month</div>
                    <div className="text-sm text-slate-600">Electric bill reduction from solar attic fan</div>
                  </div>
                  <div className="pt-3 border-t border-amber-200">
                    <div className="text-2xl font-bold text-slate-900 mb-1">$13,200</div>
                    <div className="text-sm text-slate-600">Total 20-year energy benefit</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-10 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Financial Results</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-2">Initial Investment</div>
                    <div className="text-2xl font-bold text-slate-900">$43,999</div>
                    <div className="text-xs text-slate-500 mt-1">Premium roof + wind mitigation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-2">20-Year Total Benefits</div>
                    <div className="text-2xl font-bold text-green-600">$95,226</div>
                    <div className="text-xs text-slate-500 mt-1">Insurance + energy + AC life extension</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-slate-600 mb-2">Net Financial Benefit</div>
                    <div className="text-3xl font-bold text-blue-600">$50,177</div>
                    <div className="text-xs text-slate-500 mt-1">Pure savings after payback</div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-200 grid md:grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-sm text-slate-600 mb-1">Return on Investment</div>
                    <div className="text-2xl font-bold text-indigo-600">111.4%</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 mb-1">Payback Period</div>
                    <div className="text-2xl font-bold text-indigo-600">10.1 years</div>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Wind Mitigation Features Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Hurricane Straps & Connectors</div>
                      <div className="text-sm text-slate-600">Enhanced roof-to-wall connections meeting current code</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Secondary Water Resistance</div>
                      <div className="text-sm text-slate-600">Ice and water shield across entire roof deck</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Re-Nailed Roof Decking</div>
                      <div className="text-sm text-slate-600">Upgraded fastening pattern with wind-rated nails</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Wind-Rated Shingles</div>
                      <div className="text-sm text-slate-600">Premium shingles rated for enhanced wind resistance</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">HVHZ-Rated Solar Attic Fan</div>
                      <div className="text-sm text-slate-600">Reduces attic temperature and energy consumption</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-slate-900">Florida Building Code Compliant</div>
                      <div className="text-sm text-slate-600">Installation meeting current standards</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Why a Quality Roof Matters in Palm Beach County</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  When your roof reaches end-of-life in South Florida, you're not just replacing shingles. You're making a strategic financial decision. Insurance companies that previously declined coverage now actively compete for properties with new, code-compliant roofs featuring verified wind mitigation.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  This Palm Beach County homeowner chose to maximize wind mitigation credits during their required roof replacement. The result? Dramatically lower insurance premiums, reduced energy bills, extended AC system life, and improved hurricane protection. The investment paid for itself in just over 10 years, with another decade of pure savings ahead.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
                <TrendingUp className="w-16 h-16 mx-auto mb-4 text-blue-100" />
                <h3 className="text-2xl font-bold mb-3">Ready to Lower Your Insurance and Energy Costs?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Get a free roof inspection and quote from All Phase Construction USA, the experienced Palm Beach roofing contractor that helps homeowners maximize wind mitigation savings and long-term ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:561-123-4567"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                  >
                    <DollarSign className="w-5 h-5 mr-2" />
                    Call for Free Quote
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition-colors"
                  >
                    Request Inspection
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Disclaimer:</strong> This case study is for illustration purposes only. Actual insurance savings, energy savings, and financial results vary by home, policy, insurance carrier, roof condition, and local market conditions. Individual results depend on property characteristics, coverage selections, usage patterns, and other factors. Homeowners should consult their insurance agent, tax advisor, and financial professionals for advice specific to their situation. All Phase Construction USA does not guarantee specific insurance premium reductions or energy savings. Wind mitigation discounts are determined by individual insurance carriers based on their underwriting guidelines and verified wind mitigation features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
