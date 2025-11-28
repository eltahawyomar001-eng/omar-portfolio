"use client";

import { motion } from "framer-motion";
import { aboutContent, skillsCategories } from "@/data/content";

/**
 * About Section Component
 * 
 * Two-column layout featuring:
 * - Left: Personal narrative and background
 * - Right: Skills organized by category
 * - Glassmorphism skill cards with hover effects
 * - Fully responsive (stacks on mobile)
 */

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Heading */}
            <div>
              <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">
                Get to know me
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{aboutContent.heading}</h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-6">
                {aboutContent.subheading}
              </h3>
            </div>

            {/* About Text */}
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">
                My toolkit
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                Skills & Technologies
              </h3>
            </div>

            {/* Skills Categories */}
            <div className="space-y-4">
              {skillsCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-background/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl" role="img" aria-label={category.title}>
                      {category.icon}
                    </span>
                    <h4 className="text-lg font-semibold group-hover:text-accent transition-colors">
                      {category.title}
                    </h4>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-foreground/5 text-foreground/80 border border-foreground/10 hover:border-accent/30 hover:bg-accent/5 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Optional: Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-accent/10 to-accent-secondary/10 backdrop-blur-xl border border-accent/20 rounded-2xl p-6"
            >
              <p className="text-sm text-foreground/70 leading-relaxed">
                <span className="font-semibold text-foreground">
                  Always learning.
                </span>{" "}
                I&apos;m constantly exploring new technologies and methodologies
                to stay current in the ever-evolving web development landscape.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
