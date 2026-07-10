import type { LearningTrack } from "../../../types/learningTrack";
import TimelineHeader from "./TimelineHeader";
import TimelinePhase from "./TimelinePhase";

interface TimelineProps {
  track: LearningTrack;
}

export default function Timeline({ track }: TimelineProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <TimelineHeader />

      <div className="mt-16 space-y-16">
        {track.timeline.map((phase, index) => (
          <TimelinePhase
            key={phase.title}
            phase={phase}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}