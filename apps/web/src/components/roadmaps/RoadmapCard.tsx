import type { LearningTrack } from "../../types/learningTrack";
import { FaArrowRight } from "react-icons/fa";

interface RoadmapCardProps {
  track: LearningTrack;
  className?: string;
}

export default function RoadmapCard({
  track,
  className,
}: RoadmapCardProps) {
  const Icon = track.icon;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] ${className ?? ""}`}
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      {/* Icon - Reduced size slightly from h-16 w-16 to h-12 w-12 */}
      <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-xl text-violet-300 ring-1 ring-violet-500/20">
        <Icon />
      </div>

      {/* Title - Tweaked size slightly for better proportions */}
      <h3 className="relative z-10 text-lg font-bold uppercase lg:text-xl">
        {track.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-3 text-xs leading-6 text-white/60">
        {track.description}
      </p>

      {/* Margins reduced from my-6 to my-4 */}
      <div className="relative z-10 my-4 h-px bg-white/10" />

      {/* Topics - Tightened space-y-4 to space-y-2.5 */}
      <div className="relative z-10 space-y-2.5">
        {track.topics.map((topic) => (
          <div
            key={topic}
            className="flex items-center gap-2.5 text-xs uppercase tracking-[0.12em] text-zinc-400"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            <span>{topic}</span>
          </div>
        ))}
      </div>

      {/* Footer - Reduced top margin and padding */}
      <div className="relative z-10 mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          Explore Track
        </span>

        <FaArrowRight className="text-zinc-500 transition duration-300 group-hover:translate-x-1 group-hover:text-violet-300" />
      </div>
    </article>
  );
}