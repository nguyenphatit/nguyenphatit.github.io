import About from "@/components/features/About";
import Experience from "@/components/features/Experience";
import HardSkill from "@/components/features/HardSkill";
import Hero from "@/components/features/Hero";
import Work from "@/components/features/Work";

export default function Home() {
  return (
    <main className="bg-light text-light-secondary dark:bg-dark dark:text-dark-secondary min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Work />
      <HardSkill />
    </main>
  );
}
