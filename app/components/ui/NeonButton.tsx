import type { ReactNode } from "react";

/* ─── Button Variants ─── */

type ButtonVariant = "primary" | "secondary" | "ghost";

interface NeonButtonProps {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--neon-cyan)] text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-105",
  secondary:
    "border border-white/20 text-white hover:border-[var(--neon-cyan)] hover:text-[var(--neon-cyan)]",
  ghost:
    "text-gray-400 hover:text-white",
};

/**
 * Reusable neon-styled button/link component.
 * Supports primary, secondary, and ghost variants.
 */
export function NeonButton({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
}: NeonButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300";

  return (
    <a
      href={href}
      className={`${baseClasses} ${VARIANT_CLASSES[variant]} ${className}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
