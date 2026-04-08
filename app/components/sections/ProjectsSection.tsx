import type { Project } from "@/app/types";
import { Section, IconByName } from "@/app/components/ui";

interface ProjectsSectionProps {
  data: Project[];
}

/**
 * Single project card — extracted for readability.
 */
function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="glass-card neon-border overflow-hidden flex flex-col"
      style={{ "--hover-color": project.color } as React.CSSProperties}
    >
      {/* Preview Area */}
      <div className="project-preview">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)`,
            }}
          >
            <span
              className="text-5xl font-bold opacity-20"
              style={{ color: project.color }}
            >
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-1" style={{ color: project.color }}>
          {project.title}
        </h3>
        <p
          className="text-xs text-gray-500 mb-3 font-mono"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          {project.subtitle}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full border font-medium"
              style={{
                borderColor: `${project.color}30`,
                color: project.color,
                background: `${project.color}08`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 pt-3 border-t border-white/5">
          {project.links.map((link, j) => (
            <a
              key={j}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105"
              style={{
                borderColor: `${project.color}40`,
                color: project.color,
                background: `${project.color}10`,
              }}
            >
              <IconByName name={link.icon} size={16} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Projects section — responsive grid of project cards.
 */
export function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </Section>
  );
}
