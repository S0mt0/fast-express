import { Feature, features } from ".";

export const FeaturesSection = () => {
  return (
    <section className="flex">
      {features.map((feature, index) => (
        <Feature key={index} index={index} {...feature} />
      ))}
    </section>
  );
};
