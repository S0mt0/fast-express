import { AlertTriangle, BusFront, CheckCircle2 } from "lucide-react";
import moment from "moment";
import Link from "next/link";

import { TShipment } from "../../../sdk/interface";
import { formatLocalTime } from "../../../sdk/utils";
import { cn } from "@/lib/utils";

export const EventStatus = ({ status }: { status: TShipment["status"] }) => {
  return (
    <article className="flex border-b border-[#1d1d1d8a] last-of-type:border-none">
      <div className="flex-[0.3] py-[0.9rem] pr-[4%]">
        <small className="text-[0.8rem] block leading-normal">
          {moment(status.timestamp).format("dddd")}
        </small>
        <h3 className="text-[0.9rem] font-extrabold mb-[0.6rem]">
          {moment(status.timestamp).format("LL")}
        </h3>
        <small>{formatLocalTime(status.timestamp)}</small>
      </div>
      <div className="flex-[0.7] flex flex-col pl-[4%] justify-center relative py-[0.9rem]">
        <div className="absolute w-[1px] h-1/2 left-0 bottom-0 bg-[#1d1d1d8a]" />
        <strong
          className={cn(
            "text-[0.8rem] block leading-normal",
            status.status === "delivered" && "text-green-600"
          )}
        >
          {status.description}
        </strong>
        <p className="text-[0.8rem] leading-normal">
          {status.location.address.addressLocality}
        </p>
        {/*  */}
        {status.status === "seized" && (
          <small className="text-[0.7rem] inline-block mt-16 leading-normal">
            To redeem your shipment, kindly{" "}
            <Link
              href="/redeem-shipment"
              className="underline text-red-600 font-medium"
            >
              PAY EXTRA COST OF SHIPPING
            </Link>
          </small>
        )}
        {/*  */}
        <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-[65%]">
          {status.status === "delivered" ? (
            <CheckCircle2 className="w-5 h-5 text-green-600" />
          ) : status.status === "seized" ? (
            <AlertTriangle className="text-base w-5 h-5 text-red-600" />
          ) : (
            <BusFront className="w-5 h-5 text-stone-500" />
          )}
        </span>
        {/*  */}
      </div>
    </article>
  );
};
