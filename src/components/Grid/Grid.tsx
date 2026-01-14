import { type ComponentRef, forwardRef } from "react";
import type { GridProps } from "./types";
import { gridVariants } from "./variants";

export const Grid = forwardRef<ComponentRef<"div">, GridProps>(function (
  {
    as,
    cols,
    gap,
    gapX,
    gapY,
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
      className={gridVariants({
        cols,
        gap,
        gapX,
        gapY,
        smCols: sm?.cols,
        mdCols: md?.cols,
        lgCols: lg?.cols,
        xlCols: xl?.cols,
        "2xlCols": xl2?.cols,
        smGap: sm?.gap,
        mdGap: md?.gap,
        lgGap: lg?.gap,
        xlGap: xl?.gap,
        "2xlGap": xl2?.gap,
        smGapX: sm?.gapX,
        mdGapX: md?.gapX,
        lgGapX: lg?.gapX,
        xlGapX: xl?.gapX,
        "2xlGapX": xl2?.gapX,
        smGapY: sm?.gapY,
        mdGapY: md?.gapY,
        lgGapY: lg?.gapY,
        xlGapY: xl?.gapY,
        "2xlGapY": xl2?.gapY,
        className,
      })}
      ref={ref}
      {...props}
    >
      {children}
    </Component>
  );
});
