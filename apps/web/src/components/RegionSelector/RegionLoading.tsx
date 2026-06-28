import { motion } from "framer-motion";

export default function RegionLoading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="h-10 w-10 rounded-full border border-white/20 border-t-violet-400"
      />
    </div>
  );
}