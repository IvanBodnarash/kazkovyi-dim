export default function processDate(date) {
  return new Date(date).toLocaleDateString("uk-UK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
