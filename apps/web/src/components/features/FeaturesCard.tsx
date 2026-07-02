import type { Feature } from "./types";

interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

export default function FeatureCard({
  feature,
  className,
}: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-7 backdrop-blur-xl ${className ?? ""}`}
    >
      {/* Hover Background */}
      <div className="absolute inset-0 bg-linear-to-br from-violet-500/10 via-transparent to-indigo-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-300">
          <Icon className="h-7 w-7" />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-lg font-semibold uppercase tracking-wide">
          {feature.title}
        </h3>

        {/* Divider */}
        <div className="mt-4 h-px w-full bg-white/10" />

        {/* Description */}
        <p className="mt-5 text-sm leading-7 uppercase tracking-[0.06em] text-white/55">
          {feature.description}
        </p>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/35">
            CODEVERSE
          </span>

          <span className="transition text-white/35 group-hover:text-violet-300">
            →
          </span>
        </div>
      </div>
    </div>
  );
}