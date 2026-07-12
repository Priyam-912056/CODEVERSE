import type { LearningTrack } from "../../../types/learningTrack";

interface SkillsGridProps {
  track: LearningTrack;
}

export default function SkillsGrid({ track }: SkillsGridProps) {
  return (
    <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full items-stretch">
      {track.skills.map((skill) => {
        const SkillIcon = skill.icon;

        return (
          <div
            key={skill.name}
            className="
              group flex items-center justify-between gap-x-4 
              rounded-xl border border-white/10 bg-zinc-900/40 p-5 
              backdrop-blur-md transition-all duration-300 
              hover:-translate-y-1 hover:border-violet-500/20 hover:bg-zinc-900/60 
              shadow-sm min-w-0
            "
          >
            {/* Text details container */}
            <div className="flex flex-col min-w-0">
              <span className="font-semibold text-sm sm:text-base text-zinc-200
               group-hover:text-white transition-colors duration-300 truncate">
                {skill.name}
              </span>
            </div>

            {/* Icon Container with subtle active borders */}
            <div
              className="
                flex h-11 w-11 shrink-0 items-center justify-center 
                rounded-xl bg-zinc-800/50 border border-white/5 
                text-xl text-violet-400 transition-all duration-300 
                group-hover:bg-violet-950/20 group-hover:border-violet-500/10 
                group-hover:scale-105
              "
            >
              <SkillIcon className="transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>
        );
      })}
    </div>
  );
}