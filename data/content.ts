export interface AboutContent {
  heading: string;
  subheading: string;
  paragraphs: string[];
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
}

export const aboutContent: AboutContent = {
  heading: "About",
  subheading: "Who I am",
  paragraphs: [
    "I'm a developer who builds practical web applications, automation tools, and data-driven business workflows. I focus on creating solutions that solve real problems and deliver tangible value.",
    "My work spans both frontend and backend development. From interactive analytics dashboards to automated PDF generation systems, I enjoy the full spectrum of building web applications that people actually use.",
    "I believe in learning by shipping. Every project on my GitHub is a real-world application, not a tutorial clone. I use each build as an opportunity to explore new technologies and refine my craft.",
    "When I'm not coding, I'm thinking about product design, developer experience, and how to make complex systems feel simple.",
  ],
};

export const contactInfo: ContactInfo = {
  email: "omarragehfulda@gmail.com",
  github: "https://github.com/eltahawyomar001-eng",
  linkedin: "https://www.linkedin.com/in/omar-rageh-8a0453172/",
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
    skills: ["Node.js", "Python", "Prisma", "SQL", "REST APIs", "Java"],
  },
  {
    title: "Automation & Tools",
    icon: "🚀",
    skills: [
      "Streamlit",
      "Pandas",
      "Data Analysis",
      "PDF Generation",
      "Git & GitHub",
      "Vercel/Railway",
    ],
  },
];
