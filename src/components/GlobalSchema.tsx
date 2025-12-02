import { useEffect } from 'react';

export default function GlobalSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.allphaseusa.com/#localbusiness",
      "name": "All Phase Construction USA",
      "alternateName": "All Phase Construction USA, LLC",
      "legalName": "All Phase Construction USA, LLC",
      "description": "All Phase Construction USA is a dual-licensed roofing and general contracting company serving Palm Beach and Broward Counties. Specializing in tile, metal, shingle, and flat roofing systems, roof repairs, HOA/COA roofing, and full reroofs compliant with Florida Building Code HVHZ requirements.",
      "url": "https://www.allphaseusa.com",
      "image": "https://www.allphaseusa.com/brand/allphase-logo.png",
      "logo": "https://www.allphaseusa.com/brand/allphase-logo.png",
      "telephone": "+1-754-227-5605",
      "email": "info@allphaseusa.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "590 Goolsby Blvd",
        "addressLocality": "Deerfield Beach",
        "addressRegion": "FL",
        "postalCode": "33442",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.3182,
        "longitude": -80.0990
      },
      "openingHours": "Mo,Tu,We,Th,Fr 08:00-17:00",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "priceRange": "$$",
      "areaServed": [
        { "@type": "City", "name": "Boca Raton", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Delray Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Boynton Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Deerfield Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Coconut Creek", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Coral Springs", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Parkland", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Pompano Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Lake Worth", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Lantana", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Highland Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Lighthouse Point", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Hillsboro Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Tamarac", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Margate", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Wilton Manors", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Oakland Park", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Fort Lauderdale", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Sunrise", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Lauderdale Lakes", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "AdministrativeArea", "name": "Broward County" },
        { "@type": "AdministrativeArea", "name": "Palm Beach County" }
      ],
      "knowsAbout": [
        "Tile roofing",
        "Metal roofing",
        "Shingle roofing",
        "Flat roofing",
        "IB PVC roofing",
        "Foam adhesive installation",
        "HVHZ Florida Building Code",
        "Insurance roofing claims",
        "HOA and COA roofing",
        "Solar-ready metal roofs",
        "Underlayment systems",
        "Roof repairs",
        "Wind mitigation",
        "Florida Building Code compliance"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "license",
          "name": "Florida General Contractor License",
          "identifier": "CGC1526236"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "license",
          "name": "Florida Roofing Contractor License",
          "identifier": "CCC1331464"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/allphaseusa",
        "https://www.instagram.com/allphaseusa",
        "https://www.youtube.com/allphaseusa",
        "https://g.co/kgs/5gnq7v"
      ],
      "slogan": "Dual-Licensed Roofing & General Contractor",
      "foundingDate": "1999",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Roofing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "serviceType": "RoofingService",
              "name": "Tile Roofing Installation",
              "description": "Concrete and clay tile roof installation with foam adhesive attachment for HVHZ compliance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "serviceType": "RoofingService",
              "name": "Metal Roofing Installation",
              "description": "Standing seam and mechanically seamed metal roofing with solar panel readiness"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "serviceType": "RoofingService",
              "name": "Shingle Roofing Installation",
              "description": "Architectural shingle roof installation with Class 4 impact ratings"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "serviceType": "RoofingService",
              "name": "Flat Roofing Systems",
              "description": "TPO, modified bitumen, and IB PVC flat roofing for commercial and residential properties"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "serviceType": "RoofingService",
              "name": "HOA/COA Roofing",
              "description": "Specialized roofing services for homeowner associations and condominium associations with architectural compliance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "serviceType": "RoofingService",
              "name": "Wind Mitigation Services",
              "description": "Form 1802 wind mitigation inspections and installations for insurance premium reductions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "serviceType": "RoofingService",
              "name": "Roof Repairs",
              "description": "Emergency and scheduled roof repair services for all roofing types"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    let globalSchema = document.querySelector('script[data-global-schema="true"]');
    if (!globalSchema) {
      globalSchema = document.createElement('script');
      globalSchema.setAttribute('type', 'application/ld+json');
      globalSchema.setAttribute('data-global-schema', 'true');
      document.head.appendChild(globalSchema);
    }
    globalSchema.textContent = JSON.stringify(schema);

    return () => {
      globalSchema?.remove();
    };
  }, []);

  return null;
}
