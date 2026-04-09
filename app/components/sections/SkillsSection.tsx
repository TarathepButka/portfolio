import type { SkillsMap } from "@/app/types";
import { Section, SkillBadge } from "@/app/components/ui";

interface SkillsSectionProps {
  data: SkillsMap;
}

/**
 * Skills Section — Skill Tree Panel
 * Categorized skill badges styled as learned abilities.
 */
export function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <Section id="skills" title="Skill Tree">
      <div className="space-y-10">
        {Object.entries(data).map(([category, skills]) => (
          <div key={category}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[8px] text-white/30">◇</span>
              <h3 className="theme-status-label text-white/50" style={{ fontSize: "0.7rem" }}>
                {category.toUpperCase()}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-2" />
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillBadge key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
