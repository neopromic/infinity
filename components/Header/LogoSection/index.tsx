import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
export const LogoSection = () => {
	return (
		<header className="top-0 z-50 sticky inset-0 flex items-center gap-2 bg-background/80 backdrop-blur px-4 py-2 border-b">
			{/* <p className="hex1"></p> */}
			<Link className="flex-1" href="/">
				<h1 className="flex-1 font-bold text-lg hover:underline cursor-pointer select-none">
					infinity
				</h1>
			</Link>
			<nav>
				<ModeToggle />
			</nav>
		</header>
	);
};
