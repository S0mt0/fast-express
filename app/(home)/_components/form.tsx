import { Title } from "@/components/title";
import { TrackFormInput } from "@/components/track-form-input";

export const FormSection = () => {
  return (
    <section className=" gradient-bg-1">
      <div className="px-10 sm:px-16 md:px-24 py-20 md:py-28 bg-black/65 backdrop-blur-[8px]">
        <Title className="mb-12 mx-auto" mode="light" variant={"center"}>
          <h2 className="text-white text-center sm:text-xl md:text-3xl">
            track your shipment
          </h2>
        </Title>
        <TrackFormInput />
      </div>
    </section>
  );
};
