import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <main className="px-6">
      <section className="py-6">
        <h2 className="text-3xl pt-12  pb-4 font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
          Rotinas gerais
        </h2>
        <p>
          <b>Segunda-feira - Peito, tríceps</b>
          <ul className="px-4 space-y-2">
            <li className="list-disc">
              Inicie com alogamentos de todo o corpo, após isso faça 2min de
              prancha{" "}
              <b>(menos ou mais, dependendo de suas capacidades físicas)</b>.
            </li>
            <li className="list-disc">
              Flexão militar - 4 séries de 15 repetições.
            </li>
            <li className="list-disc">
              Flexão diamante - 4 séries de 10 repetições.
            </li>
            <li className="list-disc">Dips - 4 séries de 10 repetições.</li>
            <li className="list-disc">
              Tríceps na cadeira - 4 séries de 10 repetições.
            </li>
            <li className="list-disc">
              5min de cárdio de sua preferẽncia.{" "}
              <b>Exemplo: Polichinelos, corrida parada, etc. </b>
            </li>
          </ul>
        </p>
        <p className="mt-4">
          <b>Terça-feira - Pernas, e abdômen</b>
          <ul className="px-4 pt-4 space-y-2">
            <li className="list-disc">
              Inicie com alogamentos de todo o corpo, após isso faça 2min de
              prancha{" "}
              <b>(menos ou mais, dependendo de suas capacidades físicas)</b>.
            </li>
            <li className="list-disc">
              Elevação de penas na barra-fixa - 4 séries de 10 repetições
            </li>
            <li className="list-disc">
              Agachamento - 4 séries de 20 repetições
            </li>
            <li className="list-disc">
              Abdominal curto - 4 séries de 15 repetições
            </li>
            <li className="list-disc">
              Calf Raises - 4 séries de 30 repetições
            </li>
            <li className="list-disc">
              Agachamentos com salto - 4 séries de 15 repetições
            </li>
            <li className="list-disc">
              5min de cárdio de sua preferẽncia.{" "}
              <b>Exemplo: Polichinelos, corrida parada, etc. </b>
            </li>
          </ul>
        </p>
        <p className="mt-4">
          <b>Quarta-feira - Costas, ombros</b>
          <ul className="px-4 pt-4 space-y-2">
            <li className="list-disc">
              Inicie com alogamentos de todo o corpo, após isso faça 2min de
              prancha{" "}
              <b>(menos ou mais, dependendo de suas capacidades físicas)</b>.
            </li>
            <li className="list-disc">
              Barra-fixa - 4 séries de 10 repetições
            </li>
            <li className="list-disc">
              Puxada com barra - 4 séries até a falha
            </li>
            <li className="list-disc">
              Flxão Pike - 4 séries de 12 repetições
            </li>
            <li className="list-disc">
              Elevação unilateral - 4 séries de 25 repetições
            </li>
            <li className="list-disc">
              5min de cárdio de sua preferẽncia.{" "}
              <b>Exemplo: Polichinelos, corrida parada, etc. </b>
            </li>
          </ul>
        </p>
        <p className="mt-4">
          <b>Quinta-feira - Pernas, e abdômen</b>
          <ul className="px-4 pt-4 space-y-2">
            <li className="list-disc">
              Inicie com alogamentos de todo o corpo, após isso faça 2min de
              prancha{" "}
              <b>(menos ou mais, dependendo de suas capacidades físicas)</b>.
            </li>
            <li className="list-disc">
              Elevação de penas na barra-fixa - 4 séries de 10 repetições
            </li>
            <li className="list-disc">
              Agachamento - 4 séries de 20 repetições
            </li>
            <li className="list-disc">
              Abdominal curto - 4 séries de 15 repetições
            </li>
            <li className="list-disc">
              Calf Raises - 4 séries de 30 repetições
            </li>
            <li className="list-disc">
              Agachamentos com salto - 4 séries de 15 repetições
            </li>
            <li className="list-disc">
              5min de cárdio de sua preferẽncia.{" "}
              <b>Exemplo: Polichinelos, corrida parada, etc. </b>
            </li>
          </ul>
        </p>
        <p className="mt-4">
          <b>Sexta-feira - Peito, tríceps</b>
          <ul className="px-4 space-y-2">
            <li className="list-disc">
              Inicie com alogamentos de todo o corpo, após isso faça 2min de
              prancha{" "}
              <b>(menos ou mais, dependendo de suas capacidades físicas)</b>.
            </li>
            <li className="list-disc">
              Flexão militar - 4 séries de 15 repetições.
            </li>
            <li className="list-disc">
              Flexão diamante - 4 séries de 10 repetições.
            </li>
            <li className="list-disc">Dips - 4 séries de 10 repetições.</li>
            <li className="list-disc">
              Tríceps na cadeira - 4 séries de 10 repetições.
            </li>
            <li className="list-disc">
              5min de cárdio de sua preferẽncia.{" "}
              <b>Exemplo: Polichinelos, corrida parada, etc. </b>
            </li>
          </ul>
        </p>
        <p className="mt-4">
          <b>Sábado - Treinos estáticos da calistenia</b>
          <ul className="px-4 space-y-2">
            <li className="list-disc">
              Pratique qualquer movimento calistenico.{" "}
              <b>Exemplo: Handstand, Full Planche, Front-Lever, L-Sit, etc!</b>
            </li>
          </ul>
        </p>
      </section>
      <div className=" w-full space-y-2 py-12 md:py-24 lg:py-32">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
          Você também pode gostar
        </h1>
        <p className="text-muted-foreground">
          Veja outras rotinas de treino que você pode gostar! Conclua desafios,
          ou teste algo novo!
        </p>
      </div>

      <section className=" pb-6 flex gap-4 flex-wrap">
        <Card>
          <img
            alt="Workout 1"
            className="w-full  aspect-video overflow-hidden rounded-t-lg object-cover"
            height="0"
            src="/oplaceholder.svg"
            width="0"
          />
          <CardContent className="space-y-2 p-4">
            <h3 className="text-lg font-semibold">
              Desafio: Rotina do Saitama!
            </h3>
            <p className="text-muted-foreground">
              Se desafie! Tente a rotina de treino do saitama.
            </p>
            <Badge>Desafio do dia!</Badge>
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
    </main>
  );
}
