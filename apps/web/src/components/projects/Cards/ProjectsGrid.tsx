import ProjectCard from "./ProjectsCard";
import type { Project } from "../../../types/projects";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectGridProps) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 overflow-hidden">
      {/* Premium Background Ambience Filters */}
      <div className="absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />

      {/* Grid Layout Engine */}
      <div
        className="
          grid
          gap-8
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          perspective-[1000px]
        "
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="
              opacity-0
              animate-[fadeInUp_0.6s_ease-out_forwards]
            "
            style={{
              animationDelay: `${index * 80}ms`,
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Tailwind Custom Keyframes Utility (Inject standard CSS if your tailwind.config doesn't have it) */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}