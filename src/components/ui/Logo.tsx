import React, { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/util";

const logoVariants = cva("font-semibold relative  flex ", {
  variants: {
    style: {
      normal: "text-black",
    },
    size: {
      normal: "w-24 h-11 text-lg",
      large: "w-44 h-[4.5rem] text-4xl ",
    },
  },
  defaultVariants: {
    style: "normal",
    size: "normal",
  },
});

interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: string;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ className, style, size, ...props }, ref) => {
    return (
      <div
        className={cn(logoVariants({ style, size }), className)}
        ref={ref}
        {...props}
      >
        <h1 className="absolute">Innova</h1>
        <h1 className="absolute bottom-0 right-1">Space</h1>
      </div>
    );
  }
);

Logo.displayName = "Logo";

export { Logo, logoVariants };
