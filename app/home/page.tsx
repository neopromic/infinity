import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TypographyH1 } from '@/components/typography/Heading1'
import { Flame, Clock9Icon } from 'lucide-react'
import { Plus } from 'lucide-react'
import Image from 'next/image'

export default function Page() {
  return (
    <section className="px-6 py-4">
      <header>
        <section className="container flex justify-center items-center flex-col space-y-4">
          <Image
            src={'/undraw_workout_gcgu.svg'}
            alt="Workout illustration"
            width={100}
            height={100}
            className="size-64"
          />
          <TypographyH1>Que jornada nos aguarda hoje?!</TypographyH1>
          <Button className="gap-2">
            <Plus />
            Criar rotina mágica!
          </Button>
          <p className="text-muted-foreground text-center">
            Você também pode usar Rotinas criadas pela comunidade infinity!
          </p>
        </section>
      </header>
      <main className="mt-16">
        <h2 className="flex items-center gap-2 font-bold tracking-wide text-2xl">
          <Flame size={24} className="text-rose-500 fill-rose-500" />
          Rotinas de treino da comunidade
        </h2>
        <section className="flex flex-col space-y-2 my-4">
          <Skeleton className="size-32" />
          <Skeleton className="h-4 w-32" />
        </section>
        <h2 className="flex items-center gap-2 font-bold tracking-wide text-2xl">
          <Clock9Icon size={24} className="" />
          Suas rotinas
        </h2>
        <section className="flex flex-col space-y-2 my-4">
          <Skeleton className="size-32" />
          <Skeleton className="h-4 w-32" />
        </section>
      </main>
    </section>
  )
}
