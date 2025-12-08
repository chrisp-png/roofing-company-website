import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Ready to start your roofing project? Contact All Phase Construction USA for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Contact All Phase Construction USA today for a free roof assessment. We'll provide you with a detailed evaluation and transparent pricing.
              </p>
              <div className="space-y-4">
                <a
                  href="/contact"
                  className="block w-full px-8 py-4 bg-red-600 text-white text-center rounded-lg font-semibold hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Request Free Roof Assessment
                </a>
                <a
                  href="tel:754-227-5605"
                  className="block w-full px-8 py-4 border-2 border-white text-white text-center rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
                >
                  Call Now: 754-227-5605
                </a>
              </div>
            </div>

            <div className="bg-black border border-neutral-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Why Choose All Phase Construction USA?
              </h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✓</span>
                  <span>Dual licensed General Contractor & Roofing Contractor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✓</span>
                  <span>HVHZ Florida Building Code compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✓</span>
                  <span>Manufacturer-certified installations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✓</span>
                  <span>Comprehensive warranties on all work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✓</span>
                  <span>Serving Broward & Palm Beach Counties</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Phone</div>
                    <a href="tel:754-227-5605" className="text-neutral-300 hover:text-white transition-colors duration-200">754-227-5605</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <a href="mailto:leads@allphaseusa.com" className="text-neutral-300 hover:text-white transition-colors duration-200">leads@allphaseusa.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Address</div>
                    <div className="text-neutral-300">
                      590 Goolsby Blvd<br />
                      Deerfield Beach, FL 33442
                    </div>
                    <div className="text-[10px] text-neutral-400 mt-2">
                      FL Licenses: CGC1526236 • CCC1331464
                    </div>
                    <a
                      href="https://maps.apple.com/?address=590%20Goolsby%20Blvd,%20Deerfield%20Beach,%20FL%2033442"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors duration-200 text-sm font-medium"
                    >
                      Open in Apple Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Hours</div>
                    <div className="text-neutral-300">
                      Mon - Fri: 7:00 AM - 6:00 PM<br />
                      Sat: 8:00 AM - 4:00 PM<br />
                      Sun: Emergency Only
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                All Phase Construction USA
              </h3>
              <p className="mb-6 leading-relaxed">
                24/7 Emergency Service Available. Roof emergency? We're here to help any time of day or night.
              </p>
              <a
                href="tel:754-227-5605"
                className="inline-block px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-neutral-100 transition-all duration-300"
              >
                Call All Phase: 754-227-5605
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg border border-slate-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.6823846785637!2d-80.12666552395098!3d26.319726977030663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d903b93e8dd7b5%3A0x7c0e3c3e8e2e3e3e!2s590%20Goolsby%20Blvd%2C%20Deerfield%20Beach%2C%20FL%2033442!5e0!3m2!1sen!2sus!4v1234567890123"
              allowFullScreen
              loading="lazy"
              className="w-full h-full border-0 grayscale"
              title="AllPhaseUSA Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
