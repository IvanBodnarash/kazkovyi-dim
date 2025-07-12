import { client } from "@/sanity/client";

export async function fetchAbouUs() {
  const ABOUTUS_QUERY = `*[_type == "aboutUs"] | order(publishedAt desc){
        _id,
        image,
        description,
        publishedAt,
    }`;

  const options = { next: { revalidate: 30 } };

  return await client.fetch(ABOUTUS_QUERY, {}, options);
}
