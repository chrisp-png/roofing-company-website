import { Shield, Wind, Zap, CheckCircle } from 'lucide-react';

export default function TrustElements() {
  return (
    <div className="mt-8 pt-8 border-t border-neutral-700">
      <h3 className="text-xl font-bold text-white mb-6 text-center">Why Choose All Phase Construction USA</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
          <Shield className="w-6 h-6 text-red-500 flex-shrink-0" />
          <span className="text-neutral-300">Licensed GC + Roofing Contractor</span>
        </div>
        <div className="flex items-center gap-3 bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
          <Wind className="w-6 h-6 text-red-500 flex-shrink-0" />
          <span className="text-neutral-300">HVHZ Code Experts</span>
        </div>
        <div className="flex items-center gap-3 bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
          <Zap className="w-6 h-6 text-red-500 flex-shrink-0" />
          <span className="text-neutral-300">1–3 Day Installations</span>
        </div>
        <div className="flex items-center gap-3 bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
          <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
          <span className="text-neutral-300">Hurricane-Tested Materials</span>
        </div>
      </div>
    </div>
  );
}
