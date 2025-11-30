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
          
          {/* Intro text - explains these are expectations, not real quotes */}
          <motion.div
            className="max-w-2xl space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-white/60 text-sm sm:text-base">
              Ich arbeite transparent, zuverlässig und in enger Abstimmung mit meinen Auftraggebern. Bis echte Kundenstimmen hier stehen, beschreibt dieses Feedback, was Sie von einer Zusammenarbeit mit mir erwarten können.
            </p>
            <p className="text-white/40 text-xs sm:text-sm">
              I work transparently, reliably, and in close collaboration with my clients. Until real client quotes appear here, this feedback describes what you can expect when working with me.
            </p>
          </motion.div>
        </div>

        {/* Reviews grid - text only, no avatars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl" />
    </section>
  );
}
