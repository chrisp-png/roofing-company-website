import { Link } from 'react-router-dom';

interface BlogContentProps {
  slug: string;
}

export default function BlogContent({ slug }: BlogContentProps) {
  if (slug === 'underlayment-and-foam-application') {
    return (
      <div className="space-y-6">
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-8">
          <p className="text-xl text-neutral-300 leading-relaxed mb-6">
            In South Florida, most homeowners obsess over barrel vs. flat tile and color choices. But during a hurricane, the truth shows up fast:
          </p>
          <p className="text-xl text-neutral-300 leading-relaxed mb-4">
            Tiles are decoration.
          </p>
          <p className="text-xl text-neutral-300 leading-relaxed">
            Your real protection is the <strong className="text-white">underlayment and foam adhesive</strong> underneath.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-neutral-300 leading-relaxed">
            That's why two roofs that look identical from the street can perform completely differently in a storm. This article explains why the "hidden layers" under your tile matter more than anything else.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Concrete Tile Isn't the Hero</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Concrete tile is popular because it looks great and lasts a long time. But structurally, most concrete tiles are very similar. What actually changes how your roof performs is:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>The type of <strong className="text-white">underlayment</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Whether you use <strong className="text-white">mechanical fasteners or foam</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>The <strong className="text-white">foam manufacturer</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>How generously the foam is applied</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>The quality of the <strong className="text-white">installation crew</strong></span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            If a contractor skimps on these hidden details, you get a roof that <em>looks</em> nice but doesn't deliver when wind and rain show up.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Underlayment: The Hidden Waterproofing Layer</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Underlayment is the waterproof membrane between your tile and your wood deck. When tiles crack, shift, or blow off, the underlayment is what keeps water out of your home.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            In South Florida, the gold standard is <strong className="text-white">self-adhered, modified bitumen underlayment</strong>, often called <strong className="text-white">Secondary Water Resistance (SWR)</strong>.
          </p>
          <div className="bg-black border border-red-500/30 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold text-white mb-4">Benefits of SWR:</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Keeps your home dry if tiles fail in a storm</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Protects your decking from rot and mold</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Helps qualify for <strong className="text-white">major wind-mitigation insurance credits</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Extends the overall life of your roof</span>
              </li>
            </ul>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            Basic synthetic underlayments meet code but usually <strong className="text-white">don't</strong> earn the same credits and don't perform as well when tiles are compromised.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Foam Adhesive Matters So Much</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            For tile roofs in HVHZ (High Velocity Hurricane Zone), <strong className="text-white">foam adhesive</strong> is a game changer.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Compared to simple mechanical fasteners, foam:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Increases uplift resistance in high winds</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Creates a better bond between tile and underlayment</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Reduces the chance of tiles becoming dangerous projectiles</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mb-4">
            But not all foam applications are equal. Key questions:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Is the contractor using <strong className="text-white">premium manufacturers</strong> like Polyfoam or ICP?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Are they applying <strong className="text-white">enough foam per tile</strong>, or cutting corners to save money?</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Are hips, ridges, and valleys treated with extra care?</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            Two foam jobs can look identical from the street. One might ride out a Category 4. The other might lose tiles in the first strong storm.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Underlayment + Foam = Insurance Savings</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            When you combine <strong className="text-white">SWR underlayment</strong> with <strong className="text-white">proper foam attachment</strong>, you don't just get a stronger roof—you often get <strong className="text-white">real financial savings</strong>:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Many South Florida homeowners see <strong className="text-white">$2,500/year</strong> in insurance reductions after upgrading</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>That's <strong className="text-white">$25,000 over 10 years</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>And <strong className="text-white">$50,000 over 20 years</strong></span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mb-4">
            When you also improve attic ventilation, you can save around <strong className="text-white">$50/month</strong> on cooling:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span>$50/month = <strong className="text-white">$600/year</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span>$6,000 over 10 years</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span>$12,000 over 20 years</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            Put together, your roof upgrade can <strong className="text-white">pay for itself</strong> through reduced insurance and energy use.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">How All Phase Handles These "Hidden" Details</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            When we install a tile roof, we focus on the parts most companies barely talk about:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>We specify <strong className="text-white">SWR underlayment</strong> wherever possible</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>We use <strong className="text-white">premium foam manufacturers</strong> and generous coverage</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>We document underlayment and foam application with <strong className="text-white">photos</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>We coordinate a new <strong className="text-white">wind mitigation inspection</strong> so you can document your discounts</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>We walk you through how to submit the updated report to your insurer</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            You're not just buying tiles. You're buying a hardened system designed for South Florida storms and insurance requirements.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">When Should You Take Action?</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            You should strongly consider upgrading if:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Your roof was installed before modern SWR requirements</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>You've lost tiles during recent storms</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Your wind mitigation report is older or missing</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Your insurance premiums have jumped dramatically</span>
            </li>
          </ul>

          <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Helpful Links</h3>
            <div className="space-y-3">
              <p className="text-neutral-300">
                <Link to="/wind-mitigation" className="text-red-500 hover:text-red-400 font-semibold">
                  Learn more about wind mitigation & insurance savings →
                </Link>
              </p>
              <p className="text-neutral-300">
                <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 font-semibold">
                  Use the Roof Cost Calculator to see ballpark pricing for different tile systems →
                </Link>
              </p>
              <p className="text-neutral-300">
                <Link to="/roof-types/tile" className="text-red-500 hover:text-red-400 font-semibold">
                  Explore other roof types we install →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'concrete-tile-roofing-good-better-best') {
    return (
      <div className="space-y-6">
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-8">
          <p className="text-xl text-neutral-300 leading-relaxed mb-6">
            Concrete tile is one of the most popular roofing choices in Broward and Palm Beach Counties. Homeowners are often told barrel tile is "better" than flat tile, or that certain profiles justify higher prices.
          </p>
          <p className="text-xl text-neutral-300 leading-relaxed mb-4">
            Here's the truth:
          </p>
          <p className="text-xl text-neutral-300 leading-relaxed mb-4">
            <strong className="text-white">Concrete is concrete.</strong>
          </p>
          <p className="text-xl text-neutral-300 leading-relaxed">
            The real difference in price and performance comes from the <strong className="text-white">system</strong>:
          </p>
          <ul className="space-y-2 text-neutral-300 mt-4">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Attachment method</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Underlayment type</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Foam quality and coverage</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Installation details</span>
            </li>
          </ul>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-neutral-300 leading-relaxed">
            So instead of selling only by "pretty tile," we recommend a <strong className="text-white">Good / Better / Best / Premium</strong> structure that explains exactly what you're paying for.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">GOOD – Concrete Tile with Mechanical Attachment</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            <strong className="text-white">Best for:</strong> strict budgets and inland homes.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Typical features:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Any concrete tile profile (flat, barrel, or S-tile)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Mechanical attachment with screws or ring-shank nails</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Standard synthetic underlayment</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Meets Florida Building Code minimums</span>
            </li>
          </ul>
          <div className="bg-black border border-green-500/30 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold text-white mb-4">Pros:</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">•</span>
                <span>Lowest upfront cost</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">•</span>
                <span>Still code-compliant</span>
              </li>
            </ul>
          </div>
          <div className="bg-black border border-yellow-500/30 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold text-white mb-4">Limitations:</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">•</span>
                <span>Lower uplift resistance</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">•</span>
                <span>Underlayment usually does <strong className="text-white">not</strong> provide SWR</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">•</span>
                <span>Limited insurance credits compared to higher tiers</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">BETTER – Concrete Tile with Foam Adhesive</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            <strong className="text-white">Best for:</strong> most South Florida single-family homes.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Features:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Any concrete tile profile</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Two-part foam adhesive attachment</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Enhanced synthetic underlayment</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Quality foam manufacturer</span>
            </li>
          </ul>
          <div className="bg-black border border-blue-500/30 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold text-white mb-4">Benefits:</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>Much stronger wind uplift performance than mechanical attachment</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>Smoother look (fewer exposed fasteners)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">•</span>
                <span>Generally better eligibility for insurance discounts</span>
              </li>
            </ul>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            This is the "sweet spot" for many homeowners—strong performance without premium pricing.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">BEST – Foam Adhesive + Self-Adhered (SWR) Underlayment</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            <strong className="text-white">Best for:</strong> coastal areas, HVHZ zones, and clients who want maximum protection and savings.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            System details:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Any concrete tile profile</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Premium two-part foam adhesive (Polyfoam, ICP, etc.)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Self-adhered modified bitumen underlayment (SWR)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Generous foam coverage on each tile</span>
            </li>
          </ul>
          <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-6 my-6">
            <h3 className="text-xl font-bold text-white mb-4">Why it's our favorite:</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Maximum wind uplift resistance</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>SWR keeps the home dry even if tiles blow off</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Qualifies for <strong className="text-white">maximum wind-mitigation insurance credits</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">•</span>
                <span>Often performs better than "fancier" tiles installed with cheaper methods</span>
              </li>
            </ul>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            This is where the roof truly becomes a <strong className="text-white">hurricane system</strong>, not just a cosmetic upgrade.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">PREMIUM – Clay or Composite Tile Systems</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            <strong className="text-white">Best for:</strong> luxury homes and long-term owners.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Highlights:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Clay or advanced composite tiles</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Premium underlayment + flashings</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Attachment methods tailored to the material</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>50–100 year lifespan in many cases</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            The upfront cost is higher, but the roof can dramatically increase curb appeal and property value and may be the <strong className="text-white">last roof you ever buy</strong>.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">How Pricing Usually Breaks Down</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            While every project needs a site-specific quote, typical installed ranges in South Florida look like:
          </p>
          <div className="bg-black border border-neutral-700 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1 font-bold">•</span>
                <span><strong className="text-white">GOOD:</strong> roughly $12–$16 per sq ft</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1 font-bold">•</span>
                <span><strong className="text-white">BETTER:</strong> roughly $14–$18 per sq ft</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1 font-bold">•</span>
                <span><strong className="text-white">BEST:</strong> roughly $16–$20 per sq ft</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1 font-bold">•</span>
                <span><strong className="text-white">PREMIUM (clay/composite):</strong> roughly $18–$24 per sq ft</span>
              </li>
            </ul>
          </div>
          <p className="text-neutral-300 leading-relaxed mb-4">
            These ranges are heavily influenced by:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Roof size and complexity</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Access and staging requirements</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Code upgrades (straps, deck nailing, ventilation)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Municipality and permitting</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            Use the <strong className="text-white">Roof Cost Calculator</strong> as your starting point, then we refine everything after a site visit.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">How Insurance & Ventilation Offset the Cost</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            A BEST-tier tile system with SWR and proper documentation can unlock:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span>Around <strong className="text-white">$2,500/year</strong> in insurance savings</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span><strong className="text-white">$25,000 over 10 years</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">•</span>
              <span><strong className="text-white">$50,000 over 20 years</strong></span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Add upgraded ventilation and attic airflow:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span>~$50/month off cooling</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span><strong className="text-white">$600/year</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span><strong className="text-white">$6,000 over 10 years</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">•</span>
              <span><strong className="text-white">$12,000 over 20 years</strong></span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            When you combine these numbers, the <strong className="text-white">net cost of your roof over 10–20 years is far lower</strong> than the sticker shock most homeowners feel up front.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Homeowners Choose All Phase for Tile Roofs</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            When we design a tile system, we focus on:
          </p>
          <ul className="space-y-2 text-neutral-300 mb-6">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Explaining Good / Better / Best options in plain English</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Matching the system to your <strong className="text-white">neighborhood, insurance situation, and time horizon</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Using premium foam manufacturers, not generic alternatives</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Installing SWR whenever possible to maximize insurance credits</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Photographing underlayment, foam, and installation details for your records</span>
            </li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            You're not just getting tiles—you're getting a <strong className="text-white">documented, insurable system</strong> that protects your family and your investment.
          </p>

          <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Helpful Links</h3>
            <div className="space-y-3">
              <p className="text-neutral-300">
                <Link to="/roof-cost-calculator" className="text-red-500 hover:text-red-400 font-semibold">
                  See how different tile systems price out with our Roof Cost Calculator →
                </Link>
              </p>
              <p className="text-neutral-300">
                <Link to="/wind-mitigation" className="text-red-500 hover:text-red-400 font-semibold">
                  Learn about wind mitigation and insurance savings →
                </Link>
              </p>
              <p className="text-neutral-300">
                <Link to="/contact" className="text-red-500 hover:text-red-400 font-semibold">
                  Ready for a site-specific quote? →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-8 mb-8">
      <p className="text-neutral-300 leading-relaxed mb-4">
        <strong className="text-white">Content Placeholder:</strong> Full blog content for "{slug}" will be inserted here.
      </p>
      <p className="text-neutral-400 leading-relaxed">
        This placeholder will be replaced with the actual blog article content in small batches after the blog structure is complete.
      </p>
    </div>
  );
}
