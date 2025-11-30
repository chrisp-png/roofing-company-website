import { useState } from "react";

type RoofStandard = {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
};

const STANDARDS: RoofStandard[] = [
  {
    id: 1,
    title: "Dual-Licensed Roofing Contractor + General Contractor",
    shortDescription:
      "Ensures your contractor understands both the structure and the roof system.",
    longDescription:
      "In South Florida, the roof is part of the structural system, not just a layer of shingles or tile. A contractor who holds both a Roofing and General Contractor license is trained and tested on structural loads, wall connections, trusses, and hurricane codes. That means better decisions when replacing decking, upgrading straps, or addressing hidden framing issues discovered during tear-off. It reduces finger-pointing between trades and helps protect you if an inspector questions structural details."
  },
  {
    id: 2,
    title: "Pulls Permits & Handles Inspections",
    shortDescription: "No permit is a red flag — and can cause insurance and resale headaches.",
    longDescription:
      "If a roofer wants to skip the permit, they're asking you to take all the risk. Unpermitted work can void insurance claims, trigger fines, and delay a future sale when a buyer's inspector pulls public records. A reputable contractor will submit plans, pull the permit in their name, schedule inspections, and give you copies for your records and future insurance needs."
  },
  {
    id: 3,
    title: "Exact Underlayment System Written into the Contract",
    shortDescription:
      "Prevents contractors from swapping in cheaper, weaker underlayment after you sign.",
    longDescription:
      "Underlayment is your last line of defense when shingles or tiles blow off in a storm. If the contract just says 'synthetic underlayment,' it leaves room for substitutions that may not meet HVHZ requirements or manufacturer specs. Your contract should name the product, thickness, and number of plies. That way what's installed must match what was promised, what was permitted, and what your insurer expects."
  },
  {
    id: 4,
    title: "Shingle Manufacturer + Certification Level Listed",
    shortDescription:
      "Certified installers can offer better warranties and are audited for quality.",
    longDescription:
      "Major manufacturers train and certify contractors on proper installation, ventilation, and fastener patterns. If your roofer isn't listed with the brand they're installing, you may lose out on upgraded warranties and enforcement if there's a defect. Having the manufacturer and certification level in writing proves the crew is approved and allows you to leverage extended material and system warranties."
  },
  {
    id: 5,
    title: "Mechanically Seamed Metal System (Not Exposed Fasteners)",
    shortDescription:
      "Standing seam systems are the standard for HVHZ durability and long-term watertightness.",
    longDescription:
      "Exposed-fastener metal roofs rely on hundreds or thousands of screws with washers that dry out over time. In high winds, those panels can loosen and leak. A mechanically seamed metal roof locks the panels together with concealed clips and continuous seams. Fewer penetrations, tighter wind uplift ratings, and a cleaner look — especially important when you plan to add solar later."
  },
  {
    id: 6,
    title: "Professional Property-Protection Equipment",
    shortDescription:
      "Catch-All systems, driveway guards, and pool protection keep your home safe during demo.",
    longDescription:
      "Tear-off is messy. Without nets, chutes, and ground protection, nails and debris end up in your grass, your pool, and your tires. Professional contractors invest in Catch-All style systems, plywood or mat protection for pavers and driveways, and magnetic sweeps. That protects your property today and your relationship with the contractor tomorrow."
  },
  {
    id: 7,
    title: "Written Plan to Protect Landscaping, Driveways & Pool Areas",
    shortDescription:
      "No written plan usually means no real plan.",
    longDescription:
      "Beautiful landscaping, decorative concrete, and pools are big investments. Your contract or pre-construction paperwork should spell out how plants will be covered, where dump trailers or material loads will sit, and how access will work. This avoids arguments later about cracked pavers, broken sprinklers, or damaged screens because everyone agreed to the plan up front."
  },
  {
    id: 8,
    title: "Live Photo Documentation During Installation",
    shortDescription:
      "Transparency lets you see exactly what's under your new roof system.",
    longDescription:
      "Most homeowners never climb on the roof — which makes roofing an easy place for corners to be cut. When your contractor sends photos or uses an app to share real-time images, you can see rotten wood replacement, underlayment, flashing details, and final cleanup. Those photos are also valuable if you ever have to file a storm claim later."
  },
  {
    id: 9,
    title: "Dedicated Project Manager Contact",
    shortDescription:
      "You shouldn't have to chase updates or call five different people for answers.",
    longDescription:
      "Roofing affects your schedule, parking, pets, and sometimes your ability to stay in the home. A dedicated project manager gives you one point of contact for start dates, inspections, weather delays, change orders, and punch-list items. It's the difference between feeling in control and feeling left in the dark."
  },
  {
    id: 10,
    title: "Wind Mitigation Report Upon Completion",
    shortDescription:
      "Required to unlock many of your insurance discounts in Florida.",
    longDescription:
      "After a roof replacement, your insurance company often requires an updated wind mitigation inspection to apply credits for new coverings, fasteners, deck attachments, and secondary water barriers. A contractor who helps coordinate or even includes this report is thinking past installation and into your long-term cost of ownership."
  },
  {
    id: 11,
    title: "Local References or Recent Jobs in Your City",
    shortDescription:
      "Verifiable roofs nearby prove they do quality work in your neighborhood.",
    longDescription:
      "Out-of-town storm chasers can disappear as quickly as they arrived. Local references let you drive by real projects, talk to real customers, and confirm the contractor services your area long-term. In high-wind zones, you want someone who will still be here after the next storm rolls through."
  },
  {
    id: 12,
    title: "Crew Specializes in the Exact Roof Type You're Buying",
    shortDescription:
      "Specialists produce better roofs, faster, with fewer mistakes.",
    longDescription:
      "Tile, shingle, metal, and flat roofs all install differently. A crew that spends 90% of its time on your specific system will be more efficient and more consistent. Ask whether they use dedicated tile crews, metal crews, and flat crews — or the same small team for everything."
  },
  {
    id: 13,
    title: "Offers Financing Through Vetted Lenders",
    shortDescription:
      "Finance partners usually vet the contractor before approving them.",
    longDescription:
      "Legitimate financing partners review licenses, insurance, financial stability, and complaint history before allowing contractors to offer their programs. If your roofer has solid financing options, it's a sign that another party has already done some due diligence — and it gives you more flexibility on how you pay."
  },
  {
    id: 14,
    title: "Transparent Change-Order Process for Rotten or Termite-Damaged Wood",
    shortDescription:
      "Set pricing and photo documentation prevent surprise invoices.",
    longDescription:
      "Wood replacement is common in South Florida, but it shouldn't be a blank check. A clear change-order policy lists per-sheet or per-foot prices, shows before/after photos, and requires your approval before extra work is performed. This protects you from inflated bills and protects the contractor from disputes."
  },
  {
    id: 15,
    title: "Daily Cleanup (Not Just End-of-Job Cleanup)",
    shortDescription:
      "Keeps cars, pets, and bare feet safe every day of the project.",
    longDescription:
      "Roofing debris doesn't wait until the final day to cause problems. A good crew performs a full ground sweep at the end of each workday, not just when they're done. That means magnets, bagging trash, securing loose material, and leaving your property in safe, usable condition overnight."
  },
  {
    id: 16,
    title: "Immediate Weather Protection / Tarping If Storms Approach",
    shortDescription:
      "In South Florida, pop-up storms can appear in minutes — your roof must be protected.",
    longDescription:
      "Once the old roof is torn off, your decking is exposed. Your contractor should monitor radar, have tarps or peel-and-stick membranes on hand, and a plan for securing the roof quickly if weather moves in. Water intrusion at this stage can damage drywall, flooring, and contents, so proactive weather protection is non-negotiable."
  },
  {
    id: 17,
    title: "Helps With Documentation for Future Insurance Claims",
    shortDescription:
      "Good documentation protects your investment for the life of the roof.",
    longDescription:
      "Permits, photos, invoices, and material specs form a strong paper trail. If you ever have a storm claim, that documentation can prove proper installation and help your adjuster understand what was there before the damage. Contractors who organize and share this info are thinking like partners, not just installers."
  },
  {
    id: 18,
    title: "Clear Workmanship Warranty Explanation",
    shortDescription:
      "Should cover improper installation — and clearly state what it does NOT cover.",
    longDescription:
      "A workmanship warranty isn't a blanket guarantee against all problems for any reason. It should cover leaks or failures caused by installation errors, within a defined time frame, and spell out how to file a claim. Exclusions (like acts of God or third-party damage) should be listed plainly so there are no surprises later."
  },
  {
    id: 19,
    title:
      "TILE: Foam Manufacturer + Foam Paddy Size Specified (Contract → Permit → Photos)",
    shortDescription:
      "This is the #1 corner-cutting spot in tile roofing — and a major storm-performance issue.",
    longDescription:
      "Tile uplift resistance depends heavily on the foam or adhesive, the size of the paddies, and spacing. If the contract doesn't name the product and pattern, it's easy to use less foam than required. Make sure what's written in the contract matches what's on the permit and in the installation photos so you know every tile is properly anchored."
  },
  {
    id: 20,
    title:
      "Reinforcement Options for Vulnerable Areas (Eaves, Valleys, Rakes)",
    shortDescription:
      "These areas usually fail first in high winds and heavy rain.",
    longDescription:
      "Extra fasteners, additional membranes, metal edge reinforcements, and upgraded sealants in valleys and edges greatly improve performance. A contractor who proactively recommends reinforcing these zones is planning for Category-style storms, not just sunny-day performance."
  },
  {
    id: 21,
    title: "Proper Flashing Replacement (Including Stucco Cutting & Re-Stuccoing)",
    shortDescription:
      "Most roofers avoid this — but it's critical for long-term waterproofing.",
    longDescription:
      "Wall, chimney, and stucco terminations often hide old or improperly installed flashing. To fix it correctly, stucco sometimes needs to be cut, new flashing installed, and then the wall re-stuccoed and painted. Skipping this step may save time now but can cause leaks years later when you're outside the basic warranty period."
  },
  {
    id: 22,
    title: "Paints Replaced Fascia & Trim to Match the Home",
    shortDescription:
      "A finished roof should look as good as it performs.",
    longDescription:
      "Replacing rotten fascia, soffit, or trim is common during a roof project. If those boards are left unpainted or mismatched, the home never looks fully finished. Including paint in the scope ensures new wood is sealed and blended so your curb appeal goes up along with your protection."
  },
  {
    id: 23,
    title: "Written Lifetime Workmanship Warranty (Where Offered)",
    shortDescription:
      "Most roofers only warrant their work for 1–5 years.",
    longDescription:
      "A true lifetime workmanship warranty shows the contractor is confident in their crews, systems, and controls. The key is to read the fine print: understand what 'lifetime' means, what maintenance is required, and how claims are handled. Long warranties backed by clear processes are a strong sign of a stable company."
  },
  {
    id: 24,
    title: "Ventilation Upgrades Available",
    shortDescription:
      "A properly vented roof system lasts longer and keeps the home more comfortable.",
    longDescription:
      "Hot, trapped attic air bakes shingles and stresses underlayment. Balanced intake and exhaust — via soffit vents, ridge vents, or mechanical ventilation where appropriate — can extend roof life and improve energy efficiency. A contractor who evaluates ventilation and offers upgrades is looking at the whole system, not just the surface."
  },
  {
    id: 25,
    title: "Manufacturer's Installation Certification in Writing",
    shortDescription:
      "Proves the installer is trained and approved by the shingle or tile manufacturer.",
    longDescription:
      "Many enhanced warranties require installation by a certified contractor and registration of the job with the manufacturer. Getting proof of certification in writing — and copies of your warranty registration — protects you if there's ever a dispute about whether the roof was installed to spec."
  },
  {
    id: 26,
    title: "Factory-Trained Installation Crews (Not Day Labor)",
    shortDescription:
      "Consistent, accountable crews deliver consistent, accountable roofs.",
    longDescription:
      "Random day labor means inconsistent skills and no long-term accountability. Factory-trained crews have been instructed directly on fastening patterns, flashing details, and safety. They understand why each step matters and are more likely to build a roof that matches the warranty you're paying for."
  },
  {
    id: 27,
    title: "Itemized Material List With Brand Names Before Starting",
    shortDescription:
      "Prevents bait-and-switch material substitutions after the contract is signed.",
    longDescription:
      "Seeing an itemized list — underlayment, fasteners, vents, membranes, metal, sealants — with actual brand names allows you to compare apples to apples between bids. It also locks in what will be used so you can spot any attempted downgrades when materials show up on site."
  },
  {
    id: 28,
    title:
      "Makes the Customer an Additional Insured on Their Insurance Policy",
    shortDescription:
      "Confirms their policy is active and gives you direct protection.",
    longDescription:
      "Being named as an additional insured means you're covered under the contractor's policy for work performed at your property. It's stronger protection than just having a generic certificate of insurance and gives you more direct recourse if something goes wrong."
  },
  {
    id: 29,
    title: "Guaranteed Response Time for Warranty Claims (48 Hours Max)",
    shortDescription:
      "Prevents you from being ghosted when you actually need help.",
    longDescription:
      "A written response-time guarantee sets expectations. It doesn't mean every repair happens instantly, but it does mean someone will contact you, triage the issue, and schedule a visit quickly. When a leak appears during rainy season, speed matters."
  },
  {
    id: 30,
    title: "Post-Storm Inspection Service for the Life of the Roof",
    shortDescription:
      "Helps you catch damage early and document it properly for insurance.",
    longDescription:
      "After big storms, it can be hard to tell from the ground if your roof was damaged. Contractors who offer ongoing post-storm inspections will check for lifted shingles, cracked tiles, or membrane damage and provide photos and notes. That helps you decide whether to file a claim and gives your adjuster better information."
  }
];

export default function UltimateRoofGuideAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section
      id="ultimate-roof-buyers-guide"
      className="bg-black border border-neutral-800 rounded-2xl p-8 mt-12"
    >
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ultimate Roof Buyer&apos;s Guide – 30 Standards Every Florida Homeowner Should Demand
        </h2>
        <p className="text-neutral-300 mb-6 max-w-3xl leading-relaxed">
          This comprehensive guide breaks down the 30 most critical questions you should ask before signing any roofing contract.
          Click &quot;Learn more&quot; on any item to see why it matters and how it protects your investment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
          <a
            href="/ultimate-roof-buyers-guide.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors shadow-lg"
          >
            Download the Ultimate Roof Buyer&apos;s Guide (PDF)
          </a>
        </div>
      </div>

      <div className="space-y-3">
        {STANDARDS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <article
              key={item.id}
              className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 md:p-5 transition-all hover:border-neutral-700"
            >
              <header className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white font-bold rounded-full flex items-center justify-center text-sm">
                  {item.id}
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-300">
                    {item.shortDescription}
                  </p>
                </div>
              </header>

              <div className="mt-3 ml-11">
                {!isOpen ? (
                  <button
                    type="button"
                    onClick={() => setOpenId(item.id)}
                    className="text-xs font-semibold uppercase tracking-wide text-red-400 hover:text-red-300 transition-colors"
                  >
                    Learn more
                  </button>
                ) : (
                  <>
                    <div className="bg-black border-l-4 border-red-600 rounded p-4 mb-3">
                      <p className="text-sm text-neutral-200 leading-relaxed">
                        {item.longDescription}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setOpenId(null)}
                      className="text-xs font-semibold uppercase tracking-wide text-neutral-400 hover:text-neutral-300 transition-colors"
                    >
                      Hide details
                    </button>
                  </>
                )}
              </div>
            </article>
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
