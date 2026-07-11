import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

interface ProgressCardProps {
  title: string;
  completed: boolean;
  isActive: boolean;

}

export default function ProgressCard({
  title,
  completed,
}: ProgressCardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        p-6
        transition-all
        duration-300
        ${
          completed
            ? "border-violet-500/40 bg-violet-500/10"
            : "border-white/10 bg-white/3"
        }
      `}
    >
      <div className="flex items-center gap-4">
        {completed ? (
          <FaCheckCircle className="text-3xl text-violet-400" />
        ) : (
          <FaRegCircle className="text-3xl text-zinc-500" />
        )}

        <div>
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>

          <p
            className={`mt-1 text-sm ${
              completed
                ? "text-violet-300"
                : "text-zinc-500"
            }`}
          >
            {completed ? "Completed" : "Upcoming"}
          </p>
        </div>
      </div>
    </div>
  );
}