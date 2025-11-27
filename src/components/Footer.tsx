import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-500">
              RoofingPro
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Professional roofing solutions for over 25 years. Quality workmanship and reliable service.
            </p>
            <div className="text-slate-400 text-sm">
              590 Goolsby Blvd<br />
              Deerfield Beach, FL
            </div>
            <a
              href="https://maps.apple.com/?q=590+Goolsby+Blvd+Deerfield+Beach+FL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-700 transition-colors duration-200 text-sm inline-block mt-2"
            >
              Open in Apple Maps
            </a>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-amber-500 transition-colors duration-200">Residential Roofing</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors duration-200">Commercial Roofing</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors duration-200">Roof Repair</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors duration-200">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-amber-500 transition-colors duration-200">About Us</a></li>
              <li><a href="#gallery" className="hover:text-amber-500 transition-colors duration-200">Our Work</a></li>
              <li><a href="#testimonials" className="hover:text-amber-500 transition-colors duration-200">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} RoofingPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
