import type { ComponentPropsWithoutRef } from "react";

/**
 * Props for the Select component.
 * Extends native HTML select attributes with additional features for labels,
 * error handling, and helper text.
 *
 * @example
 * ```tsx
 * // Basic select with options
 * <Select label="Country">
 *   <option value="it">Italy</option>
 *   <option value="us">United States</option>
 *   <option value="uk">United Kingdom</option>
 * </Select>
 *
 * // Select with error state
 * <Select label="Category" error="Please select a category">
 *   <option value="">Choose...</option>
 *   <option value="tech">Technology</option>
 * </Select>
 *
 * // Controlled select
 * <Select
 *   label="Size"
 *   value={selectedSize}
 *   onChange={(e) => setSelectedSize(e.target.value)}
 * >
 *   <option value="s">Small</option>
 *   <option value="m">Medium</option>
 *   <option value="l">Large</option>
 * </Select>
 * ```
 */
export interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  /**
   * Label text or element displayed for the select field.
   * Can be a string or a React node for custom formatting.
   */
  label?: React.ReactNode;

  /**
   * Position of the label relative to the select.
   * - "top": Label appears above the select (default for forms)
   * - "inline": Label appears inline with the select
   * @default "top"
   */
  labelPosition?: "top" | "inline";

  /**
   * Error message to display below the select.
   * When provided, the select will be styled with error state.
   */
  error?: string;

  /**
   * Helper text displayed below the select.
   * Used for additional instructions or hints.
   * Hidden when `error` is provided.
   */
  helperText?: string;

  /**
   * Additional CSS classes to apply to the select wrapper.
   */
  className?: string;
}
