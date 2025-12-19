import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Code,
  Database,
  Cpu,
  Cloud,
  TrendingUp,
  Layers,
  Zap,
  Boxes,
  Sparkles,
  Binary,
} from "lucide-react";

export default function Skills() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // top row scroll left, bottom row scroll right
  const topRowX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const bottomRowX = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const skills = [
    { name: "Machine Learning", icon: Brain },
    { name: "Deep Learning", icon: Layers },
    { name: "Python", icon: Code },
    { name: "Data Science", icon: Database },
    { name: "AI Deployment", icon: Cloud },
    { name: "Neural Networks", icon: Cpu },
    { name: "Model Training", icon: TrendingUp },
    { name: "FastAPI", icon: Zap },
    { name: "TensorFlow", icon: Boxes },
    { name: "PyTorch", icon: Sparkles },
    { name: "SQL", icon: Database },
    { name: "NLP", icon: Binary },
  ];

  const mid = Math.ceil(skills.length / 2);
  const topSkills = skills.slice(0, mid);
  const bottomSkills = skills.slice(mid);

  return (
    <section
      ref={ref}
      id="skills"
      style={{
        height: "280vh",
        background: "#111",
        color: "#fff",
        position: "relative",
        paddingTop: "100px",
      }}
    >
      {/* TITLE */}
      <div
        style={{
          position: "sticky",
          top: 0,
          padding: "40px 8%",
          background: "#111",
          zIndex: 10,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            fontSize: "4rem",
            fontWeight: 800,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#fff",
          }}
        >
          <span>Skills</span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              height: "8px",
              backgroundColor: "#e10600",
              borderRadius: "2px",
            }}
          />
        </motion.h2>
      </div>

      {/* HORIZONTAL SCROLL - TOP ROW */}
      <div
        style={{
          position: "sticky",
          top: "180px",
          height: "320px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            gap: "24px",
            x: topRowX,
            paddingLeft: "8%",
          }}
        >
          {topSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 6,
                  rotateY: -6,
                  boxShadow:
                    "0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2)",
                }}
                style={{
                  width: "300px",
                  height: "300px",
                  background: "rgba(255, 255, 255, 0)", // glass effect
                  borderRadius: "20px",
                  border: "2px solid rgba(255, 255, 255, 0)", // white border
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  padding: "20px",
                  position: "relative",
                  transformStyle: "preserve-3d",
                  color: "#fff",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  style={{
                    background: "#e10600",
                    padding: "22px",
                    borderRadius: "50%",
                    color: "#fff",
                    marginBottom: "22px",
                  }}
                >
                  <Icon size={56} />
                </motion.div>
                <h3 style={{ fontSize: "1.5rem", color: "#fff" }}>
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* HORIZONTAL SCROLL - BOTTOM ROW */}
      <div
        style={{
          position: "sticky",
          top: "520px",
          height: "320px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            gap: "24px",
            x: bottomRowX,
            paddingLeft: "8%",
          }}
        >
          {bottomSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 6,
                  rotateY: -6,
                  boxShadow:
                    "0 0 20px rgba(255, 255, 255, 0), 0 0 40px rgba(255, 255, 255, 0)",
                }}
                style={{
                  width: "300px",
                  height: "300px",
                  background: "rgba(255, 255, 255, 0)",
                  borderRadius: "20px",
                  border: "2px solid rgba(255, 255, 255, 0)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  padding: "20px",
                  position: "relative",
                  transformStyle: "preserve-3d",
                  color: "#fff",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  style={{
                    background: "#e10600",
                    padding: "22px",
                    borderRadius: "50%",
                    color: "#fff",
                    marginBottom: "22px",
                  }}
                >
                  <Icon size={56} />
                </motion.div>
                <h3 style={{ fontSize: "1.5rem", color: "#fff" }}>
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
