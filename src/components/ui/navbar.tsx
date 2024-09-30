"use client";
import { Button, ButtonGroup } from "@nextui-org/button";
import { LocalTimeComponent } from "./local-time";

export function Navbar() {
  return (
    <header className="hidden w-full grid-cols-3 items-center py-2 md:grid">
      <div className="justify-self-start">
        <h1 className="text-2xl font-bold">Juan Saldaña</h1>
      </div>
      <nav className="justify-self-center">
        <ButtonGroup>
          <Button>
            <a href="/blog">Blog</a>
          </Button>
          <Button>
            <a href="/about">About</a>
          </Button>
          <Button>
            <a href="/projects">Projects</a>
          </Button>
        </ButtonGroup>
      </nav>
      <div className="flex flex-row gap-4 justify-self-end">
        <LocalTimeComponent />
        <Button color="primary">Get a Quote</Button>
      </div>
    </header>
  );
}
