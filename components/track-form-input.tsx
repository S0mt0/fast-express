import { Truck } from "lucide-react";

export const TrackFormInput = () => {
  return (
    <form
      action=""
      className="w-full flex flex-col sm:flex-row bg-white h-20 sm:h-12 items-center"
    >
      <div className="relative h-full flex-1 w-full sm:flex-[0.85]">
        <input
          type="text"
          name="tracking-number"
          id="tracking-number"
          placeholder="enter your tracking number"
          className=" h-full border-none outline-none px-[15px] pl-10 appearance-none placeholder:capitalize "
        />
        <Truck className="absolute left-2 text-stone-600/75 w-5 h-5 top-0 translate-y-1/2" />
      </div>
      <button
        type="submit"
        className="flex-1 w-full sm:flex-[0.15] cursor-pointer h-full font-semibold text-sm font-title uppercase bg-green-700 text-white hover:bg-green-700/95 transition-colors"
      >
        track
      </button>
    </form>
  );
};
