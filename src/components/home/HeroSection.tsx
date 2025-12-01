import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-black min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-red-950/30 z-10"></div>
        <img
          src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1280&fm=webp&q=75"
          srcSet="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=640&fm=webp&q=75 640w,
                  https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1280&fm=webp&q=75 1280w,
                  https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1920&fm=webp&q=75 1920w"
          sizes="100vw"
          alt="Professional roofing"
          className="w-full h-full object-cover opacity-40"
          fetchpriority="high"
          decoding="async"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white block mb-2">
              Broward & Palm Beach Roofing Contractor
            </span>
            <span className="text-red-500 block">
              All Phase Construction USA
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 mb-6 leading-relaxed">
            All Phase Construction USA installs code-compliant roofing systems for Broward and Palm Beach Counties, with a strong focus on Boca Raton and the surrounding coastal communities.
          </p>

          <p className="text-sm md:text-base text-neutral-400 mb-8 font-medium mt-2">
            CGC1526236 • CCC1331464 • Dual Licensed GC + Roofing Contractor
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link
              to="/contact"
              className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 text-center shadow-lg shadow-red-900/50"
            >
              Schedule a Roof Assessment
            </Link>

            <a
              href="tel:7542275605"
              className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200 text-center"
            >
              Call Now: 754-227-5605
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-sm text-neutral-400">
            <a href="tel:7542275605" className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <Phone className="w-4 h-4" />
              754-227-5605
            </a>
            <a href="mailto:info@allphaseusa.com" className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <Mail className="w-4 h-4" />
              info@allphaseusa.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
