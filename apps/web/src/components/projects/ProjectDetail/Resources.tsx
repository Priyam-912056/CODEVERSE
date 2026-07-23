import type { ProjectDetail } from "../../../data/ProjectDetail";

interface ResourcesProps {
  detail: ProjectDetail;
}

export default function Resources({ detail }: ResourcesProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="mb-8">
        <span className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-semibold">
          Resources
        </span>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Helpful Resources
        </h2>

        <div className="mt-4 h-0.5 w-20 rounded-full bg-indigo-500" />
      </div>

      {/* Resource Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        {detail.resources.map((resource) => (
          <a
            key={resource.title}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:border-indigo-500 hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold text-white">
              {resource.title}
            </h3>

            <p className="mt-2 text-sm text-indigo-400 break-all">
              {resource.url}
            </p>
          </a>
        ))}

      </div>

    </section>
  );
}