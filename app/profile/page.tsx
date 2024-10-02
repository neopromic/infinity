"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useFirebaseAuth } from "@/utils/context/authContext";

export default function ProfilePage() {
	const { user } = useFirebaseAuth();
	return (
		<main>
			{user ? <h1>Olá, {user?.displayName}</h1> : <Skeleton className="w-64" />}
		</main>
	);
}
