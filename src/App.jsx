import "./App.css";
import Education from "./sections/Education/Education";
import Experience from "./sections/Experiences/Experience";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import NavBar from "./sections/NavBar/Navbar";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
