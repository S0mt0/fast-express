import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const titleVariants = cva("block flex flex-col gap-2 max-w-fit font-title", {
  variants: {
    variant: {
      default: "items-start",
      center: "items-center",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface TitleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof titleVariants> {
  subtitle?: string;
  mode?: "light" | "dull";
}

/**
 * This is a custom reusable Title component with only two different variants and color theme described by the `mode` property. These variants and color theme are based on the overall theme of the project provied by the design. However, it can be customized to suit any design style or needs.
 * @description Has all properties and attributes of a normal `div` element including the `className` property.
 * @param {object} custom_properties {subtitle, mode, variant}
 */

const Title = React.forwardRef<HTMLDivElement, TitleProps>(
  ({ className, variant, mode, children, subtitle, ...props }, ref) => {
    return (
      <div
        className={cn(titleVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        <div className="bg-stone-300">{subtitle}</div>
        <div
          className={cn(
            "uppercase font-bold",
            mode === "light" ? "text-stone-200/80" : "text-black/80"
          )}
        >
          {children}
        </div>
        <div className="flex flex-row h-[1px] w-2/3 gap-1 max-w-[130px]">
          <div
            className={cn(
              "h-full w-4",
              mode === "light" ? "bg-stone-200" : "bg-black/80"
            )}
          />
          <div className={cn("bg-green-600 h-full flex-1")} />
        </div>
      </div>
    );
  }
);

Title.displayName = "Title";

export { Title, titleVariants };
