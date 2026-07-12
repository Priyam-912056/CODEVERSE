import type { LearningTrack } from "../../../types/learningTrack";
import TimelineHeader from "./TimelineHeader";
import TimelinePhase from "./TimelinePhase";

interface TimelineProps {
  track: LearningTrack;
}

export default function Timeline({ track }: TimelineProps) {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Decorative ambient path background glow */}
      <div className="absolute top-1/4 left-10 -z-10 h-125 w-125 rounded-full
       bg-violet-600/5 blur-[120px] pointer-events-none" aria-hidden="true" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <TimelineHeader />

        <div className="mt-20 relative before:absolute before:inset-y-0
         before:left-4 before:w-0.5 before:bg-linear-to-b before:from-violet-500/40
          before:via-zinc-800/30 before:to-transparent space-y-16">
          {track.timeline.map((phase, index) => (
            <TimelinePhase
              key={phase.title}
              phase={phase}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}