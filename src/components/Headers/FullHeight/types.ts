import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { VariantProps } from "tailwind-variants";
import { headerFullHeightVariants } from "./variants";

export type MenuAnimation =
  | "fade"
  | "slideDown"
  | "slideUp"
  | "slideLeft"
  | "slideRight"
  | "scale"
  | "none";

export interface HeaderFullHeightProps
  extends Omit<ComponentPropsWithoutRef<"header">, "color">,
    Omit<VariantProps<typeof headerFullHeightVariants>, "isOpen"> {
  /**
   * Content to display on the left (logo, brand, or custom content)
   */
  leftSlot?: ReactNode;
  /**
   * Content to display in the center (typically a centered logo)
   */
  centerSlot?: ReactNode;
  /**
   * Custom content to display on the right instead of HamburgerMenu
   */
  rightSlot?: ReactNode;
  /**
   * Content to display in the fullscreen overlay when menu is open
   */
  menuContent?: ReactNode;
  /**
   * Whether the menu is open or closed (controlled mode)
   */
  isMenuOpen?: boolean;
  /**
   * Callback when menu state changes
   */
  onMenuToggle?: (isOpen: boolean) => void;
  /**
   * Callback fired when menu starts opening
   */
  onMenuOpen?: () => void;
  /**
   * Callback fired when menu is fully opened (after animation completes)
   */
  onMenuOpened?: () => void;
  /**
   * Callback fired when menu starts closing
   */
  onMenuClose?: () => void;
  /**
   * Callback fired when menu is fully closed (after animation completes)
   */
  onMenuClosed?: () => void;
  /**
   * Custom hamburger menu color variant
   */
  menuColor?: "default" | "inverted" | "text-color";
  /**
   * Animation type for menu open/close
   * @default "slideDown"
   */
  animation?: MenuAnimation;
  /**
   * Animation duration in milliseconds
   * @default 300
   */
  animationDuration?: number;
  /**
   * Custom classes for the menu overlay container.
   * Use this to customize the full-height overlay background, spacing, or layout.
   * @example
   * ```tsx
   * <HeaderFullHeight
   *   overlayClassName="bg-gradient-to-b from-blue-500 to-purple-600"
   *   menuContent={<Menu />}
   * />
   * ```
   */
  overlayClassName?: string;
  /**
   * Custom classes for the menu content wrapper inside the overlay.
   * Use this to customize padding, alignment, or layout of the menu content.
   * @example
   * ```tsx
   * <HeaderFullHeight
   *   overlayContentClassName="py-12 flex items-center justify-center min-h-full"
   *   menuContent={<Menu />}
   * />
   * ```
   */
  overlayContentClassName?: string;
}
