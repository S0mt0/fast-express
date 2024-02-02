import { Title } from "@/components/title";
import { SectionWrapper } from ".";
import Image from "next/image";

export const TeamSection = () => {
  return (
    <SectionWrapper className="mb-10" styles="md:pb-26 px-8 sm:px-10 md:px-16">
      <div className="flex items-center justify-center">
        <Title variant={"center"} mode="light" subtitle="expert team">
          <h2 className="text-white text-lg sm:text-3xl text-center">
            we have the best team
          </h2>
        </Title>
      </div>
      <div className="flex flex-col gap-4 mt-14">
        <Image
          src={"/images/air_plane.jpg"}
          width={300}
          height={250}
          alt="air freight"
        />
        <Image
          src={"/images/highway_truck.jpg"}
          width={300}
          height={250}
          alt="air freight"
        />
      </div>
    </SectionWrapper>
  );
};
