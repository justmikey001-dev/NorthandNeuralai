import { useEffect } from 'react';

interface SEOOptions {
  title: string;
  description: string;
  path?: string;
}

const SITE_NAME = 'North & Neural AI';
const BASE_OG_IMAGE = '/og-image.svg';

function setTag(selector: string, attribute: string, value: string) {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = document.createElement('meta');
    const [, attrName, attrValue] = selector.match(/\[(.+?)="(.+?)"\]/) || [];
    if (attrName && attrValue) el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute(attribute, value);
}

export function useSEO({ title, description, path = '' }: SEOOptions) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    setTag('meta[name="description"]', 'content', description);

    setTag('meta[property="og:title"]', 'content', fullTitle);
    setTag('meta[property="og:description"]', 'content', description);
    setTag('meta[property="og:type"]', 'content', 'website');
    setTag('meta[property="og:site_name"]', 'content', SITE_NAME);
    setTag('meta[property="og:image"]', 'content', BASE_OG_IMAGE);

    setTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setTag('meta[name="twitter:title"]', 'content', fullTitle);
    setTag('meta[name="twitter:description"]', 'content', description);
    setTag('meta[name="twitter:image"]', 'content', BASE_OG_IMAGE);

    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = `https://northneuralai.com${path}`;
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = `https://northneuralai.com${path}`;
      document.head.appendChild(link);
    }
  }, [title, description, path]);
}
