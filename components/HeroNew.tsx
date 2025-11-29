"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

// Deterministic particle positions to avoid hydration errors
const particlePositions = [
  { left: 5, top: 10, duration: 4, delay: 0 },
  { left: 15, top: 80, duration: 3.5, delay: 0.5 },
  { left: 25, top: 30, duration: 4.5, delay: 1 },
  { left: 35, top: 60, duration: 3, delay: 1.5 },
  { left: 45, top: 20, duration: 5, delay: 2 },
  { left: 55, top: 90, duration: 3.8, delay: 0.3 },
  { left: 65, top: 45, duration: 4.2, delay: 0.8 },
  { left: 75, top: 70, duration: 3.3, delay: 1.2 },
  { left: 85, top: 15, duration: 4.8, delay: 1.8 },
  { left: 95, top: 55, duration: 3.6, delay: 2.2 },
  { left: 10, top: 40, duration: 4.1, delay: 0.4 },
  { left: 20, top: 85, duration: 3.7, delay: 0.9 },
  { left: 30, top: 25, duration: 4.4, delay: 1.4 },
  { left: 40, top: 75, duration: 3.2, delay: 1.9 },
  { left: 50, top: 50, duration: 4.6, delay: 2.4 },
  { left: 60, top: 35, duration: 3.4, delay: 0.6 },
  { left: 70, top: 65, duration: 4.3, delay: 1.1 },
  { left: 80, top: 5, duration: 3.9, delay: 1.6 },
  { left: 90, top: 95, duration: 4.7, delay: 2.1 },
  { left: 3, top: 72, duration: 3.1, delay: 2.6 },
];

/**
 * Abstract 3D Visual Component
 * Creates a futuristic geometric shape with dynamic lighting
 */
function Abstract3DVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / rect.width);
      mouseY.set((e.clientY - centerY) / rect.height);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] animate-pulse-slow" />
      
      {/* Main 3D geometric structure */}
      <motion.div
        className="relative w-[500px] h-[700px] preserve-3d"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Central prism/crystal shape */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
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
        </motion.div>

        {/* Floating geometric elements */}
        <motion.div
          className="absolute top-1/4 -left-20 w-16 h-16 border border-white/20 rotate-45"
          animate={{ rotate: [45, 135, 45], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-16 w-12 h-12 border border-white/15 rotate-12"
          animate={{ rotate: [12, 72, 12], y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 -right-24 w-8 h-8 bg-white/10 rotate-45"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
          <motion.line
            x1="50%"
            y1="30%"
            x2="10%"
            y2="60%"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line
            x1="50%"
            y1="40%"
            x2="90%"
            y2="70%"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
        </svg>
      </motion.div>

      {/* Particle field - using deterministic positions to avoid hydration errors */}
      {particlePositions.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Floating Project Card Component
 * Shows the latest project with actual screenshot
 */
function ProjectCard() {
  // Get the first project with a live URL and image
  const latestProject = projects.find(p => p.liveUrl && p.image) || projects[0];
  
  return (
    <motion.div
      className="absolute bottom-8 right-8 w-72 bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden z-20"
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
        <div className="relative h-32 bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
          {latestProject.image ? (
            <Image
              src={latestProject.image}
              alt={latestProject.title}
              fill
              className="object-cover object-top"
              sizes="288px"
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
          <div className="absolute top-2 left-2 px-2 py-1 bg-white text-black text-[10px] font-medium tracking-wider">
            NEW PROJECT
          </div>
        </div>
        
        {/* Project info */}
        <div className="p-4">
          <h4 className="text-white text-sm font-medium mb-1">{latestProject.title}</h4>
          <p className="text-white/50 text-xs">{latestProject.tech.slice(0, 2).join(" · ")}</p>
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
        <div className="flex-1 flex items-center justify-between px-8 md:px-16 lg:px-24">
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
              <span className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white/90 tracking-tight hover:text-white transition-colors duration-500">
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
              <span className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white/90 tracking-tight hover:text-white transition-colors duration-500">
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
