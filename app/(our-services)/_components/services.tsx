import { ServiceItem, services } from ".";

export const ServicesSection = () => {
  return (
    <section className="py-24 px-8 sm:px-12">
      <div
        className="grid grid-cols-1
     sm:grid-cols-2 md:grid-cols-3 max-w-[1150px] mx-auto gap-8"
      >
        {services.map((service, i) => (
          <ServiceItem key={i} {...service} />
        ))}
      </div>
    </section>
  );
};
