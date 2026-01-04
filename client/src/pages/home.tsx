import { useEffect, useState } from "react";

import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";

import FeaturedProgram from "@/components/featured-program";
import CompanyLogos from "@/components/company-logos";
import ProgramsSection from "@/components/programs-section";

import SuccessStories from "@/components/success-stories";
import GrowthFormula from "@/components/growth-formula";
import LeadershipTeam from "@/components/leadership-team";
import OldFooter from "@/components/oldFooter";
import WhatsAppFloat from "@/components/whatsapp-float";
import IndustriesPieSection from "@/components/industries-pie-section";
import AdvisorPopup from "@/components/AdvisorPopup";

interface HomeProps {
  onRequestCall: () => void;
}

export default function Home({ onRequestCall }: HomeProps) {
  const [showAdvisorPopup, setShowAdvisorPopup] = useState(false);

  useEffect(() => {
    document.title = "Qualibytes Academy";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Hero Section */}
      <HeroSection />

      {/* Pie Chart */}
      <IndustriesPieSection />

      {/* Featured Programs */}
      <FeaturedProgram />

      {/* Company Logos */}
      <CompanyLogos />

      {/* All Programs */}
      <ProgramsSection />

      {/* Success Stories */}
      <SuccessStories />

      {/* Growth Formula */}
      <GrowthFormula />

      {/* Leadership Team */}
      <LeadershipTeam />

      {/* Footer */}
      <OldFooter />

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />

      {/* Advisor Popup */}
      {showAdvisorPopup && (
        <AdvisorPopup onClose={() => setShowAdvisorPopup(false)} />
      )}
    </div>
  );
}
