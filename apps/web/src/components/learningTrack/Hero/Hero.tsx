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
    <section className="relative overflow-hidden pt-32 pb-16 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-violet-500/20 bg-violet-500/10 text-5xl text-violet-300"
        >
          <Icon />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-black uppercase md:text-6xl"
        >
          {track.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg"
        >
          {track.description}
        </motion.p>
        <HeroStats track={track} />
        <HeroButtons/>
      </div>
    </section>
  );
}