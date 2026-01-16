import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Education from '@/components/portfolio/Education';
import Projects from '@/components/portfolio/Projects';
import Skills from '@/components/portfolio/Skills';
import Experience from '@/components/portfolio/Experience';
import Certificates from '@/components/portfolio/Certificates';
import ExtraCurriculars from '@/components/portfolio/ExtraCurriculars';
import Languages from '@/components/portfolio/Languages';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Experience />
        <Certificates />
        <ExtraCurriculars />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
