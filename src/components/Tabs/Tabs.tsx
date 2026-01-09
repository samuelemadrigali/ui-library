"use client";

import { type ComponentRef, forwardRef } from "react";
import type {
  TabsProps,
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps,
} from "./types";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { tv } from "tailwind-variants";

const tabsListVariants = tv({
  base: "inline-flex items-center gap-1",
  variants: {
    variant: {
      default:
        "border-b border-border data-[orientation=vertical]:border-b-0 data-[orientation=vertical]:border-r data-[orientation=vertical]:flex-col",
      fill: "data-[orientation=vertical]:flex-col",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const tabsTriggerVariants = tv({
  base: [
    "inline-flex items-center justify-center whitespace-nowrap",
    "px-4 py-2 text-sm font-medium transition-all rounded-md",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  ],
  variants: {
    variant: {
      default: [
        "border-b-2 border-transparent rounded-b-none",
        "text-muted-foreground hover:text-foreground",
        "data-[state=active]:border-primary data-[state=active]:text-primary",
      ],
      fill: "",
    },
    colorScheme: {
      primary: "",
      accent: "",
      neutral: "",
    },
  },
  compoundVariants: [
    {
      variant: "fill",
      colorScheme: "primary",
      class: [
        "text-muted-foreground hover:bg-primary/10",
        "data-[state=active]:bg-primary data-[state=active]:text-white",
      ],
    },
    {
      variant: "fill",
      colorScheme: "accent",
      class: [
        "text-muted-foreground hover:bg-accent/10",
        "data-[state=active]:bg-accent data-[state=active]:text-white",
      ],
    },
    {
      variant: "fill",
      colorScheme: "neutral",
      class: [
        "text-muted-foreground hover:bg-secondary",
        "data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground",
      ],
    },
  ],
  defaultVariants: {
    variant: "default",
    colorScheme: "primary",
  },
});

const tabsContentVariants = tv({
  base: [
    "mt-4",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  ],
});

export { tabsListVariants, tabsTriggerVariants, tabsContentVariants };

export const Tabs = forwardRef<
  ComponentRef<typeof TabsPrimitive.Root>,
  TabsProps
>(function Tabs({ className, ...props }, ref) {
  return <TabsPrimitive.Root ref={ref} className={className} {...props} />;
});

Tabs.displayName = "Tabs";

export const TabsList = forwardRef<
  ComponentRef<typeof TabsPrimitive.List>,
  TabsListProps
>(function TabsList({ className, variant, ...props }, ref) {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={tabsListVariants({ variant, className })}
      {...props}
    />
  );
});

TabsList.displayName = "TabsList";

export const TabsTrigger = forwardRef<
  ComponentRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(function TabsTrigger({ className, variant, colorScheme, ...props }, ref) {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={tabsTriggerVariants({ variant, colorScheme, className })}
      {...props}
    />
  );
});

TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = forwardRef<
  ComponentRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(function TabsContent({ className, ...props }, ref) {
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={tabsContentVariants({ className })}
      {...props}
    />
  );
});

TabsContent.displayName = "TabsContent";
