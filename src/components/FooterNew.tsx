import { Link } from 'react-router-dom';

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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-400 text-sm">
              &copy; {new Date().getFullYear()} All Phase Construction USA, LLC. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="text-neutral-400">Follow us:</span>
              <a
                href="https://www.facebook.com/AllPhaseConstructionUsA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-200 hover:text-red-500 transition-colors"
                aria-label="Follow us on Facebook"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/all_phase_construction_usa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-200 hover:text-red-500 transition-colors"
                aria-label="Follow us on Instagram"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@allphaseconstructionusa5626"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-200 hover:text-red-500 transition-colors"
                aria-label="Subscribe on YouTube"
              >
                YouTube
              </a>
              <a
                href="https://www.linkedin.com/company/all-phase-construction-usa-llc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-200 hover:text-red-500 transition-colors"
                aria-label="Connect on LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
