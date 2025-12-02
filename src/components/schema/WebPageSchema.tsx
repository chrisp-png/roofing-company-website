interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  breadcrumb?: {
    "@type": "BreadcrumbList";
    "itemListElement": Array<{
      "@type": "ListItem";
      "position": number;
      "name": string;
      "item": string;
    }>;
  };
}

export default function WebPageSchema({ name, description, url, breadcrumb }: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": "All Phase Construction USA",
      "url": "https://chrisp-png-roofing-c-gxj0.bolt.host/"
    },
    "about": {
      "@type": "Service",
      "serviceType": "Roofing",
      "provider": {
        "@type": "RoofingContractor",
        "@id": "https://chrisp-png-roofing-c-gxj0.bolt.host/#organization"
      }
    },
    "breadcrumb": breadcrumb,
    "inLanguage": "en-US"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
