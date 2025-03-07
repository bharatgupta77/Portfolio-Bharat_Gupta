import "./App.css";
import EducationTimeline from "./sections/Education/EducationTimeline";
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
      <EducationTimeline />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
