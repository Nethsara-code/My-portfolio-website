import { motion } from "framer-motion";

export default function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        boxShadow: "0 0 40px rgba(225,6,0,0.45)",
      }}
      style={{
        minWidth: "260px",
        height: "160px",
        background: "rgba(255,255,255,0.9)",
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: "22px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.4rem",
        fontWeight: 600,
        cursor: "default",
      }}
    >
      {skill}
    </motion.div>
  );
}
