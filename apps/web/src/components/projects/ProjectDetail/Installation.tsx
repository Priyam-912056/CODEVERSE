import { HiOutlineTerminal } from "react-icons/hi";
import type { ProjectDetail } from "../../../data/ProjectDetail";

interface InstallationProps {
  detail: ProjectDetail;
}

export default function Installation({ detail }: InstallationProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="mb-8">
        <span className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-semibold">
          Installation
        </span>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Getting Started
        </h2>

        <div className="mt-4 h-0.5 w-20 rounded-full bg-indigo-500" />
      </div>

      {/* Terminal */}
      <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">

        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
          </div>

          <div className="flex items-center gap-2 text-zinc-500">
            <HiOutlineTerminal />
            <span className="text-sm">Terminal</span>
          </div>

        </div>

        {/* Commands */}
        <div className="space-y-4 p-6 font-mono">

          {detail.installation.map((command, index) => (
            <div
              key={index}
              className="flex gap-3"
            >
              <span className="text-green-400">$</span>

              <code className="text-zinc-300">
                {command}
              </code>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}