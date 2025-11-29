import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';

export default function FloatingMobileCTA() {
  return (
    <Link
      to="/roof-cost-calculator"
      className="lg:hidden fixed bottom-4 right-4 z-40 flex items-center gap-2 px-5 py-3 bg-red-600 text-white font-semibold rounded-full shadow-2xl hover:bg-red-500 transition-all duration-300 animate-pulse"
    >
      <Calculator className="w-5 h-5" />
      Get Roof Estimate
    </Link>
  );
}
