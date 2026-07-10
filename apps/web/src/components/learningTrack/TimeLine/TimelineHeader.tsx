export default function TimelineHeader() {
  return (
    <div className="max-w-3xl">
      <span
        className="
          inline-flex rounded-full border border-violet-500/30
          bg-violet-500/10 px-4 py-2
          text-xs font-semibold uppercase tracking-[0.3em]
          text-violet-300
        "
      >
        Learning Roadmap
      </span>

      <h2
        className="
          mt-6 text-4xl font-black uppercase tracking-wide
          md:text-5xl
        "
      >
        Master Every Phase.
      </h2>

      <p
        className="
          mt-5 max-w-2xl text-base leading-8
          text-zinc-400
        "
      >
        Follow the roadmap step by step. Complete every phase,
        build real-world projects, and become industry ready.
      </p>
    </div>
  );
}