import Image from "next/image";

import { Facebook, Linkedin, Twitter } from "lucide-react";

// export const connectIcons = [Facebook, Linkedin, Twitter];

import { SectionWrapper } from "@/components/dark-section-wrapper";
import { Title } from "@/components/title";
import { teams } from ".";

export const OurTeamSection = () => {
  return (
    <SectionWrapper styles="md:px-16">
      <div className="flex flex-col items-center">
        <Title variant={"center"} subtitle="expert team" mode="light">
          <h2 className="text-2xl sm:text-3xl text-white text-center">
            meet our team
          </h2>
        </Title>

        <div className="flex flex-col md:flex-row mt-10 flex-wrap gap-8 max-w-6xl mx-auto">
          {teams.map((member, i) => (
            <div className="flex flex-col flex-1" key={i}>
              <div className="relative group">
                <Image
                  src={member.imgUrl}
                  alt={member.fullName + "'s avatar"}
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
                <div>{member.fullName}</div>
                <small>{member.role}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
