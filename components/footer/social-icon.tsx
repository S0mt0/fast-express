import { LucideIcon } from "lucide-react";

export const SocialIcon = ({ icon: Icon }: { icon: LucideIcon }) => {
  return (
    <span className="border border-stone-500 p-1 group hover:bg-green-700 transition-all cursor-pointer">
      <Icon className="h-4 w-4 group-hover:text-white transition-colors" />
    </span>
  );
};
