interface RoadmapHeaderProps {
  badge: string;
  title: string;
  description: string;
  className?: string;
}

export default function RoadmapHeader({
  badge,
  title,
  description,
  className,
}: RoadmapHeaderProps) {
  return (
    <div className={`mb-20 text-center ${className ?? ""}`}>
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-violet-300">
        {badge}
      </p>

      <h2 className="text-4xl font-black uppercase md:text-6xl">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-sm uppercase tracking-[0.18em] text-white/60 md:text-base">
        {description}
      </p>
    </div>
  );
}