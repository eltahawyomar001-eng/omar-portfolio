"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * New Navbar Component
 * Minimal top bar matching the Artemii Lebedev aesthetic
 */
export default function NavbarNew() {
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navItems = [
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-5">
        {/* Left - Name */}
        <motion.a
          href="#"
          className="text-white text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
          whileHover={{ x: 2 }}
        >
          Omar Rageh
        </motion.a>

        {/* Center - Time and Email */}
        <div className="hidden md:flex items-center gap-12 text-white/60 text-xs tracking-wider">
          <span className="tabular-nums min-w-[90px]">{currentTime || "--:-- CET"}</span>
          <a
            href="mailto:omarragehfulda@gmail.com"
            className="hover:text-white transition-colors"
          >
            omarragehfulda@gmail.com
          </a>
        </div>

        {/* Right - Navigation Links */}
        <div className="flex items-center gap-8">
          <div className="hidden sm:flex items-center gap-8 text-white/70 text-sm">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative hover:text-white transition-colors group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Inquiries Button */}
          <motion.a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-white text-sm hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Inquiries</span>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}
