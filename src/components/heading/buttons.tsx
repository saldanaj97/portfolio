"use client";

import { Button } from "@nextui-org/react";

// TODO - Make sure each of the buttons function correctly
//          - [ ] Contact Me Button (link to ?)
//          - [ ] Projects Button (link to Projects section below)

export const HeroButtons = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Button color="primary">Let's Work Together</Button>
      <Button>View Projects</Button>
    </div>
  );
};
