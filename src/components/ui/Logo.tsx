import React, { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/util";
import Image from "next/image";
import LogoDark from "@/assets/img/icon/logodark.svg";
import LogoWhite from "@/assets/img/icon/logowhite.svg";

const logoVariants = cva(" relative  aspect-auto   ", {
  variants: {
    style: {
      white: "",
      dark: "",
    },
    size: {
      normal: "w-24",
      large: "w-64",
    },
  },
  defaultVariants: {
    style: "white",
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
        <Image alt=" " src={style === "dark" ? LogoDark : LogoWhite} />
      </div>
    );
  }
);

Logo.displayName = "Logo";

export { Logo, logoVariants };
