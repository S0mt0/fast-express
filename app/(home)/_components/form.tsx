import { Suspense } from "react";

import { Title } from "@/components/title";
import { TrackFormInputFallback } from "@/components/track-form-input-fallback";
import { SectionWrapper } from ".";
import { TrackFormInput } from "@/components/track-form-input";

export const FormSection = () => {
  return (
    <section className="gradient-bg-1">
      <SectionWrapper>
        <Title className="mb-12 mx-auto" mode="light" variant={"center"}>
          <h2 className="text-white text-center sm:text-xl md:text-3xl">
            track your shipment
          </h2>
        </Title>
        <Suspense fallback={<TrackFormInputFallback />}>
          <TrackFormInput rounded={true} />
        </Suspense>
      </SectionWrapper>
    </section>
  );
};
