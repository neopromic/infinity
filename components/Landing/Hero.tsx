"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { RocketIcon, SparklesIcon } from "lucide-react";
import { RainbowButton } from "../ui/rainbow-button";
import GridPattern from "../ui/grid-pattern";
import { cn } from "@/lib/utils";

export const Hero = () => {
	return (
		<section className="flex flex-col justify-center items-center w-full h-[calc(100dvh-3rem)]">
			<div className="flex flex-col justify-center items-center space-y-4 py-4 px">
				<Badge className="gap-2 w-fit select-none">
					<RocketIcon
						size={16}
						className="dark:text-rose-500 dark:fill-rose-500 text-primary-foreground fill-primary-foreground"
					/>
					Nossos serviços ainda estão em desenvolvimento.
				</Badge>
				<h1 className="font-bold text-3xl text-center sm:text-4xl md:text-5xl xl:text-6xl/none tracking-tighter">
					Alcance o máximo do seu potencial
				</h1>
				<p className="max-w-[600px] text-center text-muted-foreground text-sm leading-relaxed">
					Descubra as rotinas de treino perfeitas para ajuda-lo a se manter no
					caminho certo e alcançar seus objetivos na calistenia.
				</p>
			</div>
			<div className="flex min-[400px]:flex-row flex-col gap-2">
				{/* <Link href={user ? "/home" : "/auth/signin"}>
					<Button className="gap-1">
						<SparklesIcon size="16px" />
						Entrar na plataforma!
					</Button>
				</Link> */}
				<Link href="/routines">
					<RainbowButton>Conheça nossas rotinas</RainbowButton>
				</Link>
			</div>
			<GridPattern
				width={20}
				height={20}
				x={-1}
				y={12}
				className={cn(
					"[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] -z-50",
				)}
			/>
		</section>
	);
};
