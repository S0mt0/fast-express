"use client";
import { CountUp } from "countup.js";

import Image from "next/image";
import { useEffect } from "react";

type Achievementprops = {
  title: string;
  imgUrl: string;
  initialValue: number;
  currentValue: number;
} & { index?: number };
export const Achievement = ({
  currentValue,
  imgUrl,
  initialValue,
  title,
  index,
}: Achievementprops) => {
  useEffect(() => {
    async function initCountUp() {
      const countUpAnim = new CountUp(`startId_${index}`, currentValue, {
        enableScrollSpy: true,
        useIndianSeparators: false,
        scrollSpyOnce: true,
      });
      if (!countUpAnim.error) {
        countUpAnim.start();
      } else {
        console.error(countUpAnim.error);
      }
    }

    initCountUp();
  }, [index, currentValue]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center gap-2 mb-2">
        <Image
          src={imgUrl}
          width={100}
          height={100}
          alt="cart"
          className="w-8 h-8"
        />
        <span
          className="font-semibold font-title text-3xl sm:text-4xl text-[#DB0F31]"
          id={`startId_${index}`}
        >
          {initialValue}
        </span>
      </div>
      <div className="uppercase font-serif text-sm font-bold">{title}</div>
    </div>
  );
};
