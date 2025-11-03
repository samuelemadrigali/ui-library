import { type ComponentRef, forwardRef } from "react";
import type { ParagraphProps } from "./types";
import { tv } from "tailwind-variants";

const paragraphVariants = tv({
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    color: {
      fontPrimary: "text-font-primary",
      fontSecondary: "text-font-secondary",
      primary: "text-primary",
      accent: "text-accent",
      white: "text-white",
      muted: "text-gray-500",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
  },
  defaultVariants: {
    size: "base",
    color: "fontPrimary",
    weight: "normal",
    align: "left",
  },
});

export { paragraphVariants };

export const Paragraph = forwardRef<ComponentRef<"p">, ParagraphProps>(
  function (
    { size, color, weight, align, className, children, ...props },
    ref
  ) {
    return (
      <p
        className={paragraphVariants({
          size,
          color,
          weight,
          align,
          className,
        })}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    );
  }
);
