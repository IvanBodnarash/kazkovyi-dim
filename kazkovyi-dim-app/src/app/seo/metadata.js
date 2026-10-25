const BASE_URL = "https://casadecuentoseventos.com";

const homeSeo = {
  es: {
    title: "Casa de Cuentos - Animación Infantil en la Costa Brava",

    description:
      "Animación infantil para cumpleaños, fiestas privadas, hoteles, restaurantes, bodas, comuniones y eventos en la Costa Brava.",

    keywords:
      "animación infantil Costa Brava, animadores infantiles Costa Brava, fiestas infantiles Costa Brava, cumpleaños infantiles, organización de fiestas infantiles, animación infantil a domicilio, animación para hoteles, eventos infantiles Girona",

    locale: "es_ES",

    path: "/",
  },

  en: {
    title: "Children's Entertainment & Kids Parties on the Costa Brava",

    description:
      "Children's entertainers for birthdays, private parties, hotels, restaurants, weddings and family events on the Costa Brava.",

    keywords:
      "children's entertainment Costa Brava, kids parties Costa Brava, children's entertainers, birthday parties Costa Brava, kids entertainment Girona",

    locale: "en_GB",

    path: "/en",
  },

  uk: {
    title: "Аніматори та дитячі свята на Коста-Брава",

    description:
      "Дитяча анімація, аніматори, дні народження та свята для дітей у Жироні, Барселоні та на Коста-Брава.",

    keywords:
      "аніматори Коста Брава, дитячі свята Коста Брава, аніматори Жирона, дитячі дні народження, організація дитячих свят",

    locale: "uk_UA",

    path: "/uk",
  },
};

const eventsSeo = {
  es: {
    title: "Eventos y Fiestas Infantiles | Casa de Cuentos",

    description:
      "Descubre nuestros eventos, fiestas infantiles, cumpleaños, espectáculos y actividades para niños en la Costa Brava.",

    locale: "es_ES",

    path: "/events",
  },

  en: {
    title: "Kids Events & Parties | Casa de Cuentos",

    description:
      "Discover our children's events, birthday parties, shows and activities for kids on the Costa Brava.",

    locale: "en_GB",

    path: "/en/events",
  },

  uk: {
    title: "Дитячі свята та події | Casa de Cuentos",

    description:
      "Наші дитячі свята, дні народження, шоу та розважальні події на Коста-Брава.",

    locale: "uk_UA",

    path: "/uk/events",
  },
};

const languageAlternates = {
  home: {
    es: `${BASE_URL}/`,
    en: `${BASE_URL}/en`,
    uk: `${BASE_URL}/uk`,
    "x-default": `${BASE_URL}/`,
  },

  events: {
    es: `${BASE_URL}/events`,
    en: `${BASE_URL}/en/events`,
    uk: `${BASE_URL}/uk/events`,
    "x-default": `${BASE_URL}/events`,
  },
};

function createMetadata(data, alternates) {
  const url = `${BASE_URL}${data.path}`;

  return {
    metadataBase: new URL(BASE_URL),

    title: data.title,

    description: data.description,

    keywords: data.keywords,

    icons: {
      icon: "/favicon.ico",
    },

    alternates: {
      canonical: url,
      languages: alternates,
    },

    openGraph: {
      title: data.title,
      description: data.description,

      url,

      siteName: "Casa de Cuentos",

      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Casa de Cuentos",
        },
      ],

      locale: data.locale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: ["/og-image.jpg"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export function getHomeMetadata(language = "es") {
  const data = homeSeo[language] || homeSeo.es;

  return createMetadata(data, languageAlternates.home);
}

export function getEventsMetadata(language = "es") {
  const data = eventsSeo[language] || eventsSeo.es;

  return createMetadata(data, languageAlternates.events);
}

export { BASE_URL };