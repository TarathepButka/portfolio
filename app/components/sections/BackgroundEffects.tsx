"use client";

import { useState, useEffect } from "react";

/**
 * Background Effects — Floating particles & subtle grid
 * Creates the ambient "virtual world" atmosphere
 */
export function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Subtle Grid */}
      <div className="grid-bg" />

      {/* Ambient Light Orbs */}
      <div
        className="orb orb-white"
        style={{ width: 500, height: 500, top: "5%", left: "-15%" }}
      />
      <div
        className="orb orb-white"
        style={{
          width: 400,
          height: 400,
          top: "55%",
          right: "-10%",
          animationDelay: "4s",
        }}
      />
      <div
        className="orb orb-white"
        style={{
          width: 300,
          height: 300,
          top: "25%",
          right: "25%",
          animationDelay: "7s",
        }}
      />

      {/* Floating Particles */}
      {mounted &&
        Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="theme-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `theme-particle ${12 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 15}s`,
              opacity: 0.15 + Math.random() * 0.3,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
            }}
          />
        ))}
    </>
  );
}
