import {
  FaSignal,
  FaClock,
  FaBookOpen,
  FaRocket,
} from "react-icons/fa";
import type { LearningTrack } from "../../../types/learningTrack";

interface HeroStatsProps {
  track: LearningTrack;
}

const stats = (track: LearningTrack) => [
  {
    icon: FaSignal,
    label: "Level",
    value: track.level,
  },
  {
    icon: FaClock,
    label: "Duration",
    value: track.duration,
  },
  {
    icon: FaBookOpen,
    label: "Lessons",
    value: track.lessons,
  },
  {
    icon: FaRocket,
    label: "Projects",
    value: track.timeline.reduce(
    (total, phase) => total + phase.projects.length,
    0
  ),
}
];

export default function HeroStats({ track }: HeroStatsProps) {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats(track).map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/3
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-violet-500/30
            "
          >
            <Icon className="mb-4 text-2xl text-violet-400" />

            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              {item.label}
            </p>

            <h3 className="mt-2 text-xl font-bold">
              {item.value}
            </h3>
          </div>
        );
      })}
    </div>
  );
}