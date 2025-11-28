import { Shield, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function DualLicensedAdvantageSection() {
  return (
    <div className="mb-8">
      <hr className="border-neutral-700 my-8" />

      <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-3 bg-black/50 border border-red-500/50 rounded-full px-6 py-3">
            <Shield className="w-6 h-6 text-red-500" />
            <div className="text-center">
              <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                Dual Licensed for Roofing + Structural Work
              </p>
              <p className="text-sm text-red-500 font-bold">
                CGC1526236 • CCC1331464
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          Why Choosing a Dual-Licensed Contractor (CGC + CCC) Saves You Money & Protects Your Home
        </h2>

        <div className="space-y-6">
          <div className="bg-black/40 rounded-xl p-6 border border-neutral-700">
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              Most roofing companies in South Florida only hold a standard roofing license (CCC).
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              All Phase Construction USA is <strong className="text-white">DUAL licensed</strong> as both:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300">
                  <strong className="text-white">Certified General Contractor (CGC1526236)</strong>
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300">
                  <strong className="text-white">Certified Roofing Contractor (CCC1331464)</strong>
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-black/40 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-bold text-white mb-4">
              Why This Matters for Your Roof
            </h3>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Your roof is part of your home's <strong className="text-white">structural load path</strong>, and only a dual-licensed contractor can legally and properly upgrade:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Roof-to-wall connections</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Hurricane strap upgrades</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Deck-to-beam reinforcement</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Soffit, fascia & structural framing repairs</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Structural corrections required by HVHZ codes</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Load-path continuity improvements</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Required structural modifications during re-roofing</span>
              </li>
            </ul>
          </div>

          <div className="bg-black/40 rounded-xl p-6 border border-yellow-500/30">
            <div className="flex items-start space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
              <h3 className="text-xl font-bold text-white">
                If a Contractor Only Has a Roofing License:
              </h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">They cannot legally perform structural upgrades</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">They must subcontract structural work (delays, upcharges)</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Some skip structural corrections entirely</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">They risk failed inspections</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">You may lose wind-mitigation credits</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">•</span>
                <span className="text-neutral-300">Insurance companies may not honor certain roof improvements</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-green-700/10 border-2 border-green-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">
              Because All Phase Construction USA Handles Both Roofing and Structural Upgrades In-House:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300">Faster permitting & quicker project completion</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300">Correct load-path and HVHZ compliance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300">Fewer change orders</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300">Proper hurricane protections</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300">Maximized wind-mitigation insurance credits</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300">Long-term stability and better storm performance</span>
              </li>
            </ul>
          </div>

          <div className="bg-black/60 rounded-xl p-6 border-2 border-red-500/50 text-center">
            <p className="text-xl text-white font-semibold leading-relaxed">
              Your new roof performs better, lasts longer, <span className="text-red-500">AND often costs less over time</span> thanks to insurance and energy savings.
            </p>
          </div>
        </div>
      </div>

      <hr className="border-neutral-700 my-8" />
    </div>
  );
}
