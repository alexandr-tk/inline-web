import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ProblemGrid from "@/components/ProblemGrid";
import ComparisonTable from "@/components/ComparisonTable";
import HowItWorks from "@/components/HowItWorks";
import TrainingSection from "@/components/TrainingSection";
import InteractiveDemo from "@/components/InteractiveDemo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <ProblemGrid />
        <ComparisonTable />
        <HowItWorks />
        <TrainingSection />
        <InteractiveDemo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
