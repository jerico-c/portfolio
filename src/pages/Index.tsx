
import { ThemeProvider } from "next-themes";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import CertificationsSection from "../components/CertificationsSection";
import ProjectsSection from "../components/ProjectsSection";
import OrganizationalSection from "../components/OrganizationalSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

// Set page title and metadata
document.title = "Jerico Christianto | Portfolio";
const metaDesc = document.querySelector('meta[name="description"]');
if (metaDesc) {
  metaDesc.setAttribute("content", "Jerico Christianto's portfolio - Front-End & Back-End Developer, Certified Junior Network Administrator");
}

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative min-h-screen bg-background text-foreground">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <ParticlesBackground />
        </div>
        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <CertificationsSection />
          <ProjectsSection />
          <OrganizationalSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
