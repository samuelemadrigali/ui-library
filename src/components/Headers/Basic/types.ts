import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { VariantProps } from "tailwind-variants";
import { headerBasicVariants } from "./variants";

export type MenuAnimation =
  | "fade"
  | "slideDown"
  | "slideUp"
  | "slideLeft"
  | "slideRight"
  | "scale"
  | "none";

export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

export interface HeaderBasicProps
  extends Omit<ComponentPropsWithoutRef<"header">, "color">,
    Omit<VariantProps<typeof headerBasicVariants>, "isOpen"> {
  /**
   * Logo or brand component displayed on the left
   */
  logo?: ReactNode;
  /**
   * Desktop navigation menu displayed on the right (visible above breakpoint)
   */
  desktopMenu?: ReactNode;
  /**
   * Mobile navigation menu content (displayed in overlay below breakpoint)
   * If not provided, desktopMenu will be used
   */
  mobileMenu?: ReactNode;
  /**
   * Breakpoint at which to switch between desktop and mobile menu
   * @default "lg"
   */
  breakpoint?: Breakpoint;
  /**
   * Whether the mobile menu is open or closed (controlled mode)
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
  menuColor?: "default" | "inverted";
  /**
   * Animation type for mobile menu open/close
   * @default "slideDown"
   */
  animation?: MenuAnimation;
  /**
   * Animation duration in milliseconds
   * @default 300
   */
  animationDuration?: number;
}
