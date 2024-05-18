import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";
import { Button } from "../button";
import { SparklesIcon } from "lucide-react";

export function HomeContent() {
  return (
    <main className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <img
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            height="550"
            src="/oplaceholder.svg"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                Reach Your Fitness Goals
              </h1>
              <p className="max-w-[600px] md:text-xl text-muted-foreground">
                Discover the perfect workout routines to help you stay on track
                and achieve your fitness objectives.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/auth/signin">
                <Button className="gap-1">
                  <SparklesIcon size="16px" />
                  Inicie sua jornada!
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
              Recommended Workouts
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover the perfect workout routines to help you stay on track
              and achieve your fitness goals.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <Card>
              <img
                alt="Workout 1"
                className="aspect-video overflow-hidden rounded-t-lg object-cover"
                height="200"
                src="/oplaceholder.svg"
                width="300"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-semibold">Full Body Workout</h3>
                <p className="text-muted-foreground">
                  A comprehensive routine targeting all major muscle groups.
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Workout 2"
                className="aspect-video overflow-hidden rounded-t-lg object-cover"
                height="200"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-semibold">Cardio Blast</h3>
                <p className="text-muted-foreground">
                  High-intensity interval training to boost your endurance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Workout 3"
                className="aspect-video overflow-hidden rounded-t-lg object-cover"
                height="200"
                src="/oplaceholder.svg"
                width="300"
              />
              <CardContent className="space-y-2 p-4">
                <h3 className="text-lg font-semibold">Strength Training</h3>
                <p className="text-muted-foreground">
                  Build muscle and improve overall strength.
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
              Track Your Progress
            </h2>
            <p
              className="max-w-[600px] text-muted-foregroun
            d md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
            >
              Stay motivated and on top of your fitness journey with our
              intuitive workout calendar.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"></div>
        </div>
      </section>
    </main>
  );
}
