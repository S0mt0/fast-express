import { LucideIcon } from "lucide-react";

export const ContactItem = ({
  icon: Icon,
  contact,
}: {
  icon: LucideIcon;
  contact: string;
}) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Icon className="w-6 h-6 text-orange-700" />
      {contact}
    </div>
  );
};
