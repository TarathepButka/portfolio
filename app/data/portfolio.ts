import type { PortfolioData } from "@/app/types";

/**
 * Single source of truth for ALL portfolio content.
 *
 * To update your portfolio, edit ONLY this file.
 * No component code needs to change.
 */
export const portfolioData: PortfolioData = {
  /* ─── Navigation ─── */
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ],

  /* ─── Hero ─── */
  hero: {
    name: "",
    highlightName: "Fongt",
    typedRoles: ["Software Developer", "Full Stack Developer"],
    tagline:
      "Software Developer passionate about building end-to-end web and mobile applications. Committed to learning new technologies, understanding user needs, and delivering high-quality software with great user experiences.",
    avatarSrc: "/images/profile.jpg",
    avatarAlt: "Tarathep Butka - Software Developer",
  },

  /* ─── About ─── */
  about: {
    paragraphs: [
      'I recently graduated with a Bachelor\'s degree in <highlight>Computer Engineering</highlight> from <neon>Khon Kaen University</neon>. Having completed a 7-month Full Stack Developer internship, I have gained hands-on experience in building end-to-end web applications and am now actively seeking full-time software development opportunities.',
      'I believe a good developer isn\'t just someone who writes code well, but someone who understands the <highlight>entire picture</highlight> of what they are building and why. I aim to be involved in the full development lifecycle—from requirements gathering and user communication to database design, system analysis, and production deployment.',
      'I am looking for an environment where I can grow in this direction, collaborate with a team to find the best solutions, and contribute meaningfully at every stage of the project as I work towards my long-term goal in <green>Project Management</green>.',
    ],
    infoCards: [
      {
        icon: "🎓",
        label: "Education",
        value: "Computer Engineering",
        sub: "Khon Kaen University",
      },
      { icon: "📍", label: "Location", value: "Khon Kaen, Thailand" },
      { icon: "🎯", label: "Goal", value: "Software Developer → Project Manager" },
    ],
  },

  /* ─── Work Experience ─── */
  experience: [
    {
      role: "Software Developer Internship",
      company: "Playtorium Solutions",
      duration: "Apr 2025 — Oct 2025",
      bullets: [
        "Migrated a Node.js (Express) backend to NestJS across 8 core modules (RBAC, User Management, Reporting), refactored the frontend for new API contracts, and improved modularity, scalability, and security.",
        "Designed and developed a Dynamic Form System (Database, Backend, and Frontend) for tax deduction claims, replacing manual email processes and enabling HR to update form structures with no code changes.",
        "Automated employee offboarding by integrating NestJS, n8n, and FastAPI to revoke access across AWS IAM, GitLab, Jira, and MongoDB, complete with token-based auth, audit logging, and email notifications.",
        "Developed and executed End-to-End (E2E) tests for newly developed APIs to ensure service reliability, prevent regressions, and validate data integrity.",
      ],
      skills: [
        "TypeScript",
        "JavaScript",
        "Python",
        "React",
        "NestJS",
        "FastAPI",
        "n8n",
        "Docker",
        "AWS S3",
        "AWS IAM",
        "Jira",
        "PostgreSQL",
        "Prisma ORM",
        "System Architecture",
        "Database Design",
      ],
    },
  ],

  /* ─── Projects ─── */
  projects: [
    {
      title: "Circulate",
      subtitle: "Android App — Item Exchange & Donation",
      description:
        "Designed and developed an Android app for item exchange and donation using Flutter and Firebase. Implemented Google Sign-In, real-time Firestore sync, dark/light theme switching, and comprehensive profile management.",
      tech: ["Flutter", "Firebase", "Dart", "Google Auth"],
      color: "var(--neon-cyan)",
      image: "/images/circulate.png",
      links: [
        { label: "Demo Video", url: "https://drive.google.com/file/d/1tR2-Qq2FSkeAHXbtqyaIfT5ppNH59KhM/view", icon: "drive" },
      ],
    },
    {
      title: "S-track",
      subtitle: "Web Application — Storage Management",
      description:
        "Built a web storage management system using Next.js, Node.js, Express, and Firebase. Integrated Google Calendar API for tracking borrow and return dates, along with comprehensive CRUD functionality for item management.",
      tech: ["Next.js", "Node.js", "Express", "Firebase"],
      color: "var(--neon-green)",
      image: "/images/s-track.png",
      links: [
        { label: "Live Demo", url: "https://s-track.vercel.app/", icon: "external" },
      ],
    },
    {
      title: "64Block",
      subtitle: "Mobile Game — Thai Traditional Board Game",
      description:
        "Designed and developed the UI/UX for the 64Block mobile game using C# and Unity. Created interactive components and smooth screen transitions with in-game sound control features to enhance player experience.",
      tech: ["C#", "Unity", "UI/UX Design"],
      color: "var(--neon-purple)",
      image: "/images/64-block.png",
      links: [
        { label: "Demo Video", url: "https://www.youtube.com/watch?v=zh0dhCnr7Zg", icon: "youtube" },
      ],
    },
  ],

  /* ─── Skills ─── */
  skills: {
    Languages: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "Dart",
      "C#",
      "SQL",
      "HTML",
      "CSS",
    ],
    "Frameworks & Libraries": [
      "NestJS",
      "FastAPI",
      "Node.js",
      "Express",
      "React",
      "Next.js",
      "Flutter",
    ],
    "Databases & Cloud": [
      "PostgreSQL",
      "Prisma",
      "MySQL",
      "MongoDB",
      "Firebase",
      "AWS",
    ],
    "Tools & DevOps": ["Docker", "Git", "GitHub", "GitLab", "Postman", "Figma", "n8n"],
    "Additional Expertise": ["Cisco IOS-XE", "SONiC", "Ansible", "VMware", "Unity"],
  },

  /* ─── Achievements ─── */
  achievements: [
    {
      title: "Thailand Cyber Top Talent 2024",
      rank: "7th Place Finalist",
      level: "Senior Level",
      detail:
        "Qualified as one of two representatives for the Northeast region in a national cybersecurity competition.",
      color: "var(--neon-cyan)",
    },
    {
      title: "Blue Guardians CTF 2024",
      rank: "14th Place Finalist",
      level: "out of 300 participants",
      detail:
        "Focused on Digital Forensics and Incident Response, organized by MFEC.",
      color: "var(--neon-purple)",
    },
  ],

  /* ─── Contact ─── */
  contact: {
    heading: "Contact Me",
    description: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
    links: [
      {
        label: "Email",
        href: "mailto:tarathep.butka@gmail.com",
        icon: "email",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/tarathepbutka",
        icon: "linkedin",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/TarathepButka",
        icon: "github",
        external: true,
      },
    ],
  },

  /* ─── Footer ─── */
  footer: {
    name: "Tarathep Butka",
    tagline: "</Fongt>",
  },
};
