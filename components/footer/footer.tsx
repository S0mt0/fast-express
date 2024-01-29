import Link from "next/link";
import NavItem from "../navbar/nav-item";
import { navLinks } from "../navbar/nav-links";

export const Footer = () => {
  return (
    <footer>
      <div className="py-28 px-16 bg-[#222222] text-white relative">
        <div className="absolute bg-white h-16 w-1/3 top-0 right-0 polygon-3" />
      </div>

      {/* copyright */}
      <div className="bg-[#333333] flex flex-col md:flex-row">
        <div className="bg-green-700 polygon-4 py-4 px-8 md:px-16 text-[12px] sm:text-sm text-white w-10/12 md:flex-1">
          Copyright&copy; Fast Express Courier. All Rights Reserved.
        </div>
        <div className="flex-1 py-4 px-8 md:px-16 justify-end items-center flex gap-x-6">
          {navLinks
            .filter((link) => link.title !== "services")
            .map(({ href, title }) => (
              <Link
                key={href}
                href={href}
                className="text-stone-500 text-[12px] sm:text-[13px] capitalize whitespace-nowrap hover:text-white transition-colors text-center sm:text-start"
              >
                {title}
              </Link>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
