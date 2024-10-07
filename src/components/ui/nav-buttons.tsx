import { Button, Link } from "@nextui-org/react";

export const ContactMeButton = () => {
  return (
    <Link
      href="/contact-me"
      className="absolute right-0 top-1/2 z-50 rounded-lg px-4 py-2"
    >
      <Button>Contact Me </Button>
    </Link>
  );
};

export const BlogButton = () => {
  return (
    <Link
      href="/blog"
      className="absolute left-0 top-1/2 z-50 rounded-lg px-4 py-2"
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
