"use client";

import { FormEvent } from "react";
import { useSearchParams } from "next/navigation";

import _ from "../styles/tracking.module.scss";
import { useFetchShipmentFunc } from "../../../sdk/hooks";

export const Input = () => {
  const path = useSearchParams();
  const trackingId = path.get("tracking-id")?.trim();

  const { fetchShipment, setTrackingNumber, trackingNumber } =
    useFetchShipmentFunc(trackingId);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchShipment(trackingNumber);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={_.form} id="no-print">
      <input
        type="text"
        placeholder="Enter your tracking number(s)"
        autoComplete="on"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        name="tracking-number"
        id="tracking-number"
      />
      <button type="submit" disabled={!trackingNumber?.trim()}>
        track
      </button>
    </form>
  );
};
