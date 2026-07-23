interface ProjectSidebarProps {

}

const sections = [
  "Overview",
  "Features",
  "Learning Outcomes",
  "Installation",
  "Folder Structure",
  "Resources",
  "Related Projects",
];

export default function ProjectSidebar() {
  return (
    <aside className="sticky top-24">
      <div className="w-72 rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-6">

        {/* Heading */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-semibold">
            Navigation
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            Project Contents
          </h3>

          <div className="mt-4 h-0.5 w-16 rounded-full bg-indigo-500" />
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section}
              className="
                group
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                px-4
                py-3
                text-left
                text-zinc-400
                transition-all
                duration-300
                hover:bg-zinc-800
                hover:text-white
              "
            >
              <span>{section}</span>

              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-zinc-600
                  transition-all
                  group-hover:bg-indigo-500
                "
              />
            </button>
          ))}
        </nav>

      </div>
    </aside>
  );
}