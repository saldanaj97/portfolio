import { ThemeSwitcher } from "~/components/theme/ThemeSwitcher";
import CallToAction from "./(landing-page)/cta";
import { Experience } from "./(landing-page)/experience";
import { Header } from "./(landing-page)/header";
import { Projects } from "./(landing-page)/projects";
import Skills from "./(landing-page)/skills";

export default function HomePage() {
  return (
    <main className="flex w-full max-w-7xl justify-center">
      <ThemeSwitcher />
      <div className="space-y-8">
        <Header />
        <Skills />
        <Projects />
        <Experience />
        <CallToAction />
      </div>
    </main>
  );
}
