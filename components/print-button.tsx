"use client";
import { Printer } from "lucide-react";

export const PrintButton = () => {
  return (
    <button
      onClick={() => window.print()}
      type="button"
      id="no-print"
      className="py-2 sm:px-5 px-4 text-red-600 text-[0.75rem] font-semibold font-title cursor-pointer h-fit border border-red-600 gap-2 flex items-center hover:text-red-500 hover:border-red-500 transition-all bg-white"
    >
      <span>Print</span>
      <Printer className="text-red-600 hover:text-red-500 h-4 w-4" />
    </button>
  );
};
