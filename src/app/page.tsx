import { cookies } from "next/headers";
import { AdminBanner } from "~/components/auth/AdminBanner";
import { createClient } from "~/utils/supabase/server";
import { Header } from "./(sections)/header";
import { Projects } from "./(sections)/projects";
import Skills from "./(sections)/skills";

export default async function HomePage() {
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="w-full">{user ? <AdminBanner user={user} /> : null}</div>
      <div className="w-full space-y-8">
        <Header />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
