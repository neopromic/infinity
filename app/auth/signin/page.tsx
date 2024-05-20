"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { auth } from "@/services/database/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { redirect } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password).then((user) => {
      console.log(user);
      redirect("/routines/createRoutine");
    });
  };

  const handleSignINWIthGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  };
  return (
    <main className="px-4 py-6 space-y-4 flex flex-col items-center justify-center mt-8">
      <h1 className="font-bold tracking-tight text-3xl text-center ">
        Entre na plataforma usando sua conta!
      </h1>
      <form className="space-y-4 w-80" onSubmit={(e) => handleSignIn(e)}>
        <div className="space-y-2">
          <Label htmlFor="email_input">Email</Label>
          <Input
            id="email_input"
            required
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
            required
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
          className="w-full"
          variant={"secondary"}
          onClick={handleSignINWIthGoogle}
        >
          Entrar usando Google
        </Button>
        <Separator />
        <Link href="/auth/signup">
          <Button variant={"link"}>Ou crie sua conta na plataforma!</Button>
        </Link>
      </form>
    </main>
  );
}
