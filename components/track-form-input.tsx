"use client";

import { Truck } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useFetchShipmentFunc, useMobileMenuStore } from "../sdk/hooks";

export const TrackFormInput = () => {
  const router = useRouter();
  const query = useSearchParams().get("tracking-id")?.trim();

  const { trackingNumber, setTrackingNumber } = useFetchShipmentFunc(query);
  const { closeMenu } = useMobileMenuStore();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/tracking?tracking-id=${trackingNumber.trim()}`);
        query?.trim() === trackingNumber.trim() && closeMenu();
      }}
      className="w-full flex flex-col sm:flex-row bg-white h-20 sm:h-12 items-center"
    >
      <div className="relative h-full flex-1 w-full sm:flex-[0.85]">
        <input
          type="text"
          name="tracking-number"
          id="tracking-number"
          placeholder="enter your tracking number"
          autoComplete="on"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className=" h-full border-none outline-none px-[15px] appearance-none placeholder:capitalize text-sm w-full"
        />
        {/* <Truck className="absolute left-2 text-stone-600/75 w-5 h-5 top-0 translate-y-1/2" /> */}
      </div>
      <button
        type="button"
        disabled={!trackingNumber.trim()}
        className="flex-1 w-full sm:flex-[0.15] cursor-pointer h-full font-semibold text-sm font-title capitalize sm:uppercase bg-green-700 text-white hover:bg-green-700/95 transition-colors"
      >
        track
      </button>
    </form>
  );
};
