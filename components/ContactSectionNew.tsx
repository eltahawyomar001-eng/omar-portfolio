"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/data/content";

/**
 * New Contact Section
 * Minimal, dramatic design with large typography
 */
export default function ContactSectionNew() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden py-16 sm:py-24 md:py-0"
    >
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[30vw] sm:text-[25vw] text-white/[0.02] whitespace-nowrap">
          HELLO
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        {/* Pre-heading */}
        <motion.p
          className="text-white/40 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in touch
        </motion.p>

        {/* Main heading */}
        <motion.h2
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-light mb-4 sm:mb-6 md:mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Let&apos;s create
          <br />
          <span className="text-white/60">something together</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-white/40 text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I&apos;m open to freelance projects, collaborations, and full-time opportunities.
        </motion.p>

        {/* Email CTA */}
        <motion.div
          className="mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={`mailto:${contactInfo.email}`}
            className="group inline-flex items-center gap-2 sm:gap-4 px-5 py-3 sm:px-8 sm:py-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black active:bg-white/90 transition-all duration-500"
          >
            <span className="text-sm sm:text-base md:text-lg break-all sm:break-normal">{contactInfo.email}</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform group-hover:rotate-45 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 sm:gap-2 text-white/40 hover:text-white active:text-white/80 transition-colors py-2"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-xs sm:text-sm tracking-wide">GitHub</span>
          </a>

          <span className="w-px h-4 bg-white/20" />

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 sm:gap-2 text-white/40 hover:text-white active:text-white/80 transition-colors py-2"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-xs sm:text-sm tracking-wide">LinkedIn</span>
          </a>
        </motion.div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
