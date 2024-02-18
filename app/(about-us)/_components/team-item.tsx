import Image from "next/image";
import { Facebook, Linkedin, Twitter } from "lucide-react";

import { team } from ".";

export const TeamItem = ({ fullName, imgUrl, role }: (typeof team)[0]) => {
  return (
    <div className="flex flex-col flex-1">
      <div className="relative group">
        <Image
          src={imgUrl}
          alt={fullName + "'s avatar"}
          width={500}
          height={500}
          className="w-full h-[270px] sm:h-[280px] object-cover object-center group-hover:opacity-50 transition-all"
        />
        {/* dark overlay */}
        <div className="absolute inset-0 group-hover:bg-black/30 transition-all" />

        <div className=" bg-green-700 absolute inset-x-0 bottom-11 scale-x-0 group-hover:scale-x-100 transition-all">
          <div className="w-full flex gap-4 justify-center relative p-5">
            <span className="w-6 h-6 flex items-center justify-center border border-white rounded-full ">
              <Facebook className="h-3 w-3 text-white" />
            </span>
            <span className="w-6 h-6 flex items-center justify-center border border-white rounded-full">
              <Linkedin className="h-3 w-3 text-white" />
            </span>
            <span className="w-6 h-6 flex items-center justify-center border border-white rounded-full">
              <Twitter className="h-3 w-3 text-white" />
            </span>
            <div className="absolute h-[60%] w-[2px] bg-white right-0 top-1/2 -translate-y-1/2" />
            <div className="absolute h-[60%] w-[2px] bg-white left-0 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-white mt-5 font-medium capitalize">
        <div>{fullName}</div>
        <small>{role}</small>
      </div>
    </div>
  );
};
