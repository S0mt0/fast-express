import { cn } from "@/lib/utils";
import { features } from ".";

export const Feature = ({
  description,
  icon: Icon,
  index,
  title,
}: (typeof features)[0] & { index: number }) => {
  return (
    <div
      className={cn(
        "group px-6 py-10 h-44 hover:h-full transition-all overflow-y-hidden flex-1",
        index % 2 !== 0 ? "bg-[#067745]" : "bg-[#44318D]"
      )}
    >
      <Icon className="relative text-black group-hover:text-white transition-all duration-300 h-12 w-12 mx-auto" />
      <h3
        className={cn(
          "font-normal group-hover:text-amber-200 transition-all duration-300 mt-4 group-hover:mt-6 uppercase text-title text-center",
          index % 2 !== 0 ? "text-[#44318D]" : "text-[#067745]"
        )}
      >
        {title}
      </h3>
      <p className="mt-6 group-hover:mt-2 leading-[4] group-hover:leading-normal transition-all duration-300 text-white text-center">
        {description}
      </p>
    </div>
  );
};
