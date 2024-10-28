"use server";

import { cookies } from "next/headers";
import Link from "next/link";
import { createClient } from "~/utils/supabase/server";
// import ThemeToggleSwitch from "../theme/ThemeToggleSwitch";
// import { Button } from "../ui/button";
// import ProfileButton from "./ProfileButton";

export default async function AuthComponent() {
  const supabase = createClient(await cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex flex-row justify-end gap-4">
      <div className="flex items-center gap-4">
        <h1>
          Welcome, <span className="font-bold">{user?.email}</span>
        </h1>
      </div>
      {/* <ThemeToggleSwitch />
      <ProfileButton user={user} /> */}
    </div>
  ) : (
    <div className="hidden items-center justify-end gap-4 sm:flex">
      <Link href="/auth/login" className="w-full sm:w-auto">
        <button className="w-full">Log In</button>
      </Link>
    </div>
  );
}
