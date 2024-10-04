import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import React from "react";
import { Providers } from "./providers";

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
      <body className="flex w-full justify-center">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
