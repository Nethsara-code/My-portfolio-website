import { motion } from "framer-motion";

/* ===== ICON DATA (easy to add more later) ===== */
const socialsRA = [
  {
    name: "GitHub",
    link: "https://github.com/Nethsara-code",
    color: "#e10600",
    svg: (
      <svg viewBox="0 0 24 24" width="22">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.18-3.37-1.18-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.36 1.1 2.93.85.1-.67.35-1.1.63-1.36-2.22-.25-4.56-1.13-4.56-5.02 0-1.1.38-2 .98-2.7-.1-.25-.42-1.28.1-2.66 0 0 .8-.26 2.7 1.03.78-.22 1.62-.33 2.45-.33.83 0 1.67.11 2.45.33 1.9-1.3 2.7-1.03 2.7-1.03.52 1.38.2 2.41.1 2.66.6.7.98 1.6.98 2.7 0 3.9-2.35 4.77-4.58 5.02.36.32.68.93.68 1.88v2.8c0 .26.18.58.69.48A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2z"
        />
      </svg>
    ),
  },
];



const socialsFA = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hirusha-nethsara-a24612380/",
    color: "#000000",
    svg: (
      <svg viewBox="0 0 24 24" width="22">
        <path
          fill="currentColor"
          d="M4.98 3.5C3.34 3.5 2 4.85 2 6.48c0 1.63 1.34 2.98 2.98 2.98h.02A2.99 2.99 0 0 0 8 6.48 2.99 2.99 0 0 0 4.98 3.5zM2.4 21.5h5.17V9H2.4v12.5zM9.6 9h4.95v1.71h.07c.69-1.3 2.37-2.68 4.88-2.68 5.22 0 6.18 3.44 6.18 7.92V21.5h-5.17v-6.7c0-1.6-.03-3.66-2.23-3.66-2.24 0-2.58 1.74-2.58 3.55v6.81H9.6V9z"
        />
      </svg>
    ),
  },
];

/* ===== COMPONENT ===== */
export default function HeroSocials() {
  return (
    <div
      style={{
        position: "absolute",
        top: "80%",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "35rem",
        zIndex: 5,
      }}
    >
      <IconGroup icons={socialsRA} />
      <IconGroup icons={socialsFA} />
    </div>
  );
}

/* ===== ICON GROUP ===== */
function IconGroup({ icons }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 4.8 }}
      style={{ display: "flex", gap: "2spx" }}
    >
      {icons.map((item, i) => (
        <motion.a
          key={i}
          href={item.link}
          target="_blank"
          whileHover={{
            scale: 1.15,
            boxShadow: `0 0 20px ${item.color}`,
          }}
          style={{
            color: item.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            border: `1px solid ${item.color}`,
            transition: "0.0s",
          }}
        >
          {item.svg}
        </motion.a>
      ))}
    </motion.div>
  );
}
