import { client } from "@/sanity/client";

export async function fetchContacts() {
  const CONTACTS_QUERY = `
    *[_type == "contacts"][0] {
      instagram,
      telegram,
      viber,
      whatsapp,
      phone
    }
  `;

  return await client.fetch(
    CONTACTS_QUERY,
    {},
    {
      next: {
        revalidate: 30,
      },
    },
  );
}
