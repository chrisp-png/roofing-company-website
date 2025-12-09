import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  ogImageUrl?: string;
  schemaJson?: object;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export default function SEO({
  title,
  description,
  url,
  ogImageUrl,
  schemaJson,
  canonical,
  ogTitle,
  ogDescription,
  ogImage
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const updateOrCreateMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMeta('description', description);
    updateOrCreateMeta('robots', 'index,follow');

    updateOrCreateMeta('og:title', ogTitle || title, true);
    updateOrCreateMeta('og:description', ogDescription || description, true);
    updateOrCreateMeta('og:type', 'website', true);

    if (url) {
      updateOrCreateMeta('og:url', url, true);
    }

    const imageUrl = ogImageUrl || ogImage || 'https://chrisp-png-roofing-c-gxj0.bolt.host/og-image.jpg';
    updateOrCreateMeta('og:image', imageUrl, true);
    updateOrCreateMeta('og:image:width', '1200', true);
    updateOrCreateMeta('og:image:height', '630', true);

    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', ogTitle || title);
    updateOrCreateMeta('twitter:description', ogDescription || description);
    updateOrCreateMeta('twitter:image', imageUrl);

    if (canonical || url) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical || url || '');
    }

    let schemaScript = document.querySelector('script[data-schema="true"]');
    if (schemaJson) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        schemaScript.setAttribute('data-schema', 'true');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaJson);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [title, description, url, ogImageUrl, schemaJson, canonical, ogTitle, ogDescription, ogImage]);

  return null;
}
