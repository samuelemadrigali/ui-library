import { type ComponentRef, forwardRef } from "react";
import type { HeadingProps, HeadingLevel } from "./types";
import { tv } from "tailwind-variants";

const headingVariants = tv({
  variants: {
    level: {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-semibold",
      h3: "text-2xl font-medium",
      h4: "text-xl font-medium",
      h5: "text-lg",
      h6: "text-base",
    },
    color: {
      primary: "text-primary",
      accent: "text-accent",
      white: "text-white",
    },
  },
  defaultVariants: {
    level: "h1",
    color: "primary",
  },
});

export { headingVariants };

export const Heading = forwardRef<ComponentRef<HeadingLevel>, HeadingProps>(
  function ({ level, color, className, children, ...props }, ref) {
    const Tag = level;

    return (
      <Tag
        className={headingVariants({ level, color, className })}
        ref={ref}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
