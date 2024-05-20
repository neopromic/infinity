"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/database/firebase";
import { redirect } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e: FormEvent) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password).then((user) => {
      console.debug(user);
      const redirectToHome = () => redirect("/");

      setTimeout(redirectToHome, 500);
    });
  };

  return (
    <main className="px-4 py-6 space-y-4 flex flex-col items-center justify-center mt-8">
      <h1 className="font-bold tracking-tight text-3xl text-center ">
        Cadastre-se na plataforma da infinity!
      </h1>
      <form onSubmit={(e) => signUp(e)} className="space-y-4 w-80">
        <div className="space-y-2">
          <Label htmlFor="email_inpupt">Email</Label>
          <Input
            id="email_input"
            required
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
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link href="/auth/signin">
          <Button variant={"link"}>Entrar em uma conta existente</Button>
        </Link>
        <Button type="submit" className="w-full">
          Criar minha conta
        </Button>
        <Separator />
        <Button type="button" className="w-full" variant={"secondary"}>
          Entrar usando Google
        </Button>
      </form>
    </main>
  );
}
