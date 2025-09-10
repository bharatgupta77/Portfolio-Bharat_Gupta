import "./App.css";
import Contact from "./sections/Contact/Contact";
import Education from "./sections/Education/Education";
import Experience from "./sections/Experiences/Experience";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import NavBar from "./sections/NavBar/NavBar";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import FloatingParticles from "./components/FloatingParticles/FloatingParticles";

function App() {
  return (
    <>
      <FloatingParticles />
      <NavBar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
