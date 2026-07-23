import type { Project } from "../../../types/projects";
import type { ProjectDetail } from "../../../data/ProjectDetail";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface HeroProps {
  project: Project;
  detail: ProjectDetail;
}

export default function Hero({ project, detail }: HeroProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full aspect-video object-cover hover:scale-105 duration-500"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div>
          {/* Category */}
          <span className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-400">
            {project.category}
          </span>

          {/* Title */}
          <h1 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight">
            {project.title}
          </h1>

          {/* Description */}
          <p className="mt-5 text-zinc-400 leading-8">{project.description}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
              >
                <FiGithub className="text-lg" />
                GitHub
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-indigo-500 hover:bg-zinc-900"
              >
                <FiExternalLink className="text-lg" />
                Live Demo
              </a>
            )}
          </div>

          {/* Meta */}
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-xl border border-zinc-800 px-4 py-3">
              <p className="text-xs text-zinc-500">Difficulty</p>
              <p className="font-semibold">{project.difficulty}</p>
            </div>

            <div className="rounded-xl border border-zinc-800 px-4 py-3">
              <p className="text-xs text-zinc-500">Duration</p>
              <p className="font-semibold">{project.duration}</p>
            </div>

            <div className="rounded-xl border border-zinc-800 px-4 py-3">
              <p className="text-xs text-zinc-500">Published</p>
              <p className="font-semibold">{detail.date}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-10">
            <h3 className="text-sm uppercase tracking-widest text-zinc-500">
              Tech Stack
            </h3>

            <div className="mt-4 flex flex-wrap gap-3">
              {project.technologies.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 hover:border-indigo-500 duration-300"
                  >
                    <Icon className="text-xl text-indigo-400" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
