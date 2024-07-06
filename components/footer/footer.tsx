"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "../navbar/nav-links";
import { Title } from "../title";
import Logo from "../logo";
import { footerLinkItems, connectIcons, contactLinks } from "./items";
import { SocialIcon } from "./social-icon";
import { ContactItem } from "./contact-item";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export const Footer = () => {
  const path = usePathname();
  const checkoutPath = "/redeem-shipment";
  const paypalPath = "/paypal/checkout";

  return (
    <footer className={cn(path === paypalPath && "hidden")}>
      <div className="py-28 px-16 bg-[#222222] text-white relative">
        <div
          className={cn(
            "absolute bg-white h-16 w-1/3 top-0 right-0 polygon-3",
            path === checkoutPath && "bg-slate-50"
          )}
        />

        <div className="flex flex-col sm:flex-row gap-6 text-stone-400 text-[12px] sm:text-sm max-w-[740px]">
          <div className="flex-1 shrink-0">
            <Logo path="/images/footer_logo.png" />
            <p className="my-6 leading-loose">
              Fast Express Courier offers a host of logistic management services
              and supply chain solutions. We provide innovative solutions with
              the best people, processes, and technology.
            </p>
            <p className="uppercase text-stone-200/80 my-4 font-bold">
              get connected
            </p>
            <div className="flex gap-2">
              {connectIcons.map((icon, i) => (
                <SocialIcon key={i} icon={icon} />
              ))}
            </div>
          </div>

          <div className="flex-1">
            <Title mode="light" className="mb-6">
              our services
            </Title>
            <ul className=" leading-loose">
              {footerLinkItems.map((list, index) => (
                <li
                  key={index}
                  className="capitalize cursor-pointer hover:text-white"
                >
                  {list}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <Title mode="light" className="mb-6">
              contact us
            </Title>
            <ul className="flex flex-col gap-4">
              {contactLinks.map(({ contact, icon }, i) => (
                <ContactItem key={i} contact={contact} icon={icon} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* copyright section */}
      <div className="bg-[#333333] flex flex-col md:flex-row">
        <div className="bg-green-700 polygon-4 py-6 px-8 md:px-16 text-[12px] sm:text-sm text-white w-10/12 md:flex-1">
          Copyright&copy; Fast Express Courier. All Rights Reserved.
        </div>
        <div className="flex-1 py-6 px-8 md:px-16 justify-end items-center flex gap-x-6">
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
