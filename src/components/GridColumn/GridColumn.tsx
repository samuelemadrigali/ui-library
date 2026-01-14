import { type ComponentRef, forwardRef } from "react";
import type { GridColumnProps } from "./types";
import { gridColumnVariants } from "./variants";

export const GridColumn = forwardRef<ComponentRef<"div">, GridColumnProps>(
  function (
    {
      as,
      span,
      start,
      end,
      order,
      sm,
      md,
      lg,
      xl,
      "2xl": xl2,
      className,
      children,
      ...props
    },
    ref
  ) {
    const Component = as || "div";

    return (
      <Component
        className={gridColumnVariants({
          span,
          start,
          end,
          order,
          smSpan: sm?.span,
          mdSpan: md?.span,
          lgSpan: lg?.span,
          xlSpan: xl?.span,
          "2xlSpan": xl2?.span,
          className,
        })}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
