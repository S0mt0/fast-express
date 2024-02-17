import Image from "next/image";

import { SectionWrapper } from "@/components/dark-section-wrapper";
import { Title } from "@/components/title";
import { teams } from ".";

export const OurTeamSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center">
        <Title variant={"center"} subtitle="expert team" mode="light">
          <h2 className="text-2xl sm:text-3xl text-white">meet our team</h2>
        </Title>

        <div className="flex flex-col sm:flex-row mt-10 flex-wrap gap-8">
          {teams.map((member, i) => (
            <div className="flex flex-col flex-1" key={i}>
              <Image
                src={member.imgUrl}
                alt={member.fullName + "profile Image"}
                width={500}
                height={500}
                className="w-full h-[280px]"
              />
              <div>
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
