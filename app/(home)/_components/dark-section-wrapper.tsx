import { cn } from "@/lib/utils";

interface SectionProps {
  children?: React.ReactNode | React.ReactNode[];
  bgImage?: string;
  styles?: string;
  className?: string;
}

export const SectionWrapper = ({
  bgImage,
  children,
  styles,
  className,
}: SectionProps) => {
  const style = {
    background: `linear-gradient(#013865c0, #013865c0), url(${
      bgImage || "/images/search_dark_bg.jpg"
    }) center/cover no-repeat`,
    backgroundColor: `rgba(0, 0, 0, 0.75)`,
    // Add other styles if needed
  };
  return (
    <section style={style} className={cn(className)}>
      <div
        className={cn(
          "px-10 sm:px-16 md:px-24 py-20 md:py-28 bg-black/65 backdrop-blur-[8px]",
          styles
        )}
      >
        {children}
      </div>
    </section>
  );
};
