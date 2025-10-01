import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingElements from "@/components/FloatingElements";
import PageTransition from "@/components/PageTransition";
import ParticleTrail from "@/components/ParticleTrail";
import MorphingShapes from "@/components/MorphingShapes";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative">
        <MorphingShapes />
        <ParticleTrail />
        <FloatingElements />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
        <Certifications />
        <Contact />
        
        <footer className="py-8 text-center text-muted-foreground border-t border-border">
          <p>© 2025 Kuldeep Sharma. All rights reserved.</p>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Index;
