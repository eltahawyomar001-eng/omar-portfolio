"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { aboutContent, skillsCategories } from "@/data/content";

/**
 * New About Section
 * Minimal, dark aesthetic with elegant typography
 */
export default function AboutSectionNew() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen bg-black py-16 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Large background text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[25vw] sm:text-[20vw] text-white/[0.02] whitespace-nowrap pointer-events-none select-none"
        style={{ y }}
      >
        ABOUT
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between border-b border-white/10 pb-6 sm:pb-8 mb-10 sm:mb-16 md:mb-20 gap-4 sm:gap-0">
          <div>
            <motion.p
              className="text-white/40 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Get to know me
            </motion.p>
            <motion.h2
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {aboutContent.heading}
            </motion.h2>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-24">
          {/* Left column - About text */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 md:space-y-8">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-white/60 text-base sm:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Signature/closing */}
            <motion.div
              className="pt-6 sm:pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-white/40 text-xs sm:text-sm mb-2 sm:mb-4">Currently based in</p>
              <p className="text-white text-xl sm:text-2xl font-display font-light">Germany</p>
            </motion.div>
          </div>

          {/* Right column - Skills */}
          <div className="lg:col-span-5">
            <motion.p
              className="text-white/40 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Expertise
            </motion.p>

            <div className="space-y-6 sm:space-y-8">
              {skillsCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">{category.icon}</span>
                    <h3 className="text-white text-base sm:text-lg font-medium">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white/[0.03] border border-white/10 text-white/50 text-xs sm:text-sm hover:text-white hover:border-white/30 active:border-white/20 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.03 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CV Download */}
            <motion.div
              className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="/cv.pdf"
                download="Omar_Rageh_Resume.pdf"
                className="group inline-flex items-center gap-2 sm:gap-3 text-white/60 hover:text-white active:text-white/80 transition-colors py-2"
              >
                <span className="text-xs sm:text-sm tracking-wide">Download Resume</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v16m0 0l-6-6m6 6l6-6"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-white/[0.01] rounded-full blur-2xl" />
    </section>
  );
}
