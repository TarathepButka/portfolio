import type { SkillsMap } from "@/app/types";
import { Section, SkillBadge } from "@/app/components/ui";

interface SkillsSectionProps {
  data: SkillsMap;
}

/**
 * Skills section — categorized skill badges.
 * Adding a new category or skill requires only a data change.
 */
export function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-8">
        {Object.entries(data).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              {category}
            </h3>
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
