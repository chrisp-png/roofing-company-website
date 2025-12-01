import { useState } from 'react';
import { Download, CheckCircle, Circle } from 'lucide-react';

const checklistItems = [
  "Are you a Certified Roofing Contractor AND a Certified General Contractor?",
  "Will you pull permits and handle all official inspections?",
  "What exact underlayment system will be used, and is it stated in the contract?",
  "Shingle roofs: Which manufacturer do you use and what is your certification level?",
  "Metal roofs: Is this a mechanically seamed, high-wind-rated system?",
  "Do your crews specialize in the roofing system you're installing?",
  "What specialized equipment do you use to protect my property?",
  "How will you protect landscaping, driveways, pools, and outdoor spaces?",
  "Will I get live photo documentation during the installation?",
  "Who will be my dedicated point of contact?",
  "Will you provide the wind-mitigation inspection at completion?",
  "Can I speak with recent customers or see recent jobs in my city?",
  "Do you offer financing, and through which lenders?",
  "How do you handle change orders for rotten or termite-damaged wood?",
  "Will you clean up daily, not just at the end of the job?",
  "If weather changes suddenly, what is your plan to tarp or protect the roof?",
  "Will you help organize documentation for insurance renewals or claims?",
  "What exactly does your workmanship warranty cover, and for how long?",
  "Tile roofs: Which foam manufacturer and foam patty size will be used?",
  "Will the permit, contract, and installation photos all match the specified foam system?",
  "Do you offer upgraded protection in vulnerable areas (eaves, valleys, rakes)?",
  "Will you inspect and replace flashings—including cutting/re-stuccoing if needed?",
  "If you replace fascia or trim, will you paint it to match?",
  "Do you evaluate attic ventilation and offer options to improve airflow?",
  "Do you explain insurance and energy-savings benefits in writing?",
  "Will you provide a clear written scope of work for the entire project?",
  "Are your crews covered by workers' compensation and is your company fully insured?",
  "How long have you operated under this exact business name and license?",
  "Do you offer good/better/best options so I can compare?",
  "Do you offer enhanced roof system upgrades—not just the minimum code requirement?"
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
          contractor. Only hire roofers who meet at least <strong className="text-white">20 out of 30</strong>
          {' '}of these standards. This is an educational resource created by All Phase
          Construction USA to protect homeowners.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <a
            href="/ultimate-roof-buyers-guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download the Ultimate Roof Buyer's Guide (PDF)
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
          <strong className="text-white"> at least 20 out of 30 items.</strong>
          {' '}If they meet fewer than 20, they are not fully equipped for HVHZ roofing.
          {' '}If they meet fewer than <strong className="text-white">15</strong>, walk away immediately.
        </p>
      </div>

      <p className="text-neutral-400 mt-8 italic text-center">
        At All Phase Construction USA, we meet all 30 standards on every project.
      </p>
    </section>
  );
}
