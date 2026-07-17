import { FaArrowRight, FaClock, FaStar } from "react-icons/fa";
import type { Project } from "../../../types/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="
        group
        relative
        flex
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-white/6
        bg-[#0d0d12]/60
        backdrop-blur-2xl
        transition-all
        duration-500
        ease-out
        hover:-translate-y-2
        hover:border-violet-500/30
        hover:bg-[#12121a]/80
        hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)]
      "
    >
      {/* Visual Ambient Glow on Hover */}
      <div className="absolute -inset-px opacity-0 bg-linear-to-br from-violet-600/20 via-transparent to-cyan-500/10 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Thumbnail Container */}
      <div className="relative h-52 w-full overflow-hidden bg-zinc-950/40 border-b border-white/4">
        {/* Fallback gradients & grid pattern */}
        <div className="absolute inset-0 bg-linear-to-tr from-violet-950/40 via-zinc-900/30 to-cyan-950/20" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[16px_16px]" />
        
        {/* Project Thumbnail Image */}
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="h-full w-full object-cover opacity-60 transition-all duration-750 ease-out group-hover:scale-105 group-hover:opacity-85" 
        />
        
        {/* High-end linear overlay to blend image seamlessly into the card dark body */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0d0d12] via-[#0d0d12]/40 to-transparent opacity-90" />

        {/* Top Badges Layer */}
        <div className="absolute inset-x-4 top-4 flex items-center justify-between z-10">
          {/* Featured Badge */}
          {project.featured ? (
            <div
              className="
                flex
                items-center
                gap-1.5
                rounded-full
                bg-linear-to-r
                from-violet-600
                to-fuchsia-600
                px-3
                py-1
                text-[11px]
                font-bold
                uppercase
                tracking-wider
                text-white
                shadow-lg
                shadow-violet-900/40
              "
            >
              <FaStar className="animate-pulse text-[10px]" />
              Featured
            </div>
          ) : (
            <div />
          )}

          {/* Category Badge */}
          <div
            className="
              rounded-full
              border
              border-white/10
              bg-zinc-900/80
              px-3
              py-1
              text-[11px]
              font-medium
              tracking-wide
              text-zinc-300
              backdrop-blur-md
              transition-colors
              duration-300
              group-hover:border-violet-500/30
              group-hover:text-white
            "
          >
            {project.category}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative flex flex-1 flex-col p-6 z-10">
        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
          {project.description}
        </p>

        {/* Technologies Grid */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="
                  flex
                  items-center
                  gap-1.5
                  rounded-xl
                  border
                  border-white/5
                  bg-white/2
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-zinc-400
                  transition-all
                  duration-300
                  group-hover:border-white/10
                  group-hover:bg-white/04
                  group-hover:text-zinc-200
                "
              >
                <Icon className="text-sm text-violet-400/80 transition-transform duration-300 group-hover:scale-110 group-hover:text-violet-400" />
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>

        {/* Footer Metrics & Actions */}
        <div className="mt-auto pt-8 flex items-center justify-between border-t border-white/4">
          <div className="flex items-center gap-4">
            {/* Difficulty Pill */}
            <span
              className="
                rounded-lg
                bg-violet-500/10
                px-2.5
                py-1
                text-xs
                font-semibold
                tracking-wide
                text-violet-400
                border
                border-violet-500/10
                group-hover:border-violet-500/20
                group-hover:bg-violet-500/20
                transition-all
                duration-300
              "
            >
              {project.difficulty}
            </span>

            {/* Duration */}
            <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
              <FaClock className="text-zinc-600 group-hover:text-violet-400/70 transition-colors duration-300" />
              {project.duration}
            </div>
          </div>

          {/* Action Button */}
          <button
            className="
              flex
              items-center
              gap-1.5
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-violet-400
              transition-all
              duration-300
              hover:text-violet-300
              group-hover:gap-2.5
            "
          >
            Details
            <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}