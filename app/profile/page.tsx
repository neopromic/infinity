"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Skeleton } from "@/components/ui/skeleton";
import { useFirebaseAuth } from "@/utils/context/authContext";
import { writeUserData } from "@/services/database/utils/writeUserData";
import { readUserData } from "@/services/database/utils/readUserData";
import { useEffect, useState } from "react";
import { auth } from "@/services/database/firebase";

export default function ProfilePage() {
	const { user } = useFirebaseAuth();
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const [userData, setUserData] = useState<any>(null);

	if (!user) {
		return;
	}

	const avatarAlt = `${user.displayName} Avatar's`;
	const avatarURl = user?.photoURL as string;

	const userId = user.uid;
	const userName = user.displayName as string;
	const userEmail = user.email as string;

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		getUserData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const getUserData = async () => {
		const data = await readUserData(userId);
		setUserData(data);
	};

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
			<section className="px-4">
				<h2 className="font-medium">Dados do usuário</h2>
				{userData ? (
					<div className="flex flex-col">
						<p>Nome: {userData.username}</p>
						<p>
							Email:{" "}
							{auth.currentUser?.email === userData.email
								? userData.email
								: "Impossivel visualizar."}
						</p>
					</div>
				) : (
					<p>Carregando dados do usuário...</p>
				)}
			</section>
		</main>
	);
}
