import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="hero-container">
        {/* Background layers */}
        <div className="hero-stars" />
        <div className="hero-glow-top" />
        <div className="hero-glow" />
        <div className="hero-grid" />
        <div className="hero-grid-left" />
        <div className="hero-grid-right" />

        {/* Content above background */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <HeroSection />
        </div>
      </div>

      {/* Skills */}
      <FeaturesSection />

      {/* Experience */}
      <HowItWorks />

      {/* Projects */}
      <CTASection />

      {/* Contact / Footer */}
      <Footer />
    </main>
  );
}
