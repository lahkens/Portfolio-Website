import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import Education from './components/Education';
import Skills from './components/Skills';
import About from './components/About';
import Contact, { Footer } from './components/Contact';
import CodingProfiles from './components/CodingProfiles';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero /><Education /><Timeline /><Projects /><CodingProfiles /><Skills /><Contact />
      </main>
      <Footer />
    </>
  );
}
