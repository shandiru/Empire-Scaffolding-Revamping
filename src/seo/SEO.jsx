import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { absoluteUrl, DEFAULT_IMAGE, getRouteMeta, SITE_NAME, SITE_URL } from "./routeMeta";

const setMetaTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
};

const setLinkTag = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getRouteMeta(pathname);
    const canonicalUrl = absoluteUrl(meta.path);
    const imageUrl = `${SITE_URL}${DEFAULT_IMAGE}`;

    document.title = meta.title;
    setLinkTag("canonical", canonicalUrl);

    setMetaTag('meta[name="description"]', {
      name: "description",
      content: meta.description,
    });

    setMetaTag('meta[property="og:title"]', {
      property: "og:title",
      content: meta.title,
    });
    setMetaTag('meta[property="og:description"]', {
      property: "og:description",
      content: meta.description,
    });
    setMetaTag('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });
    setMetaTag('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    setMetaTag('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    setMetaTag('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: SITE_NAME,
    });

    setMetaTag('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    setMetaTag('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: meta.title,
    });
    setMetaTag('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: meta.description,
    });
    setMetaTag('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: imageUrl,
    });
  }, [pathname]);

  return null;
};

export default SEO;
