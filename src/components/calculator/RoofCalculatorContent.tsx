import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Phone, ChevronDown, ChevronUp, DollarSign, Shield, CheckCircle, MapPin } from 'lucide-react';
import RoofCostCalculator from './RoofCostCalculator';

const cities = [
  { name: 'Boca Raton', slug: 'boca-raton' },
  { name: 'Deerfield Beach', slug: 'deerfield-beach' },
  { name: 'Pompano Beach', slug: 'pompano-beach' },
  { name: 'Lighthouse Point', slug: 'lighthouse-point' },
  { name: 'Highland Beach', slug: 'highland-beach' },
  { name: 'Delray Beach', slug: 'delray-beach' },
  { name: 'Boynton Beach', slug: 'boynton-beach' },
  { name: 'Lake Worth Beach', slug: 'lake-worth-beach' },
  { name: 'West Palm Beach', slug: 'west-palm-beach' },
  { name: 'Coral Springs', slug: 'coral-springs' },
  { name: 'Coconut Creek', slug: 'coconut-creek' },
  { name: 'Parkland', slug: 'parkland' },
  { name: 'Margate', slug: 'margate' },
  { name: 'Tamarac', slug: 'tamarac' },
  { name: 'Fort Lauderdale', slug: 'fort-lauderdale' },
  { name: 'Wilton Manors', slug: 'wilton-manors' },
  { name: 'Oakland Park', slug: 'oakland-park' },
  { name: 'Sunrise', slug: 'sunrise' },
  { name: 'Plantation', slug: 'plantation' },
  { name: 'Hollywood', slug: 'hollywood' },
];

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'How much does a roof cost in South Florida?',
    answer: 'Roof replacement prices in South Florida typically range from $12,000–$24,000 for shingle roofs, $30,000–$70,000 for tile roofs, $35,000–$80,000 for metal roofs, and $10,000–$30,000 for flat roofs depending on size, materials, and Florida Building Code requirements.',
  },
  {
    question: 'Are metal roofs more expensive than shingles?',
    answer: 'Yes. Metal roofs cost more upfront but last longer and often perform better in hurricanes. Many homeowners see insurance savings as well.',
  },
  {
    question: 'Do you offer roof financing?',
    answer: 'Yes. All Phase Construction USA offers several financing options with low monthly payments for qualified homeowners.',
  },
  {
    question: 'Will a new roof reduce my insurance cost?',
    answer: 'Most homeowners see insurance savings after installing a new roof, especially when combined with a new wind mitigation inspection.',
  },
];

export default function RoofCalculatorContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (window.location.hash === '#calculator-start') {
      const element = document.getElementById('calculator-start');
      if (element) {
        setTimeout(() => {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 80;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Sticky CTA Banner */}
      <div className="sticky top-20 z-30 bg-red-600 border-b-2 border-red-700 py-3 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white font-semibold text-center sm:text-left">
              Need an exact price? Schedule a free roof estimate.
            </p>
            <div className="flex gap-3">
              <Link
                to="/contact"
                className="px-6 py-2 bg-white text-red-600 font-bold rounded-lg hover:bg-neutral-100 transition-colors"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:754-227-5605"
                className="px-6 py-2 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-red-600 transition-colors"
              >
                (754) 227-5605
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with H1 */}
      <section className="bg-gradient-to-br from-neutral-950 to-black border-b border-neutral-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              How Much Does a Roof Cost in South Florida? Roof Cost Calculator
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed max-w-4xl mx-auto">
              Understanding roof replacement costs is crucial for South Florida homeowners. Factors like material choice, roof size, building code requirements, and hurricane protection features all impact your final price. Use our calculator below to get an instant estimate tailored to Broward and Palm Beach County homes.
            </p>
          </div>

          {/* Trust Badge Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-4 bg-black border border-neutral-800 rounded-lg">
              <Shield className="w-6 h-6 text-red-500" />
              <p className="text-white font-semibold text-xs text-center">Licensed & Insured</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-black border border-neutral-800 rounded-lg">
              <CheckCircle className="w-6 h-6 text-red-500" />
              <p className="text-white font-semibold text-xs text-center">GC + Roofer</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-black border border-neutral-800 rounded-lg">
              <Shield className="w-6 h-6 text-red-500" />
              <p className="text-white font-semibold text-xs text-center">HVHZ Florida Code</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-black border border-neutral-800 rounded-lg">
              <CheckCircle className="w-6 h-6 text-red-500" />
              <p className="text-white font-semibold text-xs text-center">Insurance Specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Cost Ranges */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Typical Roof Replacement Cost Ranges
            </h2>
            <p className="text-xl text-neutral-300">
              Average costs for South Florida homes based on common roof sizes and materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    <Link to="/roof-types/shingle" className="hover:text-red-500 transition-colors">
                      Shingle Roofs
                    </Link>
                  </h3>
                  <p className="text-3xl font-bold text-red-500 mb-2">$12,000 – $24,000</p>
                  <p className="text-neutral-300 text-sm">
                    Budget-friendly option with Class 4 impact ratings and strong wind resistance. Popular for residential homes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    <Link to="/roof-types/tile" className="hover:text-red-500 transition-colors">
                      Tile Roofs
                    </Link>
                  </h3>
                  <p className="text-3xl font-bold text-red-500 mb-2">$30,000 – $70,000</p>
                  <p className="text-neutral-300 text-sm">
                    Premium concrete or clay tile with 50+ year lifespan, excellent aesthetics, and maximum wind ratings.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    <Link to="/roof-types/metal" className="hover:text-red-500 transition-colors">
                      Metal Roofs
                    </Link>
                  </h3>
                  <p className="text-3xl font-bold text-red-500 mb-2">$35,000 – $80,000</p>
                  <p className="text-neutral-300 text-sm">
                    Standing seam or mechanically seamed metal. Solar-ready, hurricane-rated, and extremely low maintenance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    <Link to="/roof-types/flat" className="hover:text-red-500 transition-colors">
                      Flat Roofs
                    </Link>
                  </h3>
                  <p className="text-3xl font-bold text-red-500 mb-2">$10,000 – $30,000</p>
                  <p className="text-neutral-300 text-sm">
                    TPO, modified bitumen, or IB PVC systems for flat or low-slope applications. Energy-efficient and durable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Impacts Roof Cost */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Impacts Roof Cost in South Florida?
            </h2>
            <p className="text-xl text-neutral-300">
              Several factors determine your final roof replacement price
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Roof Size & Complexity</h3>
                  <p className="text-neutral-300">
                    Larger roofs require more materials and labor. Complex designs with multiple valleys, dormers, or steep pitches increase installation time and cost.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Material Selection</h3>
                  <p className="text-neutral-300">
                    Shingles are the most affordable, while tile and metal offer premium performance at higher price points. Each has unique benefits for South Florida conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Florida Building Code Requirements</h3>
                  <p className="text-neutral-300">
                    HVHZ-compliant underlayment, enhanced nailing patterns, and secondary water barriers are required by code and add to project costs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Decking & Structural Repairs</h3>
                  <p className="text-neutral-300">
                    Rotten decking, damaged fascia boards, or structural issues discovered during tear-off will require additional materials and labor.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Wind Mitigation Upgrades</h3>
                  <p className="text-neutral-300">
                    Hurricane straps, enhanced roof-to-wall connections, and impact-resistant materials provide insurance savings but increase upfront investment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Permits & Disposal</h3>
                  <p className="text-neutral-300">
                    Building permits, dumpster rentals, and proper disposal of old materials are included in professional roof replacement quotes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Use Our Roof Cost Calculator?
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Get an instant ballpark estimate based on actual South Florida roofing projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black border border-neutral-800 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Instant Results</h3>
              <p className="text-neutral-300 text-sm">
                No waiting for callbacks. Get your estimate in seconds based on your inputs.
              </p>
            </div>

            <div className="bg-black border border-neutral-800 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Local Pricing</h3>
              <p className="text-neutral-300 text-sm">
                Tuned specifically for Broward and Palm Beach County labor rates and material costs.
              </p>
            </div>

            <div className="bg-black border border-neutral-800 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Code Compliant</h3>
              <p className="text-neutral-300 text-sm">
                Includes Florida Building Code requirements and HVHZ considerations in pricing.
              </p>
            </div>
          </div>
        </div>

        {/* Calculator Component */}
        <div id="calculator-start">
          <RoofCostCalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-950/30 to-red-900/20 border-2 border-red-500/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for an Exact Quote?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Our calculator provides helpful estimates, but every roof is unique. Schedule a free on-site assessment with All Phase Construction USA for a detailed quote that accounts for your specific conditions, code requirements, and material preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
              >
                <Calculator className="w-5 h-5" />
                Schedule Free Estimate
              </Link>
              <a
                href="tel:754-227-5605"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Call 754-227-5605
              </a>
            </div>
            <p className="text-sm text-neutral-400 mt-6">
              Serving <Link to="/residential-roofing" className="text-red-500 hover:text-red-400 font-semibold">residential</Link> and commercial properties throughout Broward and Palm Beach Counties
            </p>
          </div>
        </div>
      </section>

      {/* City Cost Guides Section */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See Roof Cost Guides for Your City
            </h2>
            <p className="text-xl text-neutral-300">
              Choose your city below to see typical price ranges and details for your area
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                to={`/roof-cost/${city.slug}`}
                className="bg-neutral-950 border border-neutral-800 hover:border-red-500 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20 group"
              >
                <MapPin className="w-5 h-5 text-red-500 mx-auto mb-2" />
                <p className="text-white font-semibold text-sm group-hover:text-red-500 transition-colors">
                  {city.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-300">
              Common questions about roof costs in South Florida
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-black border border-neutral-800 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-bold text-white pr-8">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-neutral-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
