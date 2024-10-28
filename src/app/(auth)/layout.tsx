import { redirect } from "next/navigation";
import React from "react";
import { supabase } from "./actions";

async function RootLayout({ children }: { children: React.ReactNode }) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/");
  }
  return <div>{children}</div>;
}

export default RootLayout;
