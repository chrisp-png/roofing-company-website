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
            <div className="mb-4 text-sm text-neutral-300">
              Your message will be sent to <a href="mailto:leads@allphaseusa.com" className="text-red-500 hover:text-red-400 transition-colors duration-200">leads@allphaseusa.com</a> and a team member from All Phase Construction USA will follow up with you promptly.
            </div>
            <form action="mailto:leads@allphaseusa.com" method="POST" encType="text/plain" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-white mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                >
                  <option>Select a service</option>
                  <option>Residential Roofing</option>
                  <option>Commercial Roofing</option>
                  <option>Roof Repair</option>
                  <option>Maintenance</option>
                  <option>Emergency Service</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Request Consultation with All Phase
              </button>
            </form>
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
