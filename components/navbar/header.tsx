"use client";
import { AlignJustify, SearchIcon } from "lucide-react";

import { useMobileMenuStore } from "../../sdk/hooks";

import { navLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";
import NavItem from "./nav-item";
import Logo from "../logo";

export const Header = () => {
  const { menuIsOpen, toggleMenu } = useMobileMenuStore();
  return (
    <header className="w-full absolute top-0 z-50">
      <div className="container h-24 flex justify-center items-center sm:justify-start shadow-sm bg-white">
        {/* logo */}
        <Logo />
      </div>
      <nav
        className="w-[90%] sm:w-[95%] max-w-[560px] md:max-w-[1280px] xl:max-w-[1280px] ml-auto flex items-center justify-center bg-[#eeeeee] polygon"
        id="no-print"
      >
        <ul className="w-full hidden md:flex items-center h-16 justify-center gap-8 border-b-4 border-[#bdbbbb]">
          {/* navigation links */}
          {navLinks.map(({ href, title }) => (
            <NavItem key={href} href={href} title={title} />
          ))}

          {/* navbar search button */}
          <div
            className="grid place-items-center border p-2 border-slate-400 rounded-full group hover:bg-green-700 transition-all"
            role="button"
          >
            <SearchIcon className="w-[1.2rem] h-[1.2rem] group-hover:text-white transition-colors" />
          </div>
        </ul>

        {/* mobile-menu button */}
        <div className="border-b-2 md:border-b-4 md:border-[#dfdede] border-[#d0d0d0] flex md:hidden h-14 items-center justify-center w-full">
          <button
            type="button"
            className="p-1 px-2 rounded-sm bg-gray-400/30"
            onClick={toggleMenu}
          >
            <AlignJustify className="text-stone-500" />
          </button>
        </div>
      </nav>

      {/* mobile-menu */}
      <MobileMenu isOpen={menuIsOpen} />
    </header>
  );
};
