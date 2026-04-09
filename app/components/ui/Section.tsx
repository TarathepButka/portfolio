"use client";

import type { ReactNode } from "react";
import { useInView } from "@/app/hooks";

interface SectionProps {
  /** HTML id for anchor navigation */
  id: string;
  /** Section title rendered-style */
  title?: string;
  /** Content inside the section */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Section Wrapper — Status Window Panel
 * Features angular borders, diamond title decorators,
 * and scroll-triggered materialization effect.
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
        transform: inView ? "translateY(0)" : "translateY(30px)",
        filter: inView ? "blur(0)" : "blur(4px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out, filter 0.6s ease-out",
      }}
    >
      {title && (
        <>
          <h2 className="section-title text-white">
            <span className="opacity-30 text-xs mr-2">◇</span>
            {title}
          </h2>
          <div className="section-line" />
        </>
      )}
      {children}
    </section>
  );
}
