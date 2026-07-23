import type { ProjectDetail } from "../../../data/ProjectDetail";
import { HiAcademicCap } from "react-icons/hi";

interface LearningOutcomesProps {
  detail: ProjectDetail;
}

export default function LearningOutcomes({
  detail,
}: LearningOutcomesProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="mb-8">
        <span className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-semibold">
          Learning Outcomes
        </span>

        <h2 className="mt-3 text-4xl font-bold text-white">
          What You'll Learn
        </h2>

        <div className="mt-4 h-0.5 w-20 rounded-full bg-indigo-500" />
      </div>

      {/* Timeline */}
      <div className="space-y-6">

        {detail.learningOutcomes.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/15">
              <HiAcademicCap className="text-2xl text-indigo-400" />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold text-white">
                Learning {index + 1}
              </h3>

              <p className="mt-2 leading-7 text-zinc-400">
                {item}
              </p>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}