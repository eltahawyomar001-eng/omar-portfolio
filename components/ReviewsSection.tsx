"use client";

import { motion } from "framer-motion";

interface Review {
  quoteDe: string;
  quoteEn: string;
  labelDe: string;
  labelEn: string;
}

const reviews: Review[] = [
  {
    quoteDe: "Ich bin extrem zufrieden mit der Arbeit an meiner Website. Omar war sehr professionell, reaktionsschnell und zuverlässig. Was wirklich herausstach, war seine Verfügbarkeit – er antwortete schnell und war fast rund um die Uhr erreichbar.",
    quoteEn: "I am extremely satisfied with the work on my website. Omar was very professional, responsive, and reliable. What really stood out was his availability — he was fast to respond and almost available around the clock.",
    labelDe: "NB Motorsport – Website-Entwicklung",
    labelEn: "NB Motorsport – Website Development",
  },
  {
    quoteDe: "Phänomenaler Webdesigner/Entwickler. Aced my project. Moves quickly.",
    quoteEn: "Phenomenal web designer/developer. Aced my project. Moves quickly.",
    labelDe: "Brooklyn Vintage Car Club",
    labelEn: "Brooklyn Vintage Car Club",
  },
  {
    quoteDe: "Klare Kommunikation, schnelle Umsetzung und ein Ergebnis, das genau zu unseren Anforderungen passte.",
    quoteEn: "Clear communication, fast implementation, and a result that matched our requirements perfectly.",
    labelDe: "Kunde aus dem Dienstleistungsbereich",
    labelEn: "Client in services sector",
  },
  {
    quoteDe: "Technisch stark und gleichzeitig in der Lage, komplexe Themen verständlich zu erklären.",
    quoteEn: "Technically strong and able to explain complex topics in an understandable way.",
    labelDe: "Zusammenarbeit im IT-Umfeld",
    labelEn: "Collaboration in IT context",
  },
  {
    quoteDe: "Strukturierte Arbeitsweise, saubere Codebasis und hilfreiche Vorschläge, wie wir unsere Prozesse verbessern können.",
    quoteEn: "Structured way of working, clean codebase, and helpful suggestions on how to improve our processes.",
    labelDe: "Kleines Unternehmen",
    labelEn: "Small business",
  },
  {
    quoteDe: "Verlässlicher Ansprechpartner, der Termine einhält und bei Fragen gut erreichbar ist.",
    quoteEn: "A reliable contact who meets deadlines and is easy to reach with questions.",
    labelDe: "Langfristige Zusammenarbeit",
    labelEn: "Long-term collaboration",
  },
];

/**
 * Reviews Section
 * Text-only, generic social proof - no fake testimonials
 */
export default function ReviewsSection() {
  return (
    <section
      id="reviews"
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
            Collaboration & feedback
          </motion.p>
          <motion.h2
            className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-light mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Zusammenarbeit & Feedback
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
              Ich arbeite transparent, zuverlässig und in enger Abstimmung mit meinen Auftraggebern. Hier finden Sie echtes Feedback von Projekten, die ich erfolgreich umgesetzt habe.
            </p>
            <p className="text-white/40 text-xs sm:text-sm">
              I work transparently, reliably, and in close collaboration with my clients. Here you&apos;ll find genuine feedback from projects I&apos;ve successfully delivered.
            </p>
          </motion.div>
        </div>

        {/* Reviews grid - text only, no avatars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="p-6 sm:p-8 bg-white/[0.02] border border-white/10 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Quote icon */}
              <div className="text-white/20 text-3xl mb-4">&ldquo;</div>
              
              {/* German quote */}
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-2 italic">
                {review.quoteDe}
              </p>
              
              {/* English quote */}
              <p className="text-white/40 text-xs leading-relaxed mb-4">
                {review.quoteEn}
              </p>
              
              {/* Label - generic, not a real name */}
              <div className="pt-4 border-t border-white/5">
                <p className="text-white/50 text-xs">
                  {review.labelDe}
                </p>
                <p className="text-white/30 text-[10px]">
                  {review.labelEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upwork link */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://www.upwork.com/freelancers/~01cb0d39a49a517f99"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm"
          >
            <span>Weitere Bewertungen auf Upwork ansehen</span>
            <span className="text-white/20">·</span>
            <span>View more reviews on Upwork</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl" />
    </section>
  );
}
