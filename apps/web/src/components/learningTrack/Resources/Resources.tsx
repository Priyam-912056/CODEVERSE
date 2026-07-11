import type { TimelinePhase } from "../../../types/learningTrack";
import ResourceCard from "./ResourceCard";
import ResourcesHeader from "./ResourcesHeader";

interface ResourcesProps {
  phase: TimelinePhase;
}

export default function Resources({
  phase,
}: ResourcesProps) {
  if (phase.resources.length === 0) return null;

  return (
    <div className="mt-14">
      <ResourcesHeader />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {phase.resources.map((resource) => (
          <ResourceCard
            key={resource.title}
            resource={resource}
          />
        ))}
      </div>
    </div>
  );
}