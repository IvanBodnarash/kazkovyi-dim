export default function processDate(date, language) {
  const locales = {
    es: "es-ES",
    en: "en-US",
    uk: "uk-UA",
  };

  return new Date(date).toLocaleDateString(locales[language] || "es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
