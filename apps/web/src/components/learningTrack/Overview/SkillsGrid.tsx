import type { LearningTrack } from "../../../types/learningTrack";

interface SkillsGridProps {
  track: LearningTrack;
}

export default function SkillsGrid({ track }: SkillsGridProps) {
  return (
    <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {track.skills.map((skill) => {
        // Dynamic icon component ko capital letter variable mein store karna zaroori hai
        const SkillIcon = skill.icon;

        return (
          <div
            key={skill.name} // Object ki jagah unique name ko key banaya
            className="
              group
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/3
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-violet-500/30
              hover:bg-violet-500/5
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                shrink-0 /* Icon ko squeeze hone se bachane ke liye */
                items-center
                justify-center
                rounded-xl
                bg-violet-500/10
                text-xl /* Icon ka size thoda sahi dikhega */
                text-violet-400
                transition-colors
                group-hover:bg-violet-500/20
              "
            >
              {/* Har skill ka apna specific icon yahan render hoga */}
              <SkillIcon />
            </div>

            <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
              {skill.name} {/* Object ki jagah .name render kiya */}
            </span>
          </div>
        );
      })}
    </div>
  );
}