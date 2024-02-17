import { Title } from "@/components/title";
import Image from "next/image";

export const AboutUsSection = () => {
  return (
    <section className="py-28 px-8 md:px-16 flex flex-col md:flex-row bg-white gap-8 justify-center items-center">
      <div className="w-full flex-1">
        <Image
          src={"/images/containers.jpg"}
          alt="containers"
          width={1000}
          height={1000}
        />
      </div>
      <div className=" flex-1">
        <Title className="mb-8">
          <h1 className="text-2xl sm:text-3xl text-black/90">about us</h1>
        </Title>
        <p className="text-stone-700/80 text-sm sm:text-base">
          Fast Express Courier offers a host of logistic management services and
          supply chain solutions. We provide innovative solutions with the best
          people, processes, and technology. With over 60 years of providing
          world class service to their customers on the asset side, a need to
          provide a one stop shop for a” true customer service logistic
          solution” was introduced. By adding this dimension to an already
          dynamic and customer centric asset based provider, we feel we bring a
          total solution.
        </p>
        <p className="text-stone-700/80 mt-4 text-sm sm:text-base">
          We offer a wide range of parcel collection and drop off services,
          including expedited and premium options to ensure maximum flexibility
          for our customers.
        </p>
      </div>
    </section>
  );
};
