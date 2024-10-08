"use client";

import { Image } from "@nextui-org/react";
import { usePresence } from "framer-motion";
import { BlogButton, ContactMeButton } from "~/components/ui/nav-buttons";

import { Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";

// TODO - Make sure each of the buttons function correctly
//          - [ ] Contact Me Button (link to ?)
//          - [ ] Projects Button (link to Projects section below)
export const HeroButtons = ({ isPresent }: { isPresent: boolean }) => {
  return (
    <AnimatePresence>
      {isPresent && (
        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          key="hero-buttons"
          initial={{ opacity: 0, transform: "translateY(500%)" }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5 },
            transform: "translateY(0%)",
          }}
          exit={{ opacity: 0 }}
        >
          <Button color="primary">Let's Work Together</Button>
          <Button>View Projects</Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export function Header() {
  const [isPresent, safeToRemove] = usePresence();

  const Hero = () => {
    const imageSrc =
      process.env.NODE_ENV === "development"
        ? "https://dummyimage.com/450x650&text=Dev+Environment+Placeholder"
        : "/personal-img.jpg";

    return (
      <div className="grid h-screen place-items-center">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
          <div className="flex h-full w-full items-center justify-center">
            <Image src={imageSrc} alt="personal-photo" />
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
            <HeroButtons isPresent={isPresent} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen w-full flex-col">
      <ContactMeButton isPresent={isPresent} />
      <BlogButton isPresent={isPresent} />
      <Hero />
    </div>
  );
}
