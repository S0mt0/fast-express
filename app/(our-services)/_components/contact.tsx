"use client";
import { useState } from "react";

import { SectionWrapper } from "@/components/dark-section-wrapper";
import { Title } from "@/components/title";
import { otherServices, OtherServiceItem, ContactForm } from ".";

export const ContactSection = () => {
  const [active, setActive] = useState(-1);

  const onClick = (index: number) => {
    setActive((prev) => (prev === index ? -1 : index));
  };

  return (
    <SectionWrapper styles="md:px-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-[1200px] gap-x-8 gap-y-12 text-white">
        <div>
          <Title mode="light" subtitle="other services">
            <h2 className="text-white text-2xl sm:text-3xl">
              fast express courier
            </h2>
          </Title>
          <div className="mt-6 flex flex-col gap-4">
            {otherServices.map((service, i) => (
              <OtherServiceItem
                {...service}
                key={i}
                i={i}
                active={active}
                onClick={onClick}
              />
            ))}
          </div>
        </div>
        <div>
          <Title mode="light" subtitle="contact us">
            <h2 className="text-white text-2xl sm:text-3xl">
              send us a message
            </h2>
          </Title>
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
};
