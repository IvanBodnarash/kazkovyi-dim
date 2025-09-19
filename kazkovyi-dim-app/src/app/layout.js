"use client";

import "./globals.css";
import Header from "./components/ui/Header";
import { useEffect, useState } from "react";
import ConnectWithUsContext from "./context/ConnectWithUsContext";
import LoadingComponent from "./components/ui/LoadingComponent";

export default function RootLayout({ children }) {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }, 1200);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <html
      lang="uk"
      style={{ overflowX: "hidden" }}
      suppressHydrationWarning={true}
    >
      <body>
        {isLoading ? (
          <LoadingComponent fadeOut={fadeOut} />
        ) : (
          <ConnectWithUsContext value={[isPopupOpened, setIsPopupOpened]}>
            <Header />
            <div onClick={() => setIsPopupOpened(false)}>{children}</div>
          </ConnectWithUsContext>
        )}
      </body>
    </html>
  );
}
