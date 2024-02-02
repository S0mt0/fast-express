import { Title } from "@/components/title";
import { TrackFormInput } from "@/components/track-form-input";
import { SectionWrapper } from ".";

export const FormSection = () => {
  return (
    <section className=" gradient-bg-1">
      <SectionWrapper>
        <Title className="mb-12 mx-auto" mode="light" variant={"center"}>
          <h2 className="text-white text-center sm:text-xl md:text-3xl">
            track your shipment
          </h2>
        </Title>
        <TrackFormInput />
      </SectionWrapper>
    </section>
  );
};
