import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AuthorityGroup from '../components/authority/AuthorityGroup';
import { Shield, Calculator, Phone } from 'lucide-react';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';
import EntitySummary from '../components/EntitySummary';

export default function FlatRoofingPage() {
  return (
    <>
      <SEO
        title="Flat Roofing in South Florida | TPO, Modified, IB PVC | All Phase Construction"
        description="Expert flat roofing in Broward & Palm Beach. TPO, modified bitumen, and IB PVC systems for residential additions, porches, and commercial buildings."
        canonicalUrl="/roof-types/flat"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/" },
          { name: "Residential Roofing", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/residential-roofing" },
          { name: "Flat Roofing", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/roof-types/flat" }
        ]}
      />

      <div className="bg-black text-white min-h-screen">
        <section className="relative bg-gradient-to-br from-neutral-950 to-black border-b border-neutral-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Flat Roofing in South Florida
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                TPO, modified bitumen, and IB PVC systems for residential additions, porches, and commercial buildings. Energy-efficient and durable flat roof solutions.
              </p>

              <div className="max-w-3xl mx-auto mb-8">
                <EntitySummary
                  title="Flat Roofing Overview"
                  items={[
                    "TPO, modified bitumen, and IB PVC low-slope roofing systems",
                    "15-25 year lifespan depending on material and maintenance",
                    "Energy-efficient white reflective membranes reduce cooling costs",
                    "Ideal for residential additions, porches, garages, and commercial buildings",
                    "Proper drainage design critical for South Florida rainfall",
                    "Typical cost: $10,000–$32,000 for residential flat roof applications"
                  ]}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/roof-cost-calculator"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
                  aria-label="Calculate flat roof cost for South Florida properties"
                >
                  <Calculator className="w-5 h-5" />
                  Get Flat Roof Estimate
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
                  aria-label="Schedule free flat roof assessment in Broward or Palm Beach County"
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
                <h2 className="text-3xl font-bold text-white mb-6">Why Flat Roofing?</h2>
                <div className="space-y-4 text-neutral-300 leading-relaxed">
                  <p>
                    Flat roofs are ideal for residential additions, porches, lanais, and commercial buildings throughout South Florida. Modern membranes provide excellent waterproofing and energy efficiency.
                  </p>
                  <p>
                    Performance depends heavily on slope, drainage, edge conditions, and proper detailing. That's why choosing the right system and contractor matters.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Energy-Efficient</h3>
                      <p className="text-neutral-300 text-sm">Reflective white membranes reduce heat absorption and lower cooling costs.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Durable Membrane</h3>
                      <p className="text-neutral-300 text-sm">Modern TPO and PVC systems can last 20-30 years with proper installation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">UV Resistant</h3>
                      <p className="text-neutral-300 text-sm">Quality membranes withstand intense South Florida sun without degrading.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">What Makes a Good Flat Roof?</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Quality Membrane</strong> - TPO, modified bitumen, or IB PVC from reputable manufacturers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Proper Slope</strong> - Even "flat" roofs need positive drainage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Edge Details</strong> - Properly sealed terminations and flashings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Drainage System</strong> - Functional scuppers or drains with no ponding water</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black border-t border-neutral-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for a Flat Roof Estimate?</h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Use our interactive calculator to get instant ballpark pricing, or contact us for a detailed site-specific quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/roof-cost-calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
              >
                <Calculator className="w-5 h-5" />
                Get Flat Roof Estimate
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
