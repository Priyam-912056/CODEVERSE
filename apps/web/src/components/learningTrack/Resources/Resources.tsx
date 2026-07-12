import type { TimelinePhase } from "../../../types/learningTrack";
import ResourceCard from "./ResourceCard";
import ResourcesHeader from "./ResourcesHeader";

interface ResourcesProps {
  phase: TimelinePhase;
}

export default function Resources({ phase }: ResourcesProps) {
  if (!phase.resources || phase.resources.length === 0) return null;

  return (
    <div className="mt-16 w-full">
      <ResourcesHeader />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch w-full">
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