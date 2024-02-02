import {
  HeroSection,
  FormSection,
  AchievementSection,
  TeamSection,
} from "./_components";

const HomePage = () => {
  return (
    <main className="pt-24">
      <HeroSection />
      <FormSection />
      <AchievementSection />
      <TeamSection />
    </main>
  );
};

export default HomePage;
