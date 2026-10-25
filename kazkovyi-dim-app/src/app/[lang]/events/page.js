import { notFound } from "next/navigation";

import AllEventsWrapper from "@/app/components/events/AllEventsWrapper";
import JsonLd from "@/app/seo/jsonLd";

import { getEventsMetadata } from "@/app/seo/metadata";

const supportedLanguages = ["en", "uk"];

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "uk" }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;

  if (!supportedLanguages.includes(lang)) {
    return {};
  }

  return getEventsMetadata(lang);
}

export default async function EventsPage({ params, searchParams }) {
  const { lang } = await params;
  const queryParams = await searchParams;

  if (!supportedLanguages.includes(lang)) {
    notFound();
  }

  return (
    <>
      <JsonLd language={lang} />

      <div
        id="events"
        className="bg-[#9eb3c2] lg:bg-[url('/backgrounds/inst.png')] bg-cover items-center justify-center min-h-full xl:min-h-screen pt-12 sm:p-14 gap-16"
      >
        <AllEventsWrapper searchParams={queryParams} />
      </div>
    </>
  );
}
