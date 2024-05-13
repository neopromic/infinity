"use client";

import { Sparkles } from "lucide-react";
import { Button } from "../../button";
import Link from "next/link";
import { useToast } from "../../use-toast";

export default function HeroSection() {
  const { toast } = useToast();
  return (
    <section className="flex flex-col items-center justify-center px-4 py-6">
      <h1 className="font-bold tracking-tight text-center leading-tight mt-8 text-3xl md:text-5xl lg:leading-[1.1]">
        Força, inteligência, e trabalho duro.
      </h1>
      <h2 className="text-lg mt-4 text-center text-muted-foreground">
        Prepare-se para se desafiar na calistenia com a ajuda do projeto
        infinity!
      </h2>
      <Link href={"/auth/signin"}>
        <Button className="my-4 gap-2">
          <Sparkles size={"16px"} />
          Iniciar jornada!
        </Button>
      </Link>
    </section>
  );
}
