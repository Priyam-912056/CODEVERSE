interface AboutHeaderProps {
  badge: string;
  title: string;
  description: string;
  className?: string;
}

export default function AboutHeader({
  badge,
  title,
  description,
  className,
}: AboutHeaderProps) {
  return (
    <div className={`text-center ${className ?? ""}`}>
      <div className=" items-center justify-center gap-2.5 inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-medium uppercase tracking-[0.35em] text-white/70">
      <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-pink-400 animate-pulse"
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