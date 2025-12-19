import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSmoothScrollNoShadow() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  const projects = [
    {
      title: "AI Chatbot System",
      desc: "Intelligent chatbot using NLP, transformers, and real-time inference.",
      tech: ["AI", "NLP", "React", "FastAPI"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      live: "#",
      github: "https://github.com/HirushaNethsara/ai-chatbot",
    },
    {
      title: "ML Prediction Dashboard",
      desc: "Machine learning dashboard with data visualization & predictions.",
      tech: ["Machine Learning", "Python", "React"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      live: "#",
      github: "https://github.com/HirushaNethsara/ml-dashboard",
    },
    {
      title: "Full Stack Web App",
      desc: "Scalable full-stack application with authentication & APIs.",
      tech: ["React", "Node", "MongoDB"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      live: "#",
      github: "https://github.com/HirushaNethsara/fullstack-app",
    },
    {
      title: "Portfolio Website",
      desc: "Modern portfolio website with animations and interactive UI.",
      tech: ["React", "Framer Motion", "CSS"],
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
      live: "#",
      github: "#",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smoothX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1 * (projects.length - 1) * 420]),
    { stiffness: 80, damping: 30 }
  );

  return (
    <section
      ref={ref}
      id="projects"
      style={{
        minHeight: "120vh",
        padding: "100px 8%",
        background: "#e7dcdc",
        color: "#111",
        display: "flex",
        flexDirection: "column",
        gap: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "4rem",
          fontWeight: 800,
          display: "flex",
          alignItems: "center",
          gap: "16px",
          color: "#000000ff",
          position: "relative",
        }}
      >
        Projects
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "900px" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            height: "8px",
            backgroundColor: "#e10600",
            borderRadius: "2px",
            marginLeft: "16px",
          }}
        />
      </motion.h2>

      {/* Horizontal Scroll Container */}
      <motion.div
        style={{
          display: "flex",
          gap: "36px",
          x: smoothX,
          position: "relative",
        }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            // Hover without shadow
            whileHover={{
              scale: 1.03,
            }}
            style={{
              minWidth: "400px",
              background: "rgba(17,17,17,0.05)",
              borderRadius: "20px",
              border: "1px solid rgba(17,17,17,0.2)",
              backdropFilter: "blur(12px)",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "15px",
                border: "1px solid rgba(17,17,17,0.1)",
              }}
            />
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#111" }}>{p.title}</h3>
            <p style={{ fontSize: "1rem", lineHeight: 1.5, textAlign: "center", color: "#333" }}>{p.desc}</p>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "20px",
                    background: "rgba(225,6,0,0.8)",
                    color: "#fff",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
              <ExternalLink style={{ cursor: "pointer", color: "#e10600" }} />
              <Github style={{ cursor: "pointer", color: "#e10600" }} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
