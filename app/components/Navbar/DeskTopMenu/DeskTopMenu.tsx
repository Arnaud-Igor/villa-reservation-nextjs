import Link from "next/link";
import React from "react";

interface DeskTopMenuProps {
    readonly item: {
        readonly label: string;
        readonly href: string;
    };
}

function DeskTopMenu({ item }: DeskTopMenuProps) {
  return (
    <Link
      href={item.href}
      className="text-white hover:bg-yellow-500 font-bold px-3 py-2 rounded-md"
    >
      {item.label}
    </Link>
  );
}

export default DeskTopMenu;
