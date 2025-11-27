import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Excellent service from start to finish. The team was professional, efficient, and the quality of work exceeded our expectations. Our new roof looks fantastic!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'We needed emergency repairs after a storm, and they responded within hours. The repair work was top-notch and reasonably priced. Highly recommend!',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Property Manager',
    content: 'We use them for all our commercial properties. Reliable, professional, and always deliver quality work on time and within budget.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
                ))}
              </div>
              <p className="text-neutral-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-neutral-200 pt-4">
                <div className="font-bold text-neutral-900">{testimonial.name}</div>
                <div className="text-sm text-neutral-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
