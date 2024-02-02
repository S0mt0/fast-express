import { Achievement } from "./achievement";
import { achievementsData } from "./data";

export const AchievementSection = () => {
  return (
    <section className="px-10 sm:px-16 md:px-24 py-20 md:py-28 bg-white">
      <h2 className="w-fit text-2xl sm:text-3xl flex flex-col gap-3 items-center font-serif mx-auto text-black uppercase font-semibold mb-7">
        <span>Achievements</span>
        <span className="h-[2px] bg-[#DB0F31] w-1/4" />
      </h2>
      <div className="flex flex-col md:flex-row gap-y-10 sm:gap-y-12 justify-between max-w-7xl mx-auto">
        {achievementsData.map((achievement, i) => (
          <Achievement key={i} {...achievement} index={i} />
        ))}
      </div>
    </section>
  );
};