export interface AboutContent {
  heading: string;
  headingDe: string;
  subheading: string;
  paragraphDe: string;
  paragraphEn: string;
  bulletsTitleDe: string;
  bulletsTitleEn: string;
  bullets: { de: string; en: string }[];
  locationDe: string;
  locationEn: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  whatsapp: string;
}

export const aboutContent: AboutContent = {
  heading: "About",
  headingDe: "Über mich",
  subheading: "Who I am",
  paragraphDe:
    "Ich entwickle praktische Webanwendungen, Automatisierungstools und datengestützte Workflows. Mein Fokus liegt auf Lösungen, die reale Geschäftsprobleme lösen und im Alltag echten Mehrwert bringen.",
  paragraphEn:
    "I build practical web applications, automation tools, and data-driven workflows. I focus on solutions that solve real business problems and deliver tangible value in daily work.",
  bulletsTitleDe: "Was ich bisher gebaut habe",
  bulletsTitleEn: "What I've built so far",
  bullets: [
    {
      de: "Immobilien-Webseite mit erweiterter Suche und Filterung für Maklerbüros.",
      en: "Real estate website with advanced search and filtering for agencies.",
    },
    {
      de: "Interaktive Dashboards für Analysen und Berichte.",
      en: "Interactive analytics dashboards for reporting and insights.",
    },
    {
      de: "Automatisierte PDF- und Dokumentgenerierung für Geschäftsprozesse.",
      en: "Automated PDF and document generation for business workflows.",
    },
    {
      de: "Interne Tools zur Optimierung von Abläufen und Dateneingabe.",
      en: "Internal tools to streamline workflows and data entry.",
    },
  ],
  locationDe: "Aktuell mit Sitz in Fulda, Deutschland.",
  locationEn: "Currently based in Fulda, Germany.",
};

export const contactInfo: ContactInfo = {
  email: "omarragehfulda@gmail.com",
  github: "https://github.com/eltahawyomar001-eng",
  linkedin: "https://www.linkedin.com/in/omar-rageh-8a0453172/",
  whatsapp: "https://wa.me/4917655093674",
};

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillsCategories: SkillCategory[] = [
  {
    title: "Web & Frontend",
    icon: "🎨",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & Databases",
    icon: "⚙️",
    skills: ["Node.js", "Prisma", "SQL", "REST APIs", "Python"],
  },
  {
    title: "Automation & Tools",
    icon: "🚀",
    skills: [
      "Pandas",
      "Data Analysis",
      "PDF Generation",
      "Git & GitHub",
      "Vercel/Railway",
    ],
  },
];

export const skillsIntroDe = "Ich arbeite am liebsten im kompletten Stack – von modernen Frontends bis zu stabilen Backends und Datenpipelines.";
export const skillsIntroEn = "I enjoy working across the full stack – from modern frontends to reliable backends and data pipelines.";
