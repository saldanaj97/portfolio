"use client";

import { Button } from "@nextui-org/button";
import { type User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { createClient } from "~/utils/supabase/client";

export default function SignOutButton({ user }: { user: User }) {
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  if (!user) return null;

  return (
    <Button
      type="button"
      className="text-md font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={handleSignOut}
    >
      Sign out
    </Button>
  );
}
