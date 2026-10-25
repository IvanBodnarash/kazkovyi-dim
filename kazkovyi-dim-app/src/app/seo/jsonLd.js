const BASE_URL = "https://casadecuentoseventos.com";

const descriptions = {
  es: "Animación infantil y turística para cumpleaños, fiestas, hoteles, restaurantes, eventos y celebraciones en la Costa Brava.",

  en: "Children's entertainment for birthdays, parties, hotels, restaurants, events and celebrations on the Costa Brava.",

  uk: "Дитяча анімація для днів народження, свят, готелів, ресторанів та інших подій на Коста-Брава.",
};

const urls = {
  es: `${BASE_URL}/`,
  en: `${BASE_URL}/en`,
  uk: `${BASE_URL}/uk`,
};

export default function JsonLd({ language = "es" }) {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "LocalBusiness",

    "@id": `${BASE_URL}/#business`,

    name: "Casa de Cuentos",

    description: descriptions[language] || descriptions.es,

    url: urls[language] || urls.es,

    image: `${BASE_URL}/og-image.jpg`,

    telephone: "+34602705592",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Lloret de Mar",
      addressRegion: "Girona",
      postalCode: "17310",
      addressCountry: "ES",
    },

    areaServed: [
      {
        "@type": "Place",
        name: "Costa Brava",
      },

      {
        "@type": "Place",
        name: "Girona",
      },

      {
        "@type": "Place",
        name: "Barcelona",
      },

      {
        "@type": "Place",
        name: "Catalonia",
      },
    ],

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
