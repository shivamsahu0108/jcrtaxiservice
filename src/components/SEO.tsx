import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { businessConfig as business } from "../config/business";
import { faqs } from "../data/faqs";

export function SEO({
  title,
  description,
  faq = false,
}: {
  title: string;
  description: string;
  faq?: boolean;
}) {
  const location = useLocation();
  useEffect(() => {
    const url = `${business.website.replace(/\/$/, "")}${location.pathname}`;
    document.title = title;
    const set = (selector: string, attrs: Record<string, string>) => {
      let element = document.head.querySelector(selector) as
        | HTMLMetaElement
        | HTMLLinkElement
        | null;
      if (!element) {
        element = document.createElement(
          selector.startsWith("link") ? "link" : "meta",
        );
        document.head.appendChild(element);
      }
      Object.entries(attrs).forEach(([key, value]) =>
        element!.setAttribute(key, value),
      );
    };
    set('meta[name="description"]', {
      name: "description",
      content: description,
    });
    set('meta[property="og:title"]', { property: "og:title", content: title });
    set('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    set('meta[property="og:url"]', { property: "og:url", content: url });
    set('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });
    set('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    set('link[rel="canonical"]', { rel: "canonical", href: url });
    document.getElementById("page-jsonld")?.remove();
    const script = document.createElement("script");
    script.id = "page-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(
      faq
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(([name, text]) => ({
              "@type": "Question",
              name,
              acceptedAnswer: { "@type": "Answer", text },
            })),
          }
        : {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: business.website,
              },
              { "@type": "ListItem", position: 2, name: title, item: url },
            ],
          },
    );
    document.head.appendChild(script);
    return () => script.remove();
  }, [description, faq, location.pathname, title]);
  return null;
}

export function SiteSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "site-jsonld";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebSite", name: business.name, url: business.website },
        {
          "@type": "TaxiService",
          name: business.name,
          url: business.website,
          telephone: `+91${business.phone}`,
          email: business.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: business.address.street,
            addressLocality: business.city,
            addressRegion: business.state,
            postalCode: business.postalCode,
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 00:00-23:59",
          areaServed: { "@type": "City", name: business.city },
        },
      ],
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);
  return null;
}
