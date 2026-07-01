import { Link } from "react-router-dom";
import { HiOutlineXMark } from "react-icons/hi2"; 
import Button from "../../ui/Button"; 
import { NAV_LINKS } from "./data"
import type { NavId } from "./types";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (id: NavId) => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  onNavClick,
}: MobileMenuProps) {
  return (
    <>
      {/* Backdrop Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Sidebar Menu */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-screen w-full sm:w-96
          bg-zinc-950 border-l border-white/10 backdrop-blur-xl
          transition-transform duration-300 ease-in-out lg:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header Section */}
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <h2 className="mt-4 font-semibold tracking-[0.3em] text-white text-sm">
            MENU
          </h2>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="
              flex h-10 w-10 items-center justify-center rounded-full 
              border border-white/10 text-white transition-colors
              hover:bg-white/5 active:scale-95
            "
          >
            <HiOutlineXMark className="text-xl" />
          </button>
        </div>

        {/* Navigation Links & Actions */}
        <div className="flex flex-col gap-6 p-8">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavClick(item.id);
                  onClose(); // Link click hote hi menu close ho jaye
                }}
                className="
                  text-left text-lg font-medium uppercase tracking-wide text-white 
                  transition-colors duration-200 hover:text-zinc-400
                "
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="my-2 h-px bg-white/10" />

          {/* CTA Buttons */}
          <Button to="/dashboard" className="w-full justify-center">
            Dashboard
          </Button>

          <Link
            to="/login"
            onClick={onClose}
            className="
              rounded-full bg-white py-3 text-center font-semibold text-black 
              transition-all duration-200 hover:bg-zinc-200 active:scale-[0.98]
            "
          >
            Sign In
          </Link>
        </div>
      </aside>
    </>
  );
}