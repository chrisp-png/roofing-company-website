import { Home, Building2, Wrench, Shield } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Quality roofing solutions for homes, from repairs to complete replacements with premium materials.',
    features: ['New Installations', 'Roof Repairs', 'Inspections', 'Emergency Services']
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Comprehensive roofing services for businesses and commercial properties of all sizes.',
    features: ['Flat Roofing', 'Metal Roofing', 'Maintenance Plans', 'Storm Damage']
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast and reliable repairs to keep your roof in excellent condition and prevent further damage.',
    features: ['Leak Repairs', 'Shingle Replacement', 'Flashing Repair', '24/7 Emergency']
  },
  {
    icon: Shield,
    title: 'Maintenance',
    description: 'Regular maintenance services to extend your roof\'s lifespan and catch issues early.',
    features: ['Annual Inspections', 'Gutter Cleaning', 'Preventive Care', 'Warranty Work']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive roofing solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-neutral-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-neutral-200"
              >
                <div className="bg-red-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-md">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-neutral-700">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-red-500/40 bg-red-900/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-neutral-700 text-sm sm:text-base">
            Ready to get started with professional roofing services? Schedule your free assessment.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors duration-200 whitespace-nowrap"
          >
            Book On-Site Appointment
          </a>
        </div>
      </div>
    </section>
  )
}
