interface AboutContentProps {
  heading: string;
  description: string;
  buttonText: string;
  className?: string;
}

export default function AboutContent({
  heading,
  description,
  buttonText,
  className,
}: AboutContentProps) {
  return (
    <div className={className}>
      <h3 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
        {heading}
      </h3>

      <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
        {description}
      </p>

      <button className="mt-8 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:scale-105">
        {buttonText}
      </button>
    </div>
  );
}