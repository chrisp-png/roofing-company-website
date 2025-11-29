import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Home, Shield, Calculator, Phone, ChevronRight, CheckCircle, ChevronDown, ChevronUp, DollarSign, Award, Clock, Users } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function ResidentialRoofingPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: 'How long does a residential roof replacement take?',
      answer: 'Most residential roof replacements in South Florida take 3–7 days depending on size, complexity, and material choice. Tile and metal roofs typically take longer than shingle installations. We provide a detailed timeline during your free assessment and coordinate scheduling to minimize disruption.',
    },
    {
      question: 'Do I need HOA approval before starting my roof project?',
      answer: 'Yes. Most HOAs in Broward and Palm Beach counties require architectural approval before roof replacement. We can help you prepare the necessary documentation, including material specs, color samples, and contractor licenses. Our team is experienced working with HOA boards and understands their requirements.',
    },
    {
      question: 'Should I repair or replace my roof?',
      answer: 'If your roof is over 20 years old, has widespread leak issues, or shows signs of structural damage, replacement is typically more cost-effective. Repairs make sense for isolated damage on newer roofs. During our free assessment, we provide honest recommendations based on your roof\'s condition and your long-term goals.',
    },
    {
      question: 'Are metal roofs really better than tile for South Florida?',
      answer: 'Both are excellent choices. Metal roofs offer superior wind resistance, are solar-ready, and require minimal maintenance. Tile roofs provide classic aesthetics, excellent insulation, and can last 50+ years. Your choice depends on home style, budget, and priorities. We help you evaluate both options during your consultation.',
    },
    {
      question: 'Will someone from All Phase be on-site during installation?',
      answer: 'Yes. A licensed project manager visits your job site daily to ensure quality control, answer questions, and coordinate with our crews. You\'ll have direct phone access to your project manager throughout the entire process.',
    },
  ];

  return (
    <>
      <SEO
        title="Residential Roofing in Broward & Palm Beach Counties | All Phase Construction USA"
        description="All Phase Construction USA installs shingle, tile, metal, and flat residential roofs in Broward and Palm Beach counties. Dual licensed GC and roofer. Free roof assessments and financing options."
        canonical="/residential-roofing"
      />

      <div className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-neutral-950 to-black border-b border-neutral-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-500/30 rounded-full mb-6">
                <Home className="w-5 h-5 text-red-500" />
                <span className="text-sm font-semibold text-red-500">Residential Roofing Experts</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Residential Roofing in Broward & Palm Beach Counties
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                All Phase Construction USA protects South Florida homes with code-compliant, hurricane-rated roofing systems. We serve homeowners throughout Boca Raton, Deerfield Beach, Coral Springs, Coconut Creek, Delray Beach, Pompano Beach, Fort Lauderdale, Parkland, and surrounding communities. Our dual-licensed team specializes in tile, metal, shingle, and flat roof installations designed to maximize wind mitigation credits and insurance savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
                >
                  <Phone className="w-5 h-5" />
                  Schedule My Free Residential Roof Estimate
                </Link>
                <Link
                  to="/roof-cost-calculator"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate Roof Cost
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Homeowners Choose Us */}
        <section className="py-20 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Homeowners Choose All Phase Construction USA
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                We're not just roofers—we're a dual-licensed general contractor and roofing company built for South Florida's unique challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Dual Licensed GC & Roofing Contractor</h3>
                <p className="text-neutral-300 leading-relaxed">
                  We hold both General Contractor (CGC1526236) and Roofing Contractor (CCC1331464) licenses, allowing us to handle structural upgrades, load-path improvements, and roof-to-wall connections that standard roofers cannot perform.
                </p>
              </div>

              <div className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">HVHZ Experience & Code Compliance</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Our team understands High Velocity Hurricane Zone requirements, wind uplift calculations, and enhanced nailing patterns required by Florida Building Code. Every roof we install meets or exceeds current code standards.
                </p>
              </div>

              <div className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Insurance & Wind Mitigation Experts</h3>
                <p className="text-neutral-300 leading-relaxed">
                  We design roof systems to maximize insurance discounts through proper underlayment, deck attachment, and roof-to-wall connections. Many homeowners save $2,000–$3,000+ annually on premiums after our installations.
                </p>
              </div>

              <div className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Clean, Professional Crews</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Our teams arrive on time, protect your property with tarps and magnetic sweepers, and clean up thoroughly each day. We treat your home with the same respect we'd want for our own.
                </p>
              </div>

              <div className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Local Broward & Palm Beach Presence</h3>
                <p className="text-neutral-300 leading-relaxed">
                  We're based in Deerfield Beach and serve the entire region. You'll work with local professionals who understand South Florida weather, building codes, and HOA requirements.
                </p>
              </div>

              <div className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Transparent Pricing & Financing</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Use our <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 font-semibold">Roof Cost Calculator</Link> for instant estimates. We offer flexible financing options and detailed proposals with no hidden fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roofing Options */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Roofing Options for Your Home
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Choose the right roof system based on your budget, architectural style, and long-term performance goals.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Architectural Shingle Roofs</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  High-performance architectural shingles with Class 4 impact ratings and enhanced wind resistance up to 130 mph. Installed with synthetic underlayment, proper nailing patterns, and code-compliant flashings. Perfect for budget-conscious homeowners who want reliable protection and curb appeal.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Budget-friendly option ($12,000–$24,000)</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Class 4 impact-rated shingles available</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>20–30 year manufacturer warranties</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Wide variety of colors and styles</span>
                  </li>
                </ul>
                <Link
                  to="/roof-types/shingle"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  Learn more about shingle roofing
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Tile Roofs (Concrete & Clay)</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Premium concrete and clay tile systems installed with foam adhesive attachment, SWR underlayment, and proper hip and ridge detailing. Tile roofs offer unmatched aesthetics, superior wind resistance, and 50+ year lifespans. Ideal for Mediterranean, Spanish, and contemporary architectural styles.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>50+ year lifespan with minimal maintenance</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Maximum wind ratings for hurricane zones</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Excellent insulation and energy efficiency</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Significant insurance premium discounts</span>
                  </li>
                </ul>
                <Link
                  to="/roof-types/tile"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  Learn more about tile roofing
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Metal Roofs (Mechanically Seamed)</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Standing seam and mechanically seamed metal roof systems engineered for extreme wind uplift, solar panel compatibility, and decades of low-maintenance performance. Metal roofs are the top choice for homeowners prioritizing long-term value, hurricane protection, and modern aesthetics.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Superior wind resistance (up to 170+ mph)</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Solar-ready with excellent panel compatibility</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>50+ year lifespan with minimal upkeep</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Reflective coatings reduce cooling costs</span>
                  </li>
                </ul>
                <Link
                  to="/roof-types/metal"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  Learn more about metal roofing
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Flat & Low-Slope Residential Roofs</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  TPO, modified bitumen, and IB PVC single-ply membrane systems for additions, porches, garages, and modern architectural homes with flat or low-slope roofs. These systems provide excellent waterproofing, UV resistance, and energy efficiency for non-traditional roof applications.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Reflective white membranes reduce heat gain</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Heat-welded seams for maximum waterproofing</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Ideal for modern and contemporary homes</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>20–30 year system warranties</span>
                  </li>
                </ul>
                <Link
                  to="/roof-types/flat"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  Learn more about flat roofing
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Residential Roofing Process */}
        <section className="py-20 bg-neutral-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Residential Roofing Process
              </h2>
              <p className="text-xl text-neutral-300">
                A clear, transparent process from initial assessment to final warranty documentation
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Free Roof Assessment',
                  description: 'A licensed contractor inspects your roof, attic, and fascia to assess condition, measure square footage, and identify code upgrade requirements. We provide honest recommendations and answer all your questions.',
                },
                {
                  step: '2',
                  title: 'Detailed Proposal & Material Selection',
                  description: 'We present a comprehensive quote with material options, warranties, timeline, and payment terms. You\'ll review shingle, tile, or metal samples and choose colors that complement your home.',
                },
                {
                  step: '3',
                  title: 'HOA Approval & Permitting',
                  description: 'We help you prepare HOA documentation and handle all building permit applications with your local municipality. Our team coordinates inspections and ensures code compliance.',
                },
                {
                  step: '4',
                  title: 'Pre-Construction Meeting',
                  description: 'Your project manager reviews the work scope, confirms material delivery, discusses site logistics, and sets clear expectations for daily progress and communication.',
                },
                {
                  step: '5',
                  title: 'Roof Installation',
                  description: 'Our crews carefully remove the old roof, inspect and repair decking as needed, install new underlayment and drip edges, and complete the roofing system installation. A project manager is on-site daily for quality control.',
                },
                {
                  step: '6',
                  title: 'Final Inspection & Cleanup',
                  description: 'We conduct a detailed walkthrough to ensure quality workmanship, pass all required building inspections, and thoroughly clean your property with magnetic sweepers and final debris removal.',
                },
                {
                  step: '7',
                  title: 'Warranty Documentation & Wind Mitigation',
                  description: 'You receive manufacturer and workmanship warranties, permit sign-off documentation, and guidance on scheduling a wind mitigation inspection to maximize insurance savings.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-neutral-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance & Wind Mitigation */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Insurance & Wind Mitigation Advantages
                </h2>
                <p className="text-xl text-neutral-300 leading-relaxed mb-6">
                  A new roof installed to current Florida Building Code standards can significantly reduce your homeowners insurance premiums. Our dual-licensed status allows us to perform structural upgrades that maximize your wind mitigation credits.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Roof-to-Wall Connections</h3>
                      <p className="text-neutral-300">We install hurricane straps and clips that meet or exceed the highest wind mitigation credit tier.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Secondary Water Barriers</h3>
                      <p className="text-neutral-300">Code-compliant SWR underlayment provides an additional layer of protection and insurance credits.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Impact-Rated Materials</h3>
                      <p className="text-neutral-300">Class 4 impact-rated shingles and properly rated tile/metal systems qualify for premium discounts.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Wind Mitigation Coordination</h3>
                      <p className="text-neutral-300">We provide documentation needed for your post-installation wind mitigation inspection.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Potential Annual Savings</h3>
                <p className="text-neutral-300 mb-6">
                  Homeowners who install a new code-compliant roof and complete a wind mitigation inspection often see insurance savings of:
                </p>
                <div className="space-y-4">
                  <div className="bg-black/50 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-500 mb-2">$2,000 – $3,500+</p>
                    <p className="text-sm text-neutral-400">Average annual premium reduction</p>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-500 mb-2">30% – 45%</p>
                    <p className="text-sm text-neutral-400">Typical percentage discount on wind coverage</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-400 mt-6">
                  Actual savings vary by insurer, home age, location, and specific wind mitigation features installed. Contact your insurance agent for a personalized quote.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Financing Options */}
        <section className="py-20 bg-neutral-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Roof Financing Options
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Don't let budget concerns delay necessary roof replacement. We offer flexible financing options to help South Florida homeowners protect their investment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black border border-neutral-800 rounded-xl p-6 text-center hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Low Monthly Payments</h3>
                <p className="text-neutral-300">
                  Competitive rates with terms up to 15 years. Payments as low as $150–$300/month for most residential projects.
                </p>
              </div>

              <div className="bg-black border border-neutral-800 rounded-xl p-6 text-center hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Quick Approval Process</h3>
                <p className="text-neutral-300">
                  Most homeowners receive financing decisions within 24–48 hours with minimal paperwork required.
                </p>
              </div>

              <div className="bg-black border border-neutral-800 rounded-xl p-6 text-center hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Flexible Options</h3>
                <p className="text-neutral-300">
                  Multiple lender partners ensure we can find a financing solution that fits your budget and credit profile.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-red-900/20 border-2 border-red-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Learn More About Financing
              </h3>
              <p className="text-neutral-300 mb-6">
                Contact us to discuss financing options, see if you pre-qualify, and explore payment plans that work for your budget.
              </p>
              <a
                href="tel:754-227-5605"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
              >
                <Phone className="w-5 h-5" />
                Call 754-227-5605 for Financing Info
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for a Roof You Can Trust?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              All Phase Construction USA has protected thousands of South Florida homes with code-compliant, hurricane-rated roofing systems. Our dual-licensed team handles everything from HOA approvals to wind mitigation documentation. Get started with a free assessment and transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
              >
                <Phone className="w-5 h-5" />
                Schedule My Free Residential Roof Estimate
              </Link>
              <Link
                to="/roof-cost-calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
              >
                <Calculator className="w-5 h-5" />
                Calculate Roof Cost
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

        {/* FAQ Section */}
        <section className="py-20 bg-neutral-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Residential Roofing FAQ
              </h2>
              <p className="text-xl text-neutral-300">
                Common questions from South Florida homeowners
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
