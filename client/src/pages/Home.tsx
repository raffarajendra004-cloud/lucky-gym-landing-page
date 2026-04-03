import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/_core/hooks/useAuth";
import IntroAnimation from "@/components/IntroAnimation";
import PaymentModal from "@/components/PaymentModal";
import FloatingCTA from "@/components/FloatingCTA";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";

import BenefitsSection from "@/components/sections/BenefitsSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import LocationSection from "@/components/sections/LocationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Intro Animation */}
      {showIntro && (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      )}

      {/* Payment Modal */}
      <PaymentModal isOpen={showPaymentModal} onClose={() => setShowPaymentModal(false)} />

      {/* Floating CTA */}
      <FloatingCTA onJoinClick={() => setShowPaymentModal(true)} />

      <Navbar isScrolled={isScrolled} />

      <main>
        <HeroSection />
        <WhyUsSection />
        <FacilitiesSection />
        <BenefitsSection />
        <ProgramsSection />
        <TestimonialsSection />
        <FAQSection />
        <LocationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
