import { cookies } from "next/headers";
import AuthComponent from "~/components/AuthComponent";
import { createClient } from "~/utils/supabase/server";

export default async function HomePage() {
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>

        <div>
          {user ? (
            <h2 className="text-center text-2xl font-bold">
              Welcome, {user?.email}
            </h2>
          ) : (
            // <a
            //   href="/api/auth/signin"
            //   className="text-center text-2xl font-bold underline"
            // >
            <AuthComponent />
            // </a>
          )}
        </div>
      </div>
    </main>
  );
}
