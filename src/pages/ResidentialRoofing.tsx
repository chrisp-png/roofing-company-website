import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Contact from '../components/Contact';

export default function ResidentialRoofing() {
  return (
    <>
      <SEO
        title="Residential Roofing Services | All Phase Construction USA"
        description="Professional residential roofing services for South Florida homeowners. Tile, metal, shingle, and flat roof installations. Licensed CGC1526236, CCC1331464."
        canonical="https://www.allphaseusa.com/residential-roofing"
      />

      <section className="relative pt-32 pb-20 bg-black text-white">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&fm=webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Residential Roofing for South Florida Homeowners
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
            Roof replacements and repairs designed for single-family homes, townhomes, and villas.
          </p>
        </div>
      </section>

      <section className="py-20 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-4xl mx-auto">
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              Your home is your biggest investment. We help homeowners select the right roofing system based on
              budget, curb appeal, HOA requirements, and long-term protection. Our team installs tile, metal,
              shingle, and flat roofs built to withstand South Florida's HVHZ conditions.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              We work cleanly and professionally — protecting driveways, landscaping, and outdoor areas while keeping
              your property safe and organized throughout the project.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              If your neighborhood or HOA requires approvals, we can assist with documentation and product details so
              your application moves quickly.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Behind the scenes, we handle permitting, engineering when required, inspections, and wind-mitigation
              documentation to help homeowners reduce insurance costs and avoid paperwork headaches.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Residential Roofing Systems We Install
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Tile Roofing</h3>
              <p className="text-neutral-300 mb-4 leading-relaxed">
                Concrete and clay tile systems offer exceptional durability, energy efficiency, and classic South Florida aesthetics. Perfect for upscale neighborhoods and coastal properties.
              </p>
              <Link to="/roof-types/tile" className="text-red-500 hover:text-red-400 font-semibold">
                Learn More About Tile Roofing →
              </Link>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Metal Roofing</h3>
              <p className="text-neutral-300 mb-4 leading-relaxed">
                Standing seam and mechanically seamed metal roofs provide superior wind resistance, long lifespan, and modern curb appeal. Ideal for coastal areas and energy-conscious homeowners.
              </p>
              <Link to="/roof-types/metal" className="text-red-500 hover:text-red-400 font-semibold">
                Learn More About Metal Roofing →
              </Link>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Shingle Roofing</h3>
              <p className="text-neutral-300 mb-4 leading-relaxed">
                Architectural shingles offer reliable protection at a budget-friendly price point. Available in many colors and styles to match any home design.
              </p>
              <Link to="/roof-types/shingle" className="text-red-500 hover:text-red-400 font-semibold">
                Learn More About Shingle Roofing →
              </Link>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Flat Roofing</h3>
              <p className="text-neutral-300 mb-4 leading-relaxed">
                TPO, PVC, and modified bitumen systems for low-slope residential applications. Common on modern homes, additions, and covered outdoor spaces.
              </p>
              <Link to="/roof-types/flat" className="text-red-500 hover:text-red-400 font-semibold">
                Learn More About Flat Roofing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Homeowners Choose All Phase Construction USA
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-4">25+</div>
              <h3 className="text-xl font-semibold text-white mb-3">Years of Experience</h3>
              <p className="text-neutral-400">Serving South Florida since 1999</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-4">2</div>
              <h3 className="text-xl font-semibold text-white mb-3">State Licenses</h3>
              <p className="text-neutral-400">CGC + CCC dual-licensed contractor</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-4">$2M</div>
              <h3 className="text-xl font-semibold text-white mb-3">Insurance Coverage</h3>
              <p className="text-neutral-400">Full liability protection</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
