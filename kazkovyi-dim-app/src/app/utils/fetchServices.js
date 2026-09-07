import { client } from "@/sanity/client";

export async function fetchServices() {
  const SERVICES_QUERY = `*[_type == "services"]{
    _id,
    title,
    image,
    shortDescription,
    description,
    gallery[]{
      _key,
      alt,
      asset
    }
  }`;

  const options = { next: { revalidate: 30 } };

  return await client.fetch(SERVICES_QUERY, {}, options);
}
