import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { AdminBanner } from "~/components/auth/AdminBanner";
import { supabase } from "./(auth)/actions";
import { Providers } from "./providers";

export const metadata = {
  title: "Juan Saldaña",
  description:
    "Software Engineer and Full Stack Developer based in Dallas, TX.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable}`}
    >
      <div className="w-full">{user ? <AdminBanner user={user} /> : null}</div>
      <body className="flex w-full justify-center">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
