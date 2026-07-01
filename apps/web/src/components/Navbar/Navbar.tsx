import { useState } from "react";
import type { NavId } from "./types";

import NavLogo from "./NavLogo";
import NavAction from "./NavAction";
import MobileMenu from "./MobileMenu";
import MobileToggle from "./MobileToggle";
import NavLinks from "./NavLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id: NavId) => {
    setOpen(false);

    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleOpenMenu = () => {
    setOpen(true);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLogo onNavigate={handleNavClick} />

          <NavLinks onNavigate={handleNavClick} />

          <NavAction />

          <MobileToggle onOpen={handleOpenMenu} />
        </div>
      </header>

      <MobileMenu
        isOpen={open}
        onClose={handleCloseMenu}
        onNavClick={handleNavClick}
      />
    </>
  );
}