"use client";

import type { ReactNode } from "react";
import { useInView } from "@/app/hooks";

interface SectionProps {
  /** HTML id for anchor navigation */
  id: string;
  /** Section title rendered with neon brackets */
  title?: string;
  /** Content inside the section */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Reusable animated section wrapper.
 * Handles scroll-triggered fade-in and consistent spacing.
 */
export function Section({ id, title, children, className = "" }: SectionProps) {
  const { ref, inView } = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      {title && (
        <>
          <h2 className="section-title text-white">
            <span className="neon-text">&lt;</span> {title}{" "}
            <span className="neon-text">/&gt;</span>
          </h2>
          <div className="section-line" />
        </>
      )}
      {children}
    </section>
  );
}
