import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";
import type { LucideIcon } from "lucide-react";
import { alertVariants } from "./Alert";

type AlertVariants = VariantProps<typeof alertVariants>;

/**
 * Props for the Alert component.
 * Displays contextual feedback messages with optional icons and dismiss functionality.
 *
 * @example
 * ```tsx
 * // Success alert
 * <Alert variant="success">Your changes have been saved!</Alert>
 *
 * // Error alert with default icon
 * <Alert variant="error" icon>Something went wrong.</Alert>
 *
 * // Warning alert with custom icon
 * <Alert variant="warning" icon={AlertTriangle}>
 *   Please review your input.
 * </Alert>
 *
 * // Dismissible info alert
 * <Alert
 *   variant="info"
 *   dismissible
 *   onDismiss={() => setShowAlert(false)}
 * >
 *   New features are available!
 * </Alert>
 * ```
 */
export interface AlertProps
  extends Omit<ComponentPropsWithoutRef<"div">, "className">,
    AlertVariants {
  /**
   * Additional CSS classes to apply to the alert.
   */
  className?: string;

  /**
   * Icon to display in the alert.
   * - `true`: Shows default icon based on variant
   * - `false` or `undefined`: No icon
   * - `LucideIcon`: Custom icon component
   *
   * @example
   * ```tsx
   * <Alert icon>Uses default icon</Alert>
   * <Alert icon={CheckCircle}>Custom icon</Alert>
   * ```
   */
  icon?: LucideIcon | boolean;

  /**
   * When true, shows a close button to dismiss the alert.
   * @default false
   */
  dismissible?: boolean;

  /**
   * Callback fired when the dismiss button is clicked.
   * Required when `dismissible` is true.
   */
  onDismiss?: () => void;

  /**
   * Accessible label for the dismiss button.
   * @default "Dismiss"
   */
  dismissLabel?: string;
}

export type { AlertVariants };
