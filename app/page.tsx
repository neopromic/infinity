import { Features } from "@/components/Landing/FeaturesSection";
import { Hero } from "@/components/Landing/Hero";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Features />
    </main>
  );
}
