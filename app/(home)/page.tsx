import {
  HeroSection,
  FormSection,
  AchievementSection,
  TeamSection,
} from "./_components";
import { OnboardingSection, onboardingData } from "./_components/onboarding";

const HomePage = () => {
  return (
    <main className="pt-24">
      <HeroSection />
      <FormSection />
      <div className="pb-20 pt-24 md:pt-28 ">
        {onboardingData.map((section, i) => (
          <OnboardingSection {...section} key={i} index={i} />
        ))}
      </div>
      <AchievementSection />
      <TeamSection />
    </main>
  );
};

export default HomePage;
