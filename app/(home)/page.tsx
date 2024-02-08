import {
  HeroSection,
  FormSection,
  AchievementSection,
  TeamSection,
  // FeaturesSection,
  OnboardingSection,
  onboardingData,
} from "./_components";

const HomePage = () => {
  return (
    <main className="pt-24">
      <HeroSection />
      <FormSection />
      {/* <FeaturesSection /> */}
      <div className="pb-8 pt-16 md:pt-28 group">
        {onboardingData.map((onboardingData, i) => (
          <OnboardingSection {...onboardingData} key={i} index={i} />
        ))}
      </div>
      <AchievementSection />
      <TeamSection />
    </main>
  );
};

export default HomePage;
