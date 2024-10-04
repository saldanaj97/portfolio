import { cookies } from "next/headers";
import { AdminBanner } from "~/components/auth/AdminBanner";
import { ThemeSwitcher } from "~/components/theme/ThemeSwitcher";
import { createClient } from "~/utils/supabase/server";
import { Experience } from "./(landing-page)/experience";
import { Header } from "./(landing-page)/header";
import { Projects } from "./(landing-page)/projects";
import Skills from "./(landing-page)/skills";

export default async function HomePage() {
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex w-full max-w-7xl justify-center">
      <div className="w-full">{user ? <AdminBanner user={user} /> : null}</div>
      <ThemeSwitcher />
      <div className="space-y-8">
        <Header />
        <Skills />
        <Projects />
        <Experience />
      </div>
    </main>
  );
}
