import type { Experience } from "@/app/types";
import { Section, GlassCard, Timeline, TimelineItem } from "@/app/components/ui";

interface ExperienceSectionProps {
  data: Experience[];
}

/**
 * Renders work experience with timeline.
 */
export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <Section id="experience" title="Work Experience">
      <Timeline>
        {data.map((exp, i) => (
          <TimelineItem key={i}>
            <GlassCard className="p-6 md:p-8">
              {/* Quest Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                <div>
                  <h3 className="text-lg font-semibold text-white tracking-wide">
                    {exp.role}
                  </h3>
                  <p className="text-white/60 text-sm font-medium mt-0.5">
                    {exp.company}
                  </p>
                </div>
                <span
                  className="text-xs font-mono text-white/30 mt-2 md:mt-0 px-3 py-1.5 border border-white/10 bg-white/3 w-fit tracking-wider"
                  style={{ fontFamily: "var(--font-theme-mono)", borderRadius: "2px" }}
                >
                  {exp.duration}
                </span>
              </div>

              {/* Separator */}
              <div className="theme-hr" />

              {/* Quest Objectives */}
              <div className="theme-status-label mb-3">◇ OBJECTIVES COMPLETED</div>
              <ul className="space-y-3">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-gray-400 text-sm leading-relaxed"
                  >
                    <span className="text-white/30 mt-0.5 shrink-0 text-xs">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Acquired */}
              {exp.skills && exp.skills.length > 0 && (
                <div className="mt-6 pt-5 border-t border-white/5">
                  <div className="theme-status-label mb-3">◇ SKILLS ACQUIRED</div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, k) => (
                      <span 
                        key={k} 
                        className="px-2.5 py-1 text-[0.7rem] bg-white/5 border border-white/10 text-white/70 tracking-wider whitespace-nowrap hover:bg-white/10 transition-colors" 
                        style={{ borderRadius: "2px" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </GlassCard>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}
