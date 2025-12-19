import { motion } from "framer-motion";
import hs from "../assets/pp.png";
import { User, CheckCircle, Award } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: 3, icon: User, from: "left" },
    { label: "Projects Completed", value: 24, icon: CheckCircle, from: "top" },
    { label: "Happy Clients", value: 12, icon: Award, from: "right" },
  ];

  const getInitial = (from) => {
    switch (from) {
      case "left":
        return { x: -100, opacity: 0 };
      case "top":
        return { y: -100, opacity: 0 };
      case "right":
        return { x: 100, opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <section
      id="about"
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 9%",
        gap: "1rem",
        background: "rgba(255, 255, 255, 1)",
      }}
    >
      {/* LEFT IMAGE */}
      <motion.img
        src={hs}
        alt="About"
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          width: "500px",
          height: "550px",
          background:"rgba(43, 36, 36, 1)",
          objectFit: "contain",
          borderRadius: "1rem",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        }}
      />

      {/* RIGHT CONTENT */}
      <div style={{ maxWidth: "650px", width: "100%" }}>
       

        {/* MAIN HEADING */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ fontSize: "3rem", marginBottom: "1.2rem" }}
        >
          AI/ML <span style={{ color: "#e10600" }}>Enthusiast</span>
        </motion.h2>


         <div
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            marginBottom: "1.5rem",
            fontSize: "1.25rem",
            fontWeight: 600,
            background: "linear-gradient(135deg,#e10600,#ff4b4b)",
            padding: "0.75rem 1rem",
            borderRadius: "10px",
            color: "#fff",
          }}
        >
          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ display: "inline-block" }}
          >
            I am Hirusha Nethsara / AI Solutions Develop / Machine Learning / Data Science / Full Stack Developer
          </motion.div>
        </div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            marginBottom: "2rem",
            color: "#111",
          }}
        >
          I am a motivated and passionate individual who is currently learning Artificial Intelligence and Machine Learning. I have a strong interest in understanding how data, algorithms, and models can be used to solve real-world problems and create intelligent systems.

I am continuously improving my skills in machine learning concepts, data analysis, and programming, with a focus on practical learning and hands-on projects. I enjoy exploring new technologies, learning from challenges, and staying updated with recent developments in the AI field.
        </motion.p>

   
        <div
          style={{
            display: "flex",
            gap: ".5rem",
            marginTop: "3rem",
            flexWrap: "wrap",
          }}
        >

           {/* AUTO SCROLL TAGLINE */}
       
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={getInitial(stat.from)}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                style={{
                  flex: "1 1 200px",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "1rem",
                  border: "1px solid rgba(0,0,0,0.1)",
                  padding: "1.5rem",
                  background: "linear-gradient(135deg, #222, #111)",
                  cursor: "pointer",
                }}
              >
                {/* Glow on hover */}
                <motion.div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "1rem",
                    background:
                      "radial-gradient(circle at center, rgba(225,6,0,0.2), transparent)",
                    opacity: 0,
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <Icon
                  style={{
                    width: "36px",
                    height: "36px",
                    color: "#ff261fff",
                    marginBottom: "0.75rem",
                    zIndex: 2,
                    position: "relative",
                  }}
                />

                <div
                  style={{
                    fontSize: "1.75rem",
                    color: "#fff",
                    marginBottom: "0.25rem",
                    fontWeight: 700,
                    zIndex: 2,
                    position: "relative",
                  }}
                >
                  {stat.value}
                </div>

                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#aaa",
                    zIndex: 2,
                    position: "relative",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
