"use client";

import { motion } from "framer-motion";

/**
 * New Footer Component
 * Minimal design matching the overall aesthetic
 */
export default function FooterNew() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Left - Copyright */}
          <motion.p
            className="text-white/30 text-xs sm:text-sm order-3 sm:order-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Omar Rageh. All rights reserved.
          </motion.p>

          {/* Center - Back to top */}
          <motion.a
            href="#"
            className="group flex items-center gap-2 text-white/40 hover:text-white active:text-white/80 transition-colors py-2 order-1 sm:order-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] sm:text-xs tracking-wider uppercase">Back to top</span>
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

          {/* Right - Location */}
          <motion.p
            className="text-white/30 text-xs sm:text-sm order-2 sm:order-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Based in Germany
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
