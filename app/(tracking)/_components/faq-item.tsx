import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type PropDataType = {
  q: string;
  a: string;
} & { index: number };

export const FaqItem = ({ q, a, index }: PropDataType) => {
  const [activeQA, setActiveQA] = useState<number>(-1);
  const toggleQA = (index: number) => {
    setActiveQA((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="py-4 border-b border-[#cacaca]" key={index}>
      <h3
        onClick={() => toggleQA(index)}
        className="group text-sm flex text-title justify-between items-center cursor-default leading-tight sm:leading-[1.5]
        text-red-700 hover:text-red-600 transition-colors
        "
      >
        <span>{q}</span>
        <span className="ml-10">
          {activeQA === index ? (
            <ChevronUp className="h-4 w-4 text-red-700 group-hover:text-red-600 transition-none" />
          ) : (
            <ChevronDown className="h-4 w-4 text-red-700 group-hover:text-red-600 transition-none" />
          )}
        </span>
      </h3>
      {activeQA === index && (
        <p className="mb-10 leading-tight sm:leading-[1.5] text-black/80">
          {a}
        </p>
      )}
    </div>
  );
};
