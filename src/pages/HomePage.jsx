import HeroSection from "../components/HeroSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import FaqsSection from "../components/FaqsSection.jsx";
import Footer from "../components/app_components/Footer.jsx";

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* FAQS Section */}
      <FaqsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
