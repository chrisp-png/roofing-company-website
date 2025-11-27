import { Phone, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          All Phase Construction USA
          <span className="block text-red-500">Professional Roofing Solutions</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          All Phase Construction USA installs code-compliant roofing systems for Broward and Palm Beach Counties from our office in Deerfield Beach, FL.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#contact"
            className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Free Quote
          </a>
          <a
            href="tel:754-227-5605"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
          >
            Call Now
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-red-500" />
            <a href="tel:754-227-5605" className="hover:text-red-500 transition-colors duration-200">754-227-5605</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-red-500" />
            <a href="https://www.AllPhaseUSA.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-200">www.AllPhaseUSA.com</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
