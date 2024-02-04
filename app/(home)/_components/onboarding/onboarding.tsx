import { cn } from "@/lib/utils";
import { onboardingData } from ".";
import Image from "next/image";
import { Title } from "@/components/title";

export const OnboardingSection = ({
  description,
  heading,
  imageUrl,
  index,
}: (typeof onboardingData)[0] & { index: number }) => {
  return (
    <section
      className={cn(
        "flex items-center mt-6 md:mt-0",
        index % 2 !== 0
          ? "flex-col-reverse md:flex-row-reverse"
          : "flex-col-reverse md:flex-row"
      )}
    >
      <div className="flex-1">
        <Image
          src={imageUrl}
          width={800}
          height={600}
          alt={`onboarding_image_${index}`}
          className="w-full h-full object-cover mt-6 md:mt-0"
        />
      </div>
      <div
        className={cn(
          "flex-1 pl-6 pr-6 md:pr-14",
          index % 2 !== 0 && "pr-6 pl-6 md:pl-14"
        )}
      >
        <Title subtitle={heading.subTitle} className="mb-10">
          <h2 className="text-3xl">{heading.title}</h2>
        </Title>
        <p className="text-stone-600/90">{description}</p>
      </div>
    </section>
  );
};
