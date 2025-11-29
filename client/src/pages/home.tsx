import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Features } from "@/components/home/Features";
import { UseCases } from "@/components/home/UseCases";
import { Pricing } from "@/components/home/Pricing";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-brand-violet/20 selection:text-brand-violet">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <UseCases />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
