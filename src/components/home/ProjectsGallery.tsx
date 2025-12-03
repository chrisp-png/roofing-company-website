import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function ProjectsGallery() {
  const projects = [
    {
      city: 'Boca Raton',
      image: '/images/projects/Clay tile drone shot-Boca Raton.JPG',
      description: 'Complete tile roof replacement with hurricane upgrade package',
    },
    {
      city: 'Delray Beach',
      image: '/images/projects/Standing seam metal roof.jpg',
      description: 'Luxury estate metal roofing system installation',
    },
    {
      city: 'Fort Lauderdale',
      image: '/images/projects/Ttorch applied base sheet.jpg',
      description: 'Commercial flat roof replacement and coating',
    },
    {
      city: 'West Palm Beach',
      image: '/images/projects/Charcoal Gray standing seam metal roof.jpg',
      description: 'Architectural shingle roof with wind mitigation upgrades',
    },
    {
      city: 'Coral Springs',
      image: '/images/projects/Tile roof loaded and ready for install.JPG',
      description: 'HOA multi-building roof replacement project',
    },
    {
      city: 'Pompano Beach',
      image: '/images/projects/Tile install in progress.JPG',
      description: 'Residential concrete tile roof installation',
    },
  ];

  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            See our completed roofing projects across South Florida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-black border border-neutral-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={`All Phase Construction USA ${project.description} in ${project.city}, Florida`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width="500"
                  height="256"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-red-500 mb-2">
                  <MapPin className="w-4 h-4" />
                  <h3 className="text-lg font-bold">{project.city}</h3>
                </div>
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <Link
                  to="/projects"
                  className="text-red-500 text-sm font-semibold hover:text-red-400 transition-colors inline-flex items-center gap-2"
                >
                  View Details
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors duration-200"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
