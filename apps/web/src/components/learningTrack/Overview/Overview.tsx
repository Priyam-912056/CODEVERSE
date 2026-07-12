import OverviewHeader from "./OverviewHeader";
import type { LearningTrack } from "../../../types/learningTrack";
import SkillsGrid from "./SkillsGrid";

interface OverviewProps {
  track: LearningTrack;
}

export default function Overview({ track }: OverviewProps) {
  return (
    <section className="relative w-full bg-black py-16 lg:py-23 overflow-hidden">
      {/* Subtle layout section glow */}
      <div className="absolute inset-x-0 bottom-0 -z-10 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute left-1/2 bottom-0 h-75 w-150 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <OverviewHeader track={track} />
        <SkillsGrid track={track} />
      </div>
    </section>
  );
}