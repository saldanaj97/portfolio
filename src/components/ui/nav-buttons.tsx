"use client";

import { Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";

// TODO - Look into the page size growing when animation are present
//      - Update to use the same format as the HeroButtons component for motion
export const ContactMeButton = ({ isPresent }: { isPresent: boolean }) => {
  return (
    <>
      {isPresent && (
        <motion.div
          key="contact-me-button"
          initial={{ opacity: 0, transform: "translateX(100%)" }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5 },
            transform: "translateX(0%)",
          }}
          exit={{ opacity: 0 }}
          className="absolute right-0 top-1/2 z-50 rounded-lg px-4 py-2"
        >
          <Link href="/contact-me">
            <Button>Contact Me</Button>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export const BlogButton = ({ isPresent }: { isPresent: boolean }) => {
  return (
    <>
      {isPresent && (
        <motion.div
          key="blog-button"
          initial={{ opacity: 0, transform: "translateX(-100%)" }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5 },
            transform: "translateX(0%)",
          }}
          exit={{ opacity: 0 }}
          className="absolute left-0 top-1/2 z-50 rounded-lg px-4 py-2"
        >
          <Link href="/blog">
            <Button>Blog</Button>
          </Link>
        </motion.div>
      )}
    </>
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
