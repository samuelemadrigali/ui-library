import type { ComponentPropsWithoutRef } from "react";

/**
 * Props for the Input component.
 * Extends native HTML input attributes with additional features for labels,
 * error handling, and helper text.
 *
 * @example
 * ```tsx
 * // Basic input with label
 * <Input label="Email" type="email" placeholder="Enter your email" />
 *
 * // Input with error state
 * <Input
 *   label="Password"
 *   type="password"
 *   error="Password must be at least 8 characters"
 * />
 *
 * // Input with helper text
 * <Input
 *   label="Username"
 *   helperText="Choose a unique username"
 * />
 *
 * // Inline label
 * <Input label="Search" labelPosition="inline" placeholder="Search..." />
 * ```
 */
export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  /**
   * Label text or element displayed for the input field.
   * Can be a string or a React node for custom formatting.
   */
  label?: React.ReactNode;

  /**
   * Position of the label relative to the input.
   * - "top": Label appears above the input (default for forms)
   * - "inline": Label appears inline with the input
   * @default "top"
   */
  labelPosition?: "top" | "inline";

  /**
   * Error message to display below the input.
   * When provided, the input will be styled with error state.
   */
  error?: string;

  /**
   * Helper text displayed below the input.
   * Used for additional instructions or hints.
   * Hidden when `error` is provided.
   */
  helperText?: string;

  /**
   * Additional CSS classes to apply to the input wrapper.
   */
  className?: string;
}
