import AllEventsWrapper from "@/app/components/events/AllEventsWrapper";

export default async function EventsPage({ searchParams }) {
  const params = await searchParams;

  return (
    <div
      id="events"
      className="bg-[#9eb3c2] lg:bg-[url('/backgrounds/inst.png')] bg-cover items-center justify-center min-h-full xl:min-h-screen pt-12 sm:p-14 gap-16"
    >
      <AllEventsWrapper searchParams={params} />
    </div>
  );
}
