"use client";

import { useState, useEffect, useCallback } from "react";
import type { NavItem } from "@/app/types";

/**
 * Scroll spy hook — tracks which section is currently visible in viewport.
 * Also tracks whether the page has been scrolled past a threshold (for navbar styling).
 *
 * @param navItems - Navigation items with their section hrefs
 * @param scrollThreshold - Pixel threshold for "scrolled" state (default 60)
 */
export function useScrollSpy(navItems: NavItem[], scrollThreshold = 60) {
  const [activeSection, setActiveSection] = useState(
    navItems[0]?.href.replace("#", "") ?? ""
  );
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > scrollThreshold);

    const sectionIds = navItems.map((n) => n.href.replace("#", ""));
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el && el.getBoundingClientRect().top <= 200) {
        setActiveSection(sectionIds[i]);
        break;
      }
    }
  }, [navItems, scrollThreshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { activeSection, isScrolled };
}
