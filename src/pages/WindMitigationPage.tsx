import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../components/SEO';
import Schema from '../components/Schema';
import AuthorityGroup from '../components/authority/AuthorityGroup';
import { Shield, Home, Hammer, FileCheck, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';
import EntitySummary from '../components/EntitySummary';
import HowToSchema from '../components/schema/HowToSchema';

export default function WindMitigationPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How much can I save with wind mitigation?',
      answer: 'Many South Florida homeowners save $500–$6,500 per year on homeowners insurance with proper wind mitigation upgrades and documentation. The exact savings depend on your current roof features, the upgrades performed, your insurance carrier, and your coverage amounts. Older homes that add Secondary Water Resistance (SWR) and improve roof-to-wall connections often see the most significant discounts.',
    },
    {
      question: 'What is Secondary Water Resistance (SWR)?',
      answer: 'Secondary Water Resistance (SWR) is a self-adhered underlayment layer installed beneath your roof covering. It provides an additional waterproof barrier that helps prevent water intrusion during hurricanes when shingles or tiles may be damaged or blown off. SWR is one of the most valuable wind mitigation credits and is often required by modern Florida Building Code in high-wind zones.',
    },
    {
      question: 'Do I need a new roof to get wind mitigation credits?',
      answer: 'Not always. Some wind mitigation upgrades can be added to an existing roof without full replacement, such as adding SWR during a partial re-roof, upgrading attic strap connections, or improving roof deck attachment in accessible areas. However, a full roof replacement provides the best opportunity to maximize all wind mitigation features at once. We can evaluate your current roof and recommend the most cost-effective approach.',
    },
    {
      question: 'How long does the wind mitigation process take?',
      answer: 'The timeline varies by project scope. A full roof replacement with wind mitigation upgrades typically takes 3–7 days for residential homes, plus permit processing time. After completion, the wind mitigation inspection can usually be scheduled within 1–2 weeks. Most homeowners see their insurance credits applied within 30–60 days after submitting the updated Form 1802 to their insurance carrier.',
    },
    {
      question: 'What is a wind mitigation inspection (Form 1802)?',
      answer: 'Form 1802 (officially the "Uniform Mitigation Verification Inspection Form") is a standardized report completed by a licensed inspector that documents specific wind-resistant features of your home. Insurance companies use this form to determine eligibility for wind mitigation discounts. The inspection covers roof shape, roof covering, roof deck attachment, roof-to-wall connections, secondary water resistance, and opening protections.',
    },
    {
      question: 'Do you work with both homes and HOAs/condos?',
      answer: 'Yes, All Phase Construction USA handles wind mitigation projects for single-family homes, townhomes, condominiums, and HOA/association buildings throughout Broward and Palm Beach Counties. We have extensive experience coordinating large-scale projects that require board approvals, multiple building permits, and phased construction schedules.',
    },
    {
      question: 'Will wind mitigation upgrades pay for themselves?',
      answer: 'In most cases, yes. With annual insurance savings ranging from $500–$6,500, many homeowners recover the cost of wind mitigation upgrades within 3–7 years through reduced premiums alone. Beyond the financial benefits, these upgrades also provide better protection against storm damage, potentially preventing costly repairs, and often increase home resale value in Florida\'s hurricane-prone market.',
    },
  ];

  const upgrades = [
    {
      icon: Shield,
      title: 'Secondary Water Resistance (SWR)',
      description: 'Self-adhered underlayment that provides a waterproof barrier beneath your roof covering, preventing water intrusion during hurricanes.',
      benefit: 'One of the highest-value wind mitigation credits',
    },
    {
      icon: Home,
      title: 'Roof-to-Wall Connections',
      description: 'Hurricane straps, clips, or wraps that secure your roof structure to the walls, preventing roof lift-off during high winds.',
      benefit: 'Critical for HVHZ compliance and insurance discounts',
    },
    {
      icon: Hammer,
      title: 'Roof Deck Attachment',
      description: 'Proper nailing patterns and spacing for roof sheathing that meets or exceeds current Florida Building Code requirements.',
      benefit: 'Strengthens overall roof system integrity',
    },
    {
      icon: FileCheck,
      title: 'Roof Covering Upgrades',
      description: 'Impact-resistant shingles, foam-adhered tile, or mechanically-seamed metal systems rated for high-velocity hurricane zones.',
      benefit: 'Maximum wind resistance and insurance credits',
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Free Roof & Attic Evaluation',
      description: 'We inspect your roof covering, attic structure, and existing wind mitigation features to identify opportunities for improvement.',
    },
    {
      number: 2,
      title: 'Identify Missing Features',
      description: 'Our team documents current deficiencies and code-required upgrades, then explains which features will provide the best insurance credits.',
    },
    {
      number: 3,
      title: 'Scope of Work & Pricing',
      description: 'We provide a detailed proposal showing the upgrades, materials, timeline, and transparent pricing for your project.',
    },
    {
      number: 4,
      title: 'Complete Upgrades',
      description: 'Our licensed crews install all wind mitigation features according to Florida Building Code, with thorough documentation photos throughout.',
    },
    {
      number: 5,
      title: 'Coordinate Inspection',
      description: 'We help schedule a licensed wind mitigation inspector to complete your Form 1802 report with all new upgrades documented.',
    },
    {
      number: 6,
      title: 'Submit to Insurance',
      description: 'You provide the updated 1802 report to your insurance agent, who processes your wind mitigation credits and reduces your premiums.',
    },
  ];

  const howToSteps = [
    {
      name: "Schedule Wind Mitigation Assessment",
      text: "Contact All Phase Construction USA for a free wind mitigation consultation. We'll inspect your current roof features, identify eligible upgrades, and estimate potential insurance savings based on your home's construction."
    },
    {
      name: "Review Upgrade Recommendations",
      text: "We provide a detailed proposal showing recommended wind mitigation features including SWR underlayment, enhanced roof-to-wall connections, improved deck attachment, and roof covering upgrades. Each recommendation includes expected insurance credit value."
    },
    {
      name: "Complete Installation",
      text: "Our licensed crews install wind mitigation upgrades according to Florida Building Code and HVHZ requirements. We document all work with photos for your Form 1802 inspection and maintain full permit compliance."
    },
    {
      name: "Schedule Form 1802 Inspection",
      text: "After completion, we coordinate with a licensed wind mitigation inspector to conduct your Form 1802 (Uniform Mitigation Verification Inspection). This official report documents all wind-resistant features of your home."
    },
    {
      name: "Submit Report to Insurance",
      text: "Provide the completed Form 1802 to your insurance agent. They will process your wind mitigation credits and apply premium reductions, typically resulting in $500-$6,500 annual savings depending on your coverage and upgrades."
    }
  ];

  return (
    <>
      <SEO
        title="Wind Mitigation & HVHZ Roofing | All Phase Construction USA"
        description="Wind mitigation upgrades for Broward and Palm Beach Counties. Reduce insurance costs with SWR, roof-to-wall connections, and code-compliant installations. Request a roof assessment today."
      />

      <Schema type="FAQPage" faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/" },
          { name: "Wind Mitigation", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/wind-mitigation" }
        ]}
      />
      <HowToSchema
        name="How to Get Wind Mitigation Credits and Reduce Insurance Costs in Florida"
        description="Complete guide to wind mitigation inspections and insurance premium reductions for South Florida homeowners."
        steps={howToSteps}
        totalTime="P21D"
      />

      <div className="bg-black text-white min-h-screen">
        <section className="relative bg-gradient-to-br from-neutral-950 to-black border-b border-neutral-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Wind Mitigation & Insurance Savings
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-6 leading-relaxed">
                We help South Florida homeowners and associations reduce insurance premiums by $500–$6,500
                per year through wind mitigation upgrades and proper documentation.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Serving Broward and Palm Beach Counties with expert roof improvements designed for
                High-Velocity Hurricane Zone (HVHZ) compliance and maximum insurance credits.
              </p>

              <div className="max-w-3xl mt-8">
                <EntitySummary
                  title="Wind Mitigation Quick Facts"
                  items={[
                    "Annual insurance savings: $500–$6,500 for qualified homeowners",
                    "Key upgrades: SWR underlayment, roof-to-wall connections, enhanced deck attachment",
                    "Form 1802 inspection required for insurance credit documentation",
                    "3-7 days for roof installation, 30-60 days for full insurance processing",
                    "HVHZ compliance and Florida Building Code adherence mandatory",
                    "Available for single-family homes, townhomes, condos, and HOA properties"
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-950 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">What Is Wind Mitigation?</h2>
            <div className="max-w-4xl space-y-6 text-neutral-300 leading-relaxed text-lg">
              <p>
                Wind mitigation refers to structural improvements that strengthen your roof and home to
                withstand high winds and hurricanes. These upgrades protect your property during severe
                weather and demonstrate to insurance companies that your home is less risky to insure.
              </p>
              <p>
                Florida insurance carriers offer substantial discounts when specific wind-resistant features
                are present and properly documented on Form 1802 (the official wind mitigation inspection
                report). Features like Secondary Water Resistance (SWR), enhanced roof-to-wall connections,
                improved roof deck attachment, and impact-resistant roof coverings can each contribute to
                your overall savings.
              </p>
              <p>
                For many homeowners, wind mitigation upgrades pay for themselves within 3–7 years through
                reduced insurance premiums alone—while also providing better protection and increasing home
                resale value in Florida's hurricane-prone coastal markets.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Common Wind Mitigation Upgrades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upgrades.map((upgrade, index) => {
                const Icon = upgrade.icon;
                return (
                  <div
                    key={index}
                    className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{upgrade.title}</h3>
                    <p className="text-neutral-300 mb-4 leading-relaxed">{upgrade.description}</p>
                    <div className="inline-block px-4 py-2 bg-red-600/10 border border-red-500/30 rounded-lg">
                      <p className="text-sm text-red-500 font-medium">{upgrade.benefit}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <DollarSign className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Opening Protection</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Impact-resistant windows and doors or hurricane shutters provide additional wind
                    mitigation credits. While we focus on roofing, we can coordinate with trusted partners
                    or provide referrals for opening protection upgrades to maximize your insurance savings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-950 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              How Much Can You Save on Insurance?
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8 mb-8 text-center">
                <div className="text-5xl font-bold text-red-500 mb-2">$500 – $6,500</div>
                <div className="text-xl text-white">Annual Insurance Savings</div>
              </div>

              <div className="space-y-6 text-neutral-300 leading-relaxed text-lg mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>
                      Many clients save $500–$6,500 per year with proper wind mitigation upgrades and
                      documentation, with the exact amount depending on their insurance carrier, coverage
                      amounts, and specific improvements made.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>
                      Older roofs upgraded to include Secondary Water Resistance (SWR) and improved nailing
                      patterns typically see the most significant insurance credits, especially when combined
                      with enhanced roof-to-wall connections.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>
                      Proper documentation through a new wind mitigation inspection (Form 1802) is critical
                      to receiving these credits. We help coordinate this process with licensed inspectors
                      after completing your upgrades.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6">
                <p className="text-sm text-neutral-400 italic">
                  <strong className="text-white">Important note:</strong> All Phase Construction USA is not
                  an insurance carrier and cannot guarantee specific dollar amounts for insurance savings.
                  However, these ranges represent typical savings we see in the field for{' '}
                  <Link
                    to="/residential-roofing"
                    className="text-red-500 hover:text-red-400 underline"
                  >
                    residential
                  </Link>{' '}
                  and{' '}
                  <Link
                    to="/commercial-roofing"
                    className="text-red-500 hover:text-red-400 underline"
                  >
                    commercial
                  </Link>{' '}
                  properties throughout South Florida. Your actual savings will depend on your insurance
                  provider's specific wind mitigation discount structure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Our Wind Mitigation Process
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl font-bold">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-neutral-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-neutral-950 to-black border-b border-neutral-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Lower Your Premiums?
            </h2>
            <p className="text-xl text-neutral-300 mb-10 leading-relaxed">
              Schedule a free wind mitigation assessment or use our calculator to estimate your project cost
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50"
              >
                Schedule a Wind Mitigation Assessment
              </Link>
              <Link
                to="/roof-cost-calculator"
                className="px-8 py-4 border-2 border-red-600 text-red-500 text-lg font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200"
              >
                Try the Roof Cost Calculator
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-black border border-neutral-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-neutral-900 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-5">
                      <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-neutral-400 mb-4">Still have questions?</p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        <AuthorityGroup />
      </div>
    </>
  );
}
