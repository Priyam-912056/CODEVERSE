import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";

interface BreadcrumbProps {
  title: string;
}

export default function Breadcrumb({ title }: BreadcrumbProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-8">

      <nav className="flex items-center gap-2 text-sm">

        <Link
          to="/"
          className="text-zinc-500 transition hover:text-white"
        >
          Home
        </Link>

        <HiChevronRight className="text-zinc-600" />

        <Link
          to="/projects"
          className="text-zinc-500 transition hover:text-white"
        >
          Projects
        </Link>

        <HiChevronRight className="text-zinc-600" />

        <span className="font-medium text-indigo-400 truncate">
          {title}
        </span>

      </nav>

    </section>
  );
}