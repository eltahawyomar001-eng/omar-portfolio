"use client";

import { motion } from "framer-motion";

interface Service {
  titleDe: string;
  textDe: string;
  textEn: string;
}

const services: Service[] = [
  {
    titleDe: "Firmenwebsites & Landingpages",
    textDe: "Moderne, schnelle und mobil-optimierte Websites, die Ihr Unternehmen professionell präsentieren.",
    textEn: "Modern, fast, mobile-optimized websites that present your business professionally.",
  },
  {
    titleDe: "Webanwendungen & Dashboards",
    textDe: "Interne Tools und Dashboards zur Visualisierung von Daten und zur Unterstützung von Entscheidungen.",
    textEn: "Internal tools and dashboards to visualize data and support decision-making.",
  },
  {
    titleDe: "Workflow-Automatisierung",
    textDe: "Automatisierte Berichte, PDF-Erstellung und Datenschnittstellen, die Ihnen Zeit sparen.",
    textEn: "Automated reports, PDF generation, and data integrations that save you time.",
  },
  {
    titleDe: "API- und System-Integration",
    textDe: "Verknüpfung von bestehenden Systemen (z. B. CRM, Zahlungsanbieter, Buchungssysteme).",
    textEn: "Connecting existing systems (e.g. CRM, payment providers, booking systems).",
  },
];

/**
 * Services Section
 * Bilingual service offerings for small businesses
 */
export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-black py-16 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section header - Bilingual */}
        <div className="border-b border-white/10 pb-6 sm:pb-8 mb-10 sm:mb-16">
          <motion.p
            className="text-white/40 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Services
          </motion.p>
          <motion.h2
            className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-light mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Leistungen
          </motion.h2>
          
          {/* Intro text */}
          <motion.div
            className="max-w-2xl space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-white/60 text-sm sm:text-base">
              Ich unterstütze kleine Unternehmen, Selbstständige und Teams mit maßgeschneiderten Weblösungen.
            </p>
            <p className="text-white/40 text-xs sm:text-sm">
              I help small businesses, freelancers, and teams with tailored web solutions.
            </p>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.titleDe}
              className="group p-6 sm:p-8 bg-white/[0.02] border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div>
                <h3 className="text-white text-base sm:text-lg font-medium mb-3">
                  {service.titleDe}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-2">
                  {service.textDe}
                </p>
                <p className="text-white/40 text-xs leading-relaxed">
                  {service.textEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl" />
    </section>
  );
}
