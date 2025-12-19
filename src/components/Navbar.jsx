import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down → hide
        setHidden(true);
      } else {
        // scrolling up → show
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 8%",
        zIndex: 1000,
        background: "rgba(255, 255, 255, 0)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Logo */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ fontWeight: 800, fontSize: "2.6rem" }}
      >
        <span style={{ color: "#000000" }}>RA</span>
        <span style={{ color: "#e10600" }}>FA</span>
      </motion.div>

      {/* Nav buttons */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ display: "flex", gap: "36px" }}
      >
        {navLinks.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            whileHover="hover"
            initial="rest"
            animate="rest"
            style={{
              position: "relative",
              textDecoration: "none",
              color: "#111",
              fontWeight: 500,
              fontSize: "1rem",
              padding: "6px 2px",
            }}
          >
            {link.name}

            {/* underline animation */}
            <motion.span
              variants={{
                rest: { width: "0%" },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: 0,
                bottom: "-6px",
                height: "2px",
                background: "#e10600",
              }}
            />
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  );
}
