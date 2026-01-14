import { type ComponentRef, forwardRef } from "react";
import type { HeadingProps, HeadingLevel } from "./types";
import { headingVariants } from "./variants";

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
