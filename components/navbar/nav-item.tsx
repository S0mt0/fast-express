"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { useMobileMenuStore } from "../../sdk/hooks";

interface NavItemProps {
  href: string;
  title: string;
  style?: string;
}
export const NavItem = ({ href, title, style }: NavItemProps) => {
  const path = usePathname();
  const { closeMenu } = useMobileMenuStore();

  return (
    <li key={href} className="md:h-full">
      <Link
        href={href}
        className={cn(
          "font-bold uppercase text-sm text-stone-700 font-title hover:text-green-700 transition-all flex items-center relative group whitespace-nowrap md:h-full",
          path === href && "text-green-700",
          style
        )}
        onClick={closeMenu}
      >
        {title}
        {/* active and hover states green-underline visible on medium devices only */}
        <div
          className={cn(
            "absolute hidden h-[3px] bg-green-700/80 -bottom-[4px] w-[90%] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 md:block",
            path === href && "opacity-100"
          )}
        />

        {/* active and hover states green-underline visible on small or mobile devices only */}
        <div
          className={cn(
            "absolute h-[3px] bg-green-700/80 -bottom-[4px] w-[20%] opacity-0 group-hover:opacity-100 md:hidden",
            path === href && "opacity-100"
          )}
        />
      </Link>
    </li>
  );
};

export default NavItem;
