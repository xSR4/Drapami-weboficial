import { siteConfig } from "@/lib/site-config";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${siteConfig.url}/#dentist`,
    name: "Dra. Pami - Odontopediatría",
    url: siteConfig.url,
    image: `${siteConfig.url}/hero-dra-pami.webp`,
    telephone: "+51991112048",
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    areaServed: {
      "@type": "City",
      name: "Lima",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
