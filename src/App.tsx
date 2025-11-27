import React from "react";
import RoofCalculator from "./components/RoofCalculator";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />

      <section id="calculator" className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <RoofCalculator />
          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white hover:bg-red-500"
            >
              Book On-Site Inspection
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
