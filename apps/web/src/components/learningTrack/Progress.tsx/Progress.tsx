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
    <section className="mx-auto max-w-7xl px-6 py-20">
      <ProgressHeader track={track} />

      {/* Phase Cards */}
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {track?.timeline?.map((phase, index) => (
          <ProgressCard
            key={phase.title}
            title={phase.title}
            completed={index < currentPhase}
            // Optional optimization: Current chal rahe phase ko alag UI accent dene ke liye
            isActive={index === currentPhase} 
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-16">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm text-zinc-400">
            Overall Progress
          </span>
          <span className="font-semibold text-violet-400">
            {Math.round(progress)}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-violet-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
}