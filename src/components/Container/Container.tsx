import { forwardRef } from "react";
import type { ContainerProps } from "./types";
import { containerVariants } from "./variants";

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
