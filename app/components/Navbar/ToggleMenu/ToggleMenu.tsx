import { Menu, X } from "lucide-react";
import React from "react";

interface ToggleMenuProps {
  readonly isOpen: boolean;
  readonly toggleMenu: () => void;
}

function ToggleMenu({ isOpen, toggleMenu }: ToggleMenuProps) {
  return (
    <div className="flex items-center">
      <button
        onClick={toggleMenu}
        className="block text-white hover:text-white focus:text-white focus:outline-none z-50"
      >
        {isOpen ? <X size={40} /> : <Menu size={40} />}
      </button>
    </div>
  );
}

export default ToggleMenu;
