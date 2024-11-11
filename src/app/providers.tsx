// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { UserProvider } from "./context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <UserProvider>
        <NextThemesProvider attribute="class">{children}</NextThemesProvider>
      </UserProvider>
    </NextUIProvider>
  );
}
