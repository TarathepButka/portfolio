"use client";

import type { HeroContent } from "@/app/types";
import { useTypewriter } from "@/app/hooks";

interface HeroSectionProps {
  data: HeroContent;
}

/**
 * Hero — Player Status Window
 * Features avatar with HP-bar style glow, typewriter class display,
 * and-style angular panel framing.
 */
export function HeroSection({ data }: HeroSectionProps) {
  const typedText = useTypewriter(data.typedRoles, 80, 1800);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Status Window Frame */}
        <div className="relative inline-block mb-10">
          {/* Avatar — Profile Image */}
          <div className="relative w-44 h-44 mx-auto mb-2 overflow-hidden pulse-glow-white border border-white/30"
            style={{ borderRadius: "2px" }}
          >
            <img
              src={data.avatarSrc}
              alt={data.avatarAlt}
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(0.15)" }}
            />
            {/* corner decorators */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/50" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/50" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/50" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/50" />
          </div>

          {/* HP Bar under avatar */}
          <div className="w-44 mx-auto mt-3">
            <div className="flex justify-between items-center mb-1">
              <span className="theme-status-label">HP</span>
              <span className="text-[10px] text-white/40 font-mono" style={{ fontFamily: "var(--font-theme-mono)" }}>
                ████████████
              </span>
            </div>
            <div className="theme-hp-bar">
              <div className="theme-hp-bar-fill" style={{ width: "100%" }} />
            </div>
          </div>
        </div>

        {/* Player Name */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 text-white">
          {data.name}{" "}
          <span className="neon-text font-bold">{data.highlightName}</span>
        </h1>

        {/* Class / Role — Style */}
        <div
          className="text-lg md:text-xl mb-8 text-white/40 tracking-[0.1em]"
          style={{ fontFamily: "var(--font-theme-mono)" }}
        >
          <span className="text-white/20">«</span>{" "}
          <span className="text-white/70">{typedText}</span>
          <span className="cursor-blink text-white/70">_</span>{" "}
          <span className="text-white/20">»</span>
        </div>

        {/* Tagline */}
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-10">
          {data.tagline}
        </p>

        {/* Diamond Separator */}
        <div className="flex items-center justify-center gap-2 opacity-20">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/50" />
          <div className="theme-diamond" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/50" />
        </div>
      </div>
    </section>
  );
}
