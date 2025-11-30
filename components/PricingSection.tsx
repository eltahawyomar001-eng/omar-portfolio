"use client";

import { motion } from "framer-motion";

interface PricingTier {
  title: string;
  textDe: string;
  textEn: string;
  priceDe: string;
  priceEn: string;
}

const pricingTiers: PricingTier[] = [
  {
    title: "Starter Website",
    textDe: "One-Page-Website oder Landingpage für ein Produkt oder Angebot.",
    textEn: "One-page website or landing page for a product or offer.",
    priceDe: "Ab 450 €",
    priceEn: "From €450",
  },
  {
    title: "Business Website",
    textDe: "3–5 Seiten, individuelle Inhalte, Kontaktformular, mobil optimiert.",
    textEn: "3–5 pages, custom content, contact form, mobile-optimized.",
    priceDe: "Ab 900 €",
    priceEn: "From €900",
  },
  {
    title: "Individuelle Web-App",
    textDe: "Webanwendung, Dashboard oder Automatisierungslösung, abgestimmt auf Ihre Prozesse.",
    textEn: "Web application, dashboard, or automation solution tailored to your processes.",
    priceDe: "Ab 1.500 €",
    priceEn: "From €1,500",
  },
];

/**
 * Pricing Section
 * Transparent pricing for German small businesses
 */
export default function PricingSection() {
  return (
    <section
      id="pricing"
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
            Packages & starting prices
          </motion.p>
          <motion.h2
            className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Pakete & Preise ab
          </motion.h2>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              className="group p-6 sm:p-8 bg-white/[0.02] border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-white text-lg sm:text-xl font-medium mb-4">
                {tier.title}
              </h3>
              
              <div className="flex-1 space-y-2 mb-6">
                <p className="text-white/60 text-sm leading-relaxed">
                  {tier.textDe}
                </p>
                <p className="text-white/40 text-xs leading-relaxed">
                  {tier.textEn}
                </p>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <p className="text-white text-xl sm:text-2xl font-display font-light">
                  {tier.priceDe}
                </p>
                <p className="text-white/40 text-xs">
                  {tier.priceEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          className="max-w-2xl space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/50 text-sm">
            Jedes Projekt ist individuell – die genannten Preise sind Richtwerte. Ein unverbindliches Angebot erhalten Sie nach einem kurzen Gespräch.
          </p>
          <p className="text-white/30 text-xs">
            Every project is unique – these prices are guidelines. You&apos;ll receive a detailed quote after a short call.
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-white/[0.01] rounded-full blur-2xl" />
    </section>
  );
}
