"use client";

import { useEffect, useState } from "react";
import { UserAuthContextProvider } from "../context/userAuthContext";

import "./globals.css";

export default function Lol({ children }) {
  const [disablePullToRefresh, setDisablePullToRefresh] = useState(false);

  useEffect(() => {
    const curr = window.location.pathname;
    if (
      curr !== "/" &&
      curr !== "/map" &&
      curr !== "/profile" &&
      curr !== "/verify-email"
    ) {
      setDisablePullToRefresh(true);
    }
  }, []);

  return (
    <html
      lang="en"
      style={disablePullToRefresh ? { overscrollBehaviorY: "none" } : null}
    >
      <body>
        <UserAuthContextProvider>{children}</UserAuthContextProvider>
      </body>
    </html>
  );
}
