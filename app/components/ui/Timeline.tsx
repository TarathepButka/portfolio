import type { ReactNode } from "react";

interface TimelineProps {
  children: ReactNode;
}

interface TimelineItemProps {
  children: ReactNode;
}

/**
 * Timeline container with vertical neon line.
 * Compose with <TimelineItem> for each entry.
 */
export function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative pl-10">
      <div className="timeline-line" />
      {children}
    </div>
  );
}

/**
 * Individual timeline entry with dot indicator.
 */
export function TimelineItem({ children }: TimelineItemProps) {
  return (
    <div className="relative mb-12 last:mb-0">
      <div className="timeline-dot" />
      {children}
    </div>
  );
}
