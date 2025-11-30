const roofGuideFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Ultimate Roof Buyer's Guide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Ultimate Roof Buyer's Guide is a 30-point checklist created by All Phase Construction USA to help Florida homeowners compare roofing contractors. It covers licensing, underlayments, ventilation, warranties, permitting, wind-mitigation, and post-storm service so you can see exactly who meets modern standards and who cuts corners."
      }
    },
    {
      "@type": "Question",
      "name": "Why does it matter if my roofer is dual-licensed as a Roofing Contractor and General Contractor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A dual-licensed Roofing and General Contractor understands both the roof system and the structure underneath it. That means better decisions when replacing decking, upgrading hurricane straps, or dealing with hidden framing issues, and it helps ensure your project complies with Florida Building Code and HVHZ requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Why is a mechanically seamed metal roof better than exposed fastener metal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mechanically seamed standing seam metal roofs use concealed clips and continuous seams, reducing penetrations and improving wind uplift performance. Exposed fastener systems rely on hundreds of screws and washers that can back out and deteriorate over time, which is a bigger risk in Florida's heat and storms."
      }
    },
    {
      "@type": "Question",
      "name": "What is a wind mitigation report and why do I need one after a new roof?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A wind mitigation report documents how your home and new roof are secured against high winds, including roof covering, deck attachment, and secondary water barriers. After a roof replacement, an updated report is often required for you to receive available insurance discounts in Florida."
      }
    },
    {
      "@type": "Question",
      "name": "How does All Phase protect my property during a roof replacement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All Phase uses professional property-protection equipment including Catch-All style systems, driveway and landscaping protection, and daily cleanup with magnets. We put a written plan in place for protecting driveways, landscaping, and pool areas so expectations are clear before work begins."
      }
    },
    {
      "@type": "Question",
      "name": "Does All Phase Construction USA meet all 30 standards in the Ultimate Roof Buyer's Guide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All Phase Construction USA was built around these 30 standards and we meet them on every project, from permits and inspections to materials, documentation, warranties, and post-storm inspections for the life of the roof."
      }
    }
  ]
};

export default function RoofGuideFaqSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(roofGuideFaqSchema)
      }}
    />
  );
}
