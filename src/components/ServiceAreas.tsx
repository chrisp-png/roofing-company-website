import React from 'react';

const ServiceAreas: React.FC = () => {
  const areas = [
    { name: 'Boca Raton', href: '/locations/boca-raton-roofing.html' },
    { name: 'Delray Beach', href: '/locations/delray-beach-roofing.html' },
    { name: 'Boynton Beach', href: '/locations/boynton-beach-roofing.html' },
    { name: 'Lake Worth Beach', href: '/locations/lake-worth-beach-roofing.html' },
    { name: 'West Palm Beach', href: '/locations/west-palm-beach-roofing.html' },
    { name: 'Wellington', href: '/locations/wellington-roofing.html' },
    { name: 'Palm Beach Gardens', href: '/locations/palm-beach-gardens-roofing.html' },
    { name: 'Royal Palm Beach', href: '/locations/royal-palm-beach-roofing.html' },
    { name: 'Jupiter', href: '/locations/jupiter-roofing.html' },
    { name: 'Deerfield Beach', href: '/locations/deerfield-beach-roofing.html' },
    { name: 'Pompano Beach', href: '/locations/pompano-beach-roofing.html' },
    { name: 'Coconut Creek', href: '/locations/coconut-creek-roofing.html' },
    { name: 'Coral Springs', href: '/locations/coral-springs-roofing.html' },
    { name: 'Parkland', href: '/locations/parkland-roofing.html' },
    { name: 'Margate', href: '/locations/margate-roofing.html' },
    { name: 'Fort Lauderdale', href: '/locations/fort-lauderdale-roofing.html' },
    { name: 'Plantation', href: '/locations/plantation-roofing.html' },
    { name: 'Davie', href: '/locations/davie-roofing.html' },
    { name: 'Hollywood', href: '/locations/hollywood-roofing.html' },
    { name: 'Sunrise', href: '/locations/sunrise-roofing.html' },
  ];

  return (
    <section id="service-areas" className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Service Areas in Broward & Palm Beach Counties
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Proudly serving homeowners, HOAs, and businesses throughout South Florida
          </p>
        </div>

        {/* Featured City: Boca Raton */}
        <div className="mb-10">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-red-500 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wide rounded-full">Featured City</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Boca Raton Roofing Contractor
            </h3>
            <p className="text-neutral-300 text-center leading-relaxed mb-6">
              Specialized roofing services for Boca Raton's luxury homes, gated communities, HOA associations, and waterfront properties. We understand the unique requirements of coastal estates, architectural review committees, and high-end construction standards that define Boca Raton's premier neighborhoods.
            </p>
            <div className="text-center">
              <a
                href="/locations/boca-raton-roofing.html"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200"
              >
                Learn More About Boca Raton Services
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {areas.map((area) => (
            <a
              key={area.name}
              href={area.href}
              className="block px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-center text-white font-medium hover:border-red-500 hover:bg-neutral-800 transition-all duration-200"
            >
              {area.name}
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-400 text-sm mb-6">
            All Phase Construction USA provides comprehensive roofing services including residential, commercial, HOA/condo, metal, tile, shingle, and flat roofing systems throughout Broward and Palm Beach Counties. All projects are HVHZ-compliant and backed by our dual Florida licenses CGC1526236 and CCC1331464.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200"
          >
            Schedule a Free Roof Assessment
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
