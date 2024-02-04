import {
  HeroSection,
  FormSection,
  AchievementSection,
  TeamSection,
  FeaturesSection,
} from "./_components";
import { OnboardingSection, onboardingData } from "./_components/onboarding";

const HomePage = () => {
  return (
    <main className="pt-24">
      <HeroSection />
      <FormSection />
      {/* <FeaturesSection /> */}
      <div className="py-16 md:py-28">
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
