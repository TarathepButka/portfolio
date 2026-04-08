import { portfolioData } from "@/app/data/portfolio";
import {
  BackgroundEffects,
  Navbar,
  HeroSection,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  AchievementsSection,
  ContactSection,
  Footer,
} from "@/app/components/sections";

/**
 * Portfolio page — thin orchestrator.
 *
 * This component's ONLY job is to wire data to sections.
 * All business logic lives in hooks, all UI in components.
 *
 * To update content → edit `app/data/portfolio.ts`
 * To change layout  → edit this file
 * To change visuals → edit individual section components or `globals.css`
 */
export default function PortfolioPage() {
  const { nav, hero, about, experience, projects, skills, achievements, contact, footer } =
    portfolioData;

  return (
    <>
      <BackgroundEffects />
      <Navbar items={nav} />
      <HeroSection data={hero} />
      <AboutSection data={about} />
      <ExperienceSection data={experience} />
      <ProjectsSection data={projects} />
      <SkillsSection data={skills} />
      <AchievementsSection data={achievements} />
      <ContactSection data={contact} />
      <Footer name={footer.name} tagline={footer.tagline} />
    </>
  );
}
