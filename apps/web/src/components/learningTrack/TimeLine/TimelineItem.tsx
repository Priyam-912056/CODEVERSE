import { Link } from "react-router-dom";
import type { SkillItem } from "../../../types/learningTrack";
import { FaArrowRight } from "react-icons/fa";

interface TimelineItemProps {
  module: SkillItem;
}

export default function TimelineItem({ module }: TimelineItemProps) {
  const Icon = module.icon;

  return (
    <Link
      to="#"
      className="
        group flex items-center justify-between gap-x-4
        rounded-xl border border-white/10
        bg-zinc-900/40 px-5 py-4
        backdrop-blur-md transition-all duration-300
        hover:-translate-y-0.5 hover:border-violet-500/20 hover:bg-zinc-900/60
        shadow-sm min-w-0
      "
    >
      <div className="flex items-center gap-3.5 min-w-0">
        {/* Module Icon Container */}
        <div
          className="
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-xl bg-zinc-800/60 border border-white/5
            text-lg text-violet-400 transition-all duration-300
            group-hover:bg-violet-950/20 group-hover:border-violet-500/10
          "
        >
          <Icon className="transition-transform duration-300 group-hover:scale-105" />
        </div>

        {/* Module Text Title */}
        <span className="font-semibold text-sm sm:text-base text-zinc-200 group-hover:text-white transition-colors duration-300 truncate">
          {module.name}
        </span>
      </div>

      {/* Action Indicators */}
      <div className="p-1 rounded-lg bg-transparent transition-colors duration-300 group-hover:bg-zinc-800/50 flex-shrink-0">
        <FaArrowRight
          className="
            text-xs text-zinc-500
            transition-all duration-300
            group-hover:translate-x-0.5 group-hover:text-violet-400
          "
        />
      </div>
    </Link>
  );
}