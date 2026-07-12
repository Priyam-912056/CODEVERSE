import { motion } from "framer-motion";
import type { LearningTrack } from "../../../types/learningTrack";
import HeroStats from "./HeroStats";
import HeroButtons from "./HeroButtons";

interface HeroProps {
  track: LearningTrack;
}

export default function Hero({ track }: HeroProps) {
  const Icon = track.icon;

  return (
    <section className="relative overflow-hidden bg-black pt-13 text-white min-h-[90vh] flex flex-col justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40 mix-blend-screen" aria-hidden="true">
        <div className="absolute left-1/2 top-12 h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute left-1/3 top-32 h-87.5 w-87.5 rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center flex flex-col items-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/50 text-4xl text-violet-400 backdrop-blur-md shadow-sm transition-colors duration-300 hover:border-violet-500/20"
        >
          <Icon />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-extrabold uppercase tracking-tight md:text-6xl max-w-4xl leading-[1.15] md:leading-[1.1]"
        >
          {track.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg tracking-wide font-normal"
        >
          {track.description}
        </motion.p>

        {/* Stats Component */}
        <HeroStats track={track} />
        
        {/* Buttons Component */}
        <HeroButtons />
      </div>
    </section>
  );
}