import { useState } from 'react';
import { Download, CheckCircle, Circle } from 'lucide-react';

const checklistItems = [
  "Are you both a Certified Roofing Contractor and a Certified General Contractor?",
  "Will you pull permits and handle all official inspections?",
  "What EXACT underlayment system will be used, and is it stated in the contract?",
  "Shingle Roofs: Which manufacturer do you use and what is your certification level?",
  "Metal Roofs: Is this a mechanically seamed, high-wind–rated system?",
  "What specialized equipment do you use to protect my property?",
  "How will you protect landscaping, driveway, patio, and pool areas?",
  "Will I get live photo documentation during installation?",
  "Who is my dedicated point of contact during the project?",
  "Do you provide the wind-mitigation inspection at completion?",
  "Can I speak to recent clients or see local projects?",
  "Do your crews specialize in the roof type being installed?",
  "Do you offer financing through vetted lenders?",
  "How do you handle change orders for rotten or damaged wood?",
  "Do you clean up daily (not just at the end)?",
  "Will you tarp the roof immediately if weather changes?",
  "Do you assist with insurance documentation for future claims?",
  "What EXACTLY does your workmanship warranty cover?",
  "Tile Roofs: Which foam manufacturer + paddy size will be used (contract, permit & photos match)?",
  "Do you offer upgraded protection in vulnerable areas (eaves, valleys, rakes)?",
  "Flashings: Will you inspect & replace old flashings including stucco cutouts?",
  "If fascia is replaced, do you paint it to match so the roof looks finished?"
];

export default function RoofBuyersChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <section className="bg-black border border-neutral-800 rounded-2xl p-8 mt-12">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">
          Bonus: The Ultimate Roof Buyer's Checklist
        </h2>
        <p className="text-neutral-300 mb-6 max-w-3xl leading-relaxed">
          A South Florida homeowner's guide to hiring a trustworthy roofing
          contractor. Only hire roofers who meet at least <strong className="text-white">20 out of 22</strong>
          {' '}of these standards. This is an educational resource created by All Phase
          Construction USA to protect homeowners.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <a
            href="/roof-buyers-checklist.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Your Roof Buyer's Checklist (PDF)
          </a>

          {checkedCount > 0 && (
            <div className="text-neutral-400">
              <span className="font-semibold text-white">{checkedCount}</span> of {checklistItems.length} items checked
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {checklistItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => toggleItem(idx)}
            className="flex items-start gap-3 p-4 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
          >
            {checkedItems[idx] ? (
              <CheckCircle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />
            ) : (
              <Circle className="w-6 h-6 text-neutral-600 mt-0.5 flex-shrink-0" />
            )}
            <p className={`leading-snug transition-colors ${
              checkedItems[idx] ? 'text-neutral-400 line-through' : 'text-neutral-200'
            }`}>
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 mt-8">
        <h3 className="text-2xl font-bold text-white mb-3">
          How to Use This Checklist
        </h3>
        <p className="text-neutral-300 leading-relaxed">
          A qualified South Florida roofing contractor should confidently meet
          <strong className="text-white"> at least 20 out of 22 items.</strong>
          {' '}If they meet fewer than 20, they are not fully equipped for HVHZ roofing.
          {' '}If they meet fewer than <strong className="text-white">15</strong>, walk away immediately.
        </p>
      </div>

      <p className="text-neutral-400 mt-8 italic text-center">
        At All Phase Construction USA, we meet all 22 standards on every project.
      </p>
    </section>
  );
}
