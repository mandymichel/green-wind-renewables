import React from "react"
import { motion } from "framer-motion"
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-title"
        >
          Welcome to Green Wind and Renewables
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hero-subtitle"
        >
          Clean Energy for a Sustainable Future
        </motion.p>
      </div>
    </section>
  )
}

export default HeroSection
