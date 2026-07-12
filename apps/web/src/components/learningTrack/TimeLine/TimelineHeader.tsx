export default function TimelineHeader() {
  return (
    <div className="max-w-3xl flex flex-col items-start">
      <span
        className="
          inline-flex rounded-full border border-violet-500/20
          bg-violet-500/10 px-4 py-1.5
          text-xs font-semibold uppercase tracking-[0.2em]
          text-violet-300 backdrop-blur-md
        "
      >
        Learning Roadmap
      </span>

      <h2
        className="
          mt-6 text-3xl font-extrabold tracking-tight uppercase
          sm:text-4xl md:text-5xl text-white max-w-xl leading-[1.1]
        "
      >
        Master Every Phase.
      </h2>

      <p
        className="
          mt-4 max-w-2xl text-base leading-relaxed
          text-zinc-400 tracking-wide font-normal
        "
      >
        Follow the roadmap step by step. Complete every phase,
        build real-world projects, and become industry ready.
      </p>
    </div>
  );
}