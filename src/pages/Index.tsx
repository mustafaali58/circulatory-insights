/* Ana Sayfa - Tüm bölümleri bir araya getirir */
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HeartSection from "@/components/HeartSection";
import BloodVesselsSection from "@/components/BloodVesselsSection";
import BloodCompositionSection from "@/components/BloodCompositionSection";
import CirculationSection from "@/components/CirculationSection";
import ExtraInfoSection from "@/components/ExtraInfoSection";
import ReferencesSection from "@/components/ReferencesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <HeartSection />
        <BloodVesselsSection />
        <BloodCompositionSection />
        <CirculationSection />
        <ExtraInfoSection />
        <ReferencesSection />
      </main>
      {/* Footer */}
      <footer className="border-t border-border/30 py-6 text-center text-muted-foreground text-sm">
        <div className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-oxygenated animate-pulse" />
          <span>İnsan Dolaşım Sistemi — 11. Sınıf Biyoloji</span>
          <span className="w-2 h-2 rounded-full bg-deoxygenated animate-pulse" />
        </div>
      </footer>
    </div>
  );
};

export default Index;
