"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/**
 * New Footer Component
 * Minimal design with bilingual location
 */
export default function FooterNew() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Left - Copyright & Legal */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 order-3 sm:order-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-white/30 text-xs sm:text-sm">
              © {currentYear} Omar Rageh
            </p>
            <span className="hidden sm:inline text-white/20">·</span>
            <div className="flex items-center gap-2 sm:gap-4">
              <Link 
                href="/impressum" 
                className="text-white/30 text-xs sm:text-sm hover:text-white transition-colors"
              >
                Impressum
              </Link>
              <span className="text-white/20">·</span>
              <Link 
                href="/datenschutz" 
                className="text-white/30 text-xs sm:text-sm hover:text-white transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </motion.div>

          {/* Center - Back to top */}
          <motion.a
            href="#"
            className="group flex items-center gap-2 text-white/40 hover:text-white active:text-white/80 transition-colors py-2 order-1 sm:order-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] sm:text-xs tracking-wider uppercase">Nach oben / Back to top</span>
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.a>

          {/* Right - Location & Social Links - Bilingual */}
          <motion.div
            className="text-center sm:text-right order-2 sm:order-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-white/30 text-xs sm:text-sm mb-2">
              Mit Sitz in Fulda, Deutschland
            </p>
            <p className="text-white/20 text-[10px] sm:text-xs mb-3">
              Based in Fulda, Germany
            </p>
            {/* Social Links */}
            <div className="flex items-center justify-center sm:justify-end gap-4">
              <a
                href="https://github.com/eltahawyomar001-eng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01cb0d39a49a517f99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors"
                aria-label="Upwork Profile"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
