export interface Project {
  title: string;
  slug: string;
  description: string;
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
    description:
      "A modern real estate website with property listings, search functionality, and contact forms. Features elegant UI design, property filtering, and responsive layouts for seamless browsing across devices.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/eltahawyomar001-eng/Real-Estate",
    liveUrl: "https://real-estate-vpcn9b73f-omar-fahmys-projects-87bdb2b3.vercel.app/",
    image: "/projects/real-estate.png",
    highlight: "Property listings with advanced search and filtering",
    role: "Solo Project",
  },
  {
    title: "Website Refresh Showreel",
    slug: "showreel111",
    description:
      "A visually stunning one-page website showcasing smooth transitions, bold geometry, and story-driven motion. Features animated 3D pyramid patterns, interactive gradient prisms, and scroll-triggered transformations optimized for 60fps performance.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/eltahawyomar001-eng/Showreel111",
    liveUrl: "https://showreel111.vercel.app/",
    image: "/projects/showreel111.png",
    highlight: "Creative animations with hardware-accelerated transforms",
    role: "Solo Project",
  },
  {
    title: "Travel Lab Website & Brand Kit",
    slug: "travel-lap",
    description:
      "Premium static website and brand identity for a boutique advisory business focused on the ANZ travel ecosystem. Features dark luxe aesthetic with metallic copper accents, architectural imagery, and comprehensive brand guidelines for multi-platform deployment.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/eltahawyomar001-eng/travel-lap",
    liveUrl: "https://travel-lap.vercel.app/",
    image: "/projects/travel-lap.png",
    highlight: "Complete brand kit with Webflow/WordPress adaptation guides",
    role: "Solo Project",
  },
  {
    title: "Budget-Friendly Website Template",
    slug: "budget-friendly-website",
    description:
      "A clean, fast, and low-cost website template built for small businesses and startups. SEO-optimized, fully responsive with mobile-first design, featuring subtle CSS-only animations and growth-ready architecture for CMS and API integration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    githubUrl: "https://github.com/eltahawyomar001-eng/budget-friendly-website",
    liveUrl: "https://budget-friendly-website.vercel.app/",
    image: "/projects/budget-friendly-website.png",
    highlight: "Performance-first approach with zero heavy libraries",
    role: "Solo Project",
  },
  {
    title: "Omar Creates",
    slug: "omar-creates",
    description:
      "A micro-SaaS platform for iOS & Web applications. Validate fast, ship or stop. Building and exploring ideas in public with a focus on rapid experimentation and iteration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React"],
    githubUrl: "https://github.com/eltahawyomar001-eng/Omar-Creates",
    liveUrl: "https://omar-creates-qo6z.vercel.app/",
    image: "/projects/omar-creates.png",
    highlight: "iOS & Web micro-SaaS platform for rapid validation",
    role: "Solo Project",
  },
  {
    title: "Salla Analytics Dashboard",
    slug: "salla-analytics",
    description:
      "A comprehensive analytics dashboard for Salla e-commerce platform. Track sales metrics, customer behavior, and product performance with interactive visualizations and real-time data insights.",
    tech: ["Python", "Streamlit", "Pandas", "Data Analysis", "SQL"],
    githubUrl: "https://github.com/eltahawyomar001-eng/salla-analytics",
    liveUrl: "https://salla-analytics-production.up.railway.app/",
    image: "/projects/salla-analytics.png",
    highlight: "Real-time analytics with interactive data visualizations",
    role: "Full-stack Developer",
  },
];
