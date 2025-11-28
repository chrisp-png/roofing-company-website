import { useParams, Navigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Schema from '../components/Schema';
import { cityData } from '../data/cityContent';
import { Phone, MapPin, Calculator, FileText, Building2, Home, Mail } from 'lucide-react';

export default function ServiceAreaDetailPage() {
  const { city } = useParams<{ city: string }>();
  const cityInfo = cityData.find((c) => c.slug === city);

  if (!cityInfo) {
    return <Navigate to="/service-areas" replace />;
  }

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'All Phase Construction USA',
    image: 'https://allphaseconstructionusa.com/logo.png',
    '@id': 'https://allphaseconstructionusa.com',
    url: `https://allphaseconstructionusa.com/service-areas/${cityInfo.slug}`,
    telephone: '754-227-5605',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '590 Goolsby Blvd',
      addressLocality: 'Deerfield Beach',
      addressRegion: 'FL',
      postalCode: '33442',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.3184,
      longitude: -80.0998,
    },
    areaServed: {
      '@type': 'City',
      name: cityInfo.name,
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  };

  return (
    <Layout>
      <SEO
        title={`${cityInfo.name} Roofing Contractor | All Phase Construction USA`}
        description={`Expert roofing contractor serving ${cityInfo.name}, FL. Tile, metal, shingle & flat roofing. HVHZ compliant. Wind mitigation specialists. Licensed & insured.`}
        canonicalUrl={`/service-areas/${cityInfo.slug}`}
      />
      <Schema data={schemaData} />

      <div className="min-h-screen bg-black pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              to="/service-areas"
              className="text-red-500 hover:text-red-400 font-semibold flex items-center space-x-2"
            >
              <span>←</span>
              <span>Back to Service Areas</span>
            </Link>
          </div>

          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="w-8 h-8 text-red-500" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Roofing Contractor in {cityInfo.name}
              </h1>
            </div>
            <p className="text-xl text-neutral-400">
              Expert Roofing Services in {cityInfo.name}, Florida
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-neutral-400">Call Us Today</p>
                  <a
                    href="tel:754-227-5605"
                    className="text-xl font-bold text-white hover:text-red-500 transition-colors"
                  >
                    754-227-5605
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-neutral-400">Our Location</p>
                  <p className="text-white">590 Goolsby Blvd</p>
                  <p className="text-white">Deerfield Beach, FL 33442</p>
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Roof Replacement & Roof Repair in {cityInfo.name}
            </h2>
            {cityInfo.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-neutral-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Tile, Metal, Shingle & Flat Roofing Experts
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              All Phase Construction USA installs and repairs all major roofing systems throughout {cityInfo.name}:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">
                  <strong className="text-white">Concrete & Clay Tile Roofing</strong> – Barrel tile, flat tile, and S-tile profiles with premium foam adhesive attachment
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">
                  <strong className="text-white">Metal Roofing Systems</strong> – Standing seam, R-panel, and architectural metal roofing
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">
                  <strong className="text-white">Architectural Shingles</strong> – Premium dimensional shingles with enhanced wind ratings
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">
                  <strong className="text-white">Flat Roofing</strong> – TPO, modified bitumen, and built-up systems for commercial properties
                </span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              HVHZ Code Compliance for {cityInfo.name}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              {cityInfo.name} properties require roofing systems that meet Florida's stringent High Velocity Hurricane Zone building codes. Our installations exceed these requirements through:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Premium foam adhesive attachment for tile roofs</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Self-adhered underlayment (SWR) for secondary water protection</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Enhanced fastening schedules for all roofing materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Proper roof-to-wall connections and deck attachment</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Complete permitting and inspections through local building departments</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Wind Mitigation & Insurance Savings in {cityInfo.name}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              {cityInfo.name} homeowners can reduce annual insurance costs by $2,000-$3,000 or more through proper wind mitigation features. Our roof installations include all qualifying features:
            </p>
            <div className="bg-black border border-green-500/30 rounded-xl p-6 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-neutral-300">Secondary Water Resistance (SWR) underlayment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-neutral-300">Code-compliant roof deck attachment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-neutral-300">Proper roof-to-wall connections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-neutral-300">Sealed roof deck (when applicable)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-neutral-300">Opening protection (impact-resistant features)</span>
                </li>
              </ul>
            </div>
            <p className="text-neutral-300 leading-relaxed mb-6">
              We document all wind mitigation features photographically and coordinate with certified inspectors to complete your wind mitigation report. Learn more about{' '}
              <Link to="/wind-mitigation" className="text-red-500 hover:text-red-400 font-semibold">
                wind mitigation and insurance savings
              </Link>
              .
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              How Much Does a Roof Cost in {cityInfo.name}?
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Roof replacement costs in {cityInfo.name} typically range from $12-$24 per square foot installed, depending on:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Roofing material selected (tile, metal, shingle, or flat)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Roof size, pitch, and complexity</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Underlayment and attachment method</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Required code upgrades and structural repairs</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Access, staging, and site-specific factors</span>
              </li>
            </ul>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Use our{' '}
              <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 font-semibold">
                Roof Cost Calculator
              </Link>{' '}
              to get an instant ballpark estimate for your {cityInfo.name} property. For a detailed quote, schedule a free roof assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <Link
              to="/residential"
              className="flex items-center space-x-3 bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 hover:border-red-500/50 rounded-xl p-6 transition-all"
            >
              <Home className="w-8 h-8 text-red-500" />
              <div>
                <h3 className="text-lg font-bold text-white">Residential Roofing</h3>
                <p className="text-sm text-neutral-400">Home roofing services</p>
              </div>
            </Link>
            <Link
              to="/commercial"
              className="flex items-center space-x-3 bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 hover:border-red-500/50 rounded-xl p-6 transition-all"
            >
              <Building2 className="w-8 h-8 text-red-500" />
              <div>
                <h3 className="text-lg font-bold text-white">Commercial Roofing</h3>
                <p className="text-sm text-neutral-400">Business roofing services</p>
              </div>
            </Link>
          </div>

          <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-neutral-300 text-lg">
                Schedule your free roof assessment or get an instant cost estimate for your {cityInfo.name} property.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Link
                to="/roof-cost-calculator"
                className="flex items-center justify-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all"
              >
                <Calculator className="w-5 h-5" />
                <span>Get a Roof Cost Estimate</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center space-x-3 bg-white hover:bg-neutral-100 text-black px-8 py-4 rounded-xl font-semibold transition-all"
              >
                <Mail className="w-5 h-5" />
                <span>Schedule Roof Inspection</span>
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4 pt-6 border-t border-neutral-700">
              <a
                href="tel:754-227-5605"
                className="text-3xl font-bold text-red-500 hover:text-red-400 transition-colors"
              >
                754-227-5605
              </a>
              <div className="text-center">
                <p className="text-neutral-300">590 Goolsby Blvd</p>
                <p className="text-neutral-300">Deerfield Beach, FL 33442</p>
              </div>
            </div>
          </div>

          {cityInfo.neighborhoods.length > 0 && (
            <div className="mt-12 p-6 bg-neutral-950 border border-neutral-800 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                Serving {cityInfo.name} Communities Including:
              </h3>
              <div className="flex flex-wrap gap-3">
                {cityInfo.neighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="px-4 py-2 bg-black border border-neutral-700 rounded-lg text-neutral-300 text-sm"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
