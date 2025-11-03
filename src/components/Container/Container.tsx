import { forwardRef } from "react";
import type { ContainerProps } from "./types";
import { tv } from "tailwind-variants";

const containerVariants = tv({
  base: "mx-auto",
  variants: {
    size: {
      sm: "max-w-3xl", // ~768px
      md: "max-w-5xl", // ~1024px
      lg: "max-w-6xl", // ~1152px
      xl: "max-w-7xl", // ~1280px
      "2xl": "max-w-screen-2xl", // ~1536px
    },
    padding: {
      true: "px-4",
      false: "",
    },
  },
  defaultVariants: {
    size: "lg",
    padding: true,
  },
});

export { containerVariants };

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function (
  { as, size, padding, className, children, ...props },
  ref
) {
  const Component = as || "div";

  return (
    <Component
      className={containerVariants({ size, padding, className })}
      ref={ref}
      {...props}
    >
      {children}
    </Component>
  );
});
