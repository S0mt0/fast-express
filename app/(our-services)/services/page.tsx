import { SectionHero } from "@/components/section-hero";
import { ServicesSection, ContactSection } from "../_components";

const ServicesPage = () => {
  return (
    <main className="pt-24 pb-16">
      <SectionHero title="our services" />
      <ServicesSection />
      <ContactSection />
    </main>
  );
};

export default ServicesPage;
