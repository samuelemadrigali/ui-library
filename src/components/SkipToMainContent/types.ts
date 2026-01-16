import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { skipToMainContentVariants } from "./variants";

/**
 * Props for the SkipToMainContent component.
 * An accessible skip navigation link that allows users to bypass repetitive
 * navigation and jump directly to the main content.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <SkipToMainContent
 *   text="Skip to main content"
 *   targetId="main-content"
 * />
 *
 * // With Italian text
 * <SkipToMainContent
 *   text="Vai al contenuto principale"
 *   targetId="contenuto"
 * />
 *
 * // With custom className
 * <SkipToMainContent
 *   text="Skip to main content"
 *   targetId="main"
 *   className="custom-class"
 * />
 * ```
 */
export interface SkipToMainContentProps
  extends Omit<ComponentPropsWithoutRef<"a">, "href">,
    VariantProps<typeof skipToMainContentVariants> {
  /**
   * The visible text content of the skip link.
   * Should be localized and descriptive.
   */
  text: string;

  /**
   * The ID of the target element to skip to.
   * Do not include the `#` prefix.
   */
  targetId: string;
}
