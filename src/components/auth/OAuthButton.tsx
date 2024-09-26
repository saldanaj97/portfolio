import { type Provider } from "@supabase/supabase-js";
import { redirect, usePathname } from "next/navigation";
import React from "react";

import { createClient } from "~/utils/supabase/client";

export function OAuthButton({
  provider,
}: {
  provider: Provider;
}): React.ReactElement | null {
  const pathname = usePathname();
  const supabase = createClient();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${pathname}`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect(`/auth/callback?next=${pathname}`);
  };

  if (provider === "google") {
    return (
      <button
        // variant="outline"
        className="text-muted-foreground mb-2 w-full font-normal"
        onClick={() => handleLogin().catch(console.error)}
      >
        <div className="flex items-center gap-2">
          {/* <FcGoogle className="h-5 w-5" /> */}
          <p>Sign in with Google</p>
        </div>
      </button>
    );
  }

  // Return null if no valid provider is matched
  return null;
}

export default OAuthButton;
