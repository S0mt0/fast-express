import { navLinks } from "./nav-links";
import NavItem from "./nav-item";
import { cn } from "@/lib/utils";

export const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={cn(
        "w-[90%] sm:w-[95%] max-w-[560px] md:max-w-[1280px] xl:max-w-[1280px] ml-auto flex md:hidden justify-start bg-[#eeeeee] polygon-2 py-20 pl-14 absolute top-24 right-0 -z-10 -translate-y-[100%] transition-transform",
        isOpen && "translate-y-0 transition-transform"
      )}
    >
      <ul className="flex flex-col gap-y-4">
        {navLinks.map(({ href, title }) => (
          <NavItem key={href} href={href} title={title} />
        ))}
      </ul>
    </div>
  );
};
