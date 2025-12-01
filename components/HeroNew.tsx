"use client";

import { motion } from "framer-motion";
import { useEffect, useState, memo } from "react";

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Simplified Abstract Visual Component
 * Uses CSS animations instead of heavy Framer Motion for better LCP
 * Memoized to prevent unnecessary re-renders
 */
const Abstract3DVisual = memo(function Abstract3DVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Ambient glow - CSS animation */}
      <div className="absolute w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] animate-pulse-slow" />
      
      {/* Main 3D geometric structure - CSS animations for performance */}
      <div className="relative w-[400px] h-[500px] md:w-[500px] md:h-[700px] animate-float opacity-40">
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
});

/**
 * WhatsApp Icon Component
 */
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

/**
 * New Hero Component
 * Dramatic full-screen design with bilingual content and CTAs
 * LCP-optimized: Main text renders immediately, animations are progressive enhancement
 */
export default function HeroNew() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col">
      {/* Abstract 3D Visual - loads after mount to not block LCP */}
      {mounted && <Abstract3DVisual />}

      {/* Main content overlay - renders immediately for LCP */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-20 pb-8 md:pt-24 md:pb-12">
        <div className="max-w-4xl">
          {/* Name - LCP Element */}
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-2 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Omar Rageh
          </motion.h1>

          {/* Main subtitle - German */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 font-light mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Full-Stack Webentwickler in Fulda
          </motion.p>

          {/* Supporting text - German & English */}
          <motion.div
            className="space-y-2 mb-6 sm:mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl">
              Ich entwickle schnelle, moderne Websites und Automatisierungslösungen für kleine Unternehmen und Teams.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/50 max-w-2xl">
              I build fast, modern websites and automation tools for small businesses and teams.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Primary CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 active:bg-white/80 transition-all duration-300"
            >
              <span className="text-sm sm:text-base">Kostenloses Erstgespräch buchen</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/50 active:bg-white/5 transition-all duration-300"
            >
              <span className="text-sm sm:text-base">Angebot anfragen</span>
            </a>
          </motion.div>

          {/* Mobile WhatsApp CTA */}
          <motion.a
            href="https://wa.me/4917655093674"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => {
              if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
                window.fbq('track', 'Contact');
              }
            }}
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span className="text-sm">Oder per WhatsApp schreiben</span>
          </motion.a>

          {/* Quick navigation links */}
          <motion.div
            className="hidden md:flex items-center gap-8 mt-10 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="#projects" className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors">
              <span className="text-sm tracking-wide">Projekte</span>
              <span className="text-xs text-white/30">/ Projects</span>
            </a>
            <a href="#about" className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors">
              <span className="text-sm tracking-wide">Über mich</span>
              <span className="text-xs text-white/30">/ About</span>
            </a>
            <a href="#services" className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors">
              <span className="text-sm tracking-wide">Leistungen</span>
              <span className="text-xs text-white/30">/ Services</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {mounted && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-fade-in">
          <div className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center p-2 animate-bounce-slow">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      )}
    </section>
  );
}
