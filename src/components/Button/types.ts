import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";
import type { LucideIcon } from "lucide-react";
import { buttonVariants } from "./variants";

/**
 * Props for the Button component.
 *
 * @example
 * ```tsx
 * // Basic button
 * <Button variant="fill" color="primary">Click me</Button>
 *
 * // Button with icon
 * <Button variant="outline" color="accent" icon={ArrowRight} iconPosition="right">
 *   Continue
 * </Button>
 *
 * // Icon-only button
 * <Button iconOnly icon={Menu} ariaLabel="Open menu" />
 *
 * // Button as link (with Next.js Link)
 * <Button asChild variant="link" color="primary">
 *   <Link href="/about">About</Link>
 * </Button>
 * ```
 */
export interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "color">,
    VariantProps<typeof buttonVariants> {
  /**
   * When true, the button will render its child as the root element,
   * merging props and behavior. Useful for rendering as Next.js Link.
   * @default false
   *
   * @example
   * ```tsx
   * <Button asChild>
   *   <Link href="/page">Go to page</Link>
   * </Button>
   * ```
   */
  asChild?: boolean;

  /**
   * Lucide icon component to display alongside the button text.
   * Icon size automatically adjusts based on button size.
   *
   * @example
   * ```tsx
   * import { ArrowRight, Download } from "lucide-react";
   * <Button icon={ArrowRight}>Next</Button>
   * <Button icon={Download} iconPosition="left">Download</Button>
   * ```
   */
  icon?: LucideIcon;

  /**
   * Position of the icon relative to the button text.
   * @default "left"
   */
  iconPosition?: "left" | "right";

  /**
   * When true, renders only the icon without text.
   * Automatically sets size to "icon" variant.
   * Should be used with `ariaLabel` for accessibility.
   * @default false
   *
   * @example
   * ```tsx
   * <Button iconOnly icon={Menu} ariaLabel="Toggle menu" />
   * ```
   */
  iconOnly?: boolean;

  /**
   * Accessible label for the button. Required when using `iconOnly`.
   * Rendered as visually hidden text for screen readers.
   */
  ariaLabel?: string;
}
