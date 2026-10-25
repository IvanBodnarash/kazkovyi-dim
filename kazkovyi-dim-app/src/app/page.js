import "aos/dist/aos.css";

import HomeContent from "./components/home/HomeContent";
import I18nProvider from "./i18n/I18nProvider";
import JsonLd from "./seo/jsonLd";
import { getHomeMetadata } from "./seo/metadata";

export const metadata = getHomeMetadata("es");

export default function Home() {
  return (
    <I18nProvider language="es">
      <JsonLd />
      <HomeContent />
    </I18nProvider>
  );
}
