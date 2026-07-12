import type { TimelinePhase as TimelinePhaseType } from "../../../types/learningTrack";
import TimelineItem from "./TimelineItem";
import ProjectHeader from "./ProjectsHeader";
import ProjectCard from "./ProjectCard";
import Resources from "../Resources/Resources";

interface TimelinePhaseProps {
  phase: TimelinePhaseType;
  index: number;
}

export default function TimelinePhase({ phase, index }: TimelinePhaseProps) {
  return (
    <div className="relative group/phase">
      {/* Node Phase Counter Dot Tracker */}
      <div
        className="
          absolute left-0.5 top-1.5
          flex h-7.5 w-7.5 items-center justify-center
          rounded-full border border-violet-500/30
          bg-zinc-900 font-bold text-xs text-violet-300
          shadow-lg shadow-black z-10 transition-colors duration-300
          group-hover/phase:border-violet-500 group-hover/phase:bg-violet-950/50
        "
      >
        {index + 1}
      </div>

      {/* Main Structural Node Layout Card Content wrapper */}
      <div
        className="
          ml-12 rounded-2xl border
          border-white/10 bg-zinc-900/20
          p-5 sm:p-8 backdrop-blur-xl
          transition-colors duration-300
          hover:border-white/15
        "
      >
        {/* Phase Meta Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          {phase.title}
        </h3>

        {/* Short Phase Narrative Meta Text Descriptor */}
        <p className="mt-2.5 max-w-3xl text-sm sm:text-base leading-relaxed text-zinc-400 font-normal">
          {phase.description}
        </p>

        {/* Dynamic Nested Structural Grid Sections Content Grid Systems */}
        {/* Inner Modules Component Core Grid Node */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {phase.modules.map((module) => (
            <TimelineItem key={module.name} module={module} />
          ))}
        </div>

        {/* Structural Sub Projects Area Layout Grid Block Renderers */}
        <div className="mt-12 pt-6 border-t border-white/5">
          <ProjectHeader />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 items-stretch">
            {phase.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* Shared Embedded Dynamic Static Secondary Meta Data Core Resources Asset Blocks Wrapper */}
        <div className="mt-8 pt-4">
          <Resources phase={phase} />
        </div>
      </div>
    </div>
  );
}