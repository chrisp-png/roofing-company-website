import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function FooterNew() {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">
              All Phase Construction USA, LLC
            </h3>
            <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
              Professional roofing and general contracting solutions for Broward and Palm Beach Counties.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-500 transition-colors"
            >
              Schedule Roof Estimate
            </Link>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Information</h4>
            <div className="space-y-2 text-sm text-neutral-300">
              <p>590 Goolsby Blvd</p>
              <p>Deerfield Beach, FL 33442</p>
              <p className="pt-2">
                <a href="tel:754-227-5605" className="text-red-500 hover:text-red-400 transition-colors font-bold text-base">
                  📞 Call: (754) 227-5605
                </a>
              </p>
              <p>
                <a href="mailto:info@allphaseusa.com" className="hover:text-red-500 transition-colors">
                  Email: info@allphaseusa.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Licenses & Service Area</h4>
            <div className="space-y-2 text-sm text-neutral-300">
              <p className="font-bold text-white">FL General Contractor</p>
              <p className="text-red-500 font-semibold">CGC1526236</p>
              <p className="font-bold text-white mt-3">FL Roofing Contractor</p>
              <p className="text-red-500 font-semibold">CCC1331464</p>
              <p className="pt-2">
                Serving Broward & Palm Beach Counties
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-neutral-400 text-sm">
              &copy; {new Date().getFullYear()} All Phase Construction USA, LLC. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-neutral-400 text-sm font-semibold">Follow Us:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/AllPhaseConstructionUsA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 hover:bg-red-600 rounded-full flex items-center justify-center text-neutral-200 hover:text-white transition-all duration-200 shadow-lg hover:shadow-red-900/50"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/all_phase_construction_usa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center text-neutral-200 hover:text-white transition-all duration-200 shadow-lg hover:shadow-pink-900/50"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@allphaseconstructionusa5626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 hover:bg-red-600 rounded-full flex items-center justify-center text-neutral-200 hover:text-white transition-all duration-200 shadow-lg hover:shadow-red-900/50"
                  aria-label="Subscribe on YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@allphaseusa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 hover:bg-black rounded-full flex items-center justify-center text-neutral-200 hover:text-white transition-all duration-200 shadow-lg hover:shadow-neutral-900/50"
                  aria-label="Follow us on TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/all-phase-construction-usa-llc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 hover:bg-blue-700 rounded-full flex items-center justify-center text-neutral-200 hover:text-white transition-all duration-200 shadow-lg hover:shadow-blue-900/50"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
