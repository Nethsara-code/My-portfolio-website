import { motion } from "framer-motion";
import ProfilePhoto from "./ProfilePhoto";
import bg from "../assets/gb.jpg";
import HeroSocials from "./HeroSocials";


export default function Hero() {
  const RA = [
    { char: "R", color: "#000000" },
    { char: "A", color: "#000000" },
  ];

  const FA = [
    { char: "F", color: "#e10600" },
    { char: "A", color: "#e10600" },
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* White overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.10)",
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Letters */}
        <div
          style={{
            display: "flex",
            gap: "10rem",
            fontSize: "20rem",
            fontWeight: 800,
          }}
        >
          {/* RA */}
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {RA.map((letter, i) => (
                <span key={i} style={{ color: letter.color }}>
                  {letter.char}
                </span>
              ))}
            </div>

            {/* Red line under RA */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1, delay: 1.2 }}
              style={{
                height: "6px",
                background: "#e10600",
                marginTop: "1rem",
              }}
            />
          </motion.div>

          {/* FA */}
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {FA.map((letter, i) => (
                <span key={i} style={{ color: letter.color }}>
                  {letter.char}
                </span>
              ))}
            </div>

            {/* Black line under FA */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "68%" }}
              transition={{ duration: 1, delay: 1.4 }}
              style={{
                height: "6px",
                background: "#000000",
                marginTop: "1rem",
              }}
            />
          </motion.div>
        </div>

        {/* Profile Photo */}
        <ProfilePhoto
          style={{
            width: "400px",
            top: "50%",
            left: "50%",
            zIndex: 3,
          }}
        />
      </div>
      <HeroSocials />

    </section>
  );
}
