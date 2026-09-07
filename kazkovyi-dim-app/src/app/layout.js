import "./globals.css";
import ClientLayout from "./components/ui/ClientLayout";
import { fetchContacts } from "./utils/fetchContacts";

export default async function RootLayout({ children }) {
  const contacts = await fetchContacts();

  return (
    <html lang="es">
      <body>
        <ClientLayout contacts={contacts}>{children}</ClientLayout>
      </body>
    </html>
  );
}
