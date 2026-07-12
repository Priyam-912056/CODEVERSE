import { FaArrowRight, FaClock } from "react-icons/fa";
import type { ProjectItem } from "../../../types/learningTrack";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="
        group flex flex-col justify-between
        rounded-2xl border border-white/10
        bg-zinc-900/40 p-5 backdrop-blur-md
        transition-all duration-300
        hover:-translate-y-1 hover:border-violet-500/20 hover:bg-zinc-900/60
        shadow-sm min-w-0 h-full
      "
    >
      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-x-4">
          <span
            className="
              inline-flex items-center rounded-full
              bg-violet-500/15 px-2.5 py-1
              text-[10px] font-bold uppercase
              tracking-[0.15em] text-violet-300
              border border-violet-500/10
            "
          >
            {project.difficulty}
          </span>

          <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-400">
            <FaClock className="text-zinc-500" />
            <span>{project.duration}</span>
          </div>
        </div>

        {/* Title */}
        <h4 className="mt-4 text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-400 truncate">
          {project.title}
        </h4>

        {/* Description */}
        <p className="mt-2.5 text-sm leading-relaxed text-zinc-400 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="
                  flex items-center gap-1.5
                  rounded-lg border border-white/5
                  bg-zinc-800/40 px-2.5 py-1
                  text-[11px] font-medium text-zinc-300
                  transition-colors duration-300
                  group-hover:border-white/10
                "
              >
                <Icon className="text-violet-400 text-xs shrink-0" />
                <span className="truncate">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Arrow Action Container */}
      <div className="mt-6 flex items-center justify-end pt-3 border-t border-white/5">
        <div className="p-1.5 rounded-lg bg-zinc-800/30 group-hover:bg-violet-950/30 border border-transparent group-hover:border-violet-500/20 transition-all duration-300">
          <FaArrowRight
            className="
              text-xs text-zinc-400
              transition-all duration-300
              group-hover:translate-x-0.5 group-hover:text-violet-300
            "
          />
        </div>
      </div>
    </div>
  );
}