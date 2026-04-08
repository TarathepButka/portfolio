import type { Achievement } from "@/app/types";
import { Section } from "@/app/components/ui";

interface AchievementsSectionProps {
  data: Achievement[];
}

/**
 * Single achievement card — extracted for clarity.
 */
function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="achievement-card">
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
          style={{
            background: `${achievement.color}15`,
            border: `1px solid ${achievement.color}30`,
          }}
        >
          🏆
        </div>
        <div>
          <h3 className="font-bold text-white text-lg">
            {achievement.title}
          </h3>
          <p
            className="text-sm font-semibold mb-1"
            style={{ color: achievement.color }}
          >
            {achievement.rank}{" "}
            <span className="text-gray-500 font-normal">
              · {achievement.level}
            </span>
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            {achievement.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Achievements section — responsive grid of achievement cards.
 */
export function AchievementsSection({ data }: AchievementsSectionProps) {
  return (
    <Section id="achievements" title="Achievements">
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((achievement, i) => (
          <AchievementCard key={i} achievement={achievement} />
        ))}
      </div>
    </Section>
  );
}
