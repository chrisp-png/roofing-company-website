import { Shield, FileCheck, Home, Zap, MapPin } from 'lucide-react';

export default function WhyChooseBar() {
  const features = [
    { icon: Shield, text: 'Dual Licensed' },
    { icon: FileCheck, text: 'Insurance Experts' },
    { icon: Home, text: 'HOA Friendly' },
    { icon: Zap, text: 'Fast Installations' },
    { icon: MapPin, text: 'Local Company' },
  ];

  return (
    <section className="bg-black py-12 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Why Choose All Phase Construction USA
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-red-500 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-red-500" />
                <p className="text-white font-semibold text-sm text-center">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
