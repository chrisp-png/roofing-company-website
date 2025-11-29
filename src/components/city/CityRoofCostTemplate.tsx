import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import { Phone, Calculator, ChevronDown, ChevronUp, CheckCircle, DollarSign, Home, Shield } from 'lucide-react';

interface CityRoofCostTemplateProps {
  cityName: string;
  citySlug: string;
  isCoastal?: boolean;
  hoaCommon?: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function CityRoofCostTemplate({
  cityName,
  citySlug,
  isCoastal = false,
  hoaCommon = false
}: CityRoofCostTemplateProps) {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: `How much does a roof cost in ${cityName}, FL?`,
      answer: `Roof prices in ${cityName}, FL typically range from $12,000–$26,000 for shingle roofs, $32,000–$75,000 for tile roofs, $38,000–$85,000 for metal roofs, and $10,000–$32,000 for flat roofs, depending on size, materials, HOA requirements, and Florida Building Code.`,
    },
    {
      question: `Are there HOA roofing requirements in ${cityName}?`,
      answer: hoaCommon
        ? `Many neighborhoods in ${cityName} have specific roof requirements including tile profiles, colors, and approved materials. All Phase Construction USA assists with HOA submissions and ensures compliance.`
        : `Some neighborhoods in ${cityName} have specific roof requirements including tile profiles, colors, and approved materials. All Phase Construction USA assists with HOA submissions when needed.`,
    },
    {
      question: `Do you offer roof financing in ${cityName}?`,
      answer: `Yes. Financing options with low monthly payments are available for homeowners in ${cityName}, FL. We work with multiple lenders to find the best rates and terms for qualified homeowners.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How much does a roof cost in ${cityName}, FL?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Roof prices in ${cityName}, FL typically range from $12,000–$26,000 for shingle roofs, $32,000–$75,000 for tile roofs, $38,000–$85,000 for metal roofs, and $10,000–$32,000 for flat roofs, depending on size, materials, HOA requirements, and Florida Building Code.`
        }
      },
      {
        "@type": "Question",
        "name": `Are there HOA roofing requirements in ${cityName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": hoaCommon
            ? `Many neighborhoods in ${cityName} have specific roof requirements including tile profiles, colors, and approved materials. All Phase Construction USA assists with HOA submissions.`
            : `Some neighborhoods in ${cityName} have specific roof requirements including tile profiles, colors, and approved materials. All Phase Construction USA assists with HOA submissions.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you offer roof financing in ${cityName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. Financing options with low monthly payments are available for homeowners in ${cityName}, FL.`
        }
      }
    ]
  };

  const coastalDescription = isCoastal
    ? 'coastal exposure, salt air, and direct hurricane threats'
    : 'severe storms and Florida Building Code requirements';

  return (
    <>
      <SEO
        title={`How Much Does a Roof Cost in ${cityName}, FL? | 2025 Roofing Guide`}
        description={`See 2025 roof cost ranges for shingle, tile, metal, and flat roofs in ${cityName}, FL. Free calculator, ${hoaCommon ? 'HOA assistance, ' : ''}and insurance guidance from All Phase Construction USA.`}
        canonical={`/roof-cost-${citySlug}`}
        schemaJson={faqSchema}
      />

      <div className="bg-black text-white min-h-screen">
        <section className="relative bg-gradient-to-br from-neutral-950 to-black border-b border-neutral-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-500/30 rounded-full mb-6">
                <Home className="w-5 h-5 text-red-500" />
                <span className="text-sm font-semibold text-red-500">{cityName} Roofing Costs</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                How Much Does a Roof Cost in {cityName}, FL?
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                Roof replacement costs in {cityName} depend on home size, material selection, {hoaCommon && 'HOA requirements, '}
                and Florida Building Code compliance. With {coastalDescription}, proper roof installation is critical.
                Use our <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 font-semibold">Roof Cost Calculator</Link> for
                instant estimates, or schedule a free assessment for exact pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/roof-cost-calculator"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate Roof Cost
                </Link>
                <a
                  href="tel:754-227-5605"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  Call 754-227-5605
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Typical Roof Prices in {cityName} (2025)
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Average cost ranges for common roof systems in {cityName}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Shingle Roof Cost</h3>
                    <p className="text-3xl font-bold text-red-500 mb-2">$12,000 – $26,000</p>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Architectural shingles with Class 4 impact ratings and wind resistance up to 130 mph. Budget-friendly option with 20–30 year warranties.
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
                    <h3 className="text-xl font-bold text-white mb-2">Tile Roof Cost</h3>
                    <p className="text-3xl font-bold text-red-500 mb-2">$32,000 – $75,000</p>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Premium concrete or clay tile systems with foam adhesive attachment and SWR underlayment. 50+ year lifespan with maximum insurance benefits.
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
                    <h3 className="text-xl font-bold text-white mb-2">Metal Roof Cost</h3>
                    <p className="text-3xl font-bold text-red-500 mb-2">$38,000 – $85,000</p>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Mechanically seamed metal roofing systems with superior wind ratings (170+ mph). Solar-ready with 50+ year lifespan.
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
                    <h3 className="text-xl font-bold text-white mb-2">Flat Roof Cost</h3>
                    <p className="text-3xl font-bold text-red-500 mb-2">$10,000 – $32,000</p>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      IB PVC, TPO, or modified bitumen systems for flat or low-slope sections. Energy-efficient white membranes with 20–30 year warranties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Affects Roof Pricing in {cityName}?
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Several factors influence the final cost of your roof replacement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Roof Size & Complexity</h3>
                    <p className="text-neutral-300 leading-relaxed text-sm">
                      Larger roofs and complex designs with multiple angles, valleys, or roof-to-wall connections require more materials and labor.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Material Selection</h3>
                    <p className="text-neutral-300 leading-relaxed text-sm">
                      Shingle, <Link to="/tile-roofing" className="text-red-500 hover:text-red-400">tile</Link>, <Link to="/metal-roofing" className="text-red-500 hover:text-red-400">metal</Link>, and flat roofs each have different material costs and installation requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Code Compliance</h3>
                    <p className="text-neutral-300 leading-relaxed text-sm">
                      HVHZ-compliant underlayment, enhanced fastening patterns, and wind uplift-rated systems required by Florida Building Code.
                    </p>
                  </div>
                </div>
              </div>

              {hoaCommon && (
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">HOA Requirements</h3>
                      <p className="text-neutral-300 leading-relaxed text-sm">
                        Many {cityName} communities require specific tile profiles, colors, or premium materials that may increase project costs.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Structural Issues</h3>
                    <p className="text-neutral-300 leading-relaxed text-sm">
                      As a dual-licensed General Contractor and Roofing Contractor, we can identify and correct structural problems that roofing-only contractors cannot address.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Insurance Savings</h3>
                    <p className="text-neutral-300 leading-relaxed text-sm">
                      Installing code-compliant systems and providing wind mitigation reports at completion can help you qualify for insurance discounts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Most Common Roofing Systems in {cityName}
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                The roofing systems {cityName} homeowners choose most often
              </p>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="bg-black border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Tile Roofs</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Concrete and clay tile roofs offer exceptional durability with 50+ year lifespans and superior wind resistance. Popular in South Florida for their Mediterranean aesthetics and energy efficiency. Learn more about <Link to="/tile-roofing" className="text-red-500 hover:text-red-400 font-semibold">tile roofing systems</Link>.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>50+ year lifespan</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Maximum wind ratings for HVHZ</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Excellent energy efficiency</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>HOA-preferred aesthetics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Metal Roofs (Mechanically Seamed)</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Standing seam and mechanically seamed metal roofs provide superior wind performance (170+ mph) and are solar-ready. Increasingly popular for modern homes seeking maximum durability and minimal maintenance. Explore <Link to="/metal-roofing" className="text-red-500 hover:text-red-400 font-semibold">metal roofing options</Link>.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Wind resistance up to 170+ mph</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Solar panel ready</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Virtually maintenance-free</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Reflective coatings reduce cooling costs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Shingle Roofs</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Architectural shingles offer budget-conscious homeowners reliable performance with Class 4 impact ratings and wind resistance up to 130 mph. Modern shingles feature algae-resistant granules and 20–30 year warranties. Check out <Link to="/shingle-roofing" className="text-red-500 hover:text-red-400 font-semibold">shingle roofing details</Link>.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Most affordable option</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Class 4 impact-rated options</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>20–30 year warranties</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Wide variety of colors</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Flat Roofs (IB PVC / Modified)</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  IB PVC and modified bitumen systems for flat or low-slope sections, additions, and modern architectural designs. White reflective membranes reduce heat gain and heat-welded seams ensure long-term performance. Visit our <Link to="/residential-roofing" className="text-red-500 hover:text-red-400 font-semibold">residential roofing page</Link> for more information.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Energy-efficient white membranes</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Heat-welded seams</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Ideal for modern home designs</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>20–30 year system warranties</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why {cityName} Homeowners Choose All Phase Construction USA
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Experience, licensing, and local expertise that {cityName} residents trust
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Dual Licensed GC & Roofing Contractor</h3>
                <p className="text-neutral-300 leading-relaxed">
                  We hold both General Contractor (CGC1526236) and Roofing Contractor (CCC1331464) licenses, allowing us to handle structural upgrades that standard roofers cannot perform.
                </p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">HVHZ Expertise</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Our team understands High Velocity Hurricane Zone requirements, wind uplift calculations, and enhanced installation techniques required for South Florida.
                </p>
              </div>

              {hoaCommon && (
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">HOA Assistance</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    We prepare architectural review submissions, attend HOA meetings when needed, and ensure your roof meets all community requirements.
                  </p>
                </div>
              )}

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Local Specialists</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Based in Deerfield Beach, we serve {cityName} and surrounding communities with local crews who understand South Florida building codes.
                </p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Insurance Knowledge</h3>
                <p className="text-neutral-300 leading-relaxed">
                  We design roof systems to maximize wind mitigation credits and insurance savings. Most homeowners see significant annual premium reductions.
                </p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Local Team</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Our experienced crews understand local requirements, work efficiently, and maintain job sites professionally throughout the project.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want an Exact Price for Your {cityName} Home?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Use our Roof Cost Calculator for instant estimates or schedule a free assessment with our licensed team. We'll evaluate your roof{hoaCommon && ', discuss HOA requirements,'} and provide a detailed proposal with transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
              >
                <Phone className="w-5 h-5" />
                Schedule My {cityName} Roof Estimate
              </Link>
              <Link
                to="/roof-cost-calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
              >
                <Calculator className="w-5 h-5" />
                Use Cost Calculator
              </Link>
            </div>
            <a
              href="tel:754-227-5605"
              className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors"
            >
              754-227-5605
            </a>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {cityName} Roofing FAQ
              </h2>
              <p className="text-xl text-neutral-300">
                Common questions from {cityName} homeowners
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <h3 className="text-lg font-bold text-white pr-8">
                      {faq.question}
                    </h3>
                    {openFAQIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQIndex === index && (
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
    </>
  );
}
