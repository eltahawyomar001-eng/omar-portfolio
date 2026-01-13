export interface Project {
  title: string;
  slug: string;
  description: string;
  descriptionDe: string;
  resultDe: string;
  resultEn: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  highlight: string;
  role?: string;
}

export const projects: Project[] = [
  {
    title: "NB Motorsport - Lenzokart Importeur Deutschland",
    slug: "nb-motorsport",
    descriptionDe:
      "Offizielle Website für NB Motorsport, den einzigen Lenzokart-Importeur in Deutschland. Modernes Design mit Glasmorphismus, Rennkalender, Team-Seite und News-System.",
    description:
      "Official website for NB Motorsport, the sole Lenzokart importer in Germany. Modern design with glassmorphism, race calendar, team page, and news management system.",
    resultDe: "Pixel-perfekte Umsetzung des Figma-Designs mit Cookie-Management, Eventkalender und responsivem Layout für alle Geräte.",
    resultEn: "Pixel-perfect Figma implementation with cookie management, event calendar, and responsive layout across all devices.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/eltahawyomar001-eng/Darmstadt",
    liveUrl: "https://www.nbmotorsport.de/",
    image: "/projects/nb-motorsport.png",
    highlight: "Stack: Next.js 15, TypeScript, Tailwind CSS v4",
    role: "Full-Stack Developer",
  },
  {
    title: "Bennna - Contractor Management SaaS",
    slug: "bennna",
    descriptionDe:
      "Ein arabischsprachiges SaaS für Bauunternehmer zur Verwaltung von Aufträgen, Kunden, Preisen, Ausgaben und Teamaufgaben. RTL-Design mit WhatsApp-Integration.",
    description:
      "An Arabic contractor management SaaS for organizing jobs, clients, pricing, expenses, and team tasks. RTL design with WhatsApp integration and construction-themed UI.",
    resultDe: "Vollständige Landing Page mit Hero, Vorher/Nachher-Vergleich, interaktiver Demo, Preisgestaltung und FAQ. Moderne, konversionsorientierte Ästhetik.",
    resultEn: "Complete landing page with hero, before/after comparison, interactive demo preview, pricing tiers, and FAQ. Modern, conversion-focused design with Egyptian Arabic copy.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", "RTL Support"],
    githubUrl: "https://github.com/eltahawyomar001-eng/Bennna",
    liveUrl: "https://bennna.vercel.app/",
    image: "/projects/bennna.png",
    highlight: "Stack: Next.js, TypeScript, Tailwind CSS, RTL Design",
    role: "Solo Project",
  },
  {
    title: "LegalFlow - Lawyer CRM Landing Page",
    slug: "lawyer-landing-page",
    descriptionDe:
      "Moderne, conversion-optimierte Landing Page für einen Anwalts-CRM-Dienst. Dunkles Theme mit grünen Akzenten, Produkt-Showcase, Preisstufen und interaktive FAQ.",
    description:
      "Modern, conversion-focused landing page for a Lawyer CRM service. Dark theme with green accents, product showcase, pricing tiers, and interactive FAQ.",
    resultDe: "Vollständige Sektionen: Hero mit Dashboard-Preview, CRM-Mockups, 3-Stufen-Prozess, Preiskarten und erweiterbare FAQ mit sanften Scroll-Animationen.",
    resultEn: "Complete sections: hero with dashboard preview, CRM mockups gallery, 3-step process, pricing cards, and expandable FAQ with smooth scroll animations.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/eltahawyomar001-eng/Lawyer-Landing-Page",
    liveUrl: "https://lawyer-landing-page-six.vercel.app/",
    image: "/projects/lawyer-landing-page.png",
    highlight: "Stack: React, TypeScript, Vite, Tailwind CSS, Framer Motion",
    role: "Solo Project",
  },
  {
    title: "FunnelCraft SaaS",
    slug: "funnelcraft",
    descriptionDe:
      "SaaS-Dashboard für Freelancer und Agenturen zur Verfolgung von Client-Funnels. Visueller Funnel-Builder, Echtzeit-Analysen, Aufgabenverwaltung und PDF-Berichte.",
    description:
      "SaaS dashboard for freelancers and agencies to track client funnels. Visual funnel builder, real-time analytics, task management, and PDF reporting.",
    resultDe: "Vollständige Landing-Page mit Hero, Feature-Showcase, Testimonials, Preisgestaltung und FAQ. Modern, konvertierungsorientiert.",
    resultEn: "Complete landing page with hero, feature showcase, testimonials, pricing tiers, and FAQ. Modern, conversion-focused design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/eltahawyomar001-eng/FunnelCraft",
    liveUrl: "https://funnel-craft-green.vercel.app/",
    image: "/projects/funnelcraft.png",
    highlight: "Stack: Next.js, TypeScript, Tailwind CSS",
    role: "Solo Project",
  },
  {
    title: "MADZ Concierge",
    slug: "madz-concierge",
    descriptionDe:
      "Ultra-minimale Luxus-Website für exklusiven VIP-Concierge-Service. Passwortgeschützter Zugang, filmisches Design, Custom Cursor und verfeinerte Interaktionen.",
    description:
      "Ultra-minimal luxury website for exclusive VIP concierge service. Password-protected access, cinematic design, custom cursor, and refined interactions.",
    resultDe: "Cinematisches Video-Hero, Grayscale-Bilder mit Farb-Reveal, Scroll-Animationen und champagne-goldene Akzente auf tiefschwarzer Palette.",
    resultEn: "Cinematic video hero, grayscale images with color reveal, scroll animations, and champagne-gold accents on deep black palette.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/eltahawyomar001-eng/MADS",
    liveUrl: "https://mads-xi.vercel.app/",
    image: "/projects/madz-concierge.png",
    highlight: "Stack: HTML5, CSS3, Vanilla JavaScript",
    role: "Solo Project",
  },
  {
    title: "Redyoi - Enterprise IT Solutions",
    slug: "redyoi-ai",
    descriptionDe:
      "Moderne Enterprise-Website für IT-Lösungsanbieter, spezialisiert auf AI, IoT und ELV-Systeme. Vollständiges Redesign mit interaktiven Elementen und professionellem Design.",
    description:
      "Modern enterprise website for IT solutions provider specializing in AI, IoT, and ELV systems. Complete redesign with interactive elements and professional design.",
    resultDe: "Responsive Multi-Page-Site mit animierten Elementen, filterbarem Portfolio und Kontaktformular. Neural Network Visualisierung.",
    resultEn: "Responsive multi-page site with animated elements, filterable portfolio, and contact form. Neural network visualization.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/eltahawyomar001-eng/AI-Platform",
    liveUrl: "https://ai-platform-seven-navy.vercel.app/",
    image: "/projects/redyoi-ai.png",
    highlight: "Stack: HTML5, CSS3, Vanilla JavaScript",
    role: "Solo Project",
  },
  {
    title: "Brooklyn Vintage Car Club",
    slug: "90s-car-club",
    descriptionDe:
      "Premium-Website für einen exklusiven Oldtimer-Club. Editorial Design mit Magazin-Ästhetik, eleganter Typografie und raffinierten Interaktionen für Fahrzeuge von 1990–2005.",
    description:
      "Premium website for an exclusive classic car club. Editorial design with magazine aesthetics, elegant typography, and refined interactions for vehicles from 1990–2005.",
    resultDe: "Parallax-Hero, Scroll-Animationen, Custom Cursor und asymmetrische Galerien für ein immersives Erlebnis.",
    resultEn: "Parallax hero, scroll animations, custom cursor, and asymmetric galleries for an immersive experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/eltahawyomar001-eng/90sCarClub",
    liveUrl: "https://brooklynvintagecarclub.com/",
    image: "/projects/90s-car-club.png",
    highlight: "Stack: HTML5, CSS3, Vanilla JavaScript",
    role: "Solo Project",
  },
  {
    title: "Real Estate Platform",
    slug: "real-estate",
    descriptionDe:
      "Eine moderne Immobilienplattform für Maklerbüros. Nutzer können Objekte filtern, durchsuchen und direkt mit dem Makler Kontakt aufnehmen.",
    description:
      "A modern real estate platform for agencies. Users can filter, search, and contact agents directly.",
    resultDe: "Optimiert für Tausende von Einträgen mit schneller Suche, responsivem Layout und klaren Kontaktwegen.",
    resultEn: "Optimized for thousands of listings with fast search, responsive layout, and clear contact flows.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/eltahawyomar001-eng/Real-Estate",
    liveUrl: "https://real-estate-vpcn9b73f-omar-fahmys-projects-87bdb2b3.vercel.app/",
    image: "/projects/real-estate.png",
    highlight: "Stack: Next.js, TypeScript, Tailwind CSS, React",
    role: "Solo Project",
  },
  {
    title: "1-1-1 Interactive Prototype",
    slug: "showreel111",
    descriptionDe:
      "Ein interaktiver Multi-Screen-Prototyp mit fraktalen Hintergründen, Matrix-Übergängen und leuchtender Navigation. Partikeltext-Effekte und Cursor-Trail für immersive Erlebnisse.",
    description:
      "An interactive multi-screen prototype featuring fractal backgrounds, matrix transitions, and glowing arrow navigation. Particle text effects and cursor trail for immersive experiences.",
    resultDe: "Emergence-Loader, Screen-Navigation und hardwarebeschleunigte Animationen für nahtlose Interaktionen.",
    resultEn: "Emergence loader, screen navigation, and hardware-accelerated animations for seamless interactions.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/eltahawyomar001-eng/Showreel111",
    liveUrl: "https://showreel111.vercel.app/",
    image: "/projects/showreel111.png",
    highlight: "Stack: Next.js, TypeScript, Tailwind CSS, Framer Motion",
    role: "Solo Project",
  },
  {
    title: "Travel Lab Website & Brand Kit",
    slug: "travel-lap",
    descriptionDe:
      "Premium-Website und Markenidentität für ein Boutique-Beratungsunternehmen im Reisesektor. Dunkle, luxuriöse Ästhetik mit metallischen Akzenten.",
    description:
      "Premium website and brand identity for a boutique advisory business in the travel sector. Dark luxe aesthetic with metallic accents.",
    resultDe: "Komplettes Markenpaket mit Webflow/WordPress-Anpassungsleitfäden für Multi-Plattform-Bereitstellung.",
    resultEn: "Complete brand kit with Webflow/WordPress adaptation guides for multi-platform deployment.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/eltahawyomar001-eng/travel-lap",
    liveUrl: "https://travel-lap.vercel.app/",
    image: "/projects/travel-lap.png",
    highlight: "Stack: HTML, CSS, JavaScript, Responsive Design",
    role: "Solo Project",
  },
  {
    title: "Budget-Friendly Website Template",
    slug: "budget-friendly-website",
    descriptionDe:
      "Ein sauberes, schnelles Website-Template für kleine Unternehmen und Startups. SEO-optimiert und vollständig responsiv mit Mobile-First-Design.",
    description:
      "A clean, fast website template for small businesses and startups. SEO-optimized and fully responsive with mobile-first design.",
    resultDe: "Performance-First-Ansatz ohne schwere Bibliotheken, bereit für CMS- und API-Integration.",
    resultEn: "Performance-first approach with no heavy libraries, ready for CMS and API integration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    githubUrl: "https://github.com/eltahawyomar001-eng/budget-friendly-website",
    liveUrl: "https://budget-friendly-website.vercel.app/",
    image: "/projects/budget-friendly-website.png",
    highlight: "Stack: Next.js, TypeScript, Tailwind CSS, SEO",
    role: "Solo Project",
  },
  {
    title: "Omar Creates",
    slug: "omar-creates",
    descriptionDe:
      "Eine Micro-SaaS-Plattform für iOS- und Web-Anwendungen. Schnell validieren, ausliefern oder stoppen. Ideen öffentlich entwickeln und iterieren.",
    description:
      "A micro-SaaS platform for iOS & Web applications. Validate fast, ship or stop. Building and exploring ideas in public.",
    resultDe: "iOS- und Web-Micro-SaaS-Plattform für schnelle Validierung und Iteration.",
    resultEn: "iOS & Web micro-SaaS platform for rapid validation and iteration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React"],
    githubUrl: "https://github.com/eltahawyomar001-eng/Omar-Creates",
    liveUrl: "https://omar-creates-qo6z.vercel.app/",
    image: "/projects/omar-creates.png",
    highlight: "Stack: Next.js, TypeScript, Tailwind CSS, Vercel",
    role: "Solo Project",
  },
  {
    title: "Salla Analytics Dashboard",
    slug: "salla-analytics",
    descriptionDe:
      "Ein umfassendes Analyse-Dashboard für die Salla E-Commerce-Plattform. Verkaufskennzahlen, Kundenverhalten und Produktleistung mit interaktiven Visualisierungen verfolgen.",
    description:
      "A comprehensive analytics dashboard for Salla e-commerce platform. Track sales metrics, customer behavior, and product performance with interactive visualizations.",
    resultDe: "Echtzeit-Analysen mit interaktiven Datenvisualisierungen für bessere Geschäftsentscheidungen.",
    resultEn: "Real-time analytics with interactive data visualizations for better business decisions.",
    tech: ["Python", "Streamlit", "Pandas", "Data Analysis", "SQL"],
    githubUrl: "https://github.com/eltahawyomar001-eng/salla-analytics",
    liveUrl: "https://salla-analytics-production.up.railway.app/",
    image: "/projects/salla-analytics.png",
    highlight: "Stack: Python, Streamlit, Pandas, SQL",
    role: "Full-stack Developer",
  },
  {
    title: "WEBKRAFT.DE Landing Page",
    slug: "webkraft-de",
    descriptionDe:
      "Eine hochwertige Landing Page im Stil von landeseiten.de. Tiefe Lila-Gradienten, Mint-Akzente, mutige Typografie und flüssige Animationen für maximale Conversion.",
    description:
      "A premium landing page matching the landeseiten.de design language. Deep purple gradients, mint green accents, bold typography, and smooth animations for maximum conversion.",
    resultDe: "Vollständige Seiten inkl. Hero, Services, Prozess, Portfolio, Testimonials, FAQ, Team und CTA – responsiv auf allen Geräten.",
    resultEn: "Complete sections including hero, services, process, portfolio, testimonials, FAQ, team, and CTA – responsive across all devices.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/eltahawyomar001-eng/WEBKRAFT.DE",
    liveUrl: "https://webkraft-de.vercel.app/",
    image: "/projects/webkraft-de.png",
    highlight: "Stack: Next.js, TypeScript, Tailwind CSS, Framer Motion",
    role: "Solo Project",
  },
];
