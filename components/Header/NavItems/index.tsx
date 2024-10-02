"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useFirebaseAuth } from "@/utils/context/authContext";
import Link from "next/link";

export const NavItems = () => {
	const { user } = useFirebaseAuth();
	if (!user) {
		return;
	}
	const avatarURl = user.photoURL as string;

	return (
		<nav className="flex items-center gap-2">
			<Link href="/profile">
				<Avatar>
					<AvatarImage src={avatarURl} />
					<AvatarFallback>{user.displayName}</AvatarFallback>
				</Avatar>
			</Link>
			<ModeToggle />
		</nav>
	);
};