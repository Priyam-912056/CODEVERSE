import {
  FaBook,
  FaGithub,
  FaPlayCircle,
  FaArrowRight,
} from "react-icons/fa";
import type { ResourceItem } from "../../../types/learningTrack";

interface ResourceCardProps {
  resource: ResourceItem;
}

const iconMap = {
  Documentation: FaBook,
  Video: FaPlayCircle,
  GitHub: FaGithub,
  Article: FaBook,
  "Cheat Sheet": FaBook,
};

export default function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = iconMap[resource.type] || FaBook;

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group flex flex-col justify-between
        rounded-xl border border-white/10
        bg-zinc-900/40 p-5 backdrop-blur-md
        transition-all duration-300
        hover:-translate-y-1 hover:border-violet-500/20 hover:bg-zinc-900/60
        shadow-sm min-w-0 h-full 
      "
    >
      <div>
        {/* Top Section: Icon & Type Badge */}
        <div className="flex items-center justify-between gap-x-4">
          <div className="p-2 bg-zinc-800/50 rounded-lg border
           border-white/5 transition-colors duration-300
            group-hover:border-violet-500/10 group-hover:bg-violet-950/20 shrink-0">
            <Icon className="text-lg text-violet-400 transition-transform duration-300 group-hover:scale-105" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em]
           text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
            {resource.type}
          </span>
        </div>

        {/* Title */}
        <h4 className="mt-5 text-base sm:text-lg font-bold tracking-tight
         text-white transition-colors duration-300 group-hover:text-violet-400 line-clamp-2">
          {resource.title}
        </h4>
      </div>

      {/* Action CTA Footer */}
      <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase
       tracking-wider text-violet-400 transition-colors duration-300
        group-hover:text-violet-300 pt-3 border-t border-white/5">
        <span>Open Resource</span>
        <FaArrowRight className="text-[10px] transition-transform duration-300
         group-hover:translate-x-0.5" />
      </div>
    </a>
  );
}