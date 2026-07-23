import type { FolderNode } from "../../../data/ProjectDetail";
import { HiFolder, HiDocumentText } from "react-icons/hi";

interface FolderNodeProps {
  node: FolderNode;
  level: number;
}

export default function FolderNode({ node, level }: FolderNodeProps) {
  return (
    <div className="py-2" style={{ paddingLeft: `${level * 20}px` }}>
      <div className="flex items-center gap-3 py-2">
        {node.type === "folder" ? (
          <HiFolder className="text-yellow-400 text-xl" />
        ) : (
          <HiDocumentText className="text-zinc-400 text-xl" />
        )}

        <span className="text-zinc-300">{node.name}</span>
      </div>
      {node.children?.map((child) => (
  <FolderNode
    key={child.name}
    node={child}
    level={level + 1}
  />
))}
    </div>
  );
}
