interface FooterProps {
  name: string;
  tagline: string;
}

/**
 * Site footer — minimal branding.
 */
export function Footer({ name, tagline }: FooterProps) {
  return (
    <footer className="border-t border-white/5 py-8 px-6 text-center">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()}{" "} Tarathep Butka
      </p>
      <p
        className="text-gray-700 text-xs mt-2 font-mono"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        {tagline}
      </p>
    </footer>
  );
}
