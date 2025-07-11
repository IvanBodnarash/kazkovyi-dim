import { client } from "@/sanity/client";

export async function fetchEvents() {
  const EVENTS_QUERY = `*[_type == "events"] | order(publishedAt desc)[0...3]{
        _id,
        title,
        description,
        image,
        publishedAt
    }`;

  const options = { next: { revalidate: 30 } };

  return await client.fetch(EVENTS_QUERY, {}, options);
}
