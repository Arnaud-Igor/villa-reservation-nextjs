import { User } from "lucide-react";
import Link from "next/link";
import React from "react";

function LoginButton() {
  return (
    <div className="flex items-center">
      <div className="shrink-0">
        <Link href="/login" className="text-gray-900 rounded-full block p-1 bg-white">
          <User size={24} />
        </Link>
      </div>
    </div>
  );
}

export default LoginButton;
