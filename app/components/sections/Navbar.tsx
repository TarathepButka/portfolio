"use client";

import { useState } from "react";
import type { NavItem } from "@/app/types";
import { useScrollSpy } from "@/app/hooks";
import { MenuIcon, CloseIcon } from "@/app/components/ui";

interface NavbarProps {
  items: NavItem[];
}

/**
 * Responsive navbar with scroll spy and mobile menu.
 * Receives items as props — doesn't know about data layer.
 */
export function Navbar({ items }: NavbarProps) {
  const { activeSection, isScrolled } = useScrollSpy(items);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      id="nav-main"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight neon-text"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          &lt;Fongt /&gt;
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link text-sm font-medium ${
                activeSection === item.href.replace("#", "")
                  ? "text-[var(--neon-cyan)] active"
                  : "text-gray-400 hover:text-white"
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-[rgba(10,10,10,0.95)] backdrop-blur-xl border-t border-white/5">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-[var(--neon-cyan)] transition-colors text-sm py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
