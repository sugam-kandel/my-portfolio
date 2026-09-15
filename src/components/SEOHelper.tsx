import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageSeo } from '../seo';

const SITE_URL = 'https://sugamkandel.com.np';
const OG_IMAGE = `${SITE_URL}/assets/sugam.png`;

function setMeta(selector: string, keyAttr: string, keyValue: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(keyAttr, keyValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLinkCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export default function SEOHelper() {
  const location = useLocation();
  const seo = getPageSeo(location.pathname);

  useEffect(() => {
    document.title = seo.title;
    setLinkCanonical(seo.canonical);
    setMeta('meta[name="description"]', 'name', 'description', seo.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', seo.canonical);
    setMeta('meta[property="og:title"]', 'property', 'og:title', seo.ogTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', seo.ogDescription);
    setMeta('meta[name="twitter:url"]', 'name', 'twitter:url', seo.canonical);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.ogTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.ogDescription);
  }, [seo]);

  return null;
}

export { SITE_URL, OG_IMAGE };