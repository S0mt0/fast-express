import { SectionHero } from "@/components/section-hero";
import { AboutUsSection, OurTeamSection } from "../_components";

const AboutUsPage = () => {
  return (
    <main className="pt-24 pb-16">
      <SectionHero title="About Us" />
      <AboutUsSection />
      <OurTeamSection />
    </main>
  );
};

export default AboutUsPage;
