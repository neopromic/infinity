"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { type FormEvent, useState } from "react";
import { auth } from "@/services/database/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { GoogleLogo } from "@phosphor-icons/react";
import { useFirebaseAuth } from "@/utils/context/authContext";
import Cookies from "js-cookie";

export default function Page() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { toast } = useToast();
	const { login, signUpWithProvider } = useFirebaseAuth();
	const router = useRouter();

	/**
	 * Function to authenticate users with email and password
	 * @param e Used for preventDefault in forms.
	 * @returns Promise<UserCredential>
	 */
	const handleSignIn = (e: FormEvent) => {
		e.preventDefault();

		login(email, password);
	};

	const handleSignInWithGoogle = async () => {
		const provider = new GoogleAuthProvider();
		try {
			const result = await signUpWithProvider(provider);
			const user = result.user;
			toast({
				title: "Welcome back!",
				description: `You're now signed as ${user.displayName}`,
			});

			router.push("/home");
		} catch (error) {
			console.log(error);
			toast({
				title: "Ops! Algo parece errado!",
				description: `Erro encontrado: ${error}`,
			});
		}
	};

	return (
		<main className="flex flex-col justify-center items-center space-y-4 mt-8 px-4 py-6">
			<h1 className="font-bold text-3xl text-center tracking-tight">
				Entre na plataforma usando sua conta!
			</h1>
			<form className="space-y-4 w-80" onSubmit={(e) => handleSignIn(e)}>
				<div className="space-y-2">
					<Label htmlFor="email_input">Email</Label>
					<Input
						id="email_input"
						placeholder="infinityuser@mail.com"
						type="email"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div className="space-y-2">
					<Label htmlFor="password_input" className="mt-4">
						Senha
					</Label>
					<Input
						id="password_input"
						type="password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<Button variant={"link"}>Esqueceu a senha?</Button>
				<Button className="w-full" onClick={handleSignIn}>
					Entrar em minha conta
				</Button>
				<Separator />
				<Button
					className="items-center gap-2 w-full"
					variant={"secondary"}
					onClick={handleSignInWithGoogle}
				>
					<GoogleLogo />
					Entrar usando Google
				</Button>
				<Separator />
				<Link href="/auth/signup" className="flex justify-center items-center">
					<Button variant={"link"}>Ou crie sua conta na plataforma!</Button>
				</Link>
			</form>
		</main>
	);
}
