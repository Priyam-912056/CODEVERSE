export default function FAQHeader() {
  return (
    <div className="text-center">
      <p
        className="
          text-sm
          font-semibold
          uppercase
          tracking-[0.3em]
          text-violet-400
        "
      >
        Frequently Asked Questions
      </p>

      <h2 className="mt-4 text-4xl font-bold text-white">
        Got Questions?
      </h2>

      <p
        className="
          mx-auto
          mt-4
          max-w-3xl
          text-zinc-400
          leading-8
        "
      >
        Find answers to the most common questions about this
        learning roadmap and your learning journey.
      </p>
    </div>
  );
}