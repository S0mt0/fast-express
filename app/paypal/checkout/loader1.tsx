import { Loader2 } from "lucide-react";

export const Loader1 = () => {
  return (
    <div className="fixed inset-0 grid place-items-center bg-white/80">
      <Loader2
        className="h-24 w-24 sm:h-32 sm:w-32 text-[#123172] animate-spin"
        strokeWidth={"0.3px"}
      />
    </div>
  );
};
