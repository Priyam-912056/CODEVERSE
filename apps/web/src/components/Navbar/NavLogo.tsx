import type { NavId } from "./types";

type NavLogoProps = {
  onNavigate: (id: NavId) => void;
};

export default function NavLogo({ onNavigate }: NavLogoProps) {
  return (
    <button
      onClick={() => onNavigate("home")}
      className="font-mono cursor-pointer text-2xl font-black uppercase tracking-[0.25em] text-white transition-opacity hover:opacity-80"
      aria-label="CØDΞVΞRSΞ Home"
    >
      CØDΞVΞRSΞ
    </button>
  );
}