import type { AboutContent } from "@/app/types";
import { Section, GlassCard } from "@/app/components/ui";

interface AboutSectionProps {
  data: AboutContent;
}

/**
 * Parse a paragraph string with custom markup tags.
 * Supports: <highlight>, <neon>, <green>
 */
function RichParagraph({ text }: { text: string }) {
  const parts = text.split(
    /(<highlight>.*?<\/highlight>|<neon>.*?<\/neon>|<green>.*?<\/green>)/g
  );

  return (
    <p className="text-gray-500 leading-relaxed mb-6 text-sm">
      {parts.map((part, i) => {
        if (part.startsWith("<highlight>")) {
          const content = part.replace(/<\/?highlight>/g, "");
          return (
            <span key={i} className="text-white font-medium">
              {content}
            </span>
          );
        }
        if (part.startsWith("<neon>")) {
          const content = part.replace(/<\/?neon>/g, "");
          return (
            <span key={i} className="neon-text font-medium">
              {content}
            </span>
          );
        }
        if (part.startsWith("<green>")) {
          const content = part.replace(/<\/?green>/g, "");
          return (
            <span key={i} className="neon-text-green font-medium">
              {content}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}

/**
 * About Section — Player Info Panel
 * Bio text + stat cards arranged like an status window.
 */
export function AboutSection({ data }: AboutSectionProps) {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio Text — Character Backstory */}
        <div>
          <div className="theme-status-label mb-4">
            ◇ PLAYER BACKGROUND
          </div>
          {data.paragraphs.map((p, i) => (
            <RichParagraph key={i} text={p} />
          ))}
        </div>

        {/* Info Cards — Stat Panels */}
        <div className="grid grid-cols-1 gap-3">
          <div className="theme-status-label mb-2">
            ◇ STATUS
          </div>
          {data.infoCards.map((card) => (
            <GlassCard key={card.label} className="p-5 flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-white/10 text-lg"
                style={{ borderRadius: "2px" }}
              >
                {card.icon}
              </div>
              <div>
                <p className="theme-status-label">
                  {card.label}
                </p>
                <p className="text-white font-medium text-sm mt-0.5">{card.value}</p>
                {card.sub && (
                  <p className="text-gray-600 text-xs mt-0.5">{card.sub}</p>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
