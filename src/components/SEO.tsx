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

    const baseUrl = 'https://www.allphaseusa.com';

    updateOrCreateMeta('description', description);
    updateOrCreateMeta('robots', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');

    updateOrCreateMeta('og:site_name', 'All Phase Construction USA', true);
    updateOrCreateMeta('og:locale', 'en_US', true);
    updateOrCreateMeta('og:title', ogTitle || title, true);
    updateOrCreateMeta('og:description', ogDescription || description, true);
    updateOrCreateMeta('og:type', 'website', true);

    const fullUrl = url ? (url.startsWith('http') ? url : `${baseUrl}${url}`) : window.location.href;
    updateOrCreateMeta('og:url', fullUrl, true);

    const imageUrl = ogImageUrl || ogImage || `${baseUrl}/images/hero-desktop-1920.jpg`;
    updateOrCreateMeta('og:image', imageUrl, true);
    updateOrCreateMeta('og:image:width', '1920', true);
    updateOrCreateMeta('og:image:height', '1080', true);
    updateOrCreateMeta('og:image:alt', title, true);

    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:site', '@allphaseusa');
    updateOrCreateMeta('twitter:title', ogTitle || title);
    updateOrCreateMeta('twitter:description', ogDescription || description);
    updateOrCreateMeta('twitter:image', imageUrl);
    updateOrCreateMeta('twitter:image:alt', title);

    const canonicalUrl = canonical || url || window.location.pathname;
    const fullCanonicalUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`;

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', fullCanonicalUrl);

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
