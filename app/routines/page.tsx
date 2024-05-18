import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <main className="px-6">
      <div className=" w-full py-12 md:py-24 lg:py-32">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
          Rotinas de treinos
        </h1>
      </div>

      <section className="flex gap-4 flex-wrap">
        <Card>
          <img
            alt="Workout 1"
            className="w-full  aspect-video overflow-hidden rounded-t-lg object-cover"
            height="0"
            src="/oplaceholder.svg"
            width="0"
          />
          <CardContent className="space-y-2 p-4">
            <h3 className="text-lg font-semibold">Full Body Workout</h3>
            <p className="text-muted-foreground">
              A comprehensive routine targeting all major muscle groups.
            </p>
            <Badge>Treino de peito</Badge>
          </CardContent>
        </Card>
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
      </section>
      <section className="py-6">
        <h2 className="text-3xl pb-4 font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
          Rotinas gerais
        </h2>
        <p>
          <b>Segunda-feira</b>
          <ul className="px-4 space-y-2">
            <li className="list-disc">
              Inicie com alogamentos de todo o corpo, após isso faça 2min{" "}
              <b>(menos ou mais, dependendo de suas capacidades físicas)</b>.
            </li>
            <li className="list-disc">
              Flexão normal - 4 séries de 15 repetições.
            </li>
            <li className="list-disc">
              Flexão diamante - 4 séries de 10 repetições.
            </li>
            <li className="list-disc">
              Dips - 4 séries de 10 repetições.
            </li>
          </ul>
        </p>
      </section>
    </main>
  );
}
