import type { LearningTrack } from "../../../types/learningTrack";

interface ProgressHeaderProps {
  track: LearningTrack;
}

export default function ProgressHeader({ track }: ProgressHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {/* Learning Journey Premium Pill Badge */}
      <span className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-md">
        Learning Journey
      </span>

      {/* Main Responsive Typography Area */}
      <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white balance leading-[1.2]">
        Track Your Progress for <span className="text-violet-400">{track?.title}</span>
      </h2>

      {/* Description Meta Paragraph Layout */}
      <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-400 font-normal">
        Follow your roadmap step by step and see how far you've
        progressed through every learning phase.
      </p>
    </div>
  );
}