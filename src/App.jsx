import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills  from "./components/Skills";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import Projects from "./components/Projects";


function App() {
  return (
    <div style={{ fontFamily: "Segoe UI, system-ui, sans-serif" }}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
       <Skills />
     {/* project Section */}
     <Projects />
      {/* Contact Section */}
     {/* <Contact /> */}
     <Contact />
      
      
    </div>
  );
}

export default App;
