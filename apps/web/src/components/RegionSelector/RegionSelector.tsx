import { motion } from "framer-motion";
import { useDetectCountry } from "../../hooks/useDetectCountry";
import { useRegionSelection } from "../../hooks/useRegionSelection";
import type { RegionSelectionProps } from "../../types/region";
import RegionCard from "./RegionCard";
import RegionLoading from "./RegionLoading";
import { countries } from "../../data/countries";

export default function RegionSelector({ onComplete }: RegionSelectionProps) {
  const { loading, detectedCountry } = useDetectCountry();

  const {
    selectedCountry,
    accessGranted,
    error,
    handleSelect,
    handleContinue,
  } = useRegionSelection({
    detectedCountry,
    onComplete,
  });

  if (loading) {
    return <RegionLoading />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-6 sm:px-10">
      {/* Width ko max-w-md se badhakar max-w-2xl kiya taaki card khul kar bade dikhein */}
      <div className="relative z-10 w-full max-w-2xl py-12">
        
        {/* Top */}
        <div className="space-y-6">
          <a
            href="/"
            className="text-2xl font-bold text-white/90"
            style={{
              fontFamily: "monospace",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            CØDΞVΞRSΞ
          </a>

          <div className="space-y-3">
            <h6 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight">
              Select Region
            </h6>

            <p className="hidden md:flex text-xs uppercase tracking-widest leading-relaxed text-zinc-400">
              LEARN CODING, MASTER INTERVIEWS, AND GROW WITH AI-POWERED GUIDANCE.
            </p>

            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-400">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Detected Region — {detectedCountry}
            </div>
          </div>
        </div>

        {/* Countries */}
        <div className="mt-10 space-y-3">
          {countries.map((country, index) => {
            const active = selectedCountry === country.name;

            return (
              <RegionCard
                key={country.code}
                country={country}
                index={index}
                active={active}
                onSelect={handleSelect}
                isDetected={selectedCountry === detectedCountry}
              />
            );
          })}
        </div>

        {/* Status */}
        <div className="mt-4 min-h-5">
          {accessGranted === true && (
            <p className="text-xs text-emerald-400 uppercase tracking-wide">
              Access Granted ✓
            </p>
          )}

          {accessGranted === false && (
            <p className="text-xs text-red-400 uppercase tracking-wide">
              Access Denied ✕
            </p>
          )}

          {error && (
            <p className="text-xs text-red-400 uppercase tracking-wide">
              {error}
            </p>
          )}
        </div>

        {/* Button */}
        <motion.button
          onClick={handleContinue}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="mt-8 w-full rounded-xl bg-linear-to-r from-violet-500 to-indigo-500 px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-violet-500/10"
        >
          Continue
        </motion.button>
      </div>
    </div>
  );
}