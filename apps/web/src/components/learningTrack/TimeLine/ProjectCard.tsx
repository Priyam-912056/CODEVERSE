import { FaArrowRight, FaClock } from "react-icons/fa";
import type { ProjectItem } from "../../../types/learningTrack";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-white/10
        bg-white/3
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-violet-500/30
        hover:bg-violet-500/5
      "
    >
      {/* Difficulty Badge */}
      <div className="flex items-center justify-between">
        <span
          className="
            rounded-full
            bg-violet-500/10
            px-3
            py-1
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-violet-300
          "
        >
          {project.difficulty}
        </span>

        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <FaClock />
          {project.duration}
        </div>
      </div>

      {/* Title */}
      <h4 className="mt-5 text-xl font-bold">
        {project.title}
      </h4>

      {/* Description */}
      <p className="mt-3 text-sm leading-7 text-zinc-400">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                px-3
                py-2
                text-xs
                text-zinc-300
              "
            >
              <Icon className="text-violet-400" />
              {tech.name}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-end">
        <FaArrowRight
          className="
            text-zinc-500
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:text-violet-300
          "
        />
      </div>
    </div>
  );
}