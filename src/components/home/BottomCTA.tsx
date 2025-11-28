import { Link } from 'react-router-dom';

export default function BottomCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-950 to-black border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to See Your Options?
        </h2>
        <p className="text-xl text-neutral-300 mb-10 leading-relaxed">
          Get a professional roof assessment or calculate your project cost instantly
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
          >
            Request Roof Assessment
          </Link>
          <Link
            to="/roof-cost-calculator"
            className="px-8 py-4 border-2 border-red-600 text-red-500 text-lg font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200"
          >
            Roof Cost Calculator
          </Link>
        </div>
      </div>
    </section>
  );
}
