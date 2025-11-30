const homeLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["RoofingContractor", "LocalBusiness"],
  "name": "All Phase Construction USA",
  "url": "https://www.allphaseusa.com",
  "image": "https://www.allphaseusa.com/og-image.jpg",
  "description": "All Phase Construction USA is a dual-licensed Roofing and General Contractor specializing in tile, shingle, metal, and flat roofing systems for homes and condos in Broward and Palm Beach Counties.",
  "telephone": "+1-754-227-5605",
  "priceRange": "$$",
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
    "latitude": 26.3134,
    "longitude": -80.0990
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Boca Raton"
    },
    {
      "@type": "City",
      "name": "Deerfield Beach"
    },
    {
      "@type": "City",
      "name": "Coral Springs"
    },
    {
      "@type": "City",
      "name": "Coconut Creek"
    },
    {
      "@type": "City",
      "name": "Parkland"
    },
    {
      "@type": "City",
      "name": "Delray Beach"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/AllPhaseConstructionUSA",
    "https://www.instagram.com/allphaseconstructionusa"
  ]
};

export default function HomeLocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(homeLocalBusinessSchema)
      }}
    />
  );
}
