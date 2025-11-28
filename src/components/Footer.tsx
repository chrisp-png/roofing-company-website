import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-500">
              All Phase Construction USA, LLC
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Professional roofing and general contracting solutions. Code-compliant HVHZ roofing systems for Broward and Palm Beach Counties.
            </p>
            <div className="text-neutral-400 text-sm space-y-1">
              <div>590 Goolsby Blvd</div>
              <div>Deerfield Beach, FL 33442</div>
              <div className="pt-2">
                <a href="tel:754-227-5605" className="hover:text-white transition-colors duration-200">Phone: 754-227-5605</a>
              </div>
              <div>
                <a href="mailto:leads@allphaseusa.com" className="hover:text-white transition-colors duration-200">Email: leads@allphaseusa.com</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#services" className="hover:text-red-500 transition-colors duration-200">Residential Roofing</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors duration-200">Commercial Roofing</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors duration-200">Roof Repair</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors duration-200">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Service Areas</h4>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li><a href="/locations/boca-raton-roofing.html" className="hover:text-red-500 transition-colors duration-200">Boca Raton</a></li>
              <li><a href="/locations/delray-beach-roofing.html" className="hover:text-red-500 transition-colors duration-200">Delray Beach</a></li>
              <li><a href="/locations/fort-lauderdale-roofing.html" className="hover:text-red-500 transition-colors duration-200">Fort Lauderdale</a></li>
              <li><a href="/locations/west-palm-beach-roofing.html" className="hover:text-red-500 transition-colors duration-200">West Palm Beach</a></li>
              <li><a href="/locations/pompano-beach-roofing.html" className="hover:text-red-500 transition-colors duration-200">Pompano Beach</a></li>
              <li><a href="#service-areas" className="hover:text-red-500 transition-colors duration-200">View All Cities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="bg-neutral-900 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-neutral-900 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-neutral-900 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-neutral-900 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} All Phase Construction USA, LLC. All rights reserved.</p>
          <p className="text-[10px] text-neutral-500 mt-2">Licensed in Florida: CGC1526236 • CCC1331464</p>
        </div>
      </div>
    </footer>
  )
}
