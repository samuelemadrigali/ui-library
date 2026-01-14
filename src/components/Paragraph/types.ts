import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { paragraphVariants } from "./Paragraph";

type ParagraphVariants = VariantProps<typeof paragraphVariants>;

/**
 * Props for the Paragraph component.
 * Renders text with consistent typography and spacing.
 *
 * @example
 * ```tsx
 * // Basic paragraph
 * <Paragraph>This is a standard paragraph of text.</Paragraph>
 *
 * // Paragraph with size variant
 * <Paragraph size="lg">Larger text for emphasis.</Paragraph>
 * <Paragraph size="sm">Smaller text for captions.</Paragraph>
 *
 * // Paragraph as lead text
 * <Paragraph size="xl" className="font-medium">
 *   Lead paragraph for introductions.
 * </Paragraph>
 * ```
 */
export interface ParagraphProps
  extends Omit<ComponentPropsWithoutRef<"p">, "color">,
    ParagraphVariants {
  /**
   * Additional CSS classes to apply to the paragraph.
   */
  className?: string;
}
