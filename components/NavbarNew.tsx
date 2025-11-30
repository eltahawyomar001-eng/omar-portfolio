"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavbarNew() {
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Europe/Berlin",
      });
      setCurrentTime(time + " CET");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Projekte", nameEn: "Projects", href: "#projects" },
    { name: "Über mich", nameEn: "About", href: "#about" },
    { name: "Leistungen", nameEn: "Services", href: "#services" },
    { name: "Kontakt", nameEn: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-5">
          <motion.a
            href="#"
            className="text-white text-sm font-medium tracking-wide hover:opacity-70 transition-opacity z-50"
            whileHover={{ x: 2 }}
          >
            Omar Rageh
          </motion.a>

          <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-white/60 text-xs tracking-wider">
            <span className="tabular-nums min-w-[90px]">{currentTime || "--:-- CET"}</span>
            <a href="mailto:omarragehfulda@gmail.com" className="hover:text-white transition-colors">
              omarragehfulda@gmail.com
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <div className="flex items-center gap-6 lg:gap-8 text-white/70 text-sm">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative hover:text-white transition-colors group"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <span>{item.name}</span>
                  <span className="text-white/40 mx-1">/</span>
                  <span className="text-white/50">{item.nameEn}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-white text-sm hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Anfragen</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 origin-center ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-white text-3xl sm:text-4xl font-display font-light hover:opacity-70 transition-opacity text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <span>{item.name}</span>
                  <span className="text-white/40 mx-2">/</span>
                  <span className="text-white/50">{item.nameEn}</span>
                </motion.a>
              ))}
              
              <motion.a
                href="#contact"
                onClick={handleNavClick}
                className="mt-4 flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full text-white text-lg hover:bg-white hover:text-black transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.4 }}
              >
                <span>Anfragen</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </motion.a>
            </nav>

            <div className="absolute bottom-8 left-0 right-0 px-6">
              <div className="flex flex-col items-center gap-3 text-white/50 text-xs">
                <span className="tabular-nums">{currentTime || "--:-- CET"}</span>
                <a href="mailto:omarragehfulda@gmail.com" className="hover:text-white transition-colors">
                  omarragehfulda@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
