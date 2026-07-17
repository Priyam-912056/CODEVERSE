import { FaSearch } from "react-icons/fa";

interface EmptyStateProps {
  title: string;
  description: string;
  buttonText?: string;
  onAction?: () => void;
}

export default function EmptyState({
  title,
  description,
  buttonText,
  onAction,
}: EmptyStateProps) {
  return (
    <section className="flex min-h-[400px] items-center justify-center px-4 py-12">
      <div
        className="
          w-full
          max-w-md
          rounded-2xl
          border
          border-white/[0.06]
          bg-zinc-900/40
          p-8
          md:p-10
          text-center
          backdrop-blur-md
          shadow-2xl
          shadow-black/40
        "
      >
        {/* Icon Area with Glow Effect */}
        <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-xl text-violet-400">
          <FaSearch />
          {/* Subtle Outer Glow */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-violet-500/20 blur-xl opacity-50" />
        </div>

        {/* Text Content */}
        <div className="mt-6 space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-100">
            {title}
          </h2>
          <p className="mx-auto max-w-sm text-sm md:text-base leading-relaxed text-zinc-400">
            {description}
          </p>
        </div>

        {/* Action Button */}
        {buttonText && onAction && (
          <button
            onClick={onAction}
            className="
              mt-8
              w-full
              sm:w-auto
              rounded-xl
              bg-violet-600
              px-6
              py-2.5
              text-sm
              font-medium
              text-white
              shadow-lg
              shadow-violet-600/20
              transition-all
              duration-200
              hover:bg-violet-500
              hover:shadow-violet-500/30
              active:scale-[0.98]
            "
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
}