"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

/**
 * Project Card Component
 * Minimal floating card design with project screenshots
 */
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={project.liveUrl || project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden"
      >
        {/* Card container */}
        <div className="relative bg-white/[0.02] border border-white/10 rounded-lg overflow-hidden transition-all duration-500 hover:border-white/30">
          {/* Thumbnail area */}
          <div className="relative h-64 bg-gradient-to-br from-white/5 to-transparent overflow-hidden">
            {/* Project screenshot or fallback pattern */}
            {project.image && !imageError ? (
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                onError={() => setImageError(true)}
                sizes="(max-width: 768px) 100vw, 50vw"
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
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
              {project.tech.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-black/50 backdrop-blur-sm border border-white/10 text-white/70 text-[10px] tracking-wider uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Live demo indicator */}
            {project.liveUrl && (
              <div className="absolute top-4 right-4 z-10">
                <span className="px-2 py-1 bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-400 text-[10px] tracking-wider uppercase flex items-center gap-1">
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
              <span className="text-xs tracking-wider">View Project</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.div>
          </div>

          {/* Content area */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-white text-lg font-medium mb-2 group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Arrow */}
              <motion.div
                className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300"
                animate={{ rotate: isHovered ? 45 : 0 }}
              >
                <svg className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </motion.div>
            </div>

            {/* Highlight */}
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-white/30 text-xs tracking-wide">
                {project.highlight}
              </p>
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
      </a>

      {/* GitHub link */}
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 right-20 text-white/30 text-xs hover:text-white transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        GitHub →
      </a>
    </motion.div>
  );
}

/**
 * New Projects Section
 * Minimal grid layout with floating cards
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
      className="relative min-h-screen bg-black py-32"
    >
      {/* Section header */}
      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto px-6 md:px-12 mb-20"
      >
        <div className="flex items-end justify-between border-b border-white/10 pb-8">
          <div>
            <motion.p
              className="text-white/40 text-xs tracking-[0.3em] uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Selected Works
            </motion.p>
            <motion.h2
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Projects
            </motion.h2>
          </div>

          <motion.p
            className="hidden md:block text-white/30 text-sm max-w-xs text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            A collection of work spanning web development, automation, and data visualization.
          </motion.p>
        </div>
      </motion.div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
