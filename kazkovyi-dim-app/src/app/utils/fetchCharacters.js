import { client } from "@/sanity/client";

export async function fetchCharacters() {
  const CHARS_QUERY = `*[_type == "characters"] | order(lower(title)){
        _id,
        title,
        description,
        image,
    }`;

  const options = { next: { revalidate: 30 } };

  return await client.fetch(CHARS_QUERY, {}, options);
}
