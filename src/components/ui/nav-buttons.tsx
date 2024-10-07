"use client";

import { Button, Link } from "@nextui-org/react";
import { useAnimate, usePresence } from "framer-motion";
import { useEffect } from "react";

// TODO - Look into the page size growing when animation are present

export const ContactMeButton = () => {
  const [isPresent, safeToRemove] = usePresence();
  const [contactButtonScope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        // Slide in from off screen to the correct position
        await animate(
          contactButtonScope.current,
          { right: "15px" }, // End position
          { type: "tween" },
        );
      };
      enterAnimation();
    } else {
      // const exitAnimation = async () => {
      //   // Move it off-screen when it's no longer present
      //   await animate(contactButtonScope.current, {
      //     right: "-100%", // Move it fully off-screen
      //   });
      //   safeToRemove();
      // };
      // exitAnimation();
    }
  }, [isPresent, contactButtonScope, animate, safeToRemove]);

  return (
    <Link
      href="/contact-me"
      className="absolute right-[-100%] top-1/2 z-50 rounded-lg px-4 py-2"
      ref={contactButtonScope} // Initial off-screen position
    >
      <Button>Contact Me</Button>
    </Link>
  );
};
export const BlogButton = () => {
  const [isPresent, safeToRemove] = usePresence();
  const [blogButtonScope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        // Slide in from off screen to the correct position
        await animate(
          blogButtonScope.current,
          { left: "15px" }, // End position
          { type: "tween" },
        );
      };
      enterAnimation();
    } else {
      // const exitAnimation = async () => {
      //   // Move it off-screen when it's no longer present
      //   await animate(scope.current, {
      //     left: "50%", // Move it fully off-screen
      //   });
      //   safeToRemove();
      // };
      // exitAnimation();
    }
  }, [isPresent, blogButtonScope, animate, safeToRemove]);

  return (
    <Link
      href="/blog"
      className="absolute left-[-100%] top-1/2 z-50 rounded-lg px-4 py-2"
      ref={blogButtonScope}
    >
      <Button>Blog</Button>
    </Link>
  );
};

export const ProjectsButton = () => {
  return (
    <Link
      href="/"
      className="absolute bottom-0 left-1/2 z-50 rounded-lg px-4 py-2"
    >
      <Button>Projects</Button>
    </Link>
  );
};
