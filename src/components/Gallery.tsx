const projects = [
  {
    image: '/images/projects/Charcoal Gray standing seam metal roof.jpg',
    title: 'Modern Residential',
    category: 'Residential'
  },
  {
    image: '/images/projects/Torch applying cap sheet.jpg',
    title: 'Commercial Complex',
    category: 'Commercial'
  },
  {
    image: '/images/projects/Clay tile drone shot-Boca Raton.JPG',
    title: 'Luxury Estate',
    category: 'Residential'
  },
  {
    image: '/images/projects/clay tile install2- Boca Raton.JPG',
    title: 'Tile Roof Install',
    category: 'Residential'
  },
  {
    image: '/images/projects/Working on single ply roof.JPG',
    title: 'Business Center',
    category: 'Commercial'
  },
  {
    image: '/images/projects/Standing seam metal roof.jpg',
    title: 'Metal Roof Home',
    category: 'Residential'
  }
]

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Work
        </h2>
        <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          See the quality and craftsmanship in our completed projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
          >
            <img
              src={project.image}
              alt={`All Phase Construction USA ${project.category} roofing project - ${project.title} in South Florida`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              width="500"
              height="375"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-neutral-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="text-sm font-semibold text-red-500 mb-2">
                {project.category}
              </div>
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
