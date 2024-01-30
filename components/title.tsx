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
        <div className="flex flex-row h-[1px] w-2/3 gap-1">
          <div
            className={cn(
              "h-full w-4",
              mode === "light" ? "bg-stone-200/80" : "bg-black/80"
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
