interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorJobTitle?: string;
  imageUrl?: string;
  url: string;
  keywords?: string[];
}

export default function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  authorName,
  authorJobTitle = "Roofing Specialist",
  imageUrl = "https://chrisp-png-roofing-c-gxj0.bolt.host/og-image.jpg",
  url,
  keywords = []
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": imageUrl,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": authorName,
      "jobTitle": authorJobTitle,
      "worksFor": {
        "@type": "RoofingContractor",
        "name": "All Phase Construction USA, LLC",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "590 Goolsby Blvd",
          "addressLocality": "Deerfield Beach",
          "addressRegion": "FL",
          "postalCode": "33442",
          "addressCountry": "US"
        }
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "All Phase Construction USA, LLC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chrisp-png-roofing-c-gxj0.bolt.host/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    ...(keywords.length > 0 && { "keywords": keywords.join(", ") })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
