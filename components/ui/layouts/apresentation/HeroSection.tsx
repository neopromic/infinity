import {  Sparkles } from "lucide-react";
import { Button } from "../../button";

export default function HeroSection() {
    return (
        <section className="px-4 py-6">
            <h1 className="font-bold tracking-tight leading-tight text-3xl md:text-5xl lg:leading-[1.1]">Que tal uma gigantesca aventura no mundo da calistenia?</h1>
            <h2 className="text-lg mt-4">Prepare-se para se desafiar na calistenia com a ajuda do infinity!</h2>
            <Button className="my-4 gap-2">
                <Sparkles size={"16px"} />
                Iniciar jornada!
            </Button>
        </section>
    );
}