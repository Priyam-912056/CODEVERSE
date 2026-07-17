interface CategoryFilterProps {
  category: string;
  setCategory: (value: string) => void;
}

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
  "AI",
  "Mobile",
  "DevOps",
];

export default function CategoryFilter({
  category,
  setCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 w-full px-4 py-5">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={
            category === item
              ? "rounded-full bg-violet-600 px-5 py-2 text-sm font-medium text-white transition-all duration-200 shadow-md shadow-violet-600/20"
              : "rounded-full bg-white/5 px-5 py-2 text-sm font-medium text-zinc-400 transition-all duration-200 hover:bg-white/10 hover:text-zinc-200"
          }
        >
          {item}
        </button>
      ))}
    </div>
  );
}