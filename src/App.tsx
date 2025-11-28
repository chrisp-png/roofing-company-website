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
import MobileBottomBar from "./components/MobileBottomBar";

function App() {
  return (
    <div className="min-h-screen bg-black pb-20 md:pb-0">
      <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/80 backdrop-blur">
        <Navigation />
      </header>
      <Hero />

      {/* RESIDENTIAL ROOFING SECTION */}
      <section
        id="residential"
        className="py-20 bg-neutral-950 border-b border-neutral-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Residential Roofing for South Florida Homeowners
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Roof replacements and repairs designed for single-family homes, townhomes, and villas.
            </p>
          </div>

          <div className="prose prose-invert max-w-4xl mx-auto">
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              Your home is your biggest investment. We help homeowners select the right roofing system based on
              budget, curb appeal, HOA requirements, and long-term protection. Our team installs tile, metal,
              shingle, and flat roofs built to withstand South Florida&apos;s HVHZ conditions.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              We work cleanly and professionally — protecting driveways, landscaping, and outdoor areas while keeping
              your property safe and organized throughout the project.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              If your neighborhood or HOA requires approvals, we can assist with documentation and product details so
              your application moves quickly.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Behind the scenes, we handle permitting, engineering when required, inspections, and wind-mitigation
              documentation to help homeowners reduce insurance costs and avoid paperwork headaches.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-neutral-200 text-sm sm:text-base">
              Not sure which roof is best for your home? Speak with one of our specialists today.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              Talk to a Residential Specialist
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
              Commercial, Condo &amp; HOA Roofing Services
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Roofing solutions for businesses, multifamily buildings, associations, and commercial properties.
            </p>
          </div>

          <div className="prose prose-invert max-w-4xl mx-auto">
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              We work with property managers, building owners, and association boards to plan, manage, and complete
              commercial roofing projects with minimal disruption to operations or residents.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              Our team installs flat roofing systems, metal assemblies, and commercial-grade products that meet all
              South Florida HVHZ building code requirements.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              We coordinate staging, phasing, communication, safety planning, and project documentation so your board
              or ownership group has everything needed to make informed decisions.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              We also handle permitting, engineering, inspections, wind mitigation documentation, and all required
              paperwork for commercial or multifamily roofing projects.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-neutral-200 text-sm sm:text-base">
              Need a proposal or inspection for a commercial or association property? Our commercial team can help.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              Request Commercial/HOA Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Roof Types Section */}
      <section id="roof-types" className="py-20 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Roof Types
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Explore our range of roofing materials and styles
            </p>
          </div>

          {/* Tile Roofing */}
          <div id="tile" className="mb-12 scroll-mt-20">
            <h3 className="text-3xl font-bold text-white mb-4">Tile Roofing</h3>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              Tile roofs offer exceptional durability and classic aesthetic appeal. Perfect for South Florida's climate, tile roofing provides excellent energy efficiency and can last 50+ years with proper maintenance.
            </p>
          </div>

          {/* Metal Roofing */}
          <div id="metal" className="mb-12 scroll-mt-20">
            <h3 className="text-3xl font-bold text-white mb-4">Metal Roofing</h3>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              Metal roofs are lightweight, durable, and highly resistant to extreme weather conditions. They reflect heat, reducing cooling costs, and require minimal maintenance over their 40-70 year lifespan.
            </p>
          </div>

          {/* Shingle Roofing */}
          <div id="shingle" className="mb-12 scroll-mt-20">
            <h3 className="text-3xl font-bold text-white mb-4">Shingle Roofing</h3>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              Asphalt shingles are cost-effective and versatile, available in numerous colors and styles. They provide reliable protection and typically last 20-30 years, making them a popular choice for residential properties.
            </p>
          </div>

          {/* Flat Roofing */}
          <div id="flat" className="mb-12 scroll-mt-20">
            <h3 className="text-3xl font-bold text-white mb-4">Flat Roofing</h3>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              Flat roofs are ideal for commercial buildings and modern residential designs. All Phase Construction USA installs TPO, EPDM, and modified bitumen systems that provide excellent waterproofing and energy efficiency.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-neutral-200 text-sm sm:text-base">
              Not sure which roof type is right for you? Let All Phase Construction USA's experts assess your property.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              Schedule an On-Site Roof Assessment
            </a>
          </div>
        </div>
      </section>

      <Services />

      {/* Wind Mitigation Section */}
      <section id="wind-mitigation" className="py-20 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Wind Mitigation — Lower Your Premiums, Protect Your Home
            </h2>
          </div>
          <div className="prose prose-invert max-w-4xl mx-auto">
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              Florida homeowners searching for ways to reduce their insurance premiums often research upgrades like Secondary Water Resistance (SWR), roof-to-wall connections, roof deck re-nailing, and impact-rated window and door protection. These improvements form the backbone of Florida&apos;s wind-mitigation standards.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              All Phase Construction USA is one of the few dual-licensed Roofing + General Contractors in South Florida, meaning we can legally perform both roofing and structural wind-mitigation upgrades in a single project. No need to hire multiple contractors — one permit, one inspection, one streamlined process.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              Our wind-mitigation improvements follow Florida Building Code, FEMA, and Citizens Insurance requirements and can qualify homeowners for up to 45% in insurance premium savings, depending on the carrier.
            </p>

            <div className="bg-neutral-900/50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Wind Mitigation Upgrades We Provide:</h3>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Secondary Water Resistance (SWR)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Roof deck re-nailing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Roof-to-wall / hurricane strap retrofits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Impact windows, doors, and shutter systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>FBC-compliant roof installations</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose All Phase:</h3>
              <p className="text-neutral-300 leading-relaxed mb-2">
                One contractor. One permit. One inspection.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                Faster, easier, and more cost-effective than hiring a roofer who cannot legally perform structural work.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-neutral-200 text-sm sm:text-base">
              Strengthen your roof and lower your insurance premiums — schedule your Wind Mitigation inspection today.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              Schedule Wind Mitigation Inspection
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
                Let All Phase Construction USA help you explore financing and funding options. Contact us for a consultation.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200 whitespace-nowrap"
              >
                Schedule an On-Site Roof Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-neutral-950 border-b border-neutral-800">
        <Gallery />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-neutral-200 text-sm sm:text-base">
              Impressed by All Phase Construction USA's work? Let's discuss your roofing project today.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              Schedule an On-Site Roof Assessment
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
              Tips, guides, and insights from All Phase Construction USA's roofing experts
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
              Book an Appointment with All Phase
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
      <Contact />

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

      <MobileBottomBar />
    </div>
  );
}

export default App;
