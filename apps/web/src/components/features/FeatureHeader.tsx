interface FeatureHeaderProps {
  badge: string;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureHeader({
  badge,
  title,
  description,
  className,
}: FeatureHeaderProps) {
  return (
    <div className={`flex flex-col text-center items-center justify-center ${className ?? ""}`}>
      {/* UPDATE: Added items-center and gap-2 here */}
      <div
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.35em] uppercase text-white/70"
      >
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"
        />
        {/* Added a span with leading-none to reset any text height alignment issues */}
        <span className="leading-none">{badge}</span>
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