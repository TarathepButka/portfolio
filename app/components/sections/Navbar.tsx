"use client";

import { useState } from "react";
import type { NavItem } from "@/app/types";
import { useScrollSpy } from "@/app/hooks";
import { MenuIcon, CloseIcon } from "@/app/components/ui";

interface NavbarProps {
  items: NavItem[];
}

/**
 *-style Navbar — translucent menu bar with angular aesthetic.
 * Features scroll spy and mobile hamburger menu.
 */
export function Navbar({ items }: NavbarProps) {
  const { activeSection, isScrolled } = useScrollSpy(items);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      id="nav-main"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled ? "rgba(5,5,8,0.9)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          className="text-sm font-semibold tracking-[0.2em] uppercase text-white"
          style={{ fontFamily: "var(--font-theme-mono)" }}
        >
          <span className="opacity-40 mr-1">◇</span>
          FONGT
          <span className="opacity-40 ml-1">◇</span>
        </a>

        {/* Desktop Nav — Menu Style */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link font-medium ${
                activeSection === item.href.replace("#", "")
                  ? "text-white active"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu — Panel Style */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-1 bg-[rgba(5,5,8,0.95)] backdrop-blur-xl border-t border-white/5">
          {items.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors text-sm py-3 px-4 border-b border-white/5 tracking-[0.1em] uppercase flex items-center gap-3"
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="text-[8px] opacity-40">◇</span>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
