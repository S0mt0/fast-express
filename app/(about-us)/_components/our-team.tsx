import { SectionWrapper } from "@/components/dark-section-wrapper";
import { Title } from "@/components/title";
import { TeamItem, team } from ".";

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
          {team.map((member, i) => (
            <TeamItem {...member} key={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
