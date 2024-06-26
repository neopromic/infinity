"use client";
import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";
import { Button } from "../button";
import { RocketIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "../badge";
import { useFirebaseAuth } from "@/utils/context/authContext";

export function HomeContent() {
  const { user } = useFirebaseAuth();

  return (
    <main className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <Image
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            height="550"
            src="/oplaceholder.svg"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Link href="/routines">
                <Badge className="gap-2">
                  <RocketIcon
                    size={16}
                    className="dark:text-rose-500 dark:fill-rose-500 text-primary-foreground fill-primary-foreground"
                  />
                  Conheça nossas rotinas de treino feitas por nossa equipe!
                </Badge>
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                Alcance o máximo do seu potencial!
              </h1>
              <p className="max-w-[600px] md:text-xl text-muted-foreground">
                Descubra as rotinas de treino perfeitas para ajuda-lo a se
                manter no caminho certo e alcançar seus objetivos na calistenia.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href={user ? "/home" : "/auth/signin"}>
                <Button className="gap-1">
                  <SparklesIcon size="16px" />
                  Entrar na plataforma!
                </Button>
              </Link>
              <Link href="/routines">
                <Button variant={"outline"}>Conheça nossas rotinas</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-start gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Exercícios recomendados
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Descubra exercícios perfeitos que irão alavancar seu corpo para
              outro nível!
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <Card>
              <Image
                alt="Workout 1"
                className="w-full aspect-video overflow-hidden rounded-t-lg object-cover"
                height="0"
                src="/oplaceholder.svg"
                width="0"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-semibold">Full Body Workout</h3>
                <p className="text-muted-foreground">
                  Uma rotina abrangente que encobre todos os prncipais grupos
                  musculares.
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                alt="Workout 2"
                className="w-full aspect-video overflow-hidden rounded-t-lg object-cover"
                height="0"
                src="/placeholder.svg"
                width="0"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-semibold">Cardio Blast</h3>
                <p className="text-muted-foreground">
                  Exercícios de alta intensidade para aumento de resistência.
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                alt="Workout 3"
                className="w-full aspect-video overflow-hidden rounded-t-lg object-cover"
                height="0"
                src="/oplaceholder.svg"
                width="0"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-semibold">Strength Training</h3>
                <p className="text-muted-foreground">
                  Construa músculos, e ganhe força atráves dos treinos focados
                  em força.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-start gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Acompanhe seu progresso
            </h2>
            <p
              className="max-w-[600px] text-muted-foregroun
            d md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
            >
              Mantenha-se motivado e atualizado em sua jornada com nosso
              calendário de exercícios físicos.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"></div>
        </div>
      </section>
    </main>
  );
}
