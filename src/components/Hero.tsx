import { Phone, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1280&fm=webp&q=75)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* MAIN SEO HEADING */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Broward & Palm Beach Roofing Contractor
          <span className="block text-red-500 mt-2">
            All Phase Construction USA
          </span>
        </h1>

        {/* LICENSE LINE (bigger text than before) */}
        <p className="text-sm md:text-base text-neutral-300 tracking-wide mb-4">
          FL Licenses: CGC1526236 • CCC1331464 • Dual Licensed GC + Roofing Contractor
        </p>

        {/* SUBHEADLINE */}
        <p className="text-lg md:text-2xl mb-10 text-neutral-200 max-w-3xl mx-auto leading-relaxed">
          All Phase Construction USA installs code-compliant roofing systems for Broward and Palm Beach Counties, with a strong focus on Boca Raton and the surrounding coastal communities.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">

          {/* Primary CTA */}
          <a
            href="#contact"
            className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold
                       hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Roof Assessment
          </a>

          {/* Call button */}
          <a
            href="tel:754-227-5605"
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20
                       text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
          >
            Call Now: 754-227-5605
          </a>
        </div>

        {/* CONTACT ROW */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg font-medium">

          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone className="w-6 h-6 text-red-500" />
            <a
              href="tel:754-227-5605"
              className="hover:text-red-400 transition-colors"
            >
              754-227-5605
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail className="w-6 h-6 text-red-500" />
            <a
              href="mailto:info@allphaseusa.com"
              className="hover:text-red-400 transition-colors"
            >
              info@allphaseusa.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
