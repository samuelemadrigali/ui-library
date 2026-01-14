import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { accordionVariants, accordionItemVariants } from "./Accordion";

type AccordionVariants = VariantProps<typeof accordionVariants>;
type AccordionItemVariants = VariantProps<typeof accordionItemVariants>;

/**
 * Props for the Accordion component.
 * A vertically stacked set of interactive headings that reveal content sections.
 * Built on Radix UI Accordion for accessibility.
 *
 * @example
 * ```tsx
 * // Basic accordion
 * <Accordion defaultValue="item-1">
 *   <AccordionItem value="item-1" title="Section 1">
 *     Content for section 1
 *   </AccordionItem>
 *   <AccordionItem value="item-2" title="Section 2">
 *     Content for section 2
 *   </AccordionItem>
 * </Accordion>
 *
 * // Controlled accordion
 * const [value, setValue] = useState("item-1");
 * <Accordion value={value} onValueChange={setValue}>
 *   <AccordionItem value="item-1" title="FAQ 1">Answer 1</AccordionItem>
 *   <AccordionItem value="item-2" title="FAQ 2">Answer 2</AccordionItem>
 * </Accordion>
 *
 * // Collapsible (can close all items)
 * <Accordion collapsible defaultValue="item-1">
 *   <AccordionItem value="item-1" title="Details">
 *     Collapsible content
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
export interface AccordionProps extends AccordionVariants {
  /**
   * Accordion type. Currently only "single" is supported,
   * meaning only one item can be open at a time.
   * @default "single"
   */
  type?: "single";

  /**
   * The controlled value of the open accordion item.
   * Use with `onValueChange` for controlled mode.
   */
  value?: string;

  /**
   * The value of the item to open by default.
   * Use for uncontrolled mode.
   */
  defaultValue?: string;

  /**
   * Callback fired when the open item changes.
   * @param value - The value of the newly opened item
   */
  onValueChange?: (value: string) => void;

  /**
   * When true, allows all items to be collapsed.
   * When false, one item must always be open.
   * @default false
   */
  collapsible?: boolean;

  /**
   * When true, prevents all accordion items from being opened.
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional CSS classes to apply to the accordion.
   */
  className?: string;

  /**
   * AccordionItem components to render.
   */
  children?: React.ReactNode;
}

/**
 * Props for the AccordionItem component.
 * Represents a single collapsible section within an Accordion.
 *
 * @example
 * ```tsx
 * <AccordionItem value="unique-id" title="Section Title">
 *   Section content goes here
 * </AccordionItem>
 *
 * // With icon indicator
 * <AccordionItem value="faq-1" title="How does it work?" icon>
 *   Explanation of how it works...
 * </AccordionItem>
 * ```
 */
export interface AccordionItemProps
  extends Omit<
      ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
      "asChild" | "title" | "color"
    >,
    AccordionItemVariants {
  /**
   * Additional CSS classes to apply to the accordion item.
   */
  className?: string;

  /**
   * The title displayed in the accordion trigger/header.
   * Can be a string or React node.
   */
  title: React.ReactNode;

  /**
   * When true, shows a chevron icon indicator.
   * @default false
   */
  icon?: boolean;
}
