import { HiOutlineBars3 } from "react-icons/hi2";

interface MobileToggleProps {
  onOpen: () => void;
}

export default function MobileToggle({ onOpen }: MobileToggleProps) {
  return (
    <button
      onClick={onOpen}
      aria-label="Open menu"
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        text-white
        transition-colors
        hover:bg-white/5
        active:scale-95
        lg:hidden
      "
    >
      <HiOutlineBars3 className="text-xl" />
    </button>
  );
}