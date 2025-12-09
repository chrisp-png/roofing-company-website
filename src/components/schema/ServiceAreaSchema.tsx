import { useEffect } from 'react';

interface ServiceArea {
  name: string;
  latitude: number;
  longitude: number;
  zipCodes: string[];
}

interface ServiceAreaSchemaProps {
  serviceAreas: ServiceArea[];
}

export default function ServiceAreaSchema({ serviceAreas }: ServiceAreaSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Roofing Contractor Services",
      "provider": {
        "@type": "RoofingContractor",
        "name": "All Phase Construction USA",
        "url": "https://chrisp-png-roofing-c-gxj0.bolt.host",
        "telephone": "561-123-4567",
        "areaServed": serviceAreas.map(area => ({
          "@type": "City",
          "name": area.name,
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": area.latitude,
            "longitude": area.longitude
          },
          "postalCode": area.zipCodes
        }))
      }
    };

    const scriptId = 'service-area-schema';
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [serviceAreas]);

  return null;
}
