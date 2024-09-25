"use client";

import React, { useState } from "react";
import LoginButton from "./LoginButton/LoginButton";
import MobileMenu from "./MobileMenu/MobileMenu";
import ToggleMenu from "./ToggleMenu/ToggleMenu";
import DeskTopMenu from "./DeskTopMenu/DeskTopMenu";
import Logo from "./Logo/Logo";
import MenuItems from "./MenuItems/MenuItems";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black fixed top-0 left-0 right-0 w-full z-10 flex items-center justify-between">
      <div className="container w-full">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="shrink-0 text-white">
              <Logo />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center justify-between gap-16">
              <div className="flex items-center space-x-4 text-white">
                {MenuItems.map((item, index) => (
                  <DeskTopMenu key={index} item={item} />
                ))}
              </div>
              <div className="flex items-center">
                <LoginButton />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 md:hidden">
            <LoginButton />
            <ToggleMenu isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute right-0 left-0 top-16 border-t border-white z-50 ">
          <div className="flex flex-col bg-black">
            {MenuItems.map((item, index) => (
              <MobileMenu key={index} item={item} setIsOpen={setIsOpen} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
