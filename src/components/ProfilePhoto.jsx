import React from "react";
import { motion } from "framer-motion";
import pg from "../assets/pg.png";

export default function ProfilePhoto({ style }) {
  return (
    <motion.img
      src={pg}
      alt="Profile"
      initial={{ opacity: 0 }}        // fade-in only
      whileInView={{ opacity: 1 }}    // animate when in viewport
      viewport={{ once: true }}       // animate only once
      transition={{ duration: 1.5, delay: 0.8 }}
      style={{
        width: style?.width || "700px",     // adjustable width
        height: style?.height || "auto",    // adjustable height
        objectFit: "contain",               // full image shown
        borderRadius: style?.borderRadius || "0px",
        position: "absolute",
        top: style?.top || "50%",
        left: style?.left || "50%",
        transform: "translate(-50%, -50%)",
        zIndex: style?.zIndex || 10,
        ...style,
      }}
    />
  );
}
