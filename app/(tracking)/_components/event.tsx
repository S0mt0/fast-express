import moment from "moment";
import { Triangle } from "lucide-react";

import { formatLocalTime } from "../../../sdk/utils";
import { TEvent } from "../../../sdk/interface";

export const Event = ({ event }: { event: TEvent }) => (
  <article className="flex border-b border-[#1d1d1d8a] group-last-of-type:border-none">
    <div className="flex-[0.3] pr-[4%] py-[0.9rem]">
      <small className="block leading-normal text-[0.75rem] sm:text-[0.8rem]">
        {moment(event.timestamp).format("dddd")}
      </small>
      <h3 className="text-[0.8rem] text-sm font-extrabold mb-2">
        {moment(event.timestamp).format("LL")}
      </h3>
      <small>{formatLocalTime(event.timestamp)} </small>
    </div>

    <div className="flex-[0.7] flex flex-col relative justify-center sm:pl-[4%] border-l border-[#1d1d1d8a] pl-[5.2%]">
      <strong className="block leading-normal text-[0.75rem] sm:text-[0.8rem]">
        {event.description}
      </strong>
      <p className="text-[0.75rem] sm:text-[0.8rem]">
        {event.location.address.addressLocality}
      </p>
      <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
        <Triangle className="text-stone-500 w-5 h-5" />
      </span>
    </div>
  </article>
);
