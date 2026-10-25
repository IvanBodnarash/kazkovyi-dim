import { notFound } from "next/navigation";
import HomeContent from "../components/home/HomeContent";
import JsonLd from "../seo/jsonLd";

const supportedLanguages = ["en", "uk"];

export default async function LanguagePage({ params }) {
  const { lang } = await params;

  if (!supportedLanguages.includes(lang)) {
    notFound();
  }

  return (
    <>
      <JsonLd />
      <HomeContent />
    </>
  );
}
