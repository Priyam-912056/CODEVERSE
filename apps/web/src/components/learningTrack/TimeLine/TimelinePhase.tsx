import type { TimelinePhase as TimelinePhaseType } from "../../../types/learningTrack";
import TimelineItem from "./TimelineItem";
import ProjectHeader from "./ProjectsHeader";
import ProjectCard from "./ProjectCard";

interface TimelinePhaseProps {
  phase: TimelinePhaseType;
  index: number;
}

export default function TimelinePhase({ phase, index }: TimelinePhaseProps) {
  return (
    <div className="relative">
      {/* Phase Number */}
      <div
        className="
          absolute
          -left-4
          top-0
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-violet-500/30
          bg-violet-500/10
          font-bold
          text-violet-300
        "
      >
        {index + 1}
      </div>

      {/* Card */}
      <div
        className="
          ml-10
          rounded-3xl
          border
          border-white/10
          bg-white/3
          p-8
          backdrop-blur-xl
        "
      >
        {/* Title */}
        <h3 className="text-2xl font-bold">{phase.title}</h3>

        {/* Description */}
        <p className="mt-3 max-w-3xl text-zinc-400 leading-7">
          {phase.description}
        </p>

        {/* Modules */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {phase.modules.map((module) => (
            <TimelineItem key={module.name} module={module} />
          ))}
        </div>
        {/* Projects */}
        <div className="mt-10">
          <ProjectHeader />

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {phase.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
