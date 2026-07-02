import { motion } from "framer-motion";
interface FeatureHeaderProps{
    badge: string;
    title: string;
    description: string;
    className?: string;
}

export default function FeatureHeader({
    badge,
    title,
    description,
    className,
}:FeatureHeaderProps){
    return(
        <div className={`text-center ${className ?? ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-medium tracking-[0.35em] uppercase text-white/70"
          >
            {badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
             viewport={{ once: true }}
            className="mt-8 text-4xl font-semibold uppercase sm:text-5xl"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-3xl text-sm uppercase tracking-[0.18em] text-white/55 sm:text-base"
          >
            {description}
          </motion.p>
        </div>
    )
}