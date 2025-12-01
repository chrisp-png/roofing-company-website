import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'All Phase Construction replaced our entire tile roof in Boca Raton. The crew was professional, the work was meticulous, and they completed everything on schedule. Our insurance premium dropped by over $3,000 after the wind mitigation inspection!',
      name: 'Michael R.',
      city: 'Boca Raton',
      rating: 5,
    },
    {
      quote: 'We hired All Phase for our HOA building in Delray Beach. They coordinated everything perfectly, kept residents informed, and the new roof looks fantastic. Highly recommend their commercial roofing services.',
      name: 'Jennifer L.',
      city: 'Delray Beach',
      rating: 5,
    },
    {
      quote: 'After Hurricane season, we needed emergency repairs fast. All Phase came out the same day, provided a fair quote, and had our roof watertight within 48 hours. Great communication and quality work.',
      name: 'David S.',
      city: 'Fort Lauderdale',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-black border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Real reviews from satisfied customers across South Florida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
                ))}
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-neutral-800 pt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-neutral-400 text-sm">{testimonial.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
