import type { ContactLink } from "@/app/types";
import { Section, IconByName } from "@/app/components/ui";

interface ContactSectionProps {
  data: {
    heading: string;
    description: string;
    links: ContactLink[];
  };
}

/**
 * Contact section — social links grid + CTA button.
 */
export function ContactSection({ data }: ContactSectionProps) {
  return (
    <Section id="contact" title={data.heading}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-400 mb-10 text-lg">{data.description}</p>

        {/* Social Links Grid */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {data.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="glass-card neon-border p-5 flex flex-col items-center gap-3 hover:text-[var(--neon-cyan)] text-gray-400 transition-colors"
            >
              <IconByName name={link.icon} size={20} />
              <span className="text-xs">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
