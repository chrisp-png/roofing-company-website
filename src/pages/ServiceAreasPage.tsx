import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { MapPin, Phone, Calculator } from 'lucide-react';

const cities = [
  { name: 'Boca Raton', slug: 'boca-raton' },
  { name: 'Delray Beach', slug: 'delray-beach' },
  { name: 'Deerfield Beach', slug: 'deerfield-beach' },
  { name: 'Coral Springs', slug: 'coral-springs' },
  { name: 'Coconut Creek', slug: 'coconut-creek' },
  { name: 'Pompano Beach', slug: 'pompano-beach' },
  { name: 'Lighthouse Point', slug: 'lighthouse-point' },
  { name: 'Parkland', slug: 'parkland' },
  { name: 'Margate', slug: 'margate' },
  { name: 'Tamarac', slug: 'tamarac' },
  { name: 'Boynton Beach', slug: 'boynton-beach' },
  { name: 'Fort Lauderdale', slug: 'fort-lauderdale' },
  { name: 'Lauderdale-by-the-Sea', slug: 'lauderdale-by-the-sea' },
  { name: 'Highland Beach', slug: 'highland-beach' },
  { name: 'Wilton Manors', slug: 'wilton-manors' },
  { name: 'Sunrise', slug: 'sunrise' },
  { name: 'Plantation', slug: 'plantation' },
  { name: 'Oakland Park', slug: 'oakland-park' },
  { name: 'Hillsboro Beach', slug: 'hillsboro-beach' },
  { name: 'Weston', slug: 'weston' },
];

export default function ServiceAreasPage() {
  return (
    <Layout>
      <SEO
        title="South Florida Roofing Service Areas | Broward & Palm Beach Counties"
        description="All Phase Construction USA serves 20+ cities across Broward and Palm Beach Counties. Expert roofing contractor for residential and commercial properties."
        canonicalUrl="/service-areas"
      />

      <div className="min-h-screen bg-black pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              South Florida Roofing Service Areas
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              All Phase Construction USA proudly serves homeowners and businesses throughout Broward and Palm Beach Counties. Our licensed roofing contractors provide expert roof replacement, repair, and maintenance services across South Florida.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {cities.map((city) => (
              <Link
                key={city.slug}
                to={`/service-areas/${city.slug}`}
                className="group bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 hover:bg-neutral-900 transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-sm text-neutral-400 mt-1">
                      View roofing services
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Get Started Today
              </h2>
              <p className="text-neutral-300 text-center mb-8 text-lg">
                Ready to protect your South Florida property with a new roof? Start with our instant calculator or schedule a free roof assessment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  to="/roof-cost-calculator"
                  className="flex items-center justify-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all"
                >
                  <Calculator className="w-5 h-5" />
                  <span>Try the Roof Cost Calculator</span>
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center justify-center space-x-3 bg-white hover:bg-neutral-100 text-black px-8 py-4 rounded-xl font-semibold transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Schedule Free Assessment</span>
                </Link>
              </div>
              <div className="mt-8 text-center">
                <a
                  href="tel:754-227-5605"
                  className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors"
                >
                  754-227-5605
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
