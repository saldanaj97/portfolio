import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { Navbar } from "~/components/ui/navbar";

export const metadata = {
  title: "Juan Saldaña",
  description:
    "Software Engineer and Full Stack Developer based in Dallas, TX.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable}`}
    >
      <body className="flex w-full justify-center px-8">
        <div className="w-full">
          <Navbar />
          <NextUIProvider>{children}</NextUIProvider>
        </div>
      </body>
    </html>
  );
}
