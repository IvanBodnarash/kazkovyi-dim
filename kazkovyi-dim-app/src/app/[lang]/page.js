import { notFound } from "next/navigation";

import HomeContent from "../components/home/HomeContent";
import JsonLd from "../seo/jsonLd";

import { getHomeMetadata } from "../seo/metadata";

const supportedLanguages = ["en", "uk"];

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "uk" }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;

  if (!supportedLanguages.includes(lang)) {
    return {};
  }

  return getHomeMetadata(lang);
}

export default async function LanguageHome({ params }) {
  const { lang } = await params;

  if (!supportedLanguages.includes(lang)) {
    notFound();
  }

  return (
    <>
      <JsonLd language={lang} />

      <HomeContent />
    </>
  );
}
