import type { ProjectDetail } from "../../../data/ProjectDetail";
import FolderNode from "./FolderNode";

interface FolderStructureProps {
  detail: ProjectDetail;
}

export default function FolderStructure({
  detail,
}: FolderStructureProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="mb-8">
        <span className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-semibold">
          Folder Structure
        </span>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Project Architecture
        </h2>

        <div className="mt-4 h-0.5 w-20 rounded-full bg-indigo-500" />
      </div>

      {/* Explorer */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-8">

        {detail.folderStructure.map((node) => (
          <FolderNode
            key={node.name}
            node={node}
            level={0}
          />
        ))}

      </div>

    </section>
  );
}