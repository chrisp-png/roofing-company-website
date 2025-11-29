import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Building2, Shield, Phone, FileText, CheckCircle, ChevronDown, ChevronUp, Users, Clock, Award, Wrench, MapPin } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function CommercialRoofingPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: 'Can you phase a commercial roof project to minimize disruption?',
      answer: 'Yes. We routinely phase commercial and multi-family projects to keep buildings operational during installation. Our project managers coordinate with property managers to schedule work around tenant needs, deliveries, and business hours. Phasing is especially common for occupied condos and retail centers.',
    },
    {
      question: 'How do you work with HOA boards and property managers?',
      answer: 'We provide detailed proposals, attend board meetings when requested, coordinate with property managers on scheduling, and maintain clear communication throughout the project. Our team understands association budgets, reserve studies, and the approval process required for capital improvements.',
    },
    {
      question: 'What warranties do commercial roofs come with?',
      answer: 'Commercial roof warranties vary by system and manufacturer. Typical warranties include 10–20 year material warranties from manufacturers like IB Roof Systems, GAF, and Versico, plus our 5–10 year workmanship warranty. We can also facilitate extended warranties and maintenance programs for additional coverage.',
    },
    {
      question: 'Do you offer leak diagnostics and emergency repairs?',
      answer: 'Yes. We provide leak detection services using infrared scanning and visual inspections to identify problem areas. Emergency repairs are available for active leaks, storm damage, and urgent situations. Our team responds quickly to minimize water damage and business interruption.',
    },
    {
      question: 'Can you set up a roof maintenance plan for our building?',
      answer: 'Absolutely. We offer annual and semi-annual maintenance plans that include inspections, drain cleaning, minor repairs, and documentation for your property records. Regular maintenance extends roof life and helps identify small issues before they become expensive problems.',
    },
  ];

  return (
    <>
      <SEO
        title="Commercial Roofing Contractor in Broward & Palm Beach | All Phase Construction USA"
        description="All Phase Construction USA provides commercial and multi-family roofing in Broward and Palm Beach counties, including IB PVC, TPO, metal, and modified bitumen systems. Ideal for HOAs, condos, and commercial buildings."
        url="https://chrisp-png-roofing-c-gxj0.bolt.host/commercial-roofing"
        canonical="https://chrisp-png-roofing-c-gxj0.bolt.host/commercial-roofing"
        ogImage="https://chrisp-png-roofing-c-gxj0.bolt.host/og-image.jpg"
      />

      <div className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-neutral-950 to-black border-b border-neutral-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-500/30 rounded-full mb-6">
                <Building2 className="w-5 h-5 text-red-500" />
                <span className="text-sm font-semibold text-red-500">Commercial & Multi-Family Roofing</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Commercial & Multi-Family Roofing in Broward & Palm Beach Counties
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                All Phase Construction USA provides commercial roofing solutions for multi-family properties, condominiums, HOAs, office buildings, retail centers, warehouses, and industrial facilities throughout Broward and Palm Beach Counties. Our dual-licensed status (CGC1526236 & CCC1331464) allows us to handle both roofing and structural work that most contractors cannot perform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
                >
                  <FileText className="w-5 h-5" />
                  Request a Commercial Roof Assessment
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

        {/* Who We Serve */}
        <section className="py-20 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Who We Serve
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                We specialize in commercial, multi-family, and association roofing projects throughout South Florida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Building2, title: 'Condominium Associations' },
                { icon: Users, title: 'HOA Communities' },
                { icon: Building2, title: 'Apartment Complexes' },
                { icon: Building2, title: 'Office Buildings' },
                { icon: Building2, title: 'Retail & Shopping Centers' },
                { icon: Building2, title: 'Warehouses & Distribution Centers' },
                { icon: Building2, title: 'Churches & Religious Facilities' },
                { icon: Building2, title: 'Schools & Educational Buildings' },
                { icon: Building2, title: 'Medical Offices' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-red-500" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Commercial Roofing Systems */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Commercial Roofing Systems We Install
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Proven roofing systems engineered for South Florida's climate and code requirements
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">IB PVC & TPO Single-Ply Systems</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Premium white membrane roofing systems from IB Roof Systems, GAF, and Versico. Heat-welded seams provide superior waterproofing for flat and low-slope commercial applications. IB PVC is our top recommendation for multi-family and association properties due to its proven track record in South Florida's UV-intense environment.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>20–30 year system warranties</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Reflective white surface reduces cooling costs</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Wind uplift rated for HVHZ zones</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Ideal for condos, apartments, and HOA buildings</span>
                  </li>
                </ul>
                <Link
                  to="/roof-types/flat"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  Learn more about flat roofing systems
                  <Shield className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Modified Bitumen & Built-Up Roofing</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Multi-ply roofing systems featuring SBS modified bitumen membranes and traditional built-up assemblies. These time-tested systems offer excellent puncture resistance and are ideal for high-traffic roofs, mechanical equipment areas, and buildings requiring robust waterproofing performance.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Excellent puncture resistance</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Self-healing properties in hot climates</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Suitable for high-traffic roof areas</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>15–25 year service life</span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Metal Roofing for Commercial Buildings</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Standing seam and mechanically seamed metal roof systems for commercial, industrial, and institutional facilities. Metal roofing provides superior wind uplift resistance, low maintenance requirements, and compatibility with rooftop solar installations. Perfect for warehouses, office buildings, and modern architectural designs.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Extreme wind resistance (170+ mph ratings)</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Solar panel compatible</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Minimal maintenance requirements</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>50+ year lifespan</span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Coating & Restoration Systems</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Silicone and acrylic roof coatings that restore aging roof systems, seal minor leaks, and extend service life. Coating systems are a cost-effective alternative to full replacement for roofs with sound structural decking but worn surfaces. Ideal for budget-conscious associations and property owners seeking to maximize their existing roof investment.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Cost-effective roof restoration</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Extends existing roof life 10–15 years</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Seamless waterproofing layer</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span>Energy-efficient reflective coatings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Roofing Process */}
        <section className="py-20 bg-neutral-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Commercial Roofing Process
              </h2>
              <p className="text-xl text-neutral-300">
                A structured, professional approach from initial assessment through warranty close-out
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Roof Assessment & Evaluation',
                  description: 'Our licensed contractors perform a comprehensive roof inspection, document existing conditions with photos, identify code upgrade requirements, and provide recommendations for repair or replacement. We also review any previous roof documentation and warranty information.',
                },
                {
                  step: '2',
                  title: 'Detailed Proposal & Specifications',
                  description: 'We prepare a comprehensive proposal with system specifications, material data sheets, warranty information, project timeline, and itemized pricing. For HOA and condo projects, we provide board-ready documentation and attend meetings when requested.',
                },
                {
                  step: '3',
                  title: 'Permitting & Engineering',
                  description: 'Our team handles all building permit applications, wind uplift calculations, and structural engineering as required by local municipalities. We coordinate inspections and ensure full code compliance throughout the approval process.',
                },
                {
                  step: '4',
                  title: 'Pre-Construction Coordination',
                  description: 'Your dedicated project manager meets with property managers, board members, or facility managers to review the work scope, discuss phasing requirements, establish communication protocols, and coordinate site logistics including material deliveries and staging areas.',
                },
                {
                  step: '5',
                  title: 'Roof Installation',
                  description: 'Our experienced crews execute the roofing installation with daily site supervision by a licensed project manager. We maintain safety protocols, minimize disruption to tenants or operations, provide progress updates, and document each phase with photos.',
                },
                {
                  step: '6',
                  title: 'Quality Control & Final Inspections',
                  description: 'We perform internal quality checks throughout installation, coordinate all required building inspections, conduct a final walkthrough with property managers or owners, and address any punch-list items before project close-out.',
                },
                {
                  step: '7',
                  title: 'Warranty Documentation & Close-Out',
                  description: 'You receive manufacturer warranties, workmanship warranties, as-built documentation, permit sign-off, and maintenance recommendations. We provide digital and physical copies of all warranty documents for your property records.',
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

        {/* Safety, Compliance & Communication */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Safety, Compliance & Communication
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Professional standards that protect your property, tenants, and investment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Safety Protocols</h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  OSHA-compliant fall protection, perimeter warning systems, restricted access zones, and daily safety briefings for all crew members. We maintain comprehensive general liability and workers' compensation insurance.
                </p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Code Compliance</h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Every project meets or exceeds Florida Building Code requirements, including wind uplift calculations, fire ratings, and drainage specifications. We handle all permit applications and inspections.
                </p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Tenant & Occupant Coordination</h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  We work closely with property managers to minimize disruption. Advance notice to tenants, phased installations, and flexible scheduling keep your building operational during construction.
                </p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Transparent Communication</h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Your dedicated project manager provides daily updates, progress photos, and is available via phone and email throughout the project. We document every phase for your records.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Commercial Clients Choose All Phase */}
        <section className="py-20 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Commercial Clients Choose All Phase
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Experience, licensing, and a proven track record with South Florida associations and property managers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Dual Licensed Contractor</h3>
                <p className="text-neutral-300 leading-relaxed">
                  CGC1526236 & CCC1331464 licenses allow us to perform both roofing and structural work, including load-path improvements and code upgrades that standard roofers cannot handle.
                </p>
              </div>

              <div className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Multi-Family Experience</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Extensive experience with condominium associations, HOA boards, and property management companies. We understand reserve studies, capital planning, and association requirements.
                </p>
              </div>

              <div className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Turnkey Solutions</h3>
                <p className="text-neutral-300 leading-relaxed">
                  From initial assessment through warranty documentation, we handle every aspect of your commercial roofing project. No subcontractors or third-party coordination required.
                </p>
              </div>

              <div className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Local Presence</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Based in Deerfield Beach, we serve Broward and Palm Beach counties with local crews who understand South Florida weather, building codes, and municipal requirements.
                </p>
              </div>

              <div className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Fully Insured & Bonded</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Comprehensive general liability, workers' compensation, and bonding available for association and commercial contracts. We provide certificates of insurance upon request.
                </p>
              </div>

              <div className="bg-black border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Detailed Documentation</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Every project includes comprehensive documentation, progress photos, inspection reports, and warranty materials for your property records and reserve studies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Schedule a Commercial Roof Consultation
            </h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Whether you manage a condominium association, HOA property, or commercial building, All Phase Construction USA provides professional roofing solutions backed by dual licensing, comprehensive insurance, and transparent communication. Contact us for a free roof assessment and detailed proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
              >
                <FileText className="w-5 h-5" />
                Request a Commercial Roof Assessment
              </Link>
              <Link
                to="/roof-cost-calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
              >
                Calculate Roof Cost
              </Link>
            </div>
            <a
              href="tel:754-227-5605"
              className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors"
            >
              754-227-5605
            </a>
            <p className="text-sm text-neutral-400 mt-6">
              Learn more about our <Link to="/service-areas" className="text-red-500 hover:text-red-400 font-semibold">service areas</Link> throughout Broward and Palm Beach Counties
            </p>
          </div>
        </section>

        {/* Commercial & Multi-Family Cities */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Commercial & Multi-Family Roofing in These Cities
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Click to see roof cost guides and commercial roofing insights for your city
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <Link
                to="/roof-cost/boca-raton"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 border border-neutral-800 hover:border-red-500 text-white hover:text-red-500 rounded-lg transition-all duration-300 font-semibold"
              >
                Boca Raton
              </Link>
              <Link
                to="/roof-cost/deerfield-beach"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 border border-neutral-800 hover:border-red-500 text-white hover:text-red-500 rounded-lg transition-all duration-300 font-semibold"
              >
                Deerfield Beach
              </Link>
              <Link
                to="/roof-cost/pompano-beach"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 border border-neutral-800 hover:border-red-500 text-white hover:text-red-500 rounded-lg transition-all duration-300 font-semibold"
              >
                Pompano Beach
              </Link>
              <Link
                to="/roof-cost/fort-lauderdale"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 border border-neutral-800 hover:border-red-500 text-white hover:text-red-500 rounded-lg transition-all duration-300 font-semibold"
              >
                Fort Lauderdale
              </Link>
              <Link
                to="/roof-cost/coral-springs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 border border-neutral-800 hover:border-red-500 text-white hover:text-red-500 rounded-lg transition-all duration-300 font-semibold"
              >
                Coral Springs
              </Link>
              <Link
                to="/roof-cost/hollywood"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 border border-neutral-800 hover:border-red-500 text-white hover:text-red-500 rounded-lg transition-all duration-300 font-semibold"
              >
                Hollywood
              </Link>
              <Link
                to="/roof-cost/west-palm-beach"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 border border-neutral-800 hover:border-red-500 text-white hover:text-red-500 rounded-lg transition-all duration-300 font-semibold"
              >
                West Palm Beach
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-neutral-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Commercial Roofing FAQ
              </h2>
              <p className="text-xl text-neutral-300">
                Common questions from property managers and HOA boards
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
