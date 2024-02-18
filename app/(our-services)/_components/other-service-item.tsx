import { Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

interface ServiceProps {
  description: string;
  title: string;
  i: number;
  active: number;
  onClick: (index: number) => void;
}

export const OtherServiceItem = ({
  description,
  title,
  i,
  onClick,
  active,
}: ServiceProps) => {
  return (
    <div key={i} className="border border-white/70">
      <h2
        className={cn(
          "cursor-pointer py-3 px-4 bg-white text-green-700 uppercase font-bold flex items-center justify-between font-title text-sm",
          active === i && "bg-green-700 text-white"
        )}
        onClick={() => onClick(i)}
      >
        {title}
        {active === i ? (
          <Minus
            className={cn(
              "text-green-700 w-4 h-4 font-bold",
              active === i && "text-white"
            )}
          />
        ) : (
          <Plus
            className={cn(
              "text-green-700 w-4 h-4 font-bold",
              active === i && "text-white"
            )}
          />
        )}
      </h2>
      {active === i && (
        <p className="p-6 text-[0.9rem] font-medium leading-relaxed text-stone-400/80">
          {description}
        </p>
      )}
    </div>
  );
};
