import React, { forwardRef } from "react";
import { ButtonHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/util";

const buttonVariants = cva("rounded-xl active:scale-95 transition-all", {
  variants: {
    variant: {
      normal: "bg-normal-default text-light-default hover:bg-normal-hover",
      outline: "border-blue-300  border-4 rounded-xl",
    },
    size: {
      normal: "px-4 py-2",
      lg: "py-4 px-16",
    },
  },
  defaultVariants: {
    variant: "normal",
    size: "normal",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button, buttonVariants };
