import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isVisible, setIsVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", success: true });
  const sectionRef = useRef(null);
  const formRef = useRef();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const showToast = (message, success = true) => {
    setToast({ show: true, message, success });
    setTimeout(() => setToast({ show: false, message: "", success }), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_1nhxnk5", // replace with your EmailJS service ID
        "template_2mf2o06", // replace with your EmailJS template ID
        formRef.current,
        "gLGkqSUAO3BHMK2Xb" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          setSending(false);
          setFormData({ name: "", email: "", message: "" });
          showToast("Message sent successfully!", true);
        },
        (error) => {
          setSending(false);
          console.error(error.text);
          showToast("Failed to send message. Please try again.", false);
        }
      );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/yourusername", color: "#fff" },
    { icon: <FaFacebook />, url: "https://facebook.com/yourusername", color: "#1877f2" },
    { icon: <FaInstagram />, url: "https://instagram.com/yourusername", color: "#e1306c" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername", color: "#0a66c2" },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "5rem 2rem",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #111, #222)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 6 + 4}px`,
            backgroundColor: "red",
            borderRadius: "50%",
            opacity: Math.random() * 0.6 + 0.2,
            animation: `floatParticles ${Math.random() * 10 + 5}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      <h2
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
          color: "red",
          textShadow: "0 0 15px red",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        Contact Me
      </h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          maxWidth: "500px",
          padding: "2rem",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease 0.2s, transform 1s ease 0.2s",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "10px",
            border: "2px solid red",
            backgroundColor: "rgba(0,0,0,0.3)",
            color: "#fff",
            transition: "all 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#fff")}
          onBlur={(e) => (e.target.style.borderColor = "red")}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "10px",
            border: "2px solid red",
            backgroundColor: "rgba(0,0,0,0.3)",
            color: "#fff",
            transition: "all 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#fff")}
          onBlur={(e) => (e.target.style.borderColor = "red")}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "10px",
            border: "2px solid red",
            backgroundColor: "rgba(0,0,0,0.3)",
            color: "#fff",
            transition: "all 0.3s ease",
            resize: "none",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#fff")}
          onBlur={(e) => (e.target.style.borderColor = "red")}
        />
        <button
          type="submit"
          disabled={sending}
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "10px",
            border: "2px solid red",
            backgroundColor: sending ? "#444" : "red",
            color: "#fff",
            fontWeight: "bold",
            cursor: sending ? "not-allowed" : "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            if (!sending) {
              e.currentTarget.style.backgroundColor = "#000";
              e.currentTarget.style.color = "red";
              e.currentTarget.style.boxShadow = "0 0 20px red";
            }
          }}
          onMouseLeave={(e) => {
            if (!sending) {
              e.currentTarget.style.backgroundColor = "red";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.boxShadow = "none";
            }
          }}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Social Icons */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "3rem",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease 0.4s, transform 1s ease 0.4s",
        }}
      >
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              fontSize: "1.8rem",
              color: link.color,
              background: "rgba(255,255,255,0.1)",
              transition: "all 0.4s ease",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.2)";
              e.currentTarget.style.boxShadow = "0 8px 20px red";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
            }}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Email text */}
      <p
        style={{
          marginTop: "3rem",
          color: "#ccc",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease 0.6s, transform 1s ease 0.6s",
        }}
      >
        Or email me at{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>hirushanethsara59@gmail.com</span>
      </p>

      {/* Toast Notification */}
      {toast.show && (
        <div
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            padding: "1rem 2rem",
            backgroundColor: toast.success ? "green" : "red",
            color: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            zIndex: 9999,
            transition: "all 0.3s ease",
          }}
        >
          {toast.message}
        </div>
      )}

      <style>{`
        @keyframes floatParticles {
          0% { transform: translateY(0); }
          50% { transform: translateY(-50px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
