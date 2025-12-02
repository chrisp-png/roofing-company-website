import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AuthorityGroup from '../components/authority/AuthorityGroup';
import { Shield, Calculator, Phone } from 'lucide-react';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';
import EntitySummary from '../components/EntitySummary';

export default function TileRoofingPage() {
  return (
    <>
      <SEO
        title="Tile Roofing in South Florida | Concrete & Clay Tile | All Phase Construction"
        description="Expert tile roofing installation in Broward & Palm Beach Counties. Concrete and clay tile with foam adhesive and SWR underlayment for maximum hurricane protection and insurance savings."
        canonicalUrl="/roof-types/tile"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/" },
          { name: "Residential Roofing", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/residential-roofing" },
          { name: "Tile Roofing", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/roof-types/tile" }
        ]}
      />

      <div className="bg-black text-white min-h-screen">
        <section className="relative bg-gradient-to-br from-neutral-950 to-black border-b border-neutral-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Tile Roofing in South Florida
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                Concrete and clay tile roofs with premium foam adhesive attachment and SWR underlayment. Built for South Florida hurricanes and designed to maximize insurance savings.
              </p>

              <div className="max-w-3xl mx-auto mb-8">
                <EntitySummary
                  title="Tile Roofing Overview"
                  items={[
                    "Concrete and clay tile roof systems with 50-100 year lifespan",
                    "Premium foam adhesive attachment for superior wind resistance",
                    "SWR (Secondary Water Resistance) underlayment for hurricane protection",
                    "Classic Mediterranean and Spanish-style aesthetics",
                    "Insurance premium reductions of $2,500+ annually with proper documentation",
                    "Typical cost: $30,000–$70,000 depending on tile type and home complexity"
                  ]}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/roof-cost-calculator"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
                  aria-label="Calculate tile roof replacement cost for South Florida homes"
                >
                  <Calculator className="w-5 h-5" />
                  Get Tile Roof Estimate
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
                  aria-label="Schedule free tile roof assessment in Broward or Palm Beach County"
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
                <h2 className="text-3xl font-bold text-white mb-6">Why Tile Roofing?</h2>
                <div className="space-y-4 text-neutral-300 leading-relaxed">
                  <p>
                    Tile roofs are one of the most popular choices in Boca Raton, Deerfield Beach, Coral Springs, and throughout South Florida. They offer excellent hurricane protection, long lifespan, and classic Mediterranean aesthetics.
                  </p>
                  <p>
                    But here's the truth: the tile itself is mostly decoration. Your real protection comes from the underlayment and foam adhesive underneath.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">50+ Year Lifespan</h3>
                      <p className="text-neutral-300 text-sm">Concrete and clay tiles can last 50-100 years with proper installation and maintenance.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Hurricane-Rated</h3>
                      <p className="text-neutral-300 text-sm">When installed with foam adhesive and proper underlayment, tile roofs offer exceptional wind resistance.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Insurance Savings</h3>
                      <p className="text-neutral-300 text-sm">Properly documented tile systems with SWR underlayment can save $2,500+/year on insurance.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">What Makes a Good Tile Roof?</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Self-Adhered Underlayment (SWR)</strong> - Your last line of defense if tiles fail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Premium Foam Adhesive</strong> - Polyfoam or ICP applied generously</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Proper Deck Attachment</strong> - 8d ring-shank nails at proper spacing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong className="text-white">Roof-to-Wall Connections</strong> - Clips, straps, or wraps for load path</span>
                  </li>
                </ul>
                <Link
                  to="/blog/underlayment-and-foam-application"
                  className="inline-block mt-6 text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  Read: Why Underlayment & Foam Matter More Than Tile →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black border-t border-neutral-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for a Tile Roof Estimate?</h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Use our interactive calculator to get instant ballpark pricing, or contact us for a detailed site-specific quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/roof-cost-calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
              >
                <Calculator className="w-5 h-5" />
                Get Tile Roof Estimate
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
