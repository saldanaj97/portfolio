import { Button, Image } from "@nextui-org/react";
import {
  BlogButton,
  ContactMeButton,
  ProjectsButton,
} from "~/components/ui/nav-buttons";

const Hero = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
        <div className="flex h-full w-full items-center justify-center">
          <Image src="/personal-img.jpg" alt="personal-photo" />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold md:text-6xl">
              Hi! I'm Juan
              <span role="img" aria-label="waving hand">
                👋🏼
              </span>
            </h1>
            <h2 className="text-lg text-gray-500 md:text-2xl">
              Passionate Software Developer crafting solutions with precision
              and efficiency. Based in Dallas, TX, I specialize in building
              dynamic web applications with modern JavaScript frameworks and
              utilize Python for data and science-driven applications.
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button color="primary">Let's Work Together</Button>
            <Button>View Projects</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Header() {
  return (
    <div className="flex h-screen w-full flex-col">
      <ContactMeButton />
      <ProjectsButton />
      <BlogButton />
      <Hero />
    </div>
  );
}
