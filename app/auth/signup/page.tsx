"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/services/database/firebase";
import { useToast } from "@/components/ui/use-toast";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { toast } = useToast();

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

    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((userData) => {

    });
  };

  /**
   * This create the user account using Google
   * @returns UserCredential || result
   *
   * @example const result = await signInWithPopup(auth, provider);
   * @version 1.0.0
   * @author neopromic
   */
  const handleSignUpWithGoogle = (): any => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((userData) => {
      toast({
        title: "Welcome back!",
        description: "You're now signed as " + userData.user.displayName
      })
    });
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
          className="w-full"
          variant={"secondary"}
          onClick={handleSignUpWithGoogle}
        >
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
