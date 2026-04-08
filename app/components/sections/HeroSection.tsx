"use client";

import type { HeroContent } from "@/app/types";
import { useTypewriter } from "@/app/hooks";
import { NeonButton, DownloadIcon } from "@/app/components/ui";

interface HeroSectionProps {
  data: HeroContent;
}

/**
 * Hero section — avatar, typewriter, tagline, CTAs.
 * All content is injected via props.
 */
export function HeroSection({ data }: HeroSectionProps) {
  const typedText = useTypewriter(data.typedRoles, 80, 1800);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden pulse-glow-white border-2 border-white">
          <img
            src={data.avatarSrc}
            alt={data.avatarAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-white">
          {data.name}{" "}
          <span className="neon-text">{data.highlightName}</span>
        </h1>

        {/* Typewriter */}
        <div
          className="text-xl md:text-2xl mb-8 font-mono text-gray-400"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          <span className="text-[var(--neon-purple)]">const</span>{" "}
          <span className="text-[var(--neon-cyan)]">role</span>{" "}
          <span className="text-white">=</span>{" "}
          <span className="text-[var(--neon-green)]">
            &quot;{typedText}&quot;
          </span>
          <span className="cursor-blink text-[var(--neon-cyan)]">|</span>
        </div>

        {/* Tagline */}
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10">
          {data.tagline}
        </p>
      </div>
    </section>
  );
}
