"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GoogleLogo } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/services/database/firebase";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useFirebaseAuth } from "@/utils/context/authContext";
import Cookies from "js-cookie";

export function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { toast } = useToast();
  const { signUp } = useFirebaseAuth();
  const router = useRouter();

  /**
   * This create the user account using email and password
   * @param e this parameter is just for use preventDefault method in forms.
   *
   * @returns UserCredential
   * @version 1.0.0
   * @author neopromic
   *
   */
  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();

    signUp(email, password);

    router.push("/home");
  };

  /**
   * This create the user account using Google
   * @returns UserCredential || result
   *
   * @example const result = await signInWithPopup(auth, provider);
   * @version 1.0.0
   * @author neopromic
   */
  const handleSignUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        const userToken = user.getIdToken;

        Cookies.set("user", JSON.stringify(user));
        Cookies.set("user_token", JSON.stringify(userToken));
        toast({
          title: "Welcome back!",
          description: "You're now signed as " + user.displayName,
        });

        router.push("/home");
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Ops! Algo parece errado!",
        description: "Erro encontrado: " + error,
      });
    }
  };

  return (
    <main className="px-4 py-6 space-y-4 flex flex-col items-center justify-center mt-8">
      <h1 className="font-bold tracking-tight text-3xl text-center ">
        Cadastre-se na plataforma da infinity!
      </h1>
      <form onSubmit={(e) => handleSignUp(e)} className="space-y-4 w-80">
        <div className="space-y-2">
          <Label htmlFor="email_inpupt">Email</Label>
          <Input
            id="email_input"
            placeholder="infinityuser@mail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password_input" className="mt-4">
            Senha
          </Label>
          <Input
            id="password_input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full" onClick={handleSignUp}>
          Criar minha conta
        </Button>
        <Separator />
        <Button
          type="button"
          className="w-full gap-2 items-center"
          variant={"secondary"}
          onClick={handleSignUpWithGoogle}
        >
          <GoogleLogo />
          Entrar usando Google
        </Button>
        <Separator />
        <Link href="/auth/signin" className="flex items-center justify-center">
          <Button variant={"link"}>Entrar em uma conta existente</Button>
        </Link>
      </form>
    </main>
  );
}
