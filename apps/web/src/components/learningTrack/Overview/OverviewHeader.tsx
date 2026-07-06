import type { LearningTrack } from "../../../types/learningTrack";

interface OverviewHeaderProps {
  track: LearningTrack;
}

export default function OverviewHeader({
  track,
}: OverviewHeaderProps) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      {/* Badge */}
      <span
        className="
          inline-flex
          rounded-full
          border
          border-violet-500/20
          bg-violet-500/10
          px-5
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.3em]
          text-violet-300
        "
      >
        About This Track
      </span>

      {/* Title */}
      <h2 className="mt-8 text-4xl font-black uppercase md:text-5xl">
        {track.title}
      </h2>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-6
          max-w-3xl
          text-base
          leading-8
          text-zinc-400
          md:text-lg
        "
      >
        {track.overview}
      </p>
    </div>
  );
}