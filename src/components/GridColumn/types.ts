import type { ComponentPropsWithoutRef, ElementType } from "react";
import type { VariantProps } from "tailwind-variants";
import { gridColumnVariants } from "./variants";

type GridColumnVariants = VariantProps<typeof gridColumnVariants>;

type ResponsiveColumnProps = {
  sm?: { span?: GridColumnVariants["span"] };
  md?: { span?: GridColumnVariants["span"] };
  lg?: { span?: GridColumnVariants["span"] };
  xl?: { span?: GridColumnVariants["span"] };
  "2xl"?: { span?: GridColumnVariants["span"] };
};

export interface GridColumnProps
  extends Omit<ComponentPropsWithoutRef<"div">, "className">,
    Partial<Pick<GridColumnVariants, "span" | "start" | "end" | "order">>,
    ResponsiveColumnProps {
  as?: ElementType;
  className?: string;
}
