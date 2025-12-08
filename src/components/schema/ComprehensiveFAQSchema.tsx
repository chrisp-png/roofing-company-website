import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface ComprehensiveFAQSchemaProps {
  faqs?: FAQItem[];
}

const defaultRoofingFAQs: FAQItem[] = [
  {
    question: "How much does a new roof cost in South Florida?",
    answer: "Roof costs in South Florida vary by material: Shingle roofs typically range from $8,000-$25,000, tile roofs from $20,000-$45,000, metal roofs from $18,000-$40,000, and flat roofs from $12,000-$30,000. Use our Roof Cost Calculator at allphaseusa.com for a detailed estimate based on your specific property."
  },
  {
    question: "What are All Phase Construction USA's Florida contractor licenses?",
    answer: "All Phase Construction USA holds two Florida licenses: General Contractor License CGC1526236 and Roofing Contractor License CCC1331464. We are fully licensed, insured, and bonded to perform all roofing and general construction work throughout Florida."
  },
  {
    question: "Which cities does All Phase Construction USA serve?",
    answer: "We serve all of Broward and Palm Beach Counties including Boca Raton, Delray Beach, Boynton Beach, West Palm Beach, Fort Lauderdale, Pompano Beach, Deerfield Beach, Coral Springs, Parkland, Coconut Creek, Hollywood, Plantation, Sunrise, Margate, Tamarac, Lake Worth Beach, Wellington, Palm Beach Gardens, Jupiter, and surrounding areas."
  },
  {
    question: "What roofing materials does All Phase Construction USA install?",
    answer: "We install all major roofing systems: asphalt shingles (GAF, Owens Corning), concrete and clay tiles (Eagle, Boral), standing seam and corrugated metal roofs (aluminum, steel, copper), TPO and EPDM flat roofing systems, built-up roofing (BUR), and modified bitumen systems. All installations meet Florida Building Code and HVHZ (High Velocity Hurricane Zone) requirements."
  },
  {
    question: "How long does a roof last in South Florida?",
    answer: "Roof lifespan in South Florida depends on material and maintenance: Asphalt shingles last 15-25 years, concrete tiles 30-50 years, clay tiles 50-100 years, metal roofs 40-70 years, and properly maintained flat roofs 15-30 years. Florida's climate (heat, UV exposure, salt air, hurricanes) reduces lifespan compared to northern states."
  },
  {
    question: "Do you offer financing for roof replacement?",
    answer: "Yes, All Phase Construction USA offers multiple financing options including 0% interest programs, low monthly payment plans, and special financing for qualified homeowners. Visit allphaseusa.com/financing or call 754-227-5605 to discuss financing options for your roof replacement project."
  },
  {
    question: "What is wind mitigation and how does it reduce insurance costs?",
    answer: "Wind mitigation inspections document your roof's hurricane-resistant features. A positive wind mitigation report can reduce homeowners insurance by 10-45% annually. All Phase Construction USA installs roofs that qualify for maximum wind mitigation credits including proper roof-to-wall connections, sealed roof deck, impact-resistant materials, and HVHZ-compliant installation methods."
  },
  {
    question: "How long does a roof replacement take?",
    answer: "Most residential roof replacements take 2-5 days depending on size, material, and complexity. Small homes with shingles may be completed in 1-2 days. Large homes with tile or complex designs may take 5-7 days. Commercial projects vary significantly. We provide specific timelines during your free roof inspection."
  },
  {
    question: "Does All Phase Construction USA handle insurance claims?",
    answer: "Yes, we assist with insurance claims for storm damage and roof leaks. We document damage, meet with adjusters, provide detailed estimates, and help ensure you receive fair claim settlements. We work with all major insurance carriers and have decades of experience navigating the claims process."
  },
  {
    question: "What is the best roof for hurricane protection in Florida?",
    answer: "Metal roofs and concrete tiles provide the best hurricane protection in Florida. Metal roofs have excellent wind uplift resistance and no loose components. Concrete tiles are heavy, aerodynamic, and exceed Miami-Dade HVHZ requirements. When properly installed with enhanced roof-to-wall connections, sealed decking, and hurricane straps, both systems can withstand Category 5 winds."
  },
  {
    question: "Do you provide free roof inspections?",
    answer: "Yes, All Phase Construction USA provides free, no-obligation roof inspections throughout Broward and Palm Beach Counties. Our inspections include drone photography, attic ventilation assessment, manufacturer material recommendations, detailed written estimates, and financing options. Schedule your free inspection at 754-227-5605 or allphaseusa.com/contact."
  },
  {
    question: "What permits are required for roof replacement in Florida?",
    answer: "Roof replacement in Florida requires building permits from your local municipality. All Phase Construction USA handles all permitting, inspections, and HOA/condo association approvals. Permits ensure work meets Florida Building Code, proper installation techniques, and structural requirements. Final inspection and approval are required before project closeout."
  },
  {
    question: "Can you match my existing tile roof?",
    answer: "Yes, we can match most tile profiles, colors, and textures for repairs or partial replacements. We work with major tile manufacturers including Eagle, Boral, and Ludowici. If exact matches aren't available, we source discontinued tiles or recommend similar alternatives. We maintain relationships with tile suppliers throughout Florida."
  },
  {
    question: "What is a roof warranty and what does it cover?",
    answer: "All Phase Construction USA provides comprehensive warranties: Workmanship warranty (10-25 years) covers installation defects and labor. Manufacturer material warranty (15-50 years depending on product) covers material defects. We offer extended manufacturer warranties including GAF Golden Pledge (50 years) and System Plus warranties covering materials, labor, and tear-off."
  },
  {
    question: "Should I repair or replace my roof?",
    answer: "Replace your roof if: it's over 20 years old, has widespread damage, multiple leaks, or failing in multiple areas. Repair if: damage is isolated, the roof is under 15 years old, only minor issues exist, or budget requires temporary solutions. We provide honest assessments during free inspections and recommend the most cost-effective solution."
  },
  {
    question: "What is the difference between shingles and tiles?",
    answer: "Shingles are asphalt-based, lighter weight, lower cost ($8,000-$25,000), easier installation, and last 15-25 years. Tiles are concrete or clay, heavier, higher cost ($20,000-$45,000), require structural support, and last 30-100 years. Tiles provide superior hurricane resistance, energy efficiency, and longevity but require higher upfront investment."
  },
  {
    question: "How do I choose a roofing contractor in South Florida?",
    answer: "Verify Florida state licenses (CGC or CCC), confirm active insurance and bonding, check Better Business Bureau rating, review Google and Facebook testimonials, request local references, confirm manufacturer certifications, ensure detailed written contracts, and verify all permits will be pulled. All Phase Construction USA meets all these criteria with licenses CGC1526236 and CCC1331464."
  },
  {
    question: "What is the roof installation process?",
    answer: "Our process includes: 1) Free inspection and estimate, 2) Material selection and financing, 3) Permit applications and HOA approvals, 4) Property protection and dumpster placement, 5) Complete tear-off of existing roof, 6) Deck repair and underlayment installation, 7) New roof installation, 8) Cleanup and final inspection, 9) Municipality and manufacturer warranties. Most projects complete in 2-5 days."
  }
];

export default function ComprehensiveFAQSchema({ faqs }: ComprehensiveFAQSchemaProps) {
  const faqItems = faqs || defaultRoofingFAQs;

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      })),
      "about": {
        "@type": "Service",
        "serviceType": "Roofing Services",
        "provider": {
          "@type": "RoofingContractor",
          "name": "All Phase Construction USA",
          "url": "https://www.allphaseusa.com",
          "telephone": "+1-754-227-5605",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "590 Goolsby Blvd",
            "addressLocality": "Deerfield Beach",
            "addressRegion": "FL",
            "postalCode": "33442",
            "addressCountry": "US"
          }
        }
      }
    };

    let schemaScript = document.querySelector('script[data-comprehensive-faq-schema="true"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('data-comprehensive-faq-schema', 'true');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);

    return () => {
      const existingScript = document.querySelector('script[data-comprehensive-faq-schema="true"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [faqItems]);

  return null;
}
