import Converter from "@/components/Converter";
import HeroSection from "@/components/HeroSection";
import Notations from "@/components/Notations";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <HeroSection />
      <section className="grid grid-cols-2 gap-10 px-10 max-lg:grid-cols-1 max-md:px-5">
        <Converter />
        <Notations />
      </section>
    </main>
  );
}
