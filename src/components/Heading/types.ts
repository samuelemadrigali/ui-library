import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { headingVariants } from "./variants";

type HeadingVariants = VariantProps<typeof headingVariants>;

/**
 * Valid heading levels (h1-h6).
 * Used to ensure semantic HTML structure.
 */
export type HeadingLevel = NonNullable<HeadingVariants["level"]>;

/**
 * Props for the Heading component.
 * Renders semantic heading elements (h1-h6) with consistent typography.
 *
 * @example
 * ```tsx
 * // Basic heading
 * <Heading level="h1">Page Title</Heading>
 *
 * // Heading with custom styling
 * <Heading level="h2" className="text-center">
 *   Section Title
 * </Heading>
 *
 * // Different heading levels
 * <Heading level="h1">Main Title</Heading>
 * <Heading level="h2">Subtitle</Heading>
 * <Heading level="h3">Section Heading</Heading>
 * ```
 */
export interface HeadingProps
  extends Omit<ComponentPropsWithoutRef<HeadingLevel>, "className" | "color">,
    HeadingVariants {
  /**
   * The semantic heading level to render.
   * Determines both the HTML element and default typography styling.
   * - "h1": Main page title (use once per page)
   * - "h2": Major section headings
   * - "h3": Subsection headings
   * - "h4"-"h6": Lower-level headings
   */
  level: HeadingLevel;

  /**
   * Additional CSS classes to apply to the heading.
   */
  className?: string;
}
