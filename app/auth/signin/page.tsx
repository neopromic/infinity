"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="px-4 py-6 space-y-4 flex flex-col items-center justify-center mt-8">
      <h1 className="font-bold tracking-tight text-3xl text-center ">
        Entre na plataforma usando sua conta!
      </h1>
      <form className="space-y-4 w-80">
        <div className="space-y-2">
          <Label>Email</Label>
          <Input
            required
            id="input_email"
            placeholder="infinityuser@mail.com"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="space-y-2">
          <Label className="mt-4">Senha</Label>
          <Input
            required
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Button variant={"link"}>Esqueceu a senha?</Button>
        <Button
          className="w-full"
          onClick={() => {
            signIn();
          }}
        >
          Entrar em minha conta
        </Button>
        <Separator />
        <Button className="w-full" variant={"secondary"}>
          Entrar usando Google
        </Button>
      </form>
    </main>
  );
}
