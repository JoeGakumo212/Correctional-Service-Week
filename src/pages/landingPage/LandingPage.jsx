import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

import HeroSection from '../../components/Landing/HeroSection';
import FocusAreas from '../../components/Landing/FocusAreas';
import AboutSection from '../../components/Landing/AboutSection';
import EventSection from '../../components/Landing/EventSection';
import ProgramsSection from '../../components/Landing/ProgramSection';
import ContactSection from '../../components/Landing/ContactSection';
import JoinSection from '../../components/Landing/JoinSection';

export default function LandingPage() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <HeroSection />
        <FocusAreas />
        <AboutSection />
        <EventSection />
        <JoinSection />

        <ProgramsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
