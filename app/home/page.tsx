import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TypographyH1 } from "@/components/ui/typography/Heading1";
import { Flame } from "lucide-react";
import { Plus } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <section className="px-6 py-4">
      <header>
        <section className="container flex justify-center items-center flex-col space-y-4">
          <Image
            src={"/undraw_workout_gcgu.svg"}
            alt="Workout illustration"
            width={0}
            height={0}
            className="size-4/5"
          />
          <TypographyH1>Que jornada nos aguarda hoje?!</TypographyH1>
          <p className="text-muted-foreground text-center">
            Voce pode começar a utilizar rotinas de treinos criadas pela
            comunidade ou criar a sua propria.
          </p>
          <Button className="gap-2">
            <Plus />
            Criar minha nova rotina!
          </Button>
          <Separator />
        </section>
      </header>
      <main>
        <h2 className="flex">
            <Flame size={32}/>
            Rotinas de treino feitas pela comunidade
        </h2>
      </main>
    </section>
  );
}
