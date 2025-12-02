import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AuthorityGroup from '../components/authority/AuthorityGroup';
import { Shield, Calculator, Phone } from 'lucide-react';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';
import EntitySummary from '../components/EntitySummary';

export default function MetalRoofingPage() {
  return (
    <>
      <SEO
        title="Metal Roofing in South Florida | Standing Seam Metal Roofs | All Phase Construction"
        description="Standing seam and mechanically seamed metal roofing in Broward & Palm Beach. Excellent wind resistance, solar-ready, low maintenance. 50+ year warranty."
        canonicalUrl="/roof-types/metal"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/" },
          { name: "Residential Roofing", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/residential-roofing" },
          { name: "Metal Roofing", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/roof-types/metal" }
        ]}
      />

      <div className="bg-black text-white min-h-screen">
        <section className="relative bg-gradient-to-br from-neutral-950 to-black border-b border-neutral-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Metal Roofing in South Florida
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                Standing seam and mechanically seamed metal systems. Excellent for HVHZ zones, solar-ready platforms, and long-term performance with minimal maintenance.
              </p>

              <div className="max-w-3xl mx-auto mb-8">
                <EntitySummary
                  title="Metal Roofing Overview"
                  items={[
                    "Standing seam and mechanically seamed metal roof systems",
                    "50+ year lifespan with minimal maintenance requirements",
                    "Superior wind resistance rated for HVHZ conditions",
                    "Solar panel-ready platforms with structural support",
                    "Energy-efficient reflective coatings reduce cooling costs",
                    "Typical cost: $35,000–$80,000 depending on home size and complexity"
                  ]}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/roof-cost-calculator"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
                  aria-label="Calculate metal roof replacement cost for South Florida homes"
                >
                  <Calculator className="w-5 h-5" />
                  Get Metal Roof Estimate
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
                  aria-label="Schedule free metal roof assessment in Broward or Palm Beach County"
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
                <h2 className="text-3xl font-bold text-white mb-6">Why Metal Roofing?</h2>
                <div className="space-y-4 text-neutral-300 leading-relaxed">
                  <p>
                    Metal roofs are becoming increasingly popular in South Florida for their exceptional wind resistance, energy efficiency, and solar compatibility.
                  </p>
                  <p>
                    Standing seam and mechanically seamed metal systems perform exceptionally well in HVHZ conditions and can last 50+ years with minimal maintenance.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Superior Wind Resistance</h3>
                      <p className="text-neutral-300 text-sm">Mechanically seamed systems excel in high wind zones and meet the strictest HVHZ requirements.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Solar-Ready</h3>
                      <p className="text-neutral-300 text-sm">Metal roofs provide an ideal platform for solar panel attachment without compromising the roof system.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Low Maintenance</h3>
                      <p className="text-neutral-300 text-sm">Metal roofs require minimal maintenance and typically come with 50+ year warranties.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">What Makes a Good Metal Roof?</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Quality Panels</strong> - Kynar-coated steel or aluminum with proper gauge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Proper Seaming</strong> - Mechanically seamed for HVHZ applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Underlayment</strong> - High-temperature synthetic or self-adhered membrane</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Edge Details</strong> - Proper flashing and edge metal for uplift resistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black border-t border-neutral-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for a Metal Roof Estimate?</h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Use our interactive calculator to get instant ballpark pricing, or contact us for a detailed site-specific quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/roof-cost-calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
              >
                <Calculator className="w-5 h-5" />
                Get Metal Roof Estimate
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
