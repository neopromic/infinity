import HeroSection from "@/components/ui/layouts/apresentation/HeroSection";
import { HomeContent } from "@/components/ui/layouts/Home";

export default function Home() {
  return (
    <div className="w-full h-screen select-none">
      <HeroSection />
      <main>
        <HomeContent />
      </main>
    </div>
  );
}
