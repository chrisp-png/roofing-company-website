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
      <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/80 backdrop-blur">
        <Navigation />
      </header>
      <Hero />

      {/* Residential Section */}
      <section id="residential" className="py-20 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Residential Roofing
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Expert roofing solutions for your home in South Florida
            </p>
          </div>
          <div className="prose prose-invert max-w-4xl mx-auto">
            <p className="text-lg text-neutral-300 leading-relaxed">
              All Phase Construction USA specializes in residential roofing services tailored to South Florida's unique climate. From new installations to repairs and maintenance, our team ensures your home is protected with quality materials and expert craftsmanship.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-neutral-200 text-sm sm:text-base">
              Ready to see what's possible for your property? Schedule an on-site roof assessment with All Phase Construction USA.
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

      {/* Commercial Section */}
      <section id="commercial" className="py-20 bg-black border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Commercial Roofing
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Professional roofing services for businesses and commercial properties
            </p>
          </div>
          <div className="prose prose-invert max-w-4xl mx-auto">
            <p className="text-lg text-neutral-300 leading-relaxed">
              All Phase Construction USA's commercial roofing services are designed to minimize downtime and maximize durability. We work with businesses of all sizes to provide comprehensive roofing solutions including flat roofing, metal systems, and ongoing maintenance.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-neutral-200 text-sm sm:text-base">
              Protect your business investment. Schedule a commercial roof assessment with All Phase Construction USA today.
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

      {/* HVHZ / Code Section */}
      <section id="hvhz" className="py-20 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              HVHZ / Code Compliance
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              High Velocity Hurricane Zone certified roofing solutions
            </p>
          </div>
          <div className="prose prose-invert max-w-4xl mx-auto">
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              South Florida is designated as a High Velocity Hurricane Zone (HVHZ), requiring special building codes and certifications. All Phase Construction USA's team is fully certified to install HVHZ-compliant roofing systems that meet or exceed Miami-Dade and Broward County requirements.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              All Phase Construction USA ensures your roof meets all local building codes, passes inspections, and provides maximum protection against hurricane-force winds. Our installations come with proper documentation and certification for insurance purposes.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-neutral-200 text-sm sm:text-base">
              Ensure your property meets HVHZ requirements. Schedule a code compliance assessment with All Phase Construction USA.
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
    </div>
  );
}

export default App;
