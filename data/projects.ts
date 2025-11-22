export interface Project {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  highlight: string;
  role?: string;
}

export const projects: Project[] = [
  {
    title: "Salla Analytics Dashboard",
    slug: "salla-analytics",
    description:
      "A comprehensive analytics dashboard for Salla e-commerce platform. Track sales metrics, customer behavior, and product performance with interactive visualizations and real-time data insights.",
    tech: ["Python", "Streamlit", "Pandas", "Data Analysis", "SQL"],
    githubUrl: "https://github.com/eltahawyomar001-eng/salla-analytics",
    liveUrl: "https://salla-analytics-production.up.railway.app/",
    highlight: "Real-time analytics with interactive data visualizations",
    role: "Full-stack Developer",
  },
  {
    title: "Omar Creates",
    slug: "omar-creates",
    description:
      "A micro-SaaS platform for iOS & Web applications. Validate fast, ship or stop. Building and exploring ideas in public with a focus on rapid experimentation and iteration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React"],
    githubUrl: "https://github.com/eltahawyomar001-eng/Omar-Creates",
    liveUrl: "https://omar-creates-qo6z.vercel.app/",
    highlight: "iOS & Web micro-SaaS platform for rapid validation",
    role: "Solo Project",
  },
  {
    title: "PDF Generation System",
    slug: "PDF-Gen",
    description:
      "An automated PDF generation system for creating professional business documents, invoices, and reports. Features customizable templates, dynamic data injection, and bulk processing capabilities.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PDF.js"],
    githubUrl: "https://github.com/eltahawyomar001-eng/PDF-Gen",
    highlight: "Automated document generation with custom templates",
    role: "Solo Project",
  },
  {
    title: "Ali University Battle Simulation",
    slug: "ali-uni",
    description:
      "An object-oriented battle simulation system built for educational purposes. Demonstrates advanced OOP concepts including inheritance, polymorphism, and design patterns with comprehensive unit testing.",
    tech: ["Java", "OOP", "JUnit", "Design Patterns"],
    githubUrl: "https://github.com/eltahawyomar001-eng/ali-uni",
    highlight: "Clean OOP architecture with 95%+ test coverage",
    role: "Academic Project",
  },
];
