import { Input } from "@/components/ui/input";
import { TypographyH1 } from "@/components/ui/typography/Heading1";

export default function Page() {
  return (
    <main className="px-4 py-6 space-y-4">
      <TypographyH1 text={"Entre na infinity usando uma conta."} />
      <p className="text-muted-foreground w-full text-center text-lg font-medium">Faça o login na plataforma usando um email ou senha.</p>
      <Input placeholder="Email" className="w-md" />
    </main>
  );
}
