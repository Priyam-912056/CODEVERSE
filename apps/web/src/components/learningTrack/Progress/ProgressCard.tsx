import { FaCheckCircle, FaRegCircle, FaDotCircle } from "react-icons/fa";

interface ProgressCardProps {
  title: string;
  completed: boolean;
  isActive: boolean;
}

export default function ProgressCard({
  title,
  completed,
  isActive,
}: ProgressCardProps) {
  return (
    <div
      className={`
        group flex flex-col justify-between rounded-xl border p-5 sm:p-6
        backdrop-blur-md transition-all duration-300 min-w-0 h-full
        ${
          completed
            ? "border-violet-500/30 bg-violet-950/10 shadow-sm shadow-violet-950/10"
            : isActive
            ? "border-violet-500/40 bg-zinc-900/80 shadow-md ring-1 ring-violet-500/20"
            : "border-white/10 bg-zinc-900/40 opacity-70 hover:opacity-100"
        }
      `}
    >
      <div className="flex items-start gap-4 min-w-0">
        {/* State Conditional Render System */}
        <div className="flex-shrink-0 mt-0.5">
          {completed ? (
            <FaCheckCircle className="text-xl sm:text-2xl text-violet-400 transition-transform duration-300 group-hover:scale-105" />
          ) : isActive ? (
            <FaDotCircle className="text-xl sm:text-2xl text-violet-500 animate-pulse" />
          ) : (
            <FaRegCircle className="text-xl sm:text-2xl text-zinc-600" />
          )}
        </div>

        {/* Text Area Frame Layout */}
        <div className="min-w-0">
          <h3 className="font-bold text-sm sm:text-base text-white tracking-tight leading-snug truncate">
            {title}
          </h3>

          <p
            className={`mt-1.5 text-xs font-semibold uppercase tracking-wider inline-flex items-center
              ${
                completed
                  ? "text-violet-400"
                  : isActive
                  ? "text-violet-400 font-bold bg-violet-500/10 px-2 py-0.5 rounded-md border border-violet-500/10"
                  : "text-zinc-500"
              }`}
          >
            {completed ? "Completed" : isActive ? "Active Now" : "Upcoming"}
          </p>
        </div>
      </div>
    </div>
  );
}