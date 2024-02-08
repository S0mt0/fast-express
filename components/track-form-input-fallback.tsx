export const TrackFormInputFallback = () => {
  return (
    <form
      className="w-full flex flex-col sm:flex-row bg-white h-20 sm:h-12 items-center"
      id="no-print"
    >
      <div className="relative h-full flex-1 w-full sm:flex-[0.85]">
        <input
          type="text"
          name="tracking-number"
          id="tracking-number"
          placeholder="enter your tracking number"
          autoComplete="on"
          className=" h-full border-none outline-none px-[15px] appearance-none placeholder:capitalize text-sm w-full"
        />
      </div>
      <button
        type="button"
        className="flex-1 w-full sm:flex-[0.15] cursor-pointer h-full font-semibold text-sm font-title capitalize sm:uppercase bg-green-700 text-white hover:bg-green-700/95 transition-colors"
      >
        track
      </button>
    </form>
  );
};
