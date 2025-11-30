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
    title: "Website Refresh Showreel",
    slug: "showreel111",
    descriptionDe:
      "Eine visuell beeindruckende One-Page-Website mit sanften Übergängen, mutiger Geometrie und scroll-gesteuerten Animationen. Optimiert für 60fps Performance.",
    description:
      "A visually stunning one-page website with smooth transitions, bold geometry, and scroll-triggered animations. Optimized for 60fps performance.",
    resultDe: "Kreative Animationen mit hardwarebeschleunigten Transformationen für flüssige Benutzererfahrung.",
    resultEn: "Creative animations with hardware-accelerated transforms for smooth user experience.",
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
];
