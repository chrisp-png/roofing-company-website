import { Award, Users, Clock, CheckCircle } from 'lucide-react'

const stats = [
  { icon: Award, label: 'Years Experience', value: '25+' },
  { icon: Users, label: 'Happy Clients', value: '5000+' },
  { icon: Clock, label: 'Response Time', value: '24hrs' },
  { icon: CheckCircle, label: 'Success Rate', value: '99%' }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              With over 25 years of experience in the roofing industry, we've built our reputation
              on quality workmanship, reliable service, and customer satisfaction.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our team of certified professionals uses only the highest quality materials and
              follows industry best practices to ensure your roof stands the test of time.
            </p>

            <div className="space-y-4">
              {[
                'Licensed and fully insured',
                'Premium quality materials',
                'Lifetime warranty on workmanship',
                'Free inspections and estimates',
                '24/7 emergency services'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-red-600 w-14 h-14 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-neutral-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-neutral-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
