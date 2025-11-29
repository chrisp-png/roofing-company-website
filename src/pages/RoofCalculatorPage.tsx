import SEO from '../components/SEO';
import RoofCostCalculator from '../components/calculator/RoofCostCalculator';
import RoofCalculatorContent from '../components/calculator/RoofCalculatorContent';

export default function RoofCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a roof cost in South Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roof replacement prices in South Florida typically range from $12,000–$24,000 for shingle roofs, $30,000–$70,000 for tile roofs, $35,000–$80,000 for metal roofs, and $10,000–$30,000 for flat roofs depending on size, materials, and Florida Building Code requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Are metal roofs more expensive than shingles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Metal roofs cost more upfront but last longer and often perform better in hurricanes. Many homeowners see insurance savings as well."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer roof financing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All Phase Construction USA offers several financing options with low monthly payments for qualified homeowners."
        }
      },
      {
        "@type": "Question",
        "name": "Will a new roof reduce my insurance cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most homeowners see insurance savings after installing a new roof, especially when combined with a new wind mitigation inspection."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="How Much Does a Roof Cost in South Florida? | Roof Cost Calculator"
        description="Use our free South Florida roof cost calculator to estimate shingle, tile, metal, and flat roof prices. Built for Broward and Palm Beach County homeowners."
        schemaJson={faqSchema}
      />
      <RoofCalculatorContent />
    </>
  );
}
