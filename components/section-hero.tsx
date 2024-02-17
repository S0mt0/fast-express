export const SectionHero = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <section className="pt-20 pb-6 section-hero flex items-center justify-center">
      <div className="text-white/90 text-center">
        <h2 className="uppercase font-title text-2xl sm:text-3xl font-bold">
          {title}
        </h2>
        <p className="italic text-sm">
          <span>Home | </span>
          <span className="text-stone-400">{subtitle || title}</span>
        </p>
      </div>
    </section>
  );
};
