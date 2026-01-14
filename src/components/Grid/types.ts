import type { ComponentPropsWithoutRef, ElementType } from "react";
import type { VariantProps } from "tailwind-variants";
import { gridVariants } from "./variants";

type GridVariants = VariantProps<typeof gridVariants>;

type ResponsiveGridProps = {
  sm?: {
    cols?: GridVariants["cols"];
    gap?: GridVariants["gap"];
    gapX?: GridVariants["gapX"];
    gapY?: GridVariants["gapY"];
  };
  md?: {
    cols?: GridVariants["cols"];
    gap?: GridVariants["gap"];
    gapX?: GridVariants["gapX"];
    gapY?: GridVariants["gapY"];
  };
  lg?: {
    cols?: GridVariants["cols"];
    gap?: GridVariants["gap"];
    gapX?: GridVariants["gapX"];
    gapY?: GridVariants["gapY"];
  };
  xl?: {
    cols?: GridVariants["cols"];
    gap?: GridVariants["gap"];
    gapX?: GridVariants["gapX"];
    gapY?: GridVariants["gapY"];
  };
  "2xl"?: {
    cols?: GridVariants["cols"];
    gap?: GridVariants["gap"];
    gapX?: GridVariants["gapX"];
    gapY?: GridVariants["gapY"];
  };
};

export interface GridProps
  extends Omit<ComponentPropsWithoutRef<"div">, "className">,
    Pick<GridVariants, "cols" | "gap" | "gapX" | "gapY">,
    ResponsiveGridProps {
  as?: ElementType;
  className?: string;
}
