import type { ComponentPropsWithoutRef, ElementType } from "react";
import type { VariantProps } from "tailwind-variants";
import { gridColumnVariants } from "./variants";

type GridColumnVariants = VariantProps<typeof gridColumnVariants>;

/**
 * Responsive column span props for different breakpoints.
 */
type ResponsiveColumnProps = {
  /** Column settings for small screens (640px+) */
  sm?: { span?: GridColumnVariants["span"] };
  /** Column settings for medium screens (768px+) */
  md?: { span?: GridColumnVariants["span"] };
  /** Column settings for large screens (1024px+) */
  lg?: { span?: GridColumnVariants["span"] };
  /** Column settings for extra large screens (1280px+) */
  xl?: { span?: GridColumnVariants["span"] };
  /** Column settings for 2XL screens (1536px+) */
  "2xl"?: { span?: GridColumnVariants["span"] };
};

/**
 * Props for the GridColumn component.
 * Used inside Grid to control column spanning and positioning.
 *
 * @example
 * ```tsx
 * // Basic column spanning
 * <Grid cols={12}>
 *   <GridColumn span={8}>Main content (8 cols)</GridColumn>
 *   <GridColumn span={4}>Sidebar (4 cols)</GridColumn>
 * </Grid>
 *
 * // Responsive column spans
 * <Grid cols={12}>
 *   <GridColumn span={12} md={{ span: 6 }} lg={{ span: 4 }}>
 *     Card that adjusts width by breakpoint
 *   </GridColumn>
 * </Grid>
 *
 * // Column positioning
 * <Grid cols={6}>
 *   <GridColumn start={2} end={6}>Spans from column 2 to 6</GridColumn>
 * </Grid>
 *
 * // Column ordering
 * <Grid cols={2}>
 *   <GridColumn order={2}>Shows second visually</GridColumn>
 *   <GridColumn order={1}>Shows first visually</GridColumn>
 * </Grid>
 * ```
 */
export interface GridColumnProps
  extends Omit<ComponentPropsWithoutRef<"div">, "className">,
    Partial<Pick<GridColumnVariants, "span" | "start" | "end" | "order">>,
    ResponsiveColumnProps {
  /**
   * The HTML element to render the column as.
   * @default "div"
   */
  as?: ElementType;

  /**
   * Additional CSS classes to apply to the column.
   */
  className?: string;
}
