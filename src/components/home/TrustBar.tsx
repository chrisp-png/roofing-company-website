export default function TrustBar() {
  const stats = [
    { label: '25+ Years Experience', value: '25+' },
    { label: '5,000+ Roofs Installed', value: '5,000+' },
    { label: 'A+ BBB Rating', value: 'A+' },
    { label: '$2M Liability Insurance', value: '$2M' },
  ];

  return (
    <section className="py-12 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
