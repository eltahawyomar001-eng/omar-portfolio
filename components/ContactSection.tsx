"use client";

import { motion } from "framer-motion";

/**
 * Contact Section Component
 * 
 * Call-to-action section with:
 * - Centered content layout
 * - Primary email CTA button
 * - Social media links (GitHub, LinkedIn)
 * - Subtle gradient background
 * - Decorative glow elements
 */
export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Label */}
          <p className="text-accent text-xs sm:text-sm font-medium uppercase tracking-wider">
            Get in touch
          </p>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            Let&apos;s talk
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            I&apos;m open to freelance projects, collaborations, and full-time
            opportunities. Whether you have a question or just want to say hi,
            I&apos;ll get back to you!
          </p>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-4"
          >
            <a
              href="mailto:omarragehfulda@gmail.com"
              className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-accent to-accent-secondary text-white text-base sm:text-lg font-medium hover:opacity-90 transition-opacity shadow-2xl shadow-accent/30 hover:shadow-accent/40 hover:scale-105 transform duration-300"
              aria-label="Send me an email"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send me an email
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 sm:gap-6 pt-8"
          >
            <a
              href="https://github.com/eltahawyomar001-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-background/40 backdrop-blur-xl border border-white/10 text-foreground/70 hover:text-foreground hover:border-accent/50 transition-all duration-300 hover:scale-105"
              aria-label="View my GitHub profile"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-xs sm:text-sm font-medium">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/omar-rageh-8a0453172/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-background/40 backdrop-blur-xl border border-white/10 text-foreground/70 hover:text-foreground hover:border-accent-secondary/50 transition-all duration-300 hover:scale-105"
              aria-label="View my LinkedIn profile"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent-secondary/10 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
    </section>
  );
}
