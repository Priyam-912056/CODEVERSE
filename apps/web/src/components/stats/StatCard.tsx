import type { Stat } from "./types";

interface StatCardProps {
  stat: Stat;
  className?: string;
}

export default function StatsCard({
  stat,
  className,
}: StatCardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl ${className ?? ""}`} 
    >
      <h3
      className="text-5xl font-black text-violet-400"
      >
        {stat.value}
        </h3>

      <h4
      className="mt-4 text-lg font-semibold uppercase"
      >
        {stat.label}
        </h4>

      {stat.description && (
        <p
        className="mt-2 text-sm text-white/55"
        >
            {stat.description}
            </p>
      )}
    </div>
  );
}