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
      className="relative min-h-screen bg-black py-32 overflow-hidden"
    >
      {/* Large background text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20vw] text-white/[0.02] whitespace-nowrap pointer-events-none select-none"
        style={{ y }}
      >
        ABOUT
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-end justify-between border-b border-white/10 pb-8 mb-20">
          <div>
            <motion.p
              className="text-white/40 text-xs tracking-[0.3em] uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Get to know me
            </motion.p>
            <motion.h2
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-light"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left column - About text */}
          <div className="lg:col-span-7 space-y-8">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-white/60 text-lg leading-relaxed"
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
              className="pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-white/40 text-sm mb-4">Currently based in</p>
              <p className="text-white text-2xl font-display font-light">Germany</p>
            </motion.div>
          </div>

          {/* Right column - Skills */}
          <div className="lg:col-span-5">
            <motion.p
              className="text-white/40 text-xs tracking-[0.3em] uppercase mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Expertise
            </motion.p>

            <div className="space-y-8">
              {skillsCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-white text-lg font-medium">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1.5 bg-white/[0.03] border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/30 transition-all duration-300"
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
              className="mt-12 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="/cv.pdf"
                download="Omar_Rageh_Resume.pdf"
                className="group inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <span className="text-sm tracking-wide">Download Resume</span>
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
