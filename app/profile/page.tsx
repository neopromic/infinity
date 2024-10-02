"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useFirebaseAuth } from "@/utils/context/authContext";

export default function ProfilePage() {
	const { user } = useFirebaseAuth();
	if (!user) {
		return;
	}

	const avatarAlt = `${user.displayName} Avatar's`;
	const avatarURl = user?.photoURL as string;

	return (
		<main>
			<section className="flex flex-col items-center px-4 py-12">
				<Avatar>
					<AvatarImage src={avatarURl} alt={avatarAlt} />
					<AvatarFallback>{user?.displayName}</AvatarFallback>
				</Avatar>
				{user?.displayName ? (
					<h1 className="font-bold text-3xl text-center sm:text-4xl md:text-5xl xl:text-6xl/none tracking-tighter">
						Olá, {user?.displayName}!
					</h1> // Renderiza o nome se houver
				) : (
					<h1 className="flex items-center font-bold text-3xl text-center sm:text-4xl md:text-5xl xl:text-6xl/none tracking-tighter">
						Olá,
						<Skeleton className="rounded-lg w-64 h-12" />
					</h1>
				)}
				<p>
					Gerencie suas informações de perfil em um só lugar, como seu peso,
					idade, etc
				</p>
			</section>
		</main>
	);
}
