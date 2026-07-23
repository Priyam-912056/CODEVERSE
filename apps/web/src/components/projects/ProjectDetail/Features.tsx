import type { Project } from "../../../types/projects";
import { HiCheckCircle } from "react-icons/hi";

interface FeaturesProps {
  project: Project;
}

export default function Features({ project }: FeaturesProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="mb-8">
        <span className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-semibold">
          Features
        </span>

        <h2 className="mt-3 text-4xl font-bold text-white">
          What You'll Build
        </h2>

        <div className="mt-4 h-0.5 w-20 bg-indigo-500 rounded-full" />
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6">

        {project.features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-6 hover:border-indigo-500 transition-all duration-300"
          >
            <HiCheckCircle className="text-2xl text-indigo-400 shrink-0 mt-1" />

            <p className="text-zinc-300 leading-7">
              {feature}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}