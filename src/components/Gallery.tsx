const projects = [
  {
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Modern Residential',
    category: 'Residential'
  },
  {
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Commercial Complex',
    category: 'Commercial'
  },
  {
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Luxury Estate',
    category: 'Residential'
  },
  {
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Historic Restoration',
    category: 'Restoration'
  },
  {
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Business Center',
    category: 'Commercial'
  },
  {
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Suburban Home',
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
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
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
