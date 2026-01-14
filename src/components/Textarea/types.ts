import type { ComponentPropsWithoutRef } from "react";

/**
 * Props for the Textarea component.
 * Extends native HTML textarea attributes with additional features for labels,
 * error handling, and helper text.
 *
 * @example
 * ```tsx
 * // Basic textarea with label
 * <Textarea
 *   label="Message"
 *   placeholder="Type your message here..."
 *   rows={4}
 * />
 *
 * // Textarea with error state
 * <Textarea
 *   label="Description"
 *   error="Description is required"
 * />
 *
 * // Textarea with helper text and character limit
 * <Textarea
 *   label="Bio"
 *   helperText="Max 500 characters"
 *   maxLength={500}
 * />
 *
 * // Controlled textarea
 * <Textarea
 *   label="Notes"
 *   value={notes}
 *   onChange={(e) => setNotes(e.target.value)}
 * />
 * ```
 */
export interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
  /**
   * Label text or element displayed for the textarea field.
   * Can be a string or a React node for custom formatting.
   */
  label?: React.ReactNode;

  /**
   * Position of the label relative to the textarea.
   * - "top": Label appears above the textarea (default for forms)
   * - "inline": Label appears inline with the textarea
   * @default "top"
   */
  labelPosition?: "top" | "inline";

  /**
   * Error message to display below the textarea.
   * When provided, the textarea will be styled with error state.
   */
  error?: string;

  /**
   * Helper text displayed below the textarea.
   * Used for additional instructions or hints.
   * Hidden when `error` is provided.
   */
  helperText?: string;

  /**
   * Additional CSS classes to apply to the textarea wrapper.
   */
  className?: string;
}
