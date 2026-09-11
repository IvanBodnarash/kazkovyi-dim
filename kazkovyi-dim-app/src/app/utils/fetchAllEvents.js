import { client } from "@/sanity/client";

const EVENTS_PER_PAGE = 9;

export async function fetchAllEvents(page = 1) {
  const start = (page - 1) * EVENTS_PER_PAGE;
  const end = start + EVENTS_PER_PAGE;

  const EVENTS_QUERY = `
    {
      "events": *[_type == "events"]
        | order(publishedAt desc)
        [$start...$end] {
          _id,
          title,
          description,
          image,
          publishedAt
        },

      "total": count(*[_type == "events"])
    }
  `;

  const options = {
    next: {
      revalidate: 30,
    },
  };

  return await client.fetch(
    EVENTS_QUERY,
    {
      start,
      end,
    },
    options,
  );
}
