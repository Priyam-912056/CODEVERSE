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
    <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 w-full max-w-4xl mx-auto items-stretch">
      {stats(track).map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              group flex flex-col justify-between p-5 sm:p-6 
              rounded-2xl border border-white/10 bg-zinc-900/40 
              backdrop-blur-md transition-all duration-300 
              hover:-translate-y-1 hover:bg-zinc-900/60 hover:border-violet-500/20 
              shadow-sm text-left
            "
          >
            {/* Top Row: Layout bilkul wahi, spacing perfectly optimized */}
            <div className="flex justify-between items-start gap-x-4 w-full min-w-0 mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-white truncate min-w-0">
                {item.value}
              </h3>
              <div className="p-2 bg-zinc-800/50 rounded-lg border border-white/5 transition-colors duration-300 group-hover:border-violet-500/10 group-hover:bg-violet-950/20 shrink-0">
                <Icon className="text-base text-violet-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>

            {/* Bottom Row: Label at the bottom */}
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400 mt-auto">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}