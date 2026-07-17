import {
  FaFolderOpen,
  FaLayerGroup,
  FaFire,
  FaCode,
} from "react-icons/fa";

const stats = [
  {
    icon: FaFolderOpen,
    value: "120+",
    label: "Projects",
    // Premium color classes mapping
    colorClass: "text-violet-400 bg-violet-500/10 group-hover:bg-violet-500/20 group-hover:text-violet-300",
    borderHover: "hover:border-violet-500/30",
  },
  {
    icon: FaLayerGroup,
    value: "5",
    label: "Categories",
    colorClass: "text-sky-400 bg-sky-500/10 group-hover:bg-sky-500/20 group-hover:text-sky-300",
    borderHover: "hover:border-sky-500/30",
  },
  {
    icon: FaFire,
    value: "3",
    label: "Difficulty Levels",
    colorClass: "text-amber-500 bg-amber-500/10 group-hover:bg-amber-500/20 group-hover:text-amber-400",
    borderHover: "hover:border-amber-500/30",
  },
  {
    icon: FaCode,
    value: "Real",
    label: "Industry Projects",
    colorClass: "text-emerald-400 bg-emerald-500/10 group-hover:bg-emerald-500/20 group-hover:text-emerald-300",
    borderHover: "hover:border-emerald-500/30",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className={`
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-zinc-800/50
              bg-zinc-950/40
              p-5
              sm:p-6
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1.5
              ${item.borderHover}
            `}
          >
            {/* Subtle glow effect in the card background on hover */}
            <div className="absolute -right-10 -top-10 -z-10 h-24 w-24 rounded-full bg-white/5 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

            {/* Icon Wrapper */}
            <div
              className={`
                mb-4
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:rotate-3
                ${item.colorClass}
              `}
            >
              <Icon className="text-xl transition-transform duration-300" />
            </div>

            {/* Value */}
            <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {item.value}
            </h3>

            {/* Label */}
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500 sm:text-sm">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}