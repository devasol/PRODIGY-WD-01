import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="container">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="navbar"
      >
        <h1 className="logo">Prodigy InfoTech</h1>
        {/* Navbar links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button className="nav-button">Home</button>
          <button className="nav-button">About</button>
          <button className="nav-button">Projects</button>
          <button className="nav-button">Contact</button>
        </div>
        {/* Burger icon */}
        <div className="burger-icon" onClick={toggleMenu}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero"
      >
        <h2 className="hero-title">Innovate. Code. Transform.</h2>
        <p className="hero-text">
          Experience cutting-edge software solutions crafted by the brightest
          minds in technology.
        </p>
        <button className="hero-button">Explore Projects</button>
      </motion.div>

      {/* Features Section */}
      <div className="features">
        {[
          {
            title: "Advanced Tech",
            desc: "Harnessing the latest technologies for superior performance.",
          },
          {
            title: "Scalable Solutions",
            desc: "Building future-ready applications with seamless scalability.",
          },
          {
            title: "User-Centric Design",
            desc: "Creating intuitive experiences tailored to user needs.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="feature-box"
          >
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-text">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 Prodigy InfoTech | All Rights Reserved
      </footer>
    </div>
  );
}
