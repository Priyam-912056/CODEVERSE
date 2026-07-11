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

export default function ResourceCard({
  resource,
}: ResourceCardProps) {
  const Icon = iconMap[resource.type];

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
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
      <Icon className="text-2xl text-violet-400" />

      <h4 className="mt-5 text-lg font-semibold text-white">
        {resource.title}
      </h4>

      <p className="mt-2 text-sm text-zinc-400">
        {resource.type}
      </p>

      <div className="mt-6 flex items-center gap-2 text-violet-300">
        Open Resource
        <FaArrowRight className="transition group-hover:translate-x-1" />
      </div>
    </a>
  );
}