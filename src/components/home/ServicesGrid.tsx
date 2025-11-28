import { Link } from 'react-router-dom';
import { Home, Building2, Wrench, Shield } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      icon: Home,
      title: 'Residential Roofing',
      description: 'Complete roof replacement and installation for single-family homes. Shingle, tile, metal, and flat roofing systems.',
      link: '/residential-roofing',
    },
    {
      icon: Building2,
      title: 'Commercial & HOA Roofing',
      description: 'Large-scale roofing projects for condominiums, HOAs, and commercial properties throughout South Florida.',
      link: '/commercial-roofing',
    },
    {
      icon: Wrench,
      title: 'Emergency Repairs',
      description: 'Fast response for storm damage, leaks, and urgent roofing repairs. Available 24/7 for emergency situations.',
      link: '/contact',
    },
    {
      icon: Shield,
      title: 'Wind Mitigation & Insurance Savings',
      description: 'Form 1802 inspections and hurricane upgrades to reduce your Florida homeowners insurance premiums by $500-$6,500/year.',
      link: '/wind-mitigation',
    },
  ];

  return (
    <section className="py-20 bg-black border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive roofing solutions for residential and commercial properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className="group bg-neutral-950 border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center group-hover:bg-red-600/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-red-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
