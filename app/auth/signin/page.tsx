"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
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
          />
        </div>
        <div className="space-y-2">
          <Label className="mt-4">Senha</Label>
          <Input required placeholder="******" type="password" />
        </div>
        <Button variant={"link"}>Esqueceu a senha?</Button>
        <Button className="w-full">Entrar em minha conta</Button>
      </form>
    </main>
  );
}
