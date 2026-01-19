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
          smOrder: sm?.order,
          mdSpan: md?.span,
          mdOrder: md?.order,
          lgSpan: lg?.span,
          lgOrder: lg?.order,
          xlSpan: xl?.span,
          xlOrder: xl?.order,
          "2xlSpan": xl2?.span,
          "2xlOrder": xl2?.order,
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
