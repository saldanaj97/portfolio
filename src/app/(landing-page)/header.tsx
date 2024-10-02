import Hero from "~/components/header/hero";
import { Navbar } from "~/components/ui/navbar";

export function Header() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Navbar />
      <Hero />
    </div>
  );
}
