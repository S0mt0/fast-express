"use client";
import { Printer } from "lucide-react";

export const PrintButton = () => {
  return (
    <button
      onClick={() => window.print()}
      type="button"
      id="no-print"
      className="sm:py-[11px] sm:px-5 py-[10px] px-4 text-[#d40511] text-[0.75rem] font-semibold font-title cursor-pointer h-fit border botder-[#d40511] gap-2 flex items-center hover:text-[#eb131e] hover:border-[#eb131e] transition-all bg-white"
    >
      <span>Print</span>
      <Printer className="text-[#d40511] hover:text-[#eb131e]" />
    </button>
  );
};
