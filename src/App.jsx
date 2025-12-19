import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills  from "./components/Skills";
import Footer from "./components/Footer";
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
      <section
        id="contact"
        style={{
          minHeight: "100vh",
          padding: "80px 8%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f5f5f5",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: "3rem", marginBottom: "20px", color: "#e10600" }}>
            Contact
          </h2>

          <p style={{ fontSize: "1.2rem", lineHeight: 1.7, maxWidth: "700px" }}>
            Get in touch with me via email or LinkedIn. Let’s build something amazing together!
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default App;
