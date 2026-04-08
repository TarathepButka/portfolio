import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  neonBorder?: boolean;
}

/**
 * Reusable glassmorphic card with optional neon border effect.
 * Composable — use as a wrapper for any card-like content.
 */
export function GlassCard({
  children,
  className = "",
  neonBorder = true,
}: GlassCardProps) {
  const borderClass = neonBorder ? "neon-border" : "";
  return (
    <div className={`glass-card ${borderClass} ${className}`}>{children}</div>
  );
}
