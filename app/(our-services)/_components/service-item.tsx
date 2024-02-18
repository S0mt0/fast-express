import Image from "next/image";
import { services } from ".";

export const ServiceItem = ({
  imgUrl,
  title,
  description,
}: (typeof services)[0]) => {
  return (
    <div className="overflow-y-hidden flex flex-col w-full group">
      <Image
        src={imgUrl}
        width={500}
        height={500}
        alt="service-image"
        className="w-full object-cover object-center z-10"
      />
      <div className=" bg-white z-20 group-hover:shadow-lg">
        <div className="flex flex-col gap-y-4 group-hover:-translate-y-16 bg-white px-4 pt-8 pb-4 transition-all">
          <h3 className="font-extrabold text-[1.1rem]">{title}</h3>
          <p className="text-[0.9rem] text-stone-700/70 font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
