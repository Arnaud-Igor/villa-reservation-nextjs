import { HousePlug } from "lucide-react";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/">
      <HousePlug size={34} />
    </Link>
  );
}

export default Logo;
