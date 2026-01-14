import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "tailwind-variants";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { tabsListVariants, tabsTriggerVariants } from "./Tabs";

type TabsListVariants = VariantProps<typeof tabsListVariants>;
type TabsTriggerVariants = VariantProps<typeof tabsTriggerVariants>;

/**
 * Props for the Tabs root component.
 * A set of layered sections of content, known as tab panels,
 * displayed one at a time. Built on Radix UI Tabs for accessibility.
 *
 * @example
 * ```tsx
 * // Basic tabs
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Account</TabsTrigger>
 *     <TabsTrigger value="tab2">Settings</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Account content</TabsContent>
 *   <TabsContent value="tab2">Settings content</TabsContent>
 * </Tabs>
 *
 * // Controlled tabs
 * const [activeTab, setActiveTab] = useState("tab1");
 * <Tabs value={activeTab} onValueChange={setActiveTab}>
 *   <TabsList>
 *     <TabsTrigger value="tab1">First</TabsTrigger>
 *     <TabsTrigger value="tab2">Second</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">First content</TabsContent>
 *   <TabsContent value="tab2">Second content</TabsContent>
 * </Tabs>
 * ```
 */
export interface TabsProps
  extends Omit<ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, "asChild"> {
  /**
   * Additional CSS classes to apply to the tabs root.
   */
  className?: string;
}

/**
 * Props for the TabsList component.
 * Contains the tab triggers and provides visual grouping.
 *
 * @example
 * ```tsx
 * <TabsList>
 *   <TabsTrigger value="overview">Overview</TabsTrigger>
 *   <TabsTrigger value="analytics">Analytics</TabsTrigger>
 * </TabsList>
 * ```
 */
export interface TabsListProps
  extends Omit<ComponentPropsWithoutRef<typeof TabsPrimitive.List>, "asChild">,
    TabsListVariants {
  /**
   * Additional CSS classes to apply to the tabs list.
   */
  className?: string;
}

/**
 * Props for the TabsTrigger component.
 * The button that activates its associated tab panel.
 *
 * @example
 * ```tsx
 * <TabsTrigger value="profile">Profile</TabsTrigger>
 *
 * // Disabled trigger
 * <TabsTrigger value="admin" disabled>Admin</TabsTrigger>
 * ```
 */
export interface TabsTriggerProps
  extends Omit<
      ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
      "asChild"
    >,
    TabsTriggerVariants {
  /**
   * Additional CSS classes to apply to the tab trigger.
   */
  className?: string;
}

/**
 * Props for the TabsContent component.
 * Contains the content associated with a tab trigger.
 *
 * @example
 * ```tsx
 * <TabsContent value="profile">
 *   <h2>Profile Settings</h2>
 *   <p>Manage your profile information.</p>
 * </TabsContent>
 * ```
 */
export interface TabsContentProps
  extends Omit<
    ComponentPropsWithoutRef<typeof TabsPrimitive.Content>,
    "asChild"
  > {
  /**
   * Additional CSS classes to apply to the tab content.
   */
  className?: string;
}
