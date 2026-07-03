interface StatsHeaderProps {
  badge: string;
  title: string;
  description: string;
  className?: string;
}

export default function StatsHeader({
  badge,
  title,
  description,
  className,
}: StatsHeaderProps) {
  return (
    <div className={`text-center ${className ?? ""}`}>
      <div className="inline-flex text-center items-center justify-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-medium uppercase tracking-[0.35em] text-white/70">
      <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"
        />
        {badge}
      </div>

      <h2 className="mt-8 text-4xl font-semibold uppercase sm:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-sm uppercase tracking-[0.18em] text-white/55 sm:text-base">
        {description}
      </p>
    </div>
  );
}