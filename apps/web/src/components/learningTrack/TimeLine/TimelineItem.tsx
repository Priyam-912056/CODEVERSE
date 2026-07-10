import { Link } from "react-router-dom";
import type { SkillItem } from "../../../types/learningTrack";
import { FaArrowRight } from "react-icons/fa";

interface TimelineItemProps {
  module: SkillItem;
}

export default function TimelineItem({
  module,
}: TimelineItemProps) {
  const Icon = module.icon;

  return (
    <Link
      to="#"
      className="
        group
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-black/30
        px-5
        py-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-violet-500/30
        hover:bg-violet-500/5
      "
    >
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-violet-500/10
            text-xl
            text-violet-300
            transition-colors
            group-hover:bg-violet-500/20
          "
        >
          <Icon />
        </div>

        {/* Name */}
        <span className="font-semibold text-white">
          {module.name}
        </span>
      </div>

      {/* Arrow */}
      <FaArrowRight
        className="
          text-zinc-500
          transition-all
          duration-300
          group-hover:translate-x-1
          group-hover:text-violet-300
        "
      />
    </Link>
  );
}