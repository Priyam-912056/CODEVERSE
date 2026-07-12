import type { LearningTrack } from "../../../types/learningTrack";

interface OverviewHeaderProps {
  track: LearningTrack;
}

export default function OverviewHeader({ track }: OverviewHeaderProps) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {/* Premium Pill Badge */}
      <span className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10
       px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-md">
        About This Track
      </span>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg
       tracking-wide font-normal">
        {track.overview}
      </p>
    </div>
  );
}