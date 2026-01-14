import type { ComponentPropsWithoutRef, ElementType } from "react";
import type { VariantProps } from "tailwind-variants";
import { gridVariants } from "./variants";

type GridVariants = VariantProps<typeof gridVariants>;

/**
 * Responsive props that can be applied at different breakpoints.
 * Use these to create responsive grid layouts.
 */
type ResponsiveGridProps = {
  /** Grid settings for small screens (640px+) */
  sm?: {
    cols?: GridVariants["cols"];
    gap?: GridVariants["gap"];
    gapX?: GridVariants["gapX"];
    gapY?: GridVariants["gapY"];
  };
  /** Grid settings for medium screens (768px+) */
  md?: {
    cols?: GridVariants["cols"];
    gap?: GridVariants["gap"];
    gapX?: GridVariants["gapX"];
    gapY?: GridVariants["gapY"];
  };
  /** Grid settings for large screens (1024px+) */
  lg?: {
    cols?: GridVariants["cols"];
    gap?: GridVariants["gap"];
    gapX?: GridVariants["gapX"];
    gapY?: GridVariants["gapY"];
  };
  /** Grid settings for extra large screens (1280px+) */
  xl?: {
    cols?: GridVariants["cols"];
    gap?: GridVariants["gap"];
    gapX?: GridVariants["gapX"];
    gapY?: GridVariants["gapY"];
  };
  /** Grid settings for 2XL screens (1536px+) */
  "2xl"?: {
    cols?: GridVariants["cols"];
    gap?: GridVariants["gap"];
    gapX?: GridVariants["gapX"];
    gapY?: GridVariants["gapY"];
  };
};

/**
 * Props for the Grid component.
 * Creates CSS Grid layouts with responsive column support.
 *
 * @example
 * ```tsx
 * // Basic 3-column grid
 * <Grid cols={3} gap={4}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 *
 * // Responsive grid (1 col mobile, 2 tablet, 3 desktop)
 * <Grid cols={1} md={{ cols: 2 }} lg={{ cols: 3 }} gap={6}>
 *   <Card>...</Card>
 *   <Card>...</Card>
 *   <Card>...</Card>
 * </Grid>
 *
 * // Grid with different horizontal and vertical gaps
 * <Grid cols={4} gapX={8} gapY={4}>
 *   <div>...</div>
 * </Grid>
 *
 * // Grid as semantic element
 * <Grid as="ul" cols={2}>
 *   <li>Item</li>
 * </Grid>
 * ```
 */
export interface GridProps
  extends Omit<ComponentPropsWithoutRef<"div">, "className">,
    Pick<GridVariants, "cols" | "gap" | "gapX" | "gapY">,
    ResponsiveGridProps {
  /**
   * The HTML element to render the grid as.
   * Useful for semantic HTML (ul, ol, section, etc.).
   * @default "div"
   */
  as?: ElementType;

  /**
   * Additional CSS classes to apply to the grid.
   */
  className?: string;
}
