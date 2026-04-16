import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyVerity } from "@/components/WhyVerity";
import { UseCases } from "@/components/UseCases";
import { Credibility } from "@/components/Credibility";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-accent/30 selection:text-white pt-16">
      <Navbar />
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <HowItWorks />
      <WhyVerity />
      <UseCases />
      <Credibility />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  );
}

