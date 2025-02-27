import React, { forwardRef, InputHTMLAttributes, useState } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/util";

const inputVariants = cva("w-full rounded-lg", {
  variants: {
    variant: {
      normal: "bg-light-default px-10 py-3",
    },
  },
  defaultVariants: {
    variant: "normal",
  },
});

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  minLength?: number;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, minLength, ...props }, ref) => {
    const [error, setError] = useState("");

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      if (minLength && event.target.value.length === 0) {
        setError("Password harus di isi");
      } else if (minLength && event.target.value.length < minLength) {
        setError(`Password harus minimal ${minLength} karakter`);
      } else {
        setError("");
      }
    };

    return (
      <div>
        <input
          className={cn(inputVariants({ variant, className }))}
          ref={ref}
          onBlur={handleBlur}
          {...props}
        />
        <p className={error ? "text-red-600  transition-all " : "opacity-0"}>
          {error}
        </p>
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input, inputVariants };
