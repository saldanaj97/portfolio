import { Button, Link } from "@nextui-org/react";
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
