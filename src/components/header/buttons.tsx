import { Button, Link } from "@nextui-org/react";

// TODO - Make sure each of the buttons function correctly
//          - [ ] Contact Me Button (link to ?)
//          - [ ] Projects Button (link to Projects section below)
export const HeroButtons = () => {
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row" key="hero-buttons">
        <Button color="primary">Let's Work Together</Button>
        <Button>View Projects</Button>
      </div>
    </>
  );
};

export const ContactMeButton = () => {
  return (
    <>
      <div className="absolute right-0 top-1/2 z-50 rounded-lg px-4 py-2">
        <Link href="/contact-me">
          <Button>Contact Me</Button>
        </Link>
      </div>
    </>
  );
};

export const BlogButton = () => {
  return (
    <>
      <div className="absolute left-0 top-1/2 z-50 rounded-lg px-4 py-2">
        <Link href="/blog">
          <Button>Blog</Button>
        </Link>
      </div>
    </>
  );
};
