import { Hero } from "@/components/home/Hero";
import { Why } from "@/components/home/Why";
import { HowItWorks } from "@/components/home/How";
import { Cta } from "@/components/home/CTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Why />
      <HowItWorks />
      <Cta />
    </main>
  );
}
