import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { tabsListVariants, tabsTriggerVariants } from "./Tabs";

type TabsListVariants = VariantProps<typeof tabsListVariants>;
type TabsTriggerVariants = VariantProps<typeof tabsTriggerVariants>;

export interface TabsProps
  extends Omit<ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, "asChild"> {
  className?: string;
}

export interface TabsListProps
  extends Omit<ComponentPropsWithoutRef<typeof TabsPrimitive.List>, "asChild">,
    TabsListVariants {
  className?: string;
}

export interface TabsTriggerProps
  extends Omit<
      ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
      "asChild"
    >,
    TabsTriggerVariants {
  className?: string;
}

export interface TabsContentProps
  extends Omit<
    ComponentPropsWithoutRef<typeof TabsPrimitive.Content>,
    "asChild"
  > {
  className?: string;
}
