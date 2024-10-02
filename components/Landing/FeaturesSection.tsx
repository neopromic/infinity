import Image from "next/image";
import { Card, CardContent } from "../ui/card";

export const Features = () => {
	return (
		<section className="bg-gradient-to-b from-muted to-background py-12 w-full min-h-[calc(100vh-3rem)]">
			<div className="items-start gap-6 lg:gap-12 grid lg:grid-cols-2 px-4 md:px-6 container">
				<div className="space-y-2">
					<h2 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tighter">
						Exercícios recomendados
					</h2>
					<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						Descubra exercícios perfeitos que irão alavancar seu corpo para
						outro nível!
					</p>
				</div>
				<div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
					<Card>
						<Image
							alt="Workout 1"
							className="rounded-t-lg w-full overflow-hidden aspect-video object-cover"
							height="0"
							src="/oplaceholder.svg"
							width="0"
						/>
						<CardContent className="space-y-2 p-4">
							<h3 className="font-semibold text-lg">Full Body Workout</h3>
							<p className="text-muted-foreground">
								Uma rotina abrangente que encobre todos os prncipais grupos
								musculares.
							</p>
						</CardContent>
					</Card>
					<Card>
						<Image
							alt="Workout 2"
							className="rounded-t-lg w-full overflow-hidden aspect-video object-cover"
							height="0"
							src="/placeholder.svg"
							width="0"
						/>
						<CardContent className="space-y-2 p-4">
							<h3 className="font-semibold text-lg">Cardio Blast</h3>
							<p className="text-muted-foreground">
								Exercícios de alta intensidade para aumento de resistência.
							</p>
						</CardContent>
					</Card>
					<Card>
						<Image
							alt="Workout 3"
							className="rounded-t-lg w-full overflow-hidden aspect-video object-cover"
							height="0"
							src="/oplaceholder.svg"
							width="0"
						/>
						<CardContent className="space-y-2 p-4">
							<h3 className="font-semibold text-lg">Strength Training</h3>
							<p className="text-muted-foreground">
								Construa músculos, e ganhe força atráves dos treinos focados em
								força.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};
