import type { ProjectDetail } from "../../../data/ProjectDetail";
import type { Project } from "../../../types/projects";
interface OverviewProps {
    project: Project;
  detail: ProjectDetail;
}

export default function Overview({ detail, project }: OverviewProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="mb-8">
        <span className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-semibold">
          Overview
        </span>

        <h2 className="mt-3 text-4xl font-bold text-white">Project Overview</h2>

        <div className="mt-4 h-0.5 w-20 bg-indigo-500 rounded-full" />
      </div>

      {/* Content */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-8 lg:p-10">
        <p className="text-zinc-300 text-lg leading-9">{detail.overview}</p>

        {/* Quick Stats */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-2xl border border-zinc-800 bg-black/40 p-5">
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Difficulty
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
              {project.difficulty}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-black/40 p-5">
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Duration
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
              {project.duration}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-black/40 p-5">
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Category
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
              {project.category}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-black/40 p-5">
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Published
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
              {detail.date}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
