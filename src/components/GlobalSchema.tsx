import { useEffect } from 'react';

export default function GlobalSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      "@id": "https://chrisp-png-roofing-c-gxj0.bolt.host/#organization",
      "name": "All Phase Construction USA, LLC",
      "legalName": "All Phase Construction USA, LLC",
      "url": "https://chrisp-png-roofing-c-gxj0.bolt.host/",
      "logo": "https://chrisp-png-roofing-c-gxj0.bolt.host/logo.png",
      "description": "All Phase Construction USA is a dual-licensed roofing contractor and general contractor serving Broward and Palm Beach counties in South Florida. We specialize in residential and commercial roofing including tile, metal, shingle, and flat roof systems.",
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
        "latitude": "26.3185",
        "longitude": "-80.0998"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Boca Raton",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        },
        {
          "@type": "City",
          "name": "Deerfield Beach",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        },
        {
          "@type": "City",
          "name": "Pompano Beach",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        },
        {
          "@type": "City",
          "name": "Fort Lauderdale",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        },
        {
          "@type": "City",
          "name": "Coral Springs",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        },
        {
          "@type": "City",
          "name": "Delray Beach",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        },
        {
          "@type": "City",
          "name": "Boynton Beach",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        },
        {
          "@type": "City",
          "name": "West Palm Beach",
          "containedIn": {
            "@type": "State",
            "name": "Florida"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Broward County"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Palm Beach County"
        }
      ],
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/allphaseusa",
        "https://www.instagram.com/allphaseusa"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Roofing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Roofing",
              "description": "Complete residential roof replacement and installation services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Roofing",
              "description": "Commercial and multi-family roofing solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tile Roofing",
              "description": "Concrete and clay tile roof installation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Metal Roofing",
              "description": "Standing seam and mechanically seamed metal roofing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Shingle Roofing",
              "description": "Architectural shingle roof installation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Flat Roofing",
              "description": "TPO, modified bitumen, and IB PVC flat roofing systems"
            }
          }
        ]
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
