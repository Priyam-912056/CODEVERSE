import type { LearningTrack } from "../../../types/learningTrack";

interface ProgressHeaderProps {
  track: LearningTrack;
}

export default function ProgressHeader({ track }: ProgressHeaderProps) {
  return (
    <div className="text-center">
      <p
        className="
          text-sm
          font-semibold
          uppercase
          tracking-[0.3em]
          text-violet-400
        "
      >
        Learning Journey
      </p>

      {/* Tip: Ab tum static text ki jagah dynamic title bhi dikha sakte ho */}
      <h2 className="mt-4 text-4xl font-bold text-white">
        Track Your Progress for {track?.title}
      </h2>

      <p
        className="
          mx-auto
          mt-4
          max-w-3xl
          text-zinc-400
          leading-8
        "
      >
        Follow your roadmap step by step and see how far you've
        progressed through every learning phase.
      </p>
    </div>
  );
}