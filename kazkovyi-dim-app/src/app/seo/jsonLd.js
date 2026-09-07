export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Casa de Cuentos",
    description: "Animación infantil y turística para fiestas, hoteles, eventos y celebraciones en la Costa Brava.",
    url: "https://casadecuentoseventos.com",
    image: "https://casadecuentoseventos.com/og-image.jpg",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Lloret de Mar",
      addressRegion: "Girona",
      addressCountry: "ES",
    },

    areaServed: {
      "@type": "Place",
      name: "Costa Brava, Girona, España",
    },

    sameAs: ["https://www.instagram.com/casadecuentos.es/"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
