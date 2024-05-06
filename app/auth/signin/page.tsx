import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <main className="px-4 py-6 space-y-4 flex flex-col items-center justify-center mt-8">
      <h1 className="font-bold tracking-tight text-3xl text-center ">Entre na plataforma usando sua conta!</h1>
      <form className="space-y-4 w-80">
        <Input required placeholder="infinityuser@mail.com" type="email" />
        <Input required placeholder="******" type="password" />
        <Button className="w-full">Entrar em minha conta</Button>
      </form>
      </main>
  );
}
