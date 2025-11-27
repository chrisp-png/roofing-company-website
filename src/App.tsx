import React from "react";
import Navigation from "./components/Navigation";
import RoofCalculator from "./components/RoofCalculator";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ServiceAreas from "./components/ServiceAreas";
import Footer from "./components/Footer";
import Financing from "./components/Financing";

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/80 backdrop-blur">
        <Navigation />
      </header>

      {/* HERO SECTION */}
      <Hero />

      {/* TRUST STRIP – Since 2005 */}
      <section className="bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-200 text-sm md:text-base">
          <p className="font-semibold text-center md:text-left">
            South Florida’s Dual-Licensed Roofing Authority • Serving Broward &amp; Palm Beach Counties Since 2005
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 text-xs md:text-sm">
            <span className="px-3 py-1 rounded-full border border-red-500/50 bg-red-900/10">
              FL Licenses: CGC1526236 • CCC1331464
            </span>
            <span className="px-3 py-1 rounded-full border border-neutral-700 bg-black/40">
              HVHZ / Miami-Dade &amp; Broward Code Compliance
            </span>
            <span className="px-3 py-1 rounded-full border border-neutral-700 bg-black/40">
              Residential &amp; Commercial Roofing
            </span>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ALL PHASE SECTION */}
      <section
        id="why-all-phase"
        className="py-16 bg-black border-b border-neutral-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose All Phase Construction USA?
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Premium-quality roofing at a fair price, backed by nearly 20 years of local experience
              and dual-licensed expertise in South Florida’s High Velocity Hurricane Zone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-neutral-200 text-sm md:text-base">
            <div className="bg-neutral-950/70 border border-neutral-800 rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-3">
                Dual-Licensed GC + Roofing Contractor
              </h3>
              <p className="text-neutral-300">
                All Phase Construction USA is licensed as both a General Contractor and Roofing Contractor.
                That means we handle the entire project correctly — structure, straps, roof system, and code compliance.
              </p>
            </div>
            <div className="bg-neutral-950/70 border border-neutral-800 rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-3">
                Built for South Florida Weather
              </h3>
              <p className="text-neutral-300">
                We design and install roofing systems that meet HVHZ requirements and are engineered for
                hurricane-force winds, heavy rain, and intense sun in Broward &amp; Palm Beach Counties.
              </p>
            </div>
            <div className="bg-neutral-950/70 border border-neutral-800 rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-3">
                Fair, Honest Pricing &amp; Financing Options
              </h3>
              <p className="text-neutral-300">
                We combine premium workmanship with fair, transparent pricing, plus financing and grant options
                to help you complete your project without delaying critical work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL ROOFING SECTION */}
      <section
        id="residential"
        className="py-20 bg-neutral-950 border-b border-neutral-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Residential Roofing in Broward &amp; Palm Beach
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              High-performance roofing systems for single-family homes, townhomes, and villas across South Florida.
            </p>
          </div>

          <div className="prose prose-invert max-w-4xl mx-auto">
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              All Phase Construction USA installs and replaces residential roofing systems in communities throughout
              Broward and Palm Beach Counties — including Deerfield Beach, Boca Raton, Delray Beach, Pompano Beach,
              Coral Springs, and surrounding areas. We work with tile, metal, shingle, and flat roofs, and we help
              homeowners take advantage of insurance discounts and wind-mitigation opportunities where available.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Whether you need a full roof replacement, a storm-damage evaluation, or help understanding your options,
              our team walks you through each step so you can make a confident, informed decision.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-neutral-200 text-sm sm:text-base">
              Not sure which roofing system is best for your home? Have one of our specialists help you compare options,
              pricing, and potential insurance savings.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              Talk to a Roofing Specialist
            </a>
          </div>
        </div>
      </section>

      {/* COMMERCIAL ROOFING SECTION */}
      <section
        id="commercial"
        className="py-20 bg-black border-b border-neutral-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Commercial &amp; Multifamily Roofing
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Flat, low-slope, and complex roofing systems for commercial buildings, condos, and associations.
            </p>
          </div>

          <div className="prose prose-invert max-w-4xl mx-auto">
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              From retail centers and offices to condo and HOA communities, All Phase Construction USA provides
              commercial roofing solutions designed to minimize disruption and maximize long-term performance.
              We install and service flat roofing systems, metal assemblies, and other commercial-grade roof systems
              that meet South Florida codes and manufacturer requirements.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Our commercial team coordinates closely with property managers, boards, and engineers to develop
              clear scopes of work, phasing plans, and communication strategies so your project runs smoothly.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-neutral-200 text-sm sm:text-base">
              Need a proposal for a commercial, condo, or HOA roof project? We can review plans, inspect existing
              conditions, and prepare a detailed scope and estimate.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              Request a Commercial Roof Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ROOF TYPES SECTION */}
      <section
        id="roof-types"
        className="py-20 bg-neutral-950 border-b border-neutral-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Roof Types We Install
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Tile, metal, shingle, and flat roofing systems engineered for South Florida’s High Velocity Hurricane Zone.
            </p>
          </div>

          {/* Tile Roofing */}
          <div id="tile" className="mb-10 scroll-mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Tile Roofing
            </h3>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Tile roofs offer long-term durability and a classic South Florida look. Properly installed, tile roofing
              can last decades while providing excellent performance against heat and wind. We work with concrete
              and clay tile systems that meet current HVHZ code requirements.
            </p>
          </div>

          {/* Metal Roofing */}
          <div id="metal" className="mb-10 scroll-mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Metal Roofing
            </h3>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Metal roofing systems are lightweight, strong, and highly resistant to hurricane-force winds when properly
              engineered and installed. They can help reduce cooling costs and provide a sleek, modern appearance.
            </p>
          </div>

          {/* Shingle Roofing */}
          <div id="shingle" className="mb-10 scroll-mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Shingle Roofing
            </h3>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Architectural shingles remain a popular choice for many homes because they balance cost, performance,
              and appearance. We install shingle systems that meet current code and manufacturer specifications for
              South Florida.
            </p>
          </div>

          {/* Flat Roofing */}
          <div id="flat" className="mb-10 scroll-mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Flat &amp; Low-Slope Roofing
            </h3>
            <p className="text-lg text-neutral-300 leading-relaxed">
              For commercial buildings, multifamily properties, and modern residential designs, we install flat and
              low-slope roofing systems that provide reliable waterproofing, drainage, and energy performance.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-neutral-200 text-sm sm:text-base">
              Not sure which roof type is right for your property? Have one of our specialists help you compare
              tile, metal, shingle, and flat options for your specific building.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              Speak with a Roofing Specialist
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES COMPONENT (can be further tuned later if you want) */}
      <Services />

      {/* HVHZ / CODE COMPLIANCE – REWRITTEN FOR SEO */}
      <section id="hvhz" className="py-20 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              HVHZ Roofing &amp; Code Compliance
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Roofing systems engineered for South Florida’s High Velocity Hurricane Zone and local building departments.
            </p>
          </div>
          <div className="prose prose-invert max-w-4xl mx-auto">
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              Broward and Miami-Dade Counties are part of Florida’s High Velocity Hurricane Zone (HVHZ), which has some
              of the strictest roofing requirements in the country. All Phase Construction USA installs roofing systems
              that are designed, permitted, and inspected to meet or exceed HVHZ and local building code requirements.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              Our team coordinates with engineers, building officials, and inspectors to ensure your roof is installed
              correctly — from fastening patterns and underlayment to flashing details and final inspections. We also
              provide the proper documentation that insurance carriers often request, including photos, permits, and
              wind-mitigation forms where applicable.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Whether you are replacing a residential roof or a large commercial system, code compliance and long-term
              performance are built into every project we take on.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-neutral-200 text-sm sm:text-base">
              Need to be sure your next roof is fully HVHZ-compliant? We can review your existing conditions and help
              you plan a code-correct replacement.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              Schedule a Code Compliance Review
            </a>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section id="financing" className="py-20 bg-black border-b border-neutral-800">
        <div className="text-white">
          <Financing />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-neutral-200 text-sm sm:text-base">
                Have one of our specialists help you decide which financing or grant program is best for your project.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200 whitespace-nowrap"
              >
                Talk to a Financing Specialist
              </a>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* Projects / Gallery Section */}
      <section id="projects" className="py-20 bg-neutral-950 border-b border-neutral-800">
        <Gallery />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-neutral-200 text-sm sm:text-base">
              See something you like in our recent projects? Let’s discuss the right roofing solution for your property.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              Start Your Roofing Project
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-black border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Roofing Blog
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Tips, guides, and insights from All Phase Construction USA's roofing experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-neutral-950 rounded-xl p-6 border border-neutral-800 hover:border-neutral-700 transition-colors duration-200">
              <h3 className="text-xl font-bold text-white mb-3">Metal vs Tile Roofs in South Florida</h3>
              <p className="text-neutral-300 mb-4">
                Comparing the pros and cons of metal and tile roofing systems for South Florida homes.
              </p>
              <a href="/blog/metal-vs-tile-roofs-south-florida.html" className="text-red-500 hover:text-red-400 font-semibold">
                Read More →
              </a>
            </div>
            <div className="bg-neutral-950 rounded-xl p-6 border border-neutral-800 hover:border-neutral-700 transition-colors duration-200">
              <h3 className="text-xl font-bold text-white mb-3">Hurricane Season Preparation</h3>
              <p className="text-neutral-300 mb-4">
                Essential checklist to ensure your roof is ready for hurricane season.
              </p>
              <a href="#" className="text-red-500 hover:text-red-400 font-semibold">
                Coming Soon
              </a>
            </div>
            <div className="bg-neutral-950 rounded-xl p-6 border border-neutral-800 hover:border-neutral-700 transition-colors duration-200">
              <h3 className="text-xl font-bold text-white mb-3">Understanding HVHZ Requirements</h3>
              <p className="text-neutral-300 mb-4">
                A comprehensive guide to High Velocity Hurricane Zone building codes.
              </p>
              <a href="#" className="text-red-500 hover:text-red-400 font-semibold">
                Coming Soon
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-neutral-200 text-sm sm:text-base">
              Have questions about roofing? All Phase Construction USA's experts are here to help with a free consultation.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              Book a Consultation with All Phase
            </a>
          </div>
        </div>
      </section>

      {/* FAQ SECTION – SEO + Trust */}
      <section id="faq" className="py-20 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Roofing FAQ – South Florida
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Common questions homeowners and property managers ask us about roofing in Broward &amp; Palm Beach Counties.
            </p>
          </div>

          <div className="space-y-6 text-neutral-200 text-sm md:text-base">
            <div className="bg-black/40 border border-neutral-800 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">
                How long does a roof typically last in South Florida?
              </h3>
              <p className="text-neutral-300">
                It depends on the material and installation quality. Many shingle roofs last around 20–25 years, while
                tile and metal systems can often last much longer when properly installed and maintained. We can evaluate
                your existing roof and give you an honest opinion on remaining life and replacement timing.
              </p>
            </div>
            <div className="bg-black/40 border border-neutral-800 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">
                Do you help with insurance claims or wind-mitigation discounts?
              </h3>
              <p className="text-neutral-300">
                Yes. We provide detailed proposals, photos, permits, and documentation that insurance carriers typically
                request. We can also help you understand wind-mitigation opportunities and how certain upgrades may help
                reduce your premium, depending on your policy and carrier.
              </p>
            </div>
            <div className="bg-black/40 border border-neutral-800 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">
                Which areas do you serve?
              </h3>
              <p className="text-neutral-300">
                We serve communities throughout Broward and Palm Beach Counties, including Deerfield Beach, Boca Raton,
                Delray Beach, Pompano Beach, Coral Springs, and nearby cities. If you are unsure whether we cover your area,
                just ask — chances are we do.
              </p>
            </div>
            <div className="bg-black/40 border border-neutral-800 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">
                Can you help me choose between tile, metal, and shingle?
              </h3>
              <p className="text-neutral-300">
                Absolutely. We look at your home, budget, neighborhood, and long-term plans to help you weigh the pros
                and cons of each system. Our goal is to match you with the roof that makes the most sense for your property.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-neutral-300 mb-4">
              Have a question that isn’t listed here? We’re happy to help.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200"
            >
              Ask a Roofing Question
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
      <Contact />

      {/* Calculator Section */}
      <section id="calculator" className="border-b border-neutral-800 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <RoofCalculator />
          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white hover:bg-red-500 transition-colors duration-200"
            >
              Schedule On-Site Roof Assessment
            </a>
          </div>
        </div>
      </section>

      <ServiceAreas />
      <Footer />
    </div>
  );
}

export default App;
