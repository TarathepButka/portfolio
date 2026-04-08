interface SkillBadgeProps {
  label: string;
}

/**
 * Hoverable skill pill badge.
 * Reusable for any tag/badge context beyond just skills.
 */
export function SkillBadge({ label }: SkillBadgeProps) {
  return <span className="skill-badge">{label}</span>;
}
