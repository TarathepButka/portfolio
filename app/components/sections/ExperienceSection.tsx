import type { Experience } from "@/app/types";
import { Section, GlassCard, Timeline, TimelineItem } from "@/app/components/ui";

interface ExperienceSectionProps {
  data: Experience[];
}

/**
 * Experience section — renders a timeline of work experience entries.
 * Composes Timeline + GlassCard UI primitives.
 */
export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <Section id="experience" title="Work Experience">
      <Timeline>
        {data.map((exp, i) => (
          <TimelineItem key={i}>
            <GlassCard className="p-6 md:p-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="neon-text text-sm font-semibold">
                    {exp.company}
                  </p>
                </div>
                <span
                  className="text-xs font-mono text-gray-400 mt-1 md:mt-0 px-3 py-1 rounded-full border border-white/10 bg-white/5 w-fit"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  {exp.duration}
                </span>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-gray-300 text-sm leading-relaxed"
                  >
                    <span className="neon-text mt-1 shrink-0">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}
