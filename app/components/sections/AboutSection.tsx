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
  // Split by our custom tags and render appropriately
  const parts = text.split(
    /(<highlight>.*?<\/highlight>|<neon>.*?<\/neon>|<green>.*?<\/green>)/g
  );

  return (
    <p className="text-gray-400 leading-relaxed mb-6">
      {parts.map((part, i) => {
        if (part.startsWith("<highlight>")) {
          const content = part.replace(/<\/?highlight>/g, "");
          return (
            <span key={i} className="text-white font-semibold">
              {content}
            </span>
          );
        }
        if (part.startsWith("<neon>")) {
          const content = part.replace(/<\/?neon>/g, "");
          return (
            <span key={i} style={{ color: "var(--neon-cyan)" }}>
              {content}
            </span>
          );
        }
        if (part.startsWith("<green>")) {
          const content = part.replace(/<\/?green>/g, "");
          return (
            <span key={i} className="neon-text-green">
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
 * About section — bio paragraphs + info cards grid.
 */
export function AboutSection({ data }: AboutSectionProps) {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio Text */}
        <div>
          {data.paragraphs.map((p, i) => (
            <RichParagraph key={i} text={p} />
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 gap-4">
          {data.infoCards.map((card) => (
            <GlassCard key={card.label} className="p-5 flex items-center gap-4">
              <span className="text-2xl">{card.icon}</span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  {card.label}
                </p>
                <p className="text-white font-semibold">{card.value}</p>
                {card.sub && (
                  <p className="text-gray-400 text-sm">{card.sub}</p>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
