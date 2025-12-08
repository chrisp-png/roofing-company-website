import { useEffect } from 'react';

interface ImageGallerySchemaProps {
  images: Array<{
    url: string;
    caption: string;
    city: string;
    roofType: string;
  }>;
  name: string;
  description: string;
}

export default function ImageGallerySchema({ images, name, description }: ImageGallerySchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": name,
      "description": description,
      "url": window.location.href,
      "image": images.map(img => ({
        "@type": "ImageObject",
        "contentUrl": img.url,
        "caption": img.caption,
        "description": `${img.roofType} in ${img.city} by All Phase Construction USA`,
        "author": {
          "@type": "Organization",
          "name": "All Phase Construction USA"
        }
      }))
    };

    const scriptId = 'image-gallery-schema';
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
  }, [images, name, description]);

  return null;
}
