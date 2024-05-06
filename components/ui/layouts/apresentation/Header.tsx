import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Header() {
  return (
    <header className="border-b px-4 py-2 gap-2 bg-transparent backdrop-blur flex items-center sticky top-0 inset-0">
      {/* <p className="hex1"></p> */}
      <h1 className="text-lg font-bold flex-1 select-none">infinity</h1>
      <nav>
        <ModeToggle />
      </nav>
    </header>
  );
}
