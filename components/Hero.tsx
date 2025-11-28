"use client";

import { motion } from "framer-motion";

/**
 * Hero Section Component
 * 
 * Main landing section with:
 * - Two-column layout (content left, visual right)
 * - Animated entrance with staggered children
 * - Badge, heading, description, and CTA buttons
 * - Glassmorphism visual element (desktop only)
 */
export default function Hero() {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const visualVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 sm:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-medium">
                Full-stack developer & automation builder
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                Omar Rageh
              </span>
              .
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed max-w-xl"
            >
              I build practical web applications, automation tools, and business
              workflows. From analytics dashboards to PDF generation systems, I
              create solutions that streamline operations and deliver real value.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
            >
              {/* Primary Button */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-accent to-accent-secondary text-white text-sm sm:text-base font-medium hover:opacity-90 transition-opacity shadow-lg shadow-accent/20 hover:shadow-accent/30"
                aria-label="View my projects"
              >
                View Projects
              </a>

              {/* Secondary Button */}
              <a
                href="/cv.pdf"
                download="Omar_Rageh_Resume.pdf"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-accent/30 text-foreground text-sm sm:text-base font-medium hover:border-accent/50 hover:bg-accent/5 transition-all"
                aria-label="Download my CV"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            variants={visualVariants}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
            aria-hidden="true"
          >
            <div className="relative">
              {/* Main glassmorphism card */}
              <div className="relative z-10 bg-gradient-to-br from-accent/10 to-accent-secondary/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                {/* Simulated app windows stack */}
                <div className="space-y-4">
                  {/* Window 1 - Dashboard */}
                  <div className="bg-background/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                      <div className="w-3 h-3 rounded-full bg-accent-secondary"></div>
                      <div className="w-3 h-3 rounded-full bg-foreground/20"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gradient-to-r from-accent to-transparent rounded"></div>
                      <div className="h-2 bg-gradient-to-r from-accent-secondary to-transparent rounded w-3/4"></div>
                    </div>
                  </div>

                  {/* Window 2 - Analytics */}
                  <div className="bg-background/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 space-y-3 transform translate-x-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent-secondary"></div>
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                      <div className="w-3 h-3 rounded-full bg-foreground/20"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 bg-gradient-to-t from-accent/50 to-accent/10 rounded"></div>
                      <div className="h-16 bg-gradient-to-t from-accent-secondary/50 to-accent-secondary/10 rounded"></div>
                      <div className="h-10 bg-gradient-to-t from-accent/30 to-accent/5 rounded"></div>
                    </div>
                  </div>

                  {/* Window 3 - PDF/Document */}
                  <div className="bg-background/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 space-y-2 transform translate-x-8">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-foreground/20"></div>
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                      <div className="w-3 h-3 rounded-full bg-accent-secondary"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 bg-foreground/10 rounded w-full"></div>
                      <div className="h-1.5 bg-foreground/10 rounded w-5/6"></div>
                      <div className="h-1.5 bg-foreground/10 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent-secondary/20 blur-3xl -z-10 opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
