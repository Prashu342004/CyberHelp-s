import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";

const Index = () => (
  <div className="relative min-h-screen bg-background">
    <GridBackground />
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <TrustSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
