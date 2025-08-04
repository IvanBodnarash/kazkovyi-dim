export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Казковий Дім",
    description:
      "Організація дитячих свят, аніматори та шоу-програми в Чернівцях",
    url: "https://kazkovyi-dim.vercel.app/",
    image: "https://kazkovyi-dim.vercel.app/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Чернівці",
      addressCountry: "UA",
    },
    sameAs: ["https://www.instagram.com/kazkovyidim.cv/"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
