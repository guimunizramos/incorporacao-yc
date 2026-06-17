import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import AgendaSection from "@/components/AgendaSection";
import HostsSection from "@/components/HostsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CountdownBanner from "@/components/CountdownBanner";

const Index = () => {
  return (
    <main className="min-h-screen bg-background pt-[92px] md:pt-[64px]">
      <CountdownBanner />
      <HeroSection />
      <BenefitsSection />
      <AgendaSection />
      <HostsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
