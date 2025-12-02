interface ImageObjectSchemaProps {
  url: string;
  caption: string;
  description?: string;
  width?: number;
  height?: number;
}

export default function ImageObjectSchema({
  url,
  caption,
  description,
  width = 1200,
  height = 800
}: ImageObjectSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": url,
    "url": url,
    "caption": caption,
    "description": description || caption,
    "width": width,
    "height": height,
    "uploadDate": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "All Phase Construction USA, LLC"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
