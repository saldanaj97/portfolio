"use client";
import { Button, ButtonGroup } from "@nextui-org/button";
import Link from "next/link";
import { LocalTimeComponent } from "./local-time";

export function Navbar() {
  return (
    <header className="hidden w-full grid-cols-3 items-center py-2 md:grid">
      <div className="justify-self-start">
        <h1 className="text-2xl font-bold">
          <Link href="/">Juan Saldaña</Link>
        </h1>
      </div>
      <nav className="justify-self-center">
        <ButtonGroup>
          <Button>
            <Link href="/blog">Blog</Link>
          </Button>
          <Button>
            <Link href="/">Portfolio</Link>
          </Button>
          <Button>
            <Link href="/contact-me">Contact Me</Link>
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
