"use client";

import { type ComponentRef, forwardRef } from "react";
import type { AccordionProps, AccordionItemProps } from "./types";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { tv } from "tailwind-variants";

const accordionVariants = tv({
  base: "w-full",
  variants: {
    variant: {
      default: "rounded-lg border overflow-hidden",
      ghost: "overflow-hidden",
      separated: "space-y-2",
    },
    color: {
      primary: "",
      accent: "",
      neutral: "",
    },
  },
  compoundVariants: [
    {
      variant: "default",
      color: "primary",
      class: "border-primary/20",
    },
    {
      variant: "default",
      color: "accent",
      class: "border-accent/20",
    },
    {
      variant: "default",
      color: "neutral",
      class: "border-gray-200",
    },
  ],
  defaultVariants: {
    variant: "default",
    color: "neutral",
  },
});

const accordionItemVariants = tv({
  base: "",
  variants: {
    variant: {
      default: "border-b last:border-b-0",
      ghost: "border-b border-gray-200 last:border-b-0",
      separated: "rounded-lg border overflow-hidden",
    },
    color: {
      primary: "",
      accent: "",
      neutral: "",
    },
  },
  compoundVariants: [
    {
      variant: "default",
      color: "primary",
      class: "border-primary/20",
    },
    {
      variant: "default",
      color: "accent",
      class: "border-accent/20",
    },
    {
      variant: "default",
      color: "neutral",
      class: "border-gray-200",
    },
    {
      variant: "separated",
      color: "primary",
      class: "border-primary/20",
    },
    {
      variant: "separated",
      color: "accent",
      class: "border-accent/20",
    },
    {
      variant: "separated",
      color: "neutral",
      class: "border-gray-200",
    },
  ],
  defaultVariants: {
    variant: "default",
    color: "neutral",
  },
});

const accordionTriggerVariants = tv({
  base: [
    "flex flex-1 items-center justify-between py-4 px-4",
    "font-medium transition-all",
    "[&[data-state=open]>svg]:rotate-180",
  ],
  variants: {
    color: {
      primary: "bg-primary text-white hover:bg-primary-light",
      accent: "bg-accent text-white hover:bg-accent-light",
      neutral: "bg-secondary text-secondary-foreground hover:bg-muted",
    },
  },
  defaultVariants: {
    color: "neutral",
  },
});

export { accordionVariants, accordionItemVariants };

export const Accordion = forwardRef<
  ComponentRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(function Accordion(
  {
    className,
    variant,
    color,
    type = "single",
    collapsible = true,
    children,
    ...props
  },
  ref
) {
  return (
    <AccordionPrimitive.Root
      className={accordionVariants({ variant, color, className })}
      type={type}
      collapsible={type === "single" ? collapsible : undefined}
      ref={ref}
      {...props}
    >
      {children}
    </AccordionPrimitive.Root>
  );
});

Accordion.displayName = "Accordion";

export const AccordionItem = forwardRef<
  ComponentRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(function AccordionItem(
  { className, variant, color, title, icon = true, children, ...props },
  ref
) {
  return (
    <AccordionPrimitive.Item
      className={accordionItemVariants({
        variant,
        color: color as "primary" | "accent" | "neutral" | undefined,
        className,
      })}
      ref={ref}
      {...props}
    >
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          className={accordionTriggerVariants({
            color: color as "primary" | "accent" | "neutral" | undefined,
          })}
        >
          {title}
          {icon && (
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          )}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="p-4">{children}</div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
});

AccordionItem.displayName = "AccordionItem";
