import { fetchAllEvents } from "@/app/utils/fetchAllEvents";
import AllEventsClient from "./AllEventsClient";

export default async function AllEventsWrapper({ searchParams }) {
  const page = Math.max(Number(searchParams?.page) || 1, 1);

  const { events, total } = await fetchAllEvents(page);

  const totalPages = Math.ceil(total / 9);

  return <AllEventsClient events={events} currentPage={page} totalPages={totalPages} />;
}
