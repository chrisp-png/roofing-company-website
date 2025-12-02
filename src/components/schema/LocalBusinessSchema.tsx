interface LocalBusinessSchemaProps {
  cityName: string;
  citySlug: string;
}

export default function LocalBusinessSchema({ cityName, citySlug }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": "https://chrisp-png-roofing-c-gxj0.bolt.host/#organization",
    "name": "All Phase Construction USA, LLC",
    "legalName": "All Phase Construction USA, LLC",
    "description": `Licensed roofing contractor serving ${cityName}, FL. Specializing in residential and commercial roof installations including tile, metal, shingle, and flat roofing systems.`,
    "url": "https://chrisp-png-roofing-c-gxj0.bolt.host/",
    "logo": "https://chrisp-png-roofing-c-gxj0.bolt.host/logo.png",
    "telephone": "+1-754-227-5605",
    "email": "info@allphaseusa.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Broward County",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": cityName,
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "State",
        "name": "Florida",
        "containedInPlace": {
          "@type": "Country",
          "name": "United States"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Tile Roof Installation in ${cityName}`,
            "serviceType": "Roofing",
            "areaServed": cityName
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Metal Roof Installation in ${cityName}`,
            "serviceType": "Roofing",
            "areaServed": cityName
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Shingle Roof Installation in ${cityName}`,
            "serviceType": "Roofing",
            "areaServed": cityName
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Flat Roof Installation in ${cityName}`,
            "serviceType": "Roofing",
            "areaServed": cityName
          }
        }
      ]
    },
    "priceRange": "$$$",
    "paymentAccepted": "Cash, Check, Credit Card, Financing",
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Fr 07:00-18:00, Sa 08:00-14:00",
    "sameAs": [
      "https://www.facebook.com/allphaseconstructionusa",
      "https://www.linkedin.com/company/allphaseconstructionusa"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "slogan": "Dual-Licensed Roofing & General Contractor",
    "knowsAbout": [
      "Residential Roofing",
      "Commercial Roofing",
      "Tile Roofing",
      "Metal Roofing",
      "Shingle Roofing",
      "Flat Roofing",
      "Wind Mitigation",
      "Florida Building Code",
      "HVHZ Compliance"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Free Roof Assessment",
        "price": "0",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Roof Financing",
        "description": "Flexible payment plans available for qualified homeowners"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
