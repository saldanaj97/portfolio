"use client";

import { Button } from "@nextui-org/button";
import { redirect, usePathname } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { createClient } from "~/utils/supabase/client";

export default function AdminSignInButton() {
  const supabase = createClient();
  const pathname = usePathname();

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${pathname}`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect(`/auth/callback?next=${pathname}`);
  };

  return (
    <div className="flex h-full w-full flex-row items-center justify-center">
      <div className="flex h-1/2 w-1/4 flex-col items-center justify-center space-y-4 rounded-lg bg-gray-100 p-6 shadow-md">
        <h2 className="text-center text-3xl font-bold text-gray-800">
          Admin Panel
        </h2>
        <Button
          type="button"
          className="w-fit rounded-md bg-blue-600 px-4 py-6 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={handleSignIn}
        >
          <FcGoogle className="h-5 w-5" />
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
