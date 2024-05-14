"use client";

import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b px-4 py-2 gap-2 bg-background/80 backdrop-blur flex items-center sticky top-0 inset-0">
      {/* <p className="hex1"></p> */}
      <Link className="flex-1" href="/">
        <h1 className="text-lg font-bold flex-1 select-none cursor-pointer">
          infinity
        </h1>
      </Link>
      <nav>
        <ModeToggle />
      </nav>
    </header>
  );
}
