import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { accordionVariants, accordionItemVariants } from "./Accordion";

type AccordionVariants = VariantProps<typeof accordionVariants>;
type AccordionItemVariants = VariantProps<typeof accordionItemVariants>;

export interface AccordionProps extends AccordionVariants {
  type?: "single";
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  collapsible?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export interface AccordionItemProps
  extends Omit<
      ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
      "asChild" | "title" | "color"
    >,
    AccordionItemVariants {
  className?: string;
  title: React.ReactNode;
  icon?: boolean;
}
