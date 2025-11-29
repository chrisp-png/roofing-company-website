import { useState } from 'react';
import { ChevronDown, ChevronUp, Download } from 'lucide-react';

interface GuideItem {
  number: number;
  question: string;
  explanation: string;
}

const guideItems: GuideItem[] = [
  {
    number: 1,
    question: "Are you a Certified Roofing Contractor AND a Certified General Contractor?",
    explanation: "Roofing contractors who aren't also General Contractors often avoid structural work like stucco cutouts, wall flashings, decks, fascia replacement, or exterior waterproofing. Hiring a dual-licensed contractor ensures your roof system is tied properly into the building envelope—something single-license roofers often aren't qualified to do."
  },
  {
    number: 2,
    question: "Will you pull permits and handle all inspections with the city?",
    explanation: "A legitimate roofing project MUST be permitted. Contractors who ask you to pull the permit yourself—or try to avoid them altogether—are waving a major red flag. Proper permits protect your resale value, insurance compliance, and your home."
  },
  {
    number: 3,
    question: "What exact underlayment system will you be using? Is it written into my contract?",
    explanation: "Underlayment is the true waterproofing. There is a huge difference between cheap 30-lb felt and high-performance systems designed for HVHZ. If the underlayment is vague in your contract, it's one of the biggest places a contractor can cut corners."
  },
  {
    number: 4,
    question: "Shingle Roofs Only: What manufacturer will you be using and what is your certification level with them?",
    explanation: "Higher certifications (Preferred, Master, Select) often come with better warranties and higher standards of installation."
  },
  {
    number: 5,
    question: "Metal Roofs Only: Is this a mechanically seamed metal system?",
    explanation: "Exposed fastener metal roofs are cheaper…but they are NOT designed for the High Velocity Hurricane Zone. Mechanically seamed systems provide superior wind resistance and longevity."
  },
  {
    number: 6,
    question: "What specialized equipment do you use to protect my property?",
    explanation: "The best contractors use equipment like Catch-All systems, driveway protection, magnetic sweepers, tarps, nets, and wall protection to prevent damage to landscaping, driveways, and outdoor areas."
  },
  {
    number: 7,
    question: "How will you protect my landscaping, driveway, pool area, and outdoor living spaces?",
    explanation: "A contractor who doesn't have a written plan for property protection likely won't actually do it."
  },
  {
    number: 8,
    question: "Will I get photos or documentation of the work DURING installation?",
    explanation: "Roofing work is out of sight. The only way to ensure your roof is installed correctly is through real-time documentation."
  },
  {
    number: 9,
    question: "Who will be my dedicated point of contact throughout the project?",
    explanation: "Communication can make or break the customer experience. You should not be chasing random phone numbers or searching for answers."
  },
  {
    number: 10,
    question: "Do you provide the wind-mitigation inspection upon completion of the job?",
    explanation: "This report is often required to get insurance discounts. If the roofer doesn't provide this, you may pay extra — or worse, miss out on discounts."
  },
  {
    number: 11,
    question: "Can I speak to recent clients or see local projects?",
    explanation: "References and local project portfolios demonstrate a contractor's track record and accountability in your community. A contractor who hesitates to provide references may be hiding poor workmanship or unhappy customers."
  },
  {
    number: 12,
    question: "Do your crews specialize in the roof type being installed?",
    explanation: "Installing tile, metal, and shingles all require different skill sets and specialized training. Crews who specialize in your specific roof type are less likely to make costly installation errors."
  },
  {
    number: 13,
    question: "Do you offer financing through vetted lenders?",
    explanation: "Reputable contractors work with established financing partners who offer transparent terms. Be wary of contractors who only accept cash or push high-pressure financing schemes."
  },
  {
    number: 14,
    question: "How do you handle change orders for rotten or damaged wood?",
    explanation: "Wood rot is often discovered during tear-off. A professional contractor will document the damage with photos, provide written estimates for repairs, and get your approval before proceeding—not surprise you with inflated bills later."
  },
  {
    number: 15,
    question: "Do you clean up daily (not just at the end)?",
    explanation: "Daily cleanup protects your property from debris, nails, and damage. It also shows the contractor respects your home and takes pride in their work process."
  },
  {
    number: 16,
    question: "Will you tarp the roof immediately if weather changes?",
    explanation: "Florida weather is unpredictable. A prepared contractor has tarps on-site and a weather monitoring plan to protect your home if unexpected rain arrives."
  },
  {
    number: 17,
    question: "Do you assist with insurance documentation for future claims?",
    explanation: "Proper documentation of your roof installation—including photos, permits, and material certifications—can be invaluable when filing insurance claims or proving compliance after a storm."
  },
  {
    number: 18,
    question: "What EXACTLY does your workmanship warranty cover?",
    explanation: "Many contractors offer 'lifetime warranties' that exclude labor, leak repairs, or most real problems. Get the warranty terms in writing and understand what's actually covered."
  },
  {
    number: 19,
    question: "Tile Roofs Only: Which foam manufacturer + paddy size will be used (and does it match what's on the contract, permit, and photos)?",
    explanation: "Foam adhesive quality and coverage (paddy size) directly impact wind resistance. Cheap foam or undersized paddies are common shortcuts that can lead to catastrophic tile blow-offs during hurricanes."
  },
  {
    number: 20,
    question: "Do you offer upgraded protection in vulnerable areas (eaves, valleys, rakes)?",
    explanation: "These areas are most prone to leaks and wind damage. Upgraded underlayment, ice-and-water shield, and enhanced flashing in these zones can prevent 90% of common roof failures."
  },
  {
    number: 21,
    question: "Flashings: Will you inspect and replace old flashings including stucco cutouts?",
    explanation: "Flashings around chimneys, walls, and penetrations are where most leaks originate. Replacing the roof but keeping old, deteriorated flashings is like putting a new roof on a leaky bucket."
  },
  {
    number: 22,
    question: "If fascia is replaced, do you paint it to match so the roof looks finished?",
    explanation: "Many contractors replace rotted fascia but leave it unpainted or mismatched. A professional contractor includes painting or finishing so your roof looks complete and cohesive."
  },
  {
    number: 23,
    question: "Do you provide a detailed written scope of work before I sign?",
    explanation: "Vague contracts lead to disputes. A detailed scope of work should list every material, brand, installation method, and exclusion so both parties know exactly what's included."
  },
  {
    number: 24,
    question: "Are your workers W-2 employees or subcontractors?",
    explanation: "Contractors who use W-2 employees have more control over quality, training, and accountability. Subcontractors may not be properly insured or trained, leaving you exposed to liability and poor workmanship."
  },
  {
    number: 25,
    question: "Do you carry Workers' Compensation and General Liability insurance?",
    explanation: "If a worker is injured on your property and the contractor lacks proper insurance, you could be held liable. Always verify current certificates of insurance before work begins."
  },
  {
    number: 26,
    question: "Will you provide a material delivery schedule?",
    explanation: "Knowing when materials will arrive helps you plan and ensures the contractor isn't delaying your project or using inferior last-minute substitutions."
  },
  {
    number: 27,
    question: "How do you handle roof penetrations (vents, skylights, solar panels)?",
    explanation: "Improper flashing around penetrations is a leading cause of leaks. Ask how they'll seal and protect these areas—and whether it's included in the base price."
  },
  {
    number: 28,
    question: "Will you inspect and replace rotted decking as part of the tear-off?",
    explanation: "A new roof on rotted decking won't last. Professional contractors inspect the deck during tear-off and replace damaged sections—with transparent pricing and documentation."
  },
  {
    number: 29,
    question: "Do you provide a project timeline with start and completion dates?",
    explanation: "A written timeline holds the contractor accountable and helps you plan around the disruption. Contractors who refuse to commit to dates may be juggling too many jobs."
  },
  {
    number: 30,
    question: "What is your process for final inspection and customer walkthrough?",
    explanation: "A professional contractor will walk you through the completed project, explain what was done, answer questions, and ensure you're 100% satisfied before collecting final payment."
  }
];

export default function UltimateRoofBuyersGuide() {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (number: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [number]: !prev[number]
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<number, boolean> = {};
    guideItems.forEach(item => {
      allExpanded[item.number] = true;
    });
    setExpandedItems(allExpanded);
  };

  const collapseAll = () => {
    setExpandedItems({});
  };

  return (
    <section className="bg-black border border-neutral-800 rounded-2xl p-8 mt-12">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ultimate Roof Buyer's Guide – 30 Standards Every Florida Homeowner Should Demand
        </h2>
        <p className="text-neutral-300 mb-6 max-w-3xl leading-relaxed">
          This comprehensive guide breaks down the 30 most critical questions you should ask before signing any roofing contract.
          Click each item to learn why it matters and how it protects your investment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
          <a
            href="/ultimate-roof-buyers-guide.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download the Ultimate Roof Buyer's Guide (PDF)
          </a>

          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="px-4 py-2 text-sm border border-neutral-700 text-neutral-300 rounded-lg hover:bg-neutral-900 transition-colors"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 text-sm border border-neutral-700 text-neutral-300 rounded-lg hover:bg-neutral-900 transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {guideItems.map((item) => {
          const isExpanded = expandedItems[item.number];

          return (
            <div
              key={item.number}
              className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden transition-all hover:border-neutral-700"
            >
              <button
                onClick={() => toggleItem(item.number)}
                className="w-full flex items-start gap-4 p-5 text-left transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white font-bold rounded-full flex items-center justify-center text-sm mt-0.5">
                  {item.number}
                </div>

                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg leading-snug pr-8">
                    {item.question}
                  </h3>
                </div>

                <div className="flex-shrink-0">
                  {isExpanded ? (
                    <ChevronUp className="w-6 h-6 text-red-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-neutral-500" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 pl-[68px]">
                  <div className="bg-black border-l-4 border-red-600 rounded p-4">
                    <p className="text-sm font-semibold text-red-500 mb-2">
                      Why it matters:
                    </p>
                    <p className="text-neutral-300 leading-relaxed">
                      {item.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 mt-8">
        <h3 className="text-2xl font-bold text-white mb-3">
          How Many Standards Should a Contractor Meet?
        </h3>
        <p className="text-neutral-300 leading-relaxed mb-4">
          A truly qualified South Florida roofing contractor should confidently answer YES to{' '}
          <strong className="text-white">at least 28 out of 30</strong> of these standards.
        </p>
        <ul className="space-y-2 text-neutral-300">
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-1">•</span>
            <span><strong className="text-white">28-30:</strong> Exceptional contractor—hire with confidence</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-1">•</span>
            <span><strong className="text-white">24-27:</strong> Solid contractor—verify any gaps before signing</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-1">•</span>
            <span><strong className="text-white">20-23:</strong> Proceed with caution—significant gaps in standards</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-1">•</span>
            <span><strong className="text-white">Below 20:</strong> Walk away immediately—not qualified for HVHZ roofing</span>
          </li>
        </ul>
      </div>

      <p className="text-neutral-400 mt-8 italic text-center">
        At All Phase Construction USA, we meet all 30 standards on every project.
        No exceptions, no excuses, no shortcuts.
      </p>
    </section>
  );
}
