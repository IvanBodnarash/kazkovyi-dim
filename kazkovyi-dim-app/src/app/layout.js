import "./globals.css";
import ClientLayout from "./components/ui/ClientLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
