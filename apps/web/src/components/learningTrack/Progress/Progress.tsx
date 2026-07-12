import type { LearningTrack } from "../../../types/learningTrack";
import ProgressCard from "./ProgressCard";
import ProgressHeader from "./ProgressHeader";

interface ProgressProps {
  track: LearningTrack;
}

export default function Progress({ track }: ProgressProps) {
  // Dummy current phase (In production, load this from DB/state)
  const currentPhase = 2; 

  const totalPhases = track?.timeline?.length || 0;

  // Edge case handle kiya: agar totalPhases 0 ho toh progress 0% rahegi, Infinity nahi banegi
  const progress = totalPhases > 0 ? (currentPhase / totalPhases) * 100 : 0;

  return (
    <section className="relative w-full bg-black py-4 lg:py-6 overflow-hidden">
      {/* Dynamic Background Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute top-[20%] right-[10%] w-100 h-100 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ProgressHeader track={track} />

        {/* Progress Bar Container with subtle Glassmorphism */}
        <div className="mt-16 bg-zinc-900/40 border border-white/5 rounded-2xl p-6 backdrop-blur-md">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs sm:text-sm font-medium tracking-wide text-zinc-400">
              Overall Journey Progress
            </span>
            <span className="text-sm sm:text-base font-bold text-violet-400 bg-violet-500/10 px-2.5 py-0.5 rounded-md border border-violet-500/10">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="h-2.5 w-full overflow-hidden rounded-full bg-zinc-800 border border-white/5">
            <div
              className="h-full rounded-full bg-linear-to-r from-violet-600 to-violet-400 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Phase Cards Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 items-stretch w-full">
          {track?.timeline?.map((phase, index) => (
            <ProgressCard
              key={phase.title}
              title={phase.title}
              completed={index < currentPhase}
              // Optional optimization: Passed through strictly preserving props contract
              isActive={index === currentPhase} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}