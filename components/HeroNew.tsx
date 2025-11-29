"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

/**
 * Simplified Abstract Visual Component
 * Uses CSS animations instead of heavy Framer Motion for better LCP
 */
function Abstract3DVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Ambient glow - CSS animation */}
      <div className="absolute w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] animate-pulse-slow" />
      
      {/* Main 3D geometric structure - CSS animations for performance */}
      <div className="relative w-[500px] h-[700px] animate-float">
        {/* Central prism/crystal shape */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Main body - abstract humanoid silhouette */}
          <div className="relative">
            {/* Head/helmet area */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-40">
              <div className="w-full h-full bg-gradient-to-b from-white/20 via-white/10 to-transparent rounded-t-[50%] backdrop-blur-sm border border-white/10" />
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-16 bg-gradient-to-b from-white/30 to-white/5 rounded-t-[60%] backdrop-blur-md border border-white/20">
                {/* Visor reflection */}
                <div className="absolute top-2 left-2 w-20 h-10 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-t-[60%]" />
              </div>
            </div>

            {/* Torso structure */}
            <div className="w-72 h-96 relative">
              {/* Chest plate */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-64 bg-gradient-to-b from-white/15 via-white/8 to-transparent border border-white/10 rounded-t-3xl" 
                style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}>
                {/* Surface details */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-40 h-1 bg-white/20" />
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-white/10" />
                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-24 h-px bg-white/10" />
                
                {/* Center line details */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
                
                {/* Side panels */}
                <div className="absolute top-12 left-4 w-12 h-32 bg-gradient-to-r from-white/10 to-transparent border-l border-white/10" />
                <div className="absolute top-12 right-4 w-12 h-32 bg-gradient-to-l from-white/10 to-transparent border-r border-white/10" />
              </div>

              {/* Shoulder joints */}
              <div className="absolute -left-8 top-8 w-20 h-20 bg-gradient-to-br from-white/15 to-transparent rounded-full border border-white/10" />
              <div className="absolute -right-8 top-8 w-20 h-20 bg-gradient-to-bl from-white/15 to-transparent rounded-full border border-white/10" />

              {/* Arm segments */}
              <div className="absolute -left-16 top-24 w-10 h-40 bg-gradient-to-b from-white/12 to-transparent border border-white/8 rounded-lg transform -rotate-6" />
              <div className="absolute -right-16 top-24 w-10 h-40 bg-gradient-to-b from-white/12 to-transparent border border-white/8 rounded-lg transform rotate-6" />
            </div>

            {/* Core energy glow */}
            <div className="absolute top-32 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/40 rounded-full blur-md animate-pulse" />
            <div className="absolute top-32 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/60 rounded-full blur-sm" />
          </div>
        </div>

        {/* Floating geometric elements - CSS animations */}
        <div className="absolute top-1/4 -left-20 w-16 h-16 border border-white/20 rotate-45 animate-float" />
        <div className="absolute bottom-1/4 -right-16 w-12 h-12 border border-white/15 rotate-12 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 -right-24 w-8 h-8 bg-white/10 rotate-45 animate-pulse-slow" />
      </div>
    </div>
  );
}

/**
 * Floating Project Card Component
 * Shows the latest added project (first in array) with actual screenshot
 */
function ProjectCard() {
  // Get the first project in the array (most recently added - newest first order)
  const latestProject = projects.find(p => p.liveUrl && p.image) || projects[0];
  
  return (
    <motion.div
      className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-56 sm:w-64 md:w-72 bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden z-20 hidden sm:block"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
    >
      <a 
        href={latestProject.liveUrl || latestProject.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Project thumbnail */}
        <div className="relative h-24 sm:h-28 md:h-32 bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
          {latestProject.image ? (
            <Image
              src={latestProject.image}
              alt={latestProject.title}
              fill
              className="object-cover object-top"
              sizes="288px"
              priority
              loading="eager"
            />
          ) : (
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="bg-white/10" />
              ))}
            </div>
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-white text-black text-[8px] sm:text-[10px] font-medium tracking-wider">
            NEW PROJECT
          </div>
        </div>
        
        {/* Project info */}
        <div className="p-3 sm:p-4">
          <h4 className="text-white text-xs sm:text-sm font-medium mb-1">{latestProject.title}</h4>
          <p className="text-white/50 text-[10px] sm:text-xs">{latestProject.tech.slice(0, 2).join(" · ")}</p>
        </div>
      </a>
    </motion.div>
  );
}

/**
 * New Hero Component
 * Dramatic full-screen design with abstract 3D visual
 */
export default function HeroNew() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {/* Abstract 3D Visual */}
      {mounted && <Abstract3DVisual />}

      {/* Main content overlay */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Split text - Work / Projects */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 sm:px-8 md:px-16 lg:px-24 gap-8 md:gap-0 pt-20 md:pt-0">
          {/* Left side - Work */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <a
              href="#projects"
              className="group relative block"
            >
              <span className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white/90 tracking-tight hover:text-white transition-colors duration-500">
                <span className="relative inline-block">
                  W
                  {/* Decorative line through W */}
                  <svg className="absolute top-1/2 left-0 w-full h-px" viewBox="0 0 100 1">
                    <motion.line
                      x1="0"
                      y1="0.5"
                      x2="100"
                      y2="0.5"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </svg>
                </span>
                ork
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500"
              />
            </a>
          </motion.div>

          {/* Right side - About */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <a
              href="#about"
              className="group relative block"
            >
              <span className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white/90 tracking-tight hover:text-white transition-colors duration-500">
                About
              </span>
              <motion.span
                className="absolute -bottom-2 right-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating project card */}
      <ProjectCard />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
