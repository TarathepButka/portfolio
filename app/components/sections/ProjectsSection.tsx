import type { Project } from "@/app/types";
import { Section, IconByName } from "@/app/components/ui";

interface ProjectsSectionProps {
  data: Project[];
}

/**
 * Project Card — Item/Equipment Card Style
 */
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass-card neon-border overflow-hidden flex flex-col theme-corners">
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
              background: `linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))`,
            }}
          >
            <span className="text-5xl font-bold text-white/10">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content — Item Description Panel */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[8px] text-white/30">◇</span>
          <h3 className="text-base font-semibold text-white tracking-wide">
            {project.title}
          </h3>
        </div>
        <p
          className="text-xs text-white/30 mb-3 tracking-wider uppercase"
          style={{ fontFamily: "var(--font-theme-mono)" }}
        >
          {project.subtitle}
        </p>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech Tags — Equipment Stats */}
        <div className="theme-status-label mb-2">TECH STACK</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 border border-white/10 text-white/50 bg-white/3 tracking-wider"
              style={{ borderRadius: "2px" }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links — Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-3 border-t border-white/5">
          {project.links.map((link, j) => (
            <a
              key={j}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 border border-white/15 text-white/60 bg-white/3 transition-all duration-300 hover:border-white/40 hover:text-white hover:bg-white/8 tracking-wider uppercase"
              style={{ borderRadius: "2px" }}
            >
              <IconByName name={link.icon} size={14} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Projects Section
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
