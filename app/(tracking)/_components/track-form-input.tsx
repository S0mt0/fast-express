"use client";

"use client";

import { FormEvent } from "react";

// import { Truck } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useFetchShipmentFunc } from "../../../sdk/hooks";
import { cn } from "@/lib/utils";

export const TrackFormInput = () => {
  const query = useSearchParams().get("tracking-id")?.trim();

  const { trackingNumber, setTrackingNumber, fetchShipment } =
    useFetchShipmentFunc(query);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchShipment(trackingNumber);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={cn(
        "w-full flex flex-col sm:flex-row bg-white h-20 sm:h-12 items-center"
        // styles
      )}
      id="no-print"
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
        type="submit"
        disabled={!trackingNumber.trim()}
        className="flex-1 w-full sm:flex-[0.15] cursor-pointer h-full font-semibold text-sm font-title capitalize sm:uppercase bg-green-700 text-white hover:bg-green-700/95 transition-colors"
      >
        track
      </button>
    </form>
  );
};
