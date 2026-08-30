"use client";

import { useEffect, useState } from "react";

import Header from "./Header";
import LoadingComponent from "./LoadingComponent";
import ConnectWithUsContext from "@/app/context/ConnectWithUsContext";
import I18nProvider from "@/app/i18n/I18nProvider";
import { ContactsProvider } from "@/app/context/ContactsContext";

export default function ClientLayout({ children, contacts }) {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setFadeOut(true);
    }, 1200);

    const fadeTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(fadeTimeout);
    };
  }, []);

  return (
    <I18nProvider>
      <ContactsProvider contacts={contacts}>
        <ConnectWithUsContext value={[isPopupOpened, setIsPopupOpened]}>
          <Header />

          <main onClick={() => setIsPopupOpened(false)}>{children}</main>

          {isLoading && <LoadingComponent fadeOut={fadeOut} />}
        </ConnectWithUsContext>
      </ContactsProvider>
    </I18nProvider>
  );
}
