import { SectionHero } from "@/components/section-hero";
import { ServicesSection } from "../_components";

const ServicesPage = () => {
  return (
    <main className="pt-24 pb-16">
      <SectionHero title="our services" />
      <ServicesSection />
    </main>
  );
};

export default ServicesPage;
