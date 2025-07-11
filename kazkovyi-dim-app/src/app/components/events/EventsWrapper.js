import { fetchEvents } from "@/app/utils/fetchEvents";
import EventsClient from "./EventsClient";

export default async function EventsWrapper() {
  const events = await fetchEvents();

  return <EventsClient events={events} />;
}
