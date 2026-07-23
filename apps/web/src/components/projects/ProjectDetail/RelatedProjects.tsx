import type { Project } from "../../../types/projects";
import ProjectCard from "../../projects/Cards/ProjectsCard";

interface RelatedProjectsProps {
  currentProject: Project;
  projects: Project[];
}

export default function RelatedProjects({
  currentProject,
  projects,
}: RelatedProjectsProps) {
  const relatedProjects = projects
    .filter(
      (project) =>
        project.category === currentProject.category &&
        project.id !== currentProject.id,
    )
    .slice(0, 3);

  if (relatedProjects.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Heading */}
      <div className="mb-12">
        <span className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-semibold">
          Explore More
        </span>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Related Projects
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400 leading-8">
          Continue learning with projects from the same category and
          strengthen your practical development skills.
        </p>

        <div className="mt-5 h-0.5 w-20 rounded-full bg-indigo-500" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {relatedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

    </section>
  );
}