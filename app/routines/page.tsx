"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type WorkoutDay = {
	day: string;
	focus: string;
	exercises: string[];
};

const workoutRoutine: WorkoutDay[] = [
	{
		day: "Segunda-feira",
		focus: "Peito, tríceps",
		exercises: [
			"Flexão militar - 4 séries de 15 repetições",
			"Flexão diamante - 4 séries de 10 repetições",
			"Dips - 4 séries de 10 repetições",
			"Tríceps na cadeira - 4 séries de 10 repetições",
		],
	},
	{
		day: "Terça-feira",
		focus: "Pernas, e abdômen",
		exercises: [
			"Elevação de pernas na barra-fixa - 4 séries de 10 repetições",
			"Agachamento - 4 séries de 20 repetições",
			"Abdominal curto - 4 séries de 15 repetições",
			"Calf Raises - 4 séries de 30 repetições",
			"Agachamentos com salto - 4 séries de 15 repetições",
		],
	},
	{
		day: "Quarta-feira",
		focus: "Costas, ombros",
		exercises: [
			"Barra-fixa - 4 séries de 10 repetições",
			"Puxada com barra - 4 séries até a falha",
			"Flexão Pike - 4 séries de 12 repetições",
			"Elevação unilateral - 4 séries de 25 repetições",
		],
	},
	{
		day: "Quinta-feira",
		focus: "Pernas, e abdômen",
		exercises: [
			"Elevação de pernas na barra-fixa - 4 séries de 10 repetições",
			"Agachamento - 4 séries de 20 repetições",
			"Abdominal curto - 4 séries de 15 repetições",
			"Calf Raises - 4 séries de 30 repetições",
			"Agachamentos com salto - 4 séries de 15 repetições",
		],
	},
	{
		day: "Sexta-feira",
		focus: "Peito, tríceps",
		exercises: [
			"Flexão militar - 4 séries de 15 repetições",
			"Flexão diamante - 4 séries de 10 repetições",
			"Dips - 4 séries de 10 repetições",
			"Tríceps na cadeira - 4 séries de 10 repetições",
		],
	},
	{
		day: "Sábado",
		focus: "Treinos estáticos da calistenia",
		exercises: [
			"Pratique qualquer movimento calistênico. Exemplo: Handstand, Full Planche, Front-Lever, L-Sit, etc!",
		],
	},
];

export default function WorkoutRoutines() {
	const [activeDay, setActiveDay] = useState<string | null>(null);

	return (
		<main className="mx-auto px-4 py-6 container">
			<section className="mb-12">
				<h1 className="mb-4 font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter">
					Rotinas gerais
				</h1>
				<Badge className="mb-4">
					Lembre-se de descansar 3 minutos (no mínimo), entre séries.
				</Badge>
				<p className="mb-6 text-lg">
					Inicie cada dia com alongamentos de todo o corpo, seguidos por 2
					minutos de prancha (ajuste conforme suas capacidades físicas).
				</p>
				<Accordion type="single" collapsible className="w-full">
					{workoutRoutine.map((day, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<AccordionItem key={index} value={day.day}>
							<AccordionTrigger>
								{day.day} - {day.focus}
							</AccordionTrigger>
							<AccordionContent>
								<ul className="space-y-2 pl-6 list-disc">
									{day.exercises.map((exercise, exIndex) => (
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										<li key={exIndex}>{exercise}</li>
									))}
								</ul>
								<p className="mt-4">
									<strong>Finalize com:</strong> 5min de cárdio de sua
									preferência.
									<em> Exemplo: Polichinelos, corrida parada, etc.</em>
								</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</section>
		</main>
	);
}
