"use client";
import { CountUp } from "countup.js";

import Image from "next/image";
import { useEffect } from "react";

type AchievementProps = {
  title: string;
  imgUrl: string;
  initialValue: number;
  targetValue: number;
} & { index?: number };
export const Achievement = ({
  targetValue,
  imgUrl,
  initialValue,
  title,
  index,
}: AchievementProps) => {
  useEffect(() => {
    async function initCountUp() {
      const countUpAnim = new CountUp(`countId${index}`, targetValue, {
        enableScrollSpy: true,
        useIndianSeparators: false,
        scrollSpyOnce: true,
        startVal: initialValue,
      });

      if (!countUpAnim.error) {
        countUpAnim.start();
      } else {
        console.error(countUpAnim.error);
      }
    }

    initCountUp();
  }, [index, targetValue, initialValue]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center gap-2 mb-2">
        <Image
          src={imgUrl}
          width={100}
          height={100}
          alt="cart"
          className="sm:w-8 sm:h-8 h-7 w-7"
        />
        <span
          className="font-semibold font-title text-3xl sm:text-4xl text-[#DB0F31]"
          id={`countId${index}`}
        >
          {initialValue}
        </span>
      </div>
      <div className="uppercase font-serif text-sm font-bold">{title}</div>
    </div>
  );
};
