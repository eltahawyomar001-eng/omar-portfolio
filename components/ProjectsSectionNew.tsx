"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

/**
 * Project Card Component
 * Minimal floating card design with bilingual descriptions
 */
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className="group relative h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card container */}
      <div className="relative h-full bg-white/[0.02] border border-white/10 rounded-lg overflow-hidden transition-all duration-500 hover:border-white/30 active:border-white/20 flex flex-col">
        {/* Thumbnail area - Clickable to project */}
        <a
          href={project.liveUrl || project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-44 sm:h-52 md:h-56 bg-gradient-to-br from-white/5 to-transparent overflow-hidden flex-shrink-0 block"
        >
          {/* Project screenshot or fallback pattern */}
          {project.image && !imageError ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-left-top transition-transform duration-700 group-hover:scale-105"
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          ) : (
            /* Abstract pattern fallback */
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                {[...Array(64)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="border-b border-r border-white/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0.5 }}
                    transition={{ delay: i * 0.005 }}
                  />
                ))}
              </div>
              {/* Project number for fallback */}
              <div className="absolute top-4 right-4 text-white/20 text-6xl font-display font-light">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          )}

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: isHovered ? 0.8 : 0.3 }}
            transition={{ duration: 0.3 }}
          />

          {/* Tags */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-1.5 z-10">
            {project.tech.slice(0, 2).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 sm:py-1 bg-black/60 backdrop-blur-sm border border-white/10 text-white/70 text-[9px] sm:text-[10px] tracking-wider uppercase"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Live demo indicator */}
          {project.liveUrl && (
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
              <span className="px-2 py-0.5 sm:py-1 bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-400 text-[9px] sm:text-[10px] tracking-wider uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Live
              </span>
            </div>
          )}

          {/* View project indicator */}
          <motion.div
            className="absolute bottom-4 right-4 flex items-center gap-2 text-white text-sm z-10"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xs tracking-wider">Projekt ansehen / View</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </motion.div>
        </a>

        {/* Content area - Bilingual */}
        <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
          <a
            href={project.liveUrl || project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between gap-3 mb-3"
          >
            <div className="flex-1 min-w-0">
              <h3 className="text-white text-base sm:text-lg font-medium mb-2 group-hover:text-white/90 transition-colors line-clamp-1">
                {project.title}
              </h3>
              {/* German description */}
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-1.5 line-clamp-2">
                {project.descriptionDe}
              </p>
              {/* English description */}
              <p className="text-white/40 text-xs leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* Arrow */}
            <motion.div
              className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300"
              animate={{ rotate: isHovered ? 45 : 0 }}
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white/50 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.div>
          </a>

          {/* Result/Highlight - Bilingual */}
          <div className="pt-3 sm:pt-4 border-t border-white/5 mt-auto">
            <p className="text-white/40 text-[10px] sm:text-xs line-clamp-1">
              {project.resultDe}
            </p>
            <p className="text-white/25 text-[10px] sm:text-xs line-clamp-1 mt-1">
              {project.resultEn}
            </p>
            
            {/* Footer with highlight and GitHub link */}
            <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
              <p className="text-white/50 text-[10px] sm:text-xs font-medium truncate flex-1 mr-3">
                {project.highlight}
              </p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-white/30 text-[10px] sm:text-xs hover:text-white transition-colors flex items-center gap-1"
              >
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 bg-white/5 rounded-lg blur-2xl -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

/**
 * New Projects Section
 * Minimal grid layout with bilingual floating cards
 */
export default function ProjectsSectionNew() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen bg-black py-16 sm:py-24 md:py-32"
    >
      {/* Section header - Bilingual */}
      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-10 sm:mb-16 md:mb-20"
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between border-b border-white/10 pb-6 sm:pb-8 gap-4 sm:gap-0">
          <div>
            <motion.p
              className="text-white/40 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Selected Projects
            </motion.p>
            <motion.h2
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Projekte
            </motion.h2>
          </div>

          <motion.div
            className="max-w-sm sm:text-right space-y-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-white/50 text-xs sm:text-sm">
              Eine Auswahl von Projekten aus Webentwicklung, Automatisierung und datengetriebenen Anwendungen.
            </p>
            <p className="text-white/30 text-xs">
              A selection of projects spanning web development, automation, and data-driven applications.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-px h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-px h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
    </section>
  );
}
