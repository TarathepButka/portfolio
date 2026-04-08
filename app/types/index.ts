/* ─── Shared TypeScript Types ─── */

/** Navigation item for the navbar */
export interface NavItem {
  label: string;
  href: string;
}

/** A link attached to a project (GitHub, YouTube, live demo, etc.) */
export interface ProjectLink {
  label: string;
  url: string;
  icon: "github" | "youtube" | "external" | "drive";
}

/** A portfolio project */
export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  color: string;
  image?: string;
  links: ProjectLink[];
}

/** Work experience entry */
export interface Experience {
  role: string;
  company: string;
  duration: string;
  bullets: string[];
}

/** Competition / award achievement */
export interface Achievement {
  title: string;
  rank: string;
  level: string;
  detail: string;
  color: string;
}

/** Info card shown in the About section */
export interface InfoCard {
  icon: string;
  label: string;
  value: string;
  sub?: string;
}

/** Skills grouped by category */
export type SkillsMap = Record<string, string[]>;

/** Contact / social link */
export interface ContactLink {
  label: string;
  href: string;
  icon: "email" | "linkedin" | "github";
  external?: boolean;
}

/** Hero section content */
export interface HeroContent {
  name: string;
  highlightName: string;
  typedRoles: string[];
  tagline: string;
  avatarSrc: string;
  avatarAlt: string;
}

/** About section content */
export interface AboutContent {
  paragraphs: string[];
  infoCards: InfoCard[];
}

/** Full portfolio data contract */
export interface PortfolioData {
  nav: NavItem[];
  hero: HeroContent;
  about: AboutContent;
  experience: Experience[];
  projects: Project[];
  skills: SkillsMap;
  achievements: Achievement[];
  contact: {
    heading: string;
    description: string;
    links: ContactLink[];
  };
  footer: {
    name: string;
    tagline: string;
  };
}
