import AllEventsWrapper from "@/app/components/events/AllEventsWrapper";
import { getEventsMetadata } from "@/app/seo/metadata";
import JsonLd from "@/app/seo/jsonLd";

export const metadata = getEventsMetadata("es");

export default async function EventsPage({ searchParams }) {
  const params = await searchParams;

  return (
    <>
      <JsonLd language="es" />

      <div
        id="events"
        className="bg-[#9eb3c2] lg:bg-[url('/backgrounds/inst.png')] bg-cover items-center justify-center min-h-full xl:min-h-screen pt-12 sm:p-14 gap-16"
      >
        <AllEventsWrapper searchParams={params} />
      </div>
    </>
  );
}
