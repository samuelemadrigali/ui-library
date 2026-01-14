import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { menuToggleVariants } from "./variants";

/**
 * Props for the HamburgerMenu component.
 * An accessible animated hamburger menu toggle button.
 *
 * @example
 * ```tsx
 * // Basic hamburger menu
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <HamburgerMenu
 *   isOpen={isOpen}
 *   onToggle={() => setIsOpen(!isOpen)}
 * />
 *
 * // With custom labels for accessibility
 * <HamburgerMenu
 *   isOpen={isOpen}
 *   onToggle={() => setIsOpen(!isOpen)}
 *   openLabel="Open navigation menu"
 *   closeLabel="Close navigation menu"
 * />
 *
 * // With color variant
 * <HamburgerMenu
 *   isOpen={isOpen}
 *   onToggle={() => setIsOpen(!isOpen)}
 *   color="primary"
 * />
 * ```
 */
export interface HamburgerMenuProps
  extends Omit<ComponentPropsWithoutRef<"button">, "color">,
    VariantProps<typeof menuToggleVariants> {
  /**
   * Whether the menu is currently open.
   * Controls the animation state of the hamburger icon.
   */
  isOpen: boolean;

  /**
   * Callback fired when the menu toggle is clicked.
   * Should toggle the `isOpen` state.
   */
  onToggle: () => void;

  /**
   * Accessible label when menu is closed.
   * Announces "Open menu" action to screen readers.
   * @default "Open menu"
   */
  openLabel?: string;

  /**
   * Accessible label when menu is open.
   * Announces "Close menu" action to screen readers.
   * @default "Close menu"
   */
  closeLabel?: string;
}
