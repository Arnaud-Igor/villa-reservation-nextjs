import Link from "next/link";
import React from "react";

interface MobileMenuProps {
  readonly item: {
    readonly label: string;
    readonly href: string;
  };
  readonly setIsOpen: (isOpen: boolean) => void;
}

function MobileMenu({ item, setIsOpen }: MobileMenuProps) {
  return (
    <Link
      onClick={() => setIsOpen(false)}
      href={item.href}
      className="text-white block font-bold py-3 w-full text-center border-b border-gray-800 hover:bg-yellow-500"
    >
      {item.label}
    </Link>
  );
}

export default MobileMenu;
