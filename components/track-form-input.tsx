"use client";

import { FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

import { useFetchShipmentFunc, useMobileMenuStore } from "../sdk/hooks";

export const TrackFormInput = ({
  handleSubmit,
  styles,
  rounded,
}: {
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  styles?: string;
  rounded?: boolean;
}) => {
  const router = useRouter();
  const query = useSearchParams().get("tracking-id")?.trim();

  const { trackingNumber, setTrackingNumber } = useFetchShipmentFunc(query);
  const { closeMenu } = useMobileMenuStore();

  const handleLocalSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/tracking?tracking-id=${trackingNumber.trim()}`);

    query?.trim() === trackingNumber.trim() && closeMenu(); // assuming there is an input field for tracking present on the mobile menu. This is so that when the field is filled and clicked on, then the mobile menu should as well be closed.
  };

  return (
    <form
      onSubmit={
        handleSubmit ? (e) => handleSubmit(e) : (e) => handleLocalSubmit(e)
      }
      className={cn(
        "w-full flex flex-col sm:flex-row items-center justify-center gap-y-4",
        styles
      )}
      id="no-print"
    >
      <input
        type="text"
        name="tracking-number"
        id="tracking-number"
        placeholder="enter your tracking number"
        autoComplete="on"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        className={cn(
          "border  border-stone-300 outline-none px-[15px] appearance-none placeholder:capitalize text-base w-full h-10 sm:flex-[0.85] bg-white flex items-center justify-center",
          rounded && "rounded-lg sm:rounded-none"
        )}
      />
      <button
        type="submit"
        disabled={!trackingNumber.trim()}
        className={cn(
          "w-fit sm:flex-[0.15] cursor-pointer h-10 font-semibold text-sm font-title capitalize  bg-green-700 text-white hover:bg-green-700/95 transition-colors px-8 sm:px-0 flex items-center justify-center",
          rounded && "rounded-lg sm:rounded-none"
        )}
      >
        track
      </button>
    </form>
  );
};
