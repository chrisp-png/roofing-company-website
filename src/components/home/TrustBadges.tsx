import { Shield, Award, CheckCircle } from 'lucide-react';

export default function TrustBadges() {
  return (
    <section className="bg-neutral-950 py-8 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center justify-center gap-3 p-4 bg-black border border-neutral-800 rounded-xl">
            <Shield className="w-8 h-8 text-red-500 flex-shrink-0" />
            <div>
              <p className="text-white font-bold text-sm">FL Licenses</p>
              <p className="text-neutral-400 text-xs">CGC1526236 • CCC1331464</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-4 bg-black border border-neutral-800 rounded-xl">
            <Award className="w-8 h-8 text-red-500 flex-shrink-0" />
            <div>
              <p className="text-white font-bold text-sm">Dual Licensed</p>
              <p className="text-neutral-400 text-xs">GC + Roofing Contractor</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-4 bg-black border border-neutral-800 rounded-xl">
            <CheckCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
            <div>
              <p className="text-white font-bold text-sm">HVHZ Experts</p>
              <p className="text-neutral-400 text-xs">Florida Building Code Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
