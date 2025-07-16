import { client } from "@/sanity/client";

export async function fetchReviews() {
  const REVIEWS_QUERY = `*[_type == "reviews"] | order(publishedAt desc){
        _id,
        name,
        review,
        publishedAt,
    }`;

  const options = { next: { revalidate: 30 } };

  return await client.fetch(REVIEWS_QUERY, {}, options);
}
