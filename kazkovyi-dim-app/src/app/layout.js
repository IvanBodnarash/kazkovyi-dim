"use client";

import "./globals.css";
import Header from "./components/ui/Header";
import { useState } from "react";
import ConnectWithUsContext from "./context/ConnectWithUsContext";

export default function RootLayout({ children }) {
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  return (
    <html lang="uk" suppressHydrationWarning={true}>
      <body>
        <ConnectWithUsContext value={[isPopupOpened, setIsPopupOpened]}>
          <Header />
          <div onClick={() => setIsPopupOpened(false)}>{children}</div>
        </ConnectWithUsContext>
      </body>
    </html>
  );
}
