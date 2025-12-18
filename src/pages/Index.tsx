import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Schedule from '@/components/Schedule';
import Team from '@/components/Team';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Schedule />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
