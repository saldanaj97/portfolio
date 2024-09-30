import { cookies } from "next/headers";
import { AdminBanner } from "~/components/auth/AdminBanner";
import { createClient } from "~/utils/supabase/server";
import { Header } from "./(sections)/header";
import Skills from "./(sections)/skills";

export default async function HomePage() {
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>{user ? <AdminBanner user={user} /> : null}</div>
      <div className="space-y-8">
        <Header />
        <Skills />
      </div>
    </main>
  );
}
