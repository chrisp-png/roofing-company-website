import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AuthorityGroup from '../components/authority/AuthorityGroup';
import { Shield, Calculator, Phone } from 'lucide-react';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';
import EntitySummary from '../components/EntitySummary';

export default function ShingleRoofingPage() {
  return (
    <>
      <SEO
        title="Shingle Roofing in South Florida | Architectural Shingles | All Phase Construction"
        description="High-performance architectural shingle roofing in Broward & Palm Beach. Class 4 impact-rated, wind-rated to 130 mph. Budget-friendly with strong hurricane protection."
        canonicalUrl="/roof-types/shingle"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/" },
          { name: "Residential Roofing", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/residential-roofing" },
          { name: "Shingle Roofing", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/roof-types/shingle" }
        ]}
      />

      <div className="bg-black text-white min-h-screen">
        <section className="relative bg-gradient-to-br from-neutral-950 to-black border-b border-neutral-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Shingle Roofing in South Florida
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                High-performance architectural shingles with proper underlayment and nailing patterns. Budget-friendly option with strong wind ratings for South Florida homes.
              </p>

              <div className="max-w-3xl mx-auto mb-8">
                <EntitySummary
                  title="Shingle Roofing Overview"
                  items={[
                    "Architectural shingles rated for 130+ mph winds",
                    "Class 4 impact-rated options for maximum hail protection",
                    "15-30 year lifespan depending on product tier and maintenance",
                    "Most budget-friendly roofing option for South Florida homes",
                    "Proper underlayment and enhanced nailing patterns per Florida Building Code",
                    "Typical cost: $12,000–$26,000 for residential installations"
                  ]}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/roof-cost-calculator"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
                  aria-label="Calculate architectural shingle roof cost for South Florida homes"
                >
                  <Calculator className="w-5 h-5" />
                  Get Shingle Roof Estimate
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
                  aria-label="Schedule free shingle roof assessment in Broward or Palm Beach County"
                >
                  <Phone className="w-5 h-5" />
                  Schedule Assessment
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why Shingle Roofing?</h2>
                <div className="space-y-4 text-neutral-300 leading-relaxed">
                  <p>
                    Shingle roofs are the most budget-friendly option for South Florida homeowners who want reliable protection without the higher upfront cost of tile or metal.
                  </p>
                  <p>
                    Modern architectural shingles have come a long way. With Class 4 impact ratings and wind resistance up to 130 mph, they can perform well in South Florida when installed correctly.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Budget-Friendly</h3>
                      <p className="text-neutral-300 text-sm">Lowest upfront cost compared to tile and metal systems while still meeting Florida Building Code requirements.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Class 4 Impact Rated</h3>
                      <p className="text-neutral-300 text-sm">High-performance shingles can withstand hail and impact from wind-borne debris.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Wind-Rated to 130 MPH</h3>
                      <p className="text-neutral-300 text-sm">Proper installation with correct nailing patterns provides strong wind protection.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">What Makes a Good Shingle Roof?</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Quality Underlayment</strong> - Synthetic or self-adhered underlayment for water protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Proper Nailing Pattern</strong> - 6 nails per shingle in HVHZ zones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Edge Metal & Drip Edge</strong> - Critical for wind uplift resistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Deck Attachment</strong> - 8d ring-shank nails at proper spacing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black border-t border-neutral-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for a Shingle Roof Estimate?</h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Use our interactive calculator to get instant ballpark pricing, or contact us for a detailed site-specific quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/roof-cost-calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
              >
                <Calculator className="w-5 h-5" />
                Get Shingle Roof Estimate
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Schedule Assessment
              </Link>
            </div>
          </div>
        </section>

        <AuthorityGroup />
      </div>
    </>
  );
}
